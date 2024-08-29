import {
  Avatar,
  AvatarGroup,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
export default function ProfileHeader() {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="waleed fadl"
          src="/images/waleed2.jpg"
          alt="waleed fadl logo"
        />
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          width={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>Waleed Fadl</Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            {" "}
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              4
            </Text>{" "}
            Posts
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            {" "}
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              300
            </Text>{" "}
            Followers
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            {" "}
            <Text as={"span"} fontWeight={"bold"} mr={1}>
              900
            </Text>{" "}
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Waleed Fadl
          </Text>
        </Flex>
        <Text fontSize={{ base: "xs", md: "sm" }}>
          “Success is no accident. It is hard work, perseverance, learning,
          studying, sacrifice, and most of all, love of what you are doing or
          learning to do.” — Pelé
        </Text>
      </VStack>
    </Flex>
  );
}
