import { VStack, Flex, Text, Box, Link } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={4} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser
        name="Mohamed fadl"
        followers={1900}
        avatar="/images/9.jpg"
      />
      <SuggestedUser
        name="Mahmoud fadl"
        followers={1300}
        avatar="/images/8.jpg"
      />
      <SuggestedUser
        name="Mahmoud fadl"
        followers={1500}
        avatar="/images/1.jpg"
      />
      <SuggestedUser
        name="Mohamed fadl"
        followers={2000}
        avatar="/images/2.jpg"
      />
      <SuggestedUser name="MO fadl" followers={1300} avatar="/images/3.jpg" />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        &copy; 2024 Built by{" "}
        <Link
          href="https://github.com/WwaleedFadl"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Waleed Fadl
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
