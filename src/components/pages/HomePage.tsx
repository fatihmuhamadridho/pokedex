import React from 'react';
import Banner from '../organisms/Banner';
import Layout from '../layouts/Layout';
import PokemonFilterHeader from '../organisms/PokemonFilterHeader';
import PokemonCollection from '../organisms/PokemonCollection';
import { Box } from '@mantine/core';

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <Box className="-mt-[21vw]">
        <PokemonFilterHeader />
        <PokemonCollection />
      </Box>
    </Layout>
  );
};

export default HomePage;
