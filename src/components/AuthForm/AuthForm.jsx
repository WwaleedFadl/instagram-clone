import { useState } from "react";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import SignUp from "./SignUp";
import Login from "./Login";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image
            src={"/images/logo.png"}
            h={24}
            cursor={"pointer"}
            alt='instegram logo '
          />

          {isLogin ? <Login /> : <SignUp />}

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            my={4}
            w={"full"}>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          {/* login with google */}
          <GoogleAuth />
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
            color={"blue.500"}>
            {isLogin ? "Sign up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
