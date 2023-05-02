import React, { ReactNode } from 'react';

import Sidebar from '../Sidebar';
import { Box } from '@chakra-ui/react';

import { Container } from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Box className="grid">
        <Sidebar />
        <Box className="main">{children}</Box>
      </Box>
    </Container>
  );
};

export default Layout;
