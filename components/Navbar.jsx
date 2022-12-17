import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import ColorProvider from './ColorProvider';

const Navbar = () => {
  return (
    <Flex p="2" borderBottom="1px" borderColor="blue.900">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingleft="2">
          Growthtop
        </Link>
      </Box>
      <Spacer />
      <ColorProvider />
    </Flex>
  );
};

export default Navbar;

