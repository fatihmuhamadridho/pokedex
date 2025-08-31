import { Pokemon } from '@/@core/domains/models/pokemon';
import ModalDetailPokemon from '@/components/organisms/Modals/DetailPokemon';
import { usePokemons } from '@/hooks/pokemon.hook';
import { Center, Flex, Paper, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLeaf, IconPokeball, IconTriangleFilled } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const PokemonList = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure();
  const { data: pokemonData } = usePokemons();
  const [selectedDetail, setSelectedDetail] = useState<Pokemon>(Pokemon.DummyData());

  console.log({ pokemonData });

  const handleOpenDetail = (data: Pokemon) => {
    setSelectedDetail(data);
    router.push('?pokemonid=1', undefined, { scroll: false });
    open();
  };

  const handleCloseDetail = () => {
    router.push('/', undefined, { scroll: false });
    close();
    setTimeout(() => {
      setSelectedDetail(Pokemon.DummyData());
    }, 300);
  };

  return (
    <Flex w={'100%'} direction={'column'} gap={36}>
      <Flex w={'100%'} align={'start'} justify={'space-between'} bg={'#EFF3F6'}>
        <Flex align={'center'} gap={18}>
          <IconPokeball />
          <Text>{pokemonData?.meta?.total_items} Pokémons</Text>
        </Flex>
        <Flex align={'center'} gap={16}>
          <Flex direction={'column'} align={'center'} gap={3}>
            <IconTriangleFilled className="cursor-pointer" size={10} />
            <IconTriangleFilled className="rotate-180 cursor-pointer" size={10} />
          </Flex>
          <Text>Urutkan berdasarkan</Text>
        </Flex>
      </Flex>
      <SimpleGrid
        // className="sticky top-[100px]"
        cols={3}
        spacing={32}
      >
        {pokemonData?.data?.map((item, index) => (
          <Paper
            key={index}
            className="cursor-pointer"
            w={280}
            h={304}
            py={24}
            px={28}
            bg={'white'}
            radius={12}
            onClick={() => handleOpenDetail(item)}
          >
            <Flex w={'100%'} h={'100%'} direction={'column'} align={'center'} justify={'space-between'} gap={14}>
              <Center h={'100%'}>
                <Paper w={165} h={165} bg={'#D6EBDC'} radius={'100%'} />
                <Image
                  className="absolute z-10"
                  src={item.image}
                  style={{ width: 200, height: 200 }}
                  alt={`pokemon-${item.name}`}
                  width={200}
                  height={200}
                />
              </Center>
              <Flex w={'100%'} align={'center'} justify={'space-between'}>
                <Flex direction={'column'}>
                  <Text fz={13} fw={500} c={'#7A7D80'} lh={'150%'} lts={'0%'}>
                    #{item.id.padStart(3, '0')}
                  </Text>
                  <Text fz={18} fw={600} c={'#2F3133'} lh={'150%'} lts={'0%'} tt={'capitalize'}>
                    {item.name}
                  </Text>
                </Flex>
                <IconLeaf />
              </Flex>
            </Flex>
          </Paper>
        ))}
      </SimpleGrid>
      <Center>
        <UnstyledButton className="!bg-[#3F5DB3]/[10%] rounded-[6px]" py={14} px={20} c={'#3F5DB3'}>
          Load more Pokémon
        </UnstyledButton>
      </Center>
      <ModalDetailPokemon opened={opened} onClose={handleCloseDetail} data={selectedDetail! || Pokemon.DummyData()} />
    </Flex>
  );
};

export default PokemonList;
