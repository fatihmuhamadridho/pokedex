import { Badge, Center, Flex, Text } from '@mantine/core';
import React from 'react';

const BannerTopContent = () => {
  return (
    <Flex className="absolute inset-0 top-[8vw]" direction={'column'} align={'center'} gap={32}>
      <Badge py={4} px={6} h={34} bg={'white'}>
        <Flex align={'center'} gap={10}>
          <Center className="rounded-full" p={2} w={24} h={24} bg={'#3F67BA'}>
            <Text fz={16}>🎒</Text>
          </Center>
          <Text fz={15} fw={600} tt={'lowercase'} c={'#3F67BA'}>
            Pokedex
          </Text>
        </Flex>
      </Badge>
      <Flex className="text-white" direction={'column'} align={'center'} gap={8}>
        <Text fz={64} fw={'bold'} lh={'100%'} lts={'-1%'}>
          Siapa Pokemon ini?
        </Text>
        <Text fz={18} fw={500} lh={'150%'} lts={'0%'}>
          Panduan sempurna bagi siapa pun yang ingin berburu Pokémon di seluruh dunia.
        </Text>
      </Flex>
    </Flex>
  );
};

export default BannerTopContent;
