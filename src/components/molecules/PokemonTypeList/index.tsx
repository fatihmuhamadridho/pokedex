import { Flex, Text } from '@mantine/core';
import { IconPokeball } from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';

const PokemonTypeList = () => {
  return (
    <Flex
      className="sticky top-[36px] min-w-max max-h-[calc(100vh-72px)] overflow-y-auto"
      pr={36}
      direction={'column'}
      gap={14}
    >
      {Array.from({ length: 22 }).map((item, index) => (
        <Flex
          key={index}
          className={clsx(index !== 0 ? 'ml-2 cursor-pointer' : 'cursor-pointer')}
          align={'center'}
          gap={24}
        >
          <IconPokeball />
          <Text fz={15} fw={600} lh={'150%'} lts={'0%'} c={'#ACB9C1'}>
            Semua Jenis
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default PokemonTypeList;
