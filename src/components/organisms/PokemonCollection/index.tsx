import PokemonList from '@/components/molecules/PokemonList';
import PokemonTypeList from '@/components/molecules/PokemonTypeList';
import { usePokemons } from '@/hooks/pokemon.hook';
import { usePokemonTypes } from '@/hooks/pokemonType.hook';
import { Flex } from '@mantine/core';
import React from 'react';

const PokemonCollection = () => {
  const { data: pokemonsData } = usePokemons();
  const { data: pokemonTypesData } = usePokemonTypes();

  return (
    <Flex w={'100%'} py={48} px={16} bg={'#EFF3F6'} justify={'center'}>
      <Flex w={'100%'} maw={1235} justify={'space-between'} gap={140}>
        <PokemonTypeList pokemonTypesData={pokemonTypesData?.data || []} />
        <PokemonList
          pokemonsData={pokemonsData?.data || []}
          pokemonsMeta={pokemonsData?.meta}
          pokemonTypesData={pokemonTypesData?.data || []}
        />
      </Flex>
    </Flex>
  );
};

export default PokemonCollection;
