import { Flex, Paper, Text, UnstyledButton } from '@mantine/core';
import { IconArrowDown } from '@tabler/icons-react';
import React from 'react';

const ButtonExplore = () => {
  return (
    <UnstyledButton className="absolute top-[35vw] left-[8vw] !text-white !cursor-pointer !z-50 ">
      <Flex direction={'column'} align={'center'} gap={30}>
        <Text className="rotate-270 tracking-wide" size="sm" fz={13} fw={500} lh={'150%'}>
          Explore
        </Text>
        <Paper p={12} bg={'white'} radius={9999}>
          <IconArrowDown size={14} color="black" />
        </Paper>
      </Flex>
    </UnstyledButton>
  );
};

export default ButtonExplore;
