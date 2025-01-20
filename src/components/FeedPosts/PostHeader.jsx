import {
  Avatar,
  Box,
  Button,
  Flex,
  SkeletonCircle,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import useFollowUser from '../../hooks/useFollowUser';
import { timeAgo } from '../../utils/TimeAgo';
export default function PostHeader({ post, creatorProfile }) {
  const { handleFollowUser, isFollowing, isUpdating } = useFollowUser(
    post.createdBy
  );
  return (
    <Flex
      my={2}
      justifyContent={'space-between'}
      alignItems={'center'}
      w={'full'}>
      <Flex
        alignItems={'center'}
        gap={2}>
        {creatorProfile ? (
          <Link to={`/${creatorProfile.username}`}>
            <Avatar
              src={creatorProfile.profilePiUrl}
              alt='user profile pic'
              size={'sm'}
            />
          </Link>
        ) : (
          <SkeletonCircle size='10' />
        )}

        <Flex
          fontSize={12}
          fontWeight={'bold'}
          gap={2}>
          {creatorProfile ? (
            <>
              <Link to={`/${creatorProfile.username}`}>
                {creatorProfile.username}
              </Link>
              <Box color={'gray.500'}>• {timeAgo(post.createdAt)}</Box>
            </>
          ) : (
            <SkeletonCircle size='10' />
          )}
        </Flex>
      </Flex>
      <Box cursor={'pointer'}>
        <Button
          size={'xs'}
          bg={'transparent'}
          fontSize={12}
          color={'blue.500'}
          fontWeight={'bold'}
          _hover={{
            color: 'white',
          }}
          transition={'0.2s ease-in-out'}
          onClick={handleFollowUser}
          isLoading={isUpdating}>
          {isFollowing ? 'Unfollow' : 'follow'}
        </Button>
      </Box>
    </Flex>
  );
}
