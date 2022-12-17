import React from 'react';
import { useColorMode, ColorModeProvider, Box, Button } from '@chakra-ui/react';

const ColorProvider = () => {
  const { colorMode, toggleColorMode } = useColorMode('dark');
  return (
    <ColorModeProvider initialColorMode="dark">
      <Box>
        <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'} Mode</Button>
      </Box>
    </ColorModeProvider>
  );
};

export default ColorProvider;

