import { Flex, Paper, Text, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import React from 'react';

interface PokemonFilterHeaderProps {
  // ga kepake kayakyna
  className?: string;
}

const PokemonFilterHeader = (props: PokemonFilterHeaderProps) => {
  const { className } = props;
  return (
    <Flex w={'100%'} pt={150} pb={82} bg={'#EFF3F6'} justify={'center'}>
      <Flex className={className} w={'100%'} maw={1235} align={'center'} justify={'space-between'}>
        <Text maw={265} fz={32} fw={'bold'} c={'#2F3133'} lts={'-1%'} lh={'100%'}>
          Pilih Pokemon Anda
        </Text>
        <TextInput
          styles={{
            input: { fontSize: 15, lineHeight: '150%', padding: '7px calc(14px + 40px) 7px 24px', minHeight: 56 },
            section: { right: 12 },
          }}
          w={'100%'}
          maw={403}
          radius={56}
          rightSection={
            <Paper p={12} bg={'#9EB9E1'} radius={'100%'}>
              <IconSearch size={16} color="#3E75C3" />
            </Paper>
          }
          placeholder="Cari berdasarkan nama atau kode"
        />
      </Flex>
    </Flex>
  );
};

export default PokemonFilterHeader;
