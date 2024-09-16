import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <Input
        placeholder={"Email"}
        fontSize={14}
        size={"sm"}
        type={"email"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder={"password"}
        fontSize={14}
        size={"sm"}
        type={"password"}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <Button w={"full"} colorScheme={"blue"} size={"sm"} fontSize={14}>
        Log in
      </Button>
    </>
  );
};

export default Login;
