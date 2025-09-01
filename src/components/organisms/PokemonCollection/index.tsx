import { Pokemon } from '@/@core/domains/models/pokemon.model';
import { PokemonType } from '@/@core/domains/models/pokemonType.model';
import { BaseResponse } from '@/@core/domains/types/base.type';
import { PokemonTypeValue } from '@/@core/domains/types/pokemonType.type';
import PokemonList from '@/components/molecules/PokemonList';
import PokemonTypeList from '@/components/molecules/PokemonTypeList';
import { Flex } from '@mantine/core';
import React from 'react';

interface PokemonCollectionProps {
  showLoadMore?: boolean;
  onChangeFilterType?: (value?: 'all' | PokemonTypeValue | number) => void;
  pokemonsData?: Pokemon[];
  pokemonsMeta?: BaseResponse['meta'];
  pokemonTypesData?: PokemonType[];
  handleLoadMorePokemonData?: () => void;
}

const PokemonCollection = (props: PokemonCollectionProps) => {
  const { showLoadMore, onChangeFilterType, pokemonsData, pokemonsMeta, pokemonTypesData, handleLoadMorePokemonData } =
    props;

  return (
    <Flex w={'100%'} py={48} px={16} bg={'#EFF3F6'} justify={'center'}>
      <Flex w={'100%'} maw={1235} justify={'space-between'} gap={140}>
        <PokemonTypeList onChangeFilterType={onChangeFilterType} pokemonTypesData={pokemonTypesData} />
        <PokemonList
          showLoadMore={showLoadMore}
          pokemonsData={pokemonsData}
          pokemonsMeta={pokemonsMeta}
          pokemonTypesData={pokemonTypesData}
          handleLoadMorePokemonData={handleLoadMorePokemonData}
        />
      </Flex>
    </Flex>
  );
};

export default PokemonCollection;
