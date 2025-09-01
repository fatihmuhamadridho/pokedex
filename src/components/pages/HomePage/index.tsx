/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { notifications } from '@mantine/notifications';

const HomePage = () => {
  const router = useRouter();
  const { data: pokemonsData } = usePokemons();
  const { data: pokemonTypesData } = usePokemonTypes();
  const [search, setSearch] = useState<string | number>('');
  const [searchLoading, setSearchLoading] = useState<boolean>(false);
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
    setSearchLoading(true);
    try {
      if (value) {
        const response = await pokemonController.getDetailPokemon({ search: value });
        response.data?.updateWeaknessFromPokemonType(pokemonTypesData?.data || []);
        setDetailPokemon(response.data);
      } else {
        setDetailPokemon(undefined);
      }
    } catch (error: any) {
      notifications.show({ title: 'Failed Fetch', message: error?.status?.message, color: 'red' });
    } finally {
      setSearchLoading(false);
    }
  }, 1000);

  return (
    <Layout>
      <Banner />
      <Box className="-mt-[21vw]">
        <PokemonFilterHeader search={String(search)} onChangeSearch={handleFilterSearch} loading={searchLoading} />
        <PokemonCollection
          search={String(search)}
          pokemonsData={detailPokemon ? [detailPokemon] : pokemonsData?.data || []}
          pokemonsMeta={pokemonsData?.meta}
          pokemonTypesData={pokemonTypesData?.data || []}
        />
      </Box>
    </Layout>
  );
};

export default HomePage;
