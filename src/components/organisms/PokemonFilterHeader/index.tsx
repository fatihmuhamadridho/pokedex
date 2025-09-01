import { Flex, Text, TextInput } from '@mantine/core';
import { IconLoader, IconSearch } from '@tabler/icons-react';
import React, { ChangeEvent } from 'react';

interface PokemonFilterHeaderProps {
  search?: string;
  onChangeSearch?: (value?: string) => void;
  loading?: boolean;
}

const PokemonFilterHeader = (props: PokemonFilterHeaderProps) => {
  const { search, onChangeSearch, loading } = props;

  const handleChangeSearch = (event?: ChangeEvent<HTMLInputElement>) => {
    if (onChangeSearch) {
      onChangeSearch(event?.target.value);
    }
  };

  return (
    <Flex
      w={'100%'}
      pt={150}
      pb={82}
      bg="linear-gradient(to bottom, rgba(239,243,246,0) 0%, #EFF3F6 100%)"
      justify={'center'}
    >
      <Flex w={'100%'} maw={1235} align={'center'} justify={'space-between'}>
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
          rightSection={loading ? <IconLoader size={20} color="#3E75C3" /> : <IconSearch size={20} color="#3E75C3" />}
          placeholder="Cari berdasarkan nama atau kode"
          onChange={handleChangeSearch}
          value={search}
        />
      </Flex>
    </Flex>
  );
};

export default PokemonFilterHeader;
