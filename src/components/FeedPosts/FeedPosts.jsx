import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
  VStack,
} from '@chakra-ui/react';
import FeedPost from './FeedPost';
import useGetFeedPost from '../../hooks/useGetFeedPost';
import React from 'react';
import { Link } from 'react-router-dom';
export default function FeedPosts() {
  const { isLoading, posts } = useGetFeedPost();

  return (
    <Container
      maxW={'container.sm'}
      py={10}
      px={2}>
      {isLoading &&
        [0, 1, 2].map((_, index) => {
          return (
            <VStack
              key={index}
              gap={4}
              alignItems={'flex-start'}
              mb={10}>
              <Flex gap={2}>
                <SkeletonCircle size='10' />
                <VStack
                  gap={2}
                  alignItems={'flex-start'}>
                  <Skeleton
                    height='10px'
                    w={'200px'}
                  />
                  <Skeleton
                    height='10px'
                    w={'200px'}
                  />
                </VStack>
              </Flex>
              <Skeleton w={'full'}>
                <Box h={'400px'}>Content wrapped</Box>
              </Skeleton>
            </VStack>
          );
        })}
      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => (
          <FeedPost
            post={post}
            key={post.id}
          />
        ))}

      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={'md'}>
            Hey Buddy you have not follow any body yet , you could follow
            me on my account
          </Text>
          <Flex
            color={'blue.400'}
            alignItems={'center'}
            justifyContent={'center'}>
            <Link to={'/waleed'}>waleed fadl</Link>
          </Flex>
        </>
      )}
    </Container>
  );
}
