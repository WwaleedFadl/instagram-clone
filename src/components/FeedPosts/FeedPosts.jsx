import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";

export default function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, index) => {
          return (
            <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
              <Flex gap={2}>
                <SkeletonCircle size='10' />
                <VStack gap={2} alignItems={"flex-start"}>
                  <Skeleton height='10px' w={"200px"} />
                  <Skeleton height='10px' w={"200px"} />
                </VStack>
              </Flex>
              <Skeleton w={"full"}>
                <Box h={"500px"}>Content wrapped</Box>
              </Skeleton>
            </VStack>
          );
        })}
      {!isLoading && (
        <>
          <FeedPost
            username='Mahmoud fadl'
            img='/images/2.jpg'
            avatar='/images/8.jpg'
          />
          <FeedPost
            username='Mohamed fadl'
            img='/images/4.jpg'
            avatar='/images/9.jpg'
          />
          <FeedPost
            username='Mahmoud fadl'
            img='/images/2.jpg'
            avatar='/images/8.jpg'
          />
          <FeedPost
            username='Mohamed fadl'
            img='/images/7.jpg'
            avatar='/images/9.jpg'
          />
          <FeedPost
            username='Mohamed fadl'
            img='/images/5.jpg'
            avatar='/images/9.jpg'
          />
        </>
      )}
    </Container>
  );
}
