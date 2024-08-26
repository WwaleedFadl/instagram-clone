import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("please fill all the fields");
      return;
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src={"/images/logo.png"}
            h={24}
            cursor={"pointer"}
            alt="instegram logo "
          />

          <Input
            placeholder={"Email"}
            fontSize={14}
            type={"email"}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />

          <Input
            placeholder={"password"}
            fontSize={14}
            type={"password"}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          {!isLogin ? (
            <Input
              placeholder={"Confirm Password"}
              fontSize={14}
              type={"password"}
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          ) : null}

          <Button
            w={"full"}
            colorScheme={"blue"}
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign up"}
          </Button>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            my={4}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          {/* login with google */}

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src={"/images/google.png"} w={5} alt={"google logo"} />
            <Text mx={2} color={"blue.500"}>
              Login in with google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account" : "Already have an account"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            cursor={"pointer"}
            color={"blue.500"}
          >
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;