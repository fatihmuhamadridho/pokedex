import React, { useEffect, useState } from 'react';
import Banner from '../../organisms/Banner';
import Layout from '../../layouts/Layout';
import PokemonFilterHeader from '../../organisms/PokemonFilterHeader';
import PokemonCollection from '../../organisms/PokemonCollection';
import { Box } from '@mantine/core';
import { usePokemons } from '@/hooks/pokemon.hook';
import { usePokemonTypes } from '@/hooks/pokemonType.hook';
import { useDebouncedCallback } from '@mantine/hooks';
import { PokemonController } from '@/@core/domains/controllers/pokemon.controller';
import { Pokemon } from '@/@core/domains/models/pokemon.model';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();
  const { data: pokemonsData } = usePokemons();
  const { data: pokemonTypesData } = usePokemonTypes();
  const [search, setSearch] = useState<string | number>('');
  const [detailPokemon, setDetailPokemon] = useState<Pokemon | null | undefined>();
  const pokemonController = new PokemonController();

  useEffect(() => {
    if (pokemonTypesData?.data && pokemonsData?.data) {
      if (
        pokemonTypesData.data.length > 0 &&
        pokemonsData.data.length > 0 &&
        pokemonsData.data[0].weakness.length === 0
      ) {
        pokemonsData.data.map((item) => {
          item.updateWeaknessFromPokemonType(pokemonTypesData.data || []);
        });
      }
    }
  }, [pokemonTypesData?.data, pokemonsData?.data]);

  const handleFilterSearch = (value?: string) => {
    setSearch(value || '');
    router.push(value ? `?search=${value}` : '/', undefined, { scroll: false });
    handleGetDetailBySearch(value);
  };

  const handleGetDetailBySearch = useDebouncedCallback(async (value?: string) => {
    try {
      if (value) {
        const response = await pokemonController.getDetailPokemon({ search: value });
        response.data?.updateWeaknessFromPokemonType(pokemonTypesData?.data || []);
        setDetailPokemon(response.data);
      } else {
        setDetailPokemon(undefined);
      }
    } catch (error) {
      console.log({ error });
    }
  }, 1000);

  return (
    <Layout>
      <Banner />
      <Box className="-mt-[21vw]">
        <PokemonFilterHeader search={String(search)} onChangeSearch={handleFilterSearch} />
        <PokemonCollection
          pokemonsData={detailPokemon ? [detailPokemon] : pokemonsData?.data || []}
          pokemonsMeta={pokemonsData?.meta}
          pokemonTypesData={pokemonTypesData?.data || []}
        />
      </Box>
    </Layout>
  );
};

export default HomePage;
