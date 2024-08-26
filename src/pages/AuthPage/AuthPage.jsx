import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../components/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* left hand side */}
          <Box display={{ base: "none", md: "block" }}>
            <Image src={"/images/insta1.png"} h={650} alt={"login photo"} />
          </Box>

          {/* right hand */}
          <VStack spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the App</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image
                src='/images/playstore.png'
                h={"10"}
                alt='Playstore logo'
              />
              <Image
                src='/images/microsoft.png'
                h={"10"}
                alt='Microsoft logo'
              />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
