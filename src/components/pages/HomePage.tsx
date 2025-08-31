import React from 'react';
import Banner from '../organisms/Banner';
import Layout from '../layouts/Layout';
import PokemonFilterHeader from '../organisms/PokemonFilterHeader';

const HomePage = () => {
  return (
    <Layout>
      <Banner />
      <div className="-mt-[21vw]">
        <PokemonFilterHeader />
      </div>
    </Layout>
  );
};

export default HomePage;
