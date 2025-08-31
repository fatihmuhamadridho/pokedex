import Logo from '@/components/atoms/Logo';
import { Container, Flex, VisuallyHidden } from '@mantine/core';
import React from 'react';
import { IconMenu2 } from '@tabler/icons-react';

interface HeaderProps {
  onClickLogo?: () => void;
}

const Header = (props: HeaderProps) => {
  const { onClickLogo } = props;
  return (
    <Container className="fixed w-full z-10" mx={'auto'} p={27} fluid>
      <Flex mx={'auto'} maw={1218} align={'center'} justify={'space-between'}>
        <Logo onClick={onClickLogo} />
        <VisuallyHidden>
          <IconMenu2 />
        </VisuallyHidden>
      </Flex>
    </Container>
  );
};

export default Header;
