import { Avatar, Box, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

export default function ProfileLink() {
  const authUser = useAuthStore((state) => state.user);
  return (
    <Tooltip
      hasArrow
      placement='right'
      label='Profile'
      ml={1}
      openDelay={500}
      display={{ base: 'block', md: 'none' }}>
      <Link
        display={'flex'}
        to={`/${authUser?.username}`}
        as={RouterLink}
        alignItems={'center'}
        gap={4}
        _hover={{ bg: 'whiteAlpha.400' }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: 'full' }}
        justifyContent={{ base: 'center', md: 'flex-start' }}>
        <Avatar
          size={'sm'}
          src={authUser?.profilePiUrl || ''}
        />
        <Box display={{ base: 'none', md: 'block' }}>Profile</Box>
      </Link>
    </Tooltip>
  );
}
