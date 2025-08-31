import Logo from '@/components/atoms/Logo';
import { Container, Flex, VisuallyHidden } from '@mantine/core';
import React from 'react';
import { IconMenu2 } from '@tabler/icons-react';

const Header = () => {
  return (
    <Container className="fixed w-full z-10" p={27} fluid>
      <Flex align={'center'} justify={'space-between'}>
        <Logo />
        <VisuallyHidden>
          <IconMenu2 />
        </VisuallyHidden>
      </Flex>
    </Container>
  );
};

export default Header;
