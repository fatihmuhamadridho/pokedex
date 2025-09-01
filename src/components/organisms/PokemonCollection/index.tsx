import { Pokemon } from '@/@core/domains/models/pokemon.model';
import { PokemonType } from '@/@core/domains/models/pokemonType.model';
import { BaseResponse } from '@/@core/domains/types/base.type';
import PokemonList from '@/components/molecules/PokemonList';
import PokemonTypeList from '@/components/molecules/PokemonTypeList';
import { Flex } from '@mantine/core';
import React from 'react';

interface PokemonCollectionProps {
  pokemonsData?: Pokemon[];
  pokemonsMeta?: BaseResponse['meta'];
  pokemonTypesData?: PokemonType[];
}

const PokemonCollection = (props: PokemonCollectionProps) => {
  const { pokemonsData, pokemonsMeta, pokemonTypesData } = props;

  return (
    <Flex w={'100%'} py={48} px={16} bg={'#EFF3F6'} justify={'center'}>
      <Flex w={'100%'} maw={1235} justify={'space-between'} gap={140}>
        <PokemonTypeList pokemonTypesData={pokemonTypesData} />
        <PokemonList pokemonsData={pokemonsData} pokemonsMeta={pokemonsMeta} pokemonTypesData={pokemonTypesData} />
      </Flex>
    </Flex>
  );
};

export default PokemonCollection;
