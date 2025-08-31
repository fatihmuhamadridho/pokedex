import ModalDetailPokemon from '@/components/organisms/Modals/DetailPokemon';
import { Center, Flex, Paper, SimpleGrid, Text, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconLeaf, IconPokeball, IconTriangleFilled } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';

const PokemonList = () => {
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure();

  const handleOpenDetail = () => {
    router.push('?pokemonid=1', undefined, { scroll: false });
    open();
  };

  const handleCloseDetail = () => {
    router.push('/', undefined, { scroll: false });
    close();
  };

  return (
    <Flex w={'100%'} direction={'column'} gap={36}>
      <Flex
        // className="sticky top-0 z-20"
        // mt={-24}
        // pt={24}
        // pb={24}
        w={'100%'}
        align={'start'}
        justify={'space-between'}
        bg={'#EFF3F6'}
      >
        <Flex align={'center'} gap={18}>
          <IconPokeball />
          <Text>150 Pokémons</Text>
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
        {Array.from({ length: 20 }).map((item, index) => (
          <Paper
            key={index}
            className="cursor-pointer"
            w={280}
            h={304}
            py={24}
            px={28}
            bg={'white'}
            radius={12}
            onClick={handleOpenDetail}
          >
            <Flex w={'100%'} h={'100%'} direction={'column'} align={'center'} justify={'space-between'} gap={14}>
              <Center h={'100%'}>
                <Paper w={165} h={165} bg={'#D6EBDC'} radius={'100%'} />
                <Image
                  className="absolute z-10"
                  src={
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg'
                  }
                  style={{ width: 200, height: 200 }}
                  alt="pokemon"
                  width={200}
                  height={200}
                />
              </Center>
              <Flex w={'100%'} align={'center'} justify={'space-between'}>
                <Flex direction={'column'}>
                  <Text fz={13} fw={500} c={'#7A7D80'} lh={'150%'} lts={'0%'}>
                    #001
                  </Text>
                  <Text fz={18} fw={600} c={'#2F3133'} lh={'150%'} lts={'0%'}>
                    Bulbasaur
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
      <ModalDetailPokemon opened={opened} onClose={handleCloseDetail} />
    </Flex>
  );
};

export default PokemonList;
