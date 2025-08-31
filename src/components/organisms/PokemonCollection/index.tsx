import PokemonList from '@/components/molecules/PokemonList';
import PokemonTypeList from '@/components/molecules/PokemonTypeList';
import { Flex } from '@mantine/core';
import React from 'react';

const PokemonCollection = () => {
  return (
    <Flex w={'100%'} py={48} px={16} bg={'#EFF3F6'} justify={'center'}>
      <Flex w={'100%'} maw={1235} justify={'space-between'} gap={140}>
        <PokemonTypeList />
        <PokemonList />
      </Flex>
    </Flex>
  );
};

export default PokemonCollection;
