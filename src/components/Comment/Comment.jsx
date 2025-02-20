import {
  Avatar,
  Flex,
  Skeleton,
  SkeletonCircle,
  Text,
} from '@chakra-ui/react';
import useGetUserProfileById from '../../hooks/useGetUserProfileById';
import { Link } from 'react-router-dom';
import React from 'react';
import { timeAgo } from '../../utils/TimeAgo';

export default function Comment({ comment }) {
  const { isLoading, userProfile } = useGetUserProfileById(
    comment.createdBy
  );
  if (isLoading) return <CommentSkeleton />;
  return (
    <Flex gap={4}>
      <Link to={`/${userProfile.username}`}>
        <Avatar
          src={userProfile.profilePiUrl}
          size={'sm'}
        />
      </Link>
      <Flex direction={'column'}>
        <Flex
          gap={2}
          alignItems={'center'}>
          <Link to={`/${userProfile.username}`}>
            <Text
              fontWeight={'bold'}
              fontSize={12}>
              {userProfile.username}
            </Text>
          </Link>
          <Text
            fontSize={14}
            color={'whiteAlpha.500'}>
            {comment.comment}
          </Text>
          <Text
            fontSize={12}
            color={'gray'}>
            {timeAgo(comment.createdAt)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
const CommentSkeleton = () => {
  return (
    <Flex
      gap={4}
      w={'full'}
      alignItems={'center'}>
      <SkeletonCircle
        h={10}
        w='10'
      />
      <Flex
        gap={1}
        flexDir={'column'}>
        <Skeleton
          height={2}
          width={100}
        />
        <Skeleton
          height={2}
          width={50}
        />
      </Flex>
    </Flex>
  );
};
