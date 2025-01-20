import React from 'react';
import { Avatar, Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/TimeAgo';
import useUserProfileStore from '../../store/useProfileStore';

function Caption({ post }) {
  const userProfile = useUserProfileStore((state) => state.userProfile);
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
            {post.caption}
          </Text>
          <Text
            fontSize={12}
            color={'gray'}>
            {timeAgo(post.createdAt)}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
  s;
}

export default Caption;
