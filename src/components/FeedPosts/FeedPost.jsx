import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';
export default function FeedPost({ post }) {
  console.log(post.createdBy);
  const { userProfile } = useGetUserProfileById(post.createdBy);
  return (
    <>
      <PostHeader
        post={post}
        creatorProfile={userProfile}
      />
      <Box
        my={2}
        borderRadius={4}
        overflow={'hidden'}>
        <Image
          src={post.imageURL}
          alt='Feed Post'
        />
      </Box>
      <PostFooter
        post={post}
        creatorProfile={userProfile}
      />
    </>
  );
}
