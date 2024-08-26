import { Flex, Text } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";

function SuggestedUsers() {
  return (
    <div>
      <SuggestedUser />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}>
          See All
        </Text>
      </Flex>
    </div>
  );
}

export default SuggestedUsers;
