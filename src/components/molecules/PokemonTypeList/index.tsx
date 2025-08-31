import { PokemonType } from '@/@core/domains/models/pokemonType.model';
import { Flex, Text } from '@mantine/core';
import { IconPokeball } from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';

interface PokemonTypeListProps {
  pokemonTypesData?: PokemonType[];
}

const PokemonTypeList = (props: PokemonTypeListProps) => {
  const { pokemonTypesData } = props;
  return (
    <Flex
      className="sticky top-[36px] min-w-max max-h-[calc(100vh-72px)] overflow-y-auto"
      pr={36}
      direction={'column'}
      gap={14}
    >
      {['all'].concat(pokemonTypesData?.map((item) => item?.name) || []).map((item, index) => (
        <Flex
          key={index}
          className={clsx(index !== 0 ? 'ml-2 cursor-pointer' : 'cursor-pointer')}
          align={'center'}
          gap={24}
        >
          <IconPokeball />
          <Text fz={15} fw={600} lh={'150%'} lts={'0%'} c={'#ACB9C1'} tt={'capitalize'}>
            {item === 'all' ? 'Semua Jenis' : item}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default PokemonTypeList;
