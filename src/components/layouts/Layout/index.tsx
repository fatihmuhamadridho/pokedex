import Header from '@/components/organisms/Header';
import { Container } from '@mantine/core';
import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <Container p={0} fluid>
      <Header />
      <Container p={0} fluid>
        {children}
      </Container>
    </Container>
  );
};

export default Layout;
