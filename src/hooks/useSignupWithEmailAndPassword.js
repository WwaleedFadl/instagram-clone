import { doc, getDocs, setDoc } from "firebase/firestore";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
import { collection, query, where } from "firebase/firestore";

//**

const useSignupWithEmailAndPassword = () => {
  const loginUser = useAuthStore((state) => state.login);
  const showToast = useShowToast();
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.userName ||
      !inputs.fullName
    ) {
      showToast("Error", "please fill all the fields", "error");
      return;
    }

    //g@g.com
    //waleed fadl
    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("username", "==", inputs.userName));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }

      if (newUser) {
        const userDocument = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.userName,
          fullName: inputs.fullName,
          bio: "",
          profilePiUrl: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDocument);
        localStorage.setItem("user-info", JSON.stringify(userDocument));
        loginUser(userDocument);
      }
    } catch (error) {
      console.log(error);
      showToast("Error", `${error.message} >>> waleed`, "error");
    }
  };
  return { loading, error, signup };
};

export default useSignupWithEmailAndPassword;
