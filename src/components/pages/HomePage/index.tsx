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
import { PokemonTypeValue } from '@/@core/domains/types/pokemonType.type';

const HomePage = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string | number>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detailPokemon, setDetailPokemon] = useState<Pokemon | null | undefined>();
  const [listPokemonByFilterType, setListPokemonByFilterType] = useState<Pokemon[] | null | undefined>();
  const pokemonController = new PokemonController();
  const { data: pokemonsData } = usePokemons();
  const { data: pokemonTypesData } = usePokemonTypes();

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

    const query: Record<string, string> = {};

    if (value) query.search = value;
    if (router.query.type) query.type = String(router.query.type);

    router.push({ pathname: '/', query }, undefined, { scroll: false });

    handleGetDetailBySearch(value);
  };

  const handleResetSearch = () => {
    const query: Record<string, string> = {};

    if (router.query.type) query.type = String(router.query.type);

    router.push({ pathname: '/', query }, undefined, { scroll: false });

    setSearch('');
    setDetailPokemon(undefined);
  };

  const handleGetDetailBySearch = useDebouncedCallback(async (value?: string) => {
    setIsLoading(true);
    try {
      if (value) {
        const response = await pokemonController.getDetailPokemon({ search: value });
        response.data?.updateWeaknessFromPokemonType(pokemonTypesData?.data || []);
        setDetailPokemon(response.data);
      } else {
        handleResetSearch();
      }
    } catch (error: any) {
      notifications.show({ title: 'Failed Fetch', message: error?.status?.message, color: 'red' });
    } finally {
      setIsLoading(false);
    }
  }, 500);

  const handleFilterType = (value?: 'all' | PokemonTypeValue | number) => {
    const query: Record<string, string> = {};

    if (value && value !== 'all') query.type = String(value);
    if (router.query.search) query.search = String(router.query.search);

    router.push({ pathname: '/', query }, undefined, { scroll: false });

    handleGetDetailType(String(value));
  };

  const handleResetFilterType = () => {
    const query: Record<string, string> = {};

    if (router.query.search) query.search = String(router.query.search);

    router.push({ pathname: '/', query }, undefined, { scroll: false });

    setListPokemonByFilterType(undefined);
  };

  const handleGetDetailType = useDebouncedCallback(async (value: string) => {
    if (search) {
      handleResetSearch();
    }
    setIsLoading(true);
    try {
      if (value !== 'all' && value) {
        const response = await pokemonController.getAllPokemonByFilterType({ type: value });
        setListPokemonByFilterType(response.data);
      } else {
        handleResetFilterType();
      }
    } catch (error: any) {
      notifications.show({ title: 'Failed Fetch', message: error?.status?.message, color: 'red' });
    } finally {
      setIsLoading(false);
    }
  }, 500);

  return (
    <Layout>
      <Banner />
      <Box className="-mt-[21vw]">
        <PokemonFilterHeader search={String(search)} onChangeSearch={handleFilterSearch} loading={isLoading} />
        <PokemonCollection
          search={String(search)}
          onChangeFilterType={handleFilterType}
          pokemonsData={
            detailPokemon
              ? [detailPokemon]
              : listPokemonByFilterType
                ? listPokemonByFilterType
                : pokemonsData?.data || []
          }
          pokemonsMeta={pokemonsData?.meta}
          pokemonTypesData={pokemonTypesData?.data || []}
        />
      </Box>
    </Layout>
  );
};

export default HomePage;
