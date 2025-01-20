import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from '../../assets/constants';
import usePostComment from '../../hooks/usePostComment';
import useAuthStore from '../../store/authStore';
import useLikePost from '../../hooks/useLikePost';
import { timeAgo } from '../../utils/TimeAgo';
import CommentsModal from '../Modals/CommentsModel';

export default function PostFooter({
  post,
  username,
  isProfilePage,
  creatorProfile,
}) {
  // const [liked, setLiked] = useState(false);
  // const [likes, setLikes] = useState(400);
  const { handleLikePost, isLiked, isUpdating, likes } = useLikePost(post);
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState('');
  const authUser = useAuthStore((state) => state.user);
  const commentRef = useRef(null);
  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment('');
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const handleLike = () => {
  //   if (liked) {
  //     setLiked(false);
  //     setLikes(likes - 1);
  //   } else {
  //     setLiked(true);
  //     setLikes(likes + 1);
  //   }
  // };

  return (
    <Box
      mb={10}
      mt={'auto'}>
      <Flex
        alignItems={'center'}
        gap={4}
        w={'full'}
        pt={0}
        mb={3}
        mt={4}>
        <Box
          onClick={handleLikePost}
          cursor={'pointer'}
          fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box
          cursor={'pointer'}
          fontSize={18}
          onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text
        fontWeight={600}
        fontSize={'sm'}>
        {likes} likes.
      </Text>
      {isProfilePage && (
        <Text
          fontSize={'12'}
          color={'gray'}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}
      {!isProfilePage && (
        <>
          <Text
            fontWeight={700}
            fontSize={'sm'}>
            {creatorProfile?.username}{' '}
            <Text
              as={'span'}
              fontWeight={400}
              fontSize={'sm'}>
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Text
              color={'gray'}
              fontSize={'sm'}
              cursor={'pointer'}
              onClick={onOpen}>
              View all {post.comments.length} comments.
            </Text>
          )}
          {/* Comment Modal only in the home page */}
          {isOpen ? (
            <CommentsModal
              isOpen={isOpen}
              onClose={onClose}
              post={post}
            />
          ) : null}
        </>
      )}
      {authUser && (
        <Flex
          alignItems={'center'}
          gap={2}
          justifyContent={'space-between'}
          w={'full'}>
          <InputGroup>
            <Input
              variant={'flushed'}
              placeholder={'Add a comment...'}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={'blue.500'}
                fontWeight={600}
                cursor={'pointer'}
                _hover={{ color: 'white' }}
                bg={'transparent'}
                onClick={handleSubmitComment}
                isLoading={isCommenting}>
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
}
