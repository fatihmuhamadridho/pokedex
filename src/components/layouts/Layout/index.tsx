import { Container } from '@mantine/core';
import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Container p={0} fluid>
      {children}
    </Container>
  );
};

export default Layout;
