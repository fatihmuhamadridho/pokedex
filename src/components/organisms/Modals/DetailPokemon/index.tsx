import BannerDetailImage from '@/components/atoms/BannerDetailImage';
import { Box, Flex, Modal, Paper, Progress, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

interface ModalDetailPokemonProps {
  opened: boolean;
  onClose: () => void;
}

const ModalDetailPokemon = (props: ModalDetailPokemonProps) => {
  const { opened, onClose } = props;

  return (
    <Modal
      styles={{
        body: { padding: 0 },
      }}
      size={710}
      opened={opened}
      onClose={onClose}
      withCloseButton={false}
      centered
      radius={16}
    >
      <Flex h={'100%'} align={'start'} gap={74}>
        <Box className="relative">
          <BannerDetailImage width={191} height={508} />
          <Image
            className="absolute inset-0 top-1/4 left-[28px]"
            src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg'}
            style={{ width: 236, height: 236 }}
            alt="pokemon"
            width={236}
            height={236}
          />
        </Box>
        <Flex w={'100%'} h={'100%'} pt={35} pr={46} direction={'column'}>
          <Flex align={'center'} gap={8}>
            <Text fz={28} fw={'bold'} lh={'100%'} lts={'-1%'} c={'#2F3133'}>
              Charmeleon
            </Text>
            <Text fz={16} fw={'normal'} lh={'100%'} lts={'-1%'} c={'#7A7D80'}>
              #005
            </Text>
          </Flex>
          <Flex align={'center'} gap={10}>
            {Array.from({ length: 3 }).map((item, index) => (
              <Paper
                key={index}
                className="flex items-center justify-center w-max !bg-[#E96303]/[10%]"
                mt={10}
                py={4}
                px={25}
                h={24}
                fz={13}
                fw={600}
                lh={'100%'}
                lts={'-1%'}
              >
                Fogo
              </Paper>
            ))}
          </Flex>
          <Flex mt={32} align={'center'} gap={48}>
            <Flex direction={'column'} gap={4}>
              <Text fz={13} fw={400} lh={'100%'} lts={'-1%'}>
                Alutra
              </Text>
              <Text fz={14} fw={600} lh={'100%'} lts={'-1%'}>
                0.7m
              </Text>
            </Flex>
            <Flex direction={'column'} gap={4}>
              <Text fz={13} fw={400} lh={'100%'} lts={'-1%'}>
                Alutra
              </Text>
              <Text fz={14} fw={600} lh={'100%'} lts={'-1%'}>
                0.7m
              </Text>
            </Flex>
            <Flex direction={'column'} gap={4}>
              <Text fz={13} fw={400} lh={'100%'} lts={'-1%'}>
                Habilidades
              </Text>
              <Text fz={14} fw={600} lh={'100%'} lts={'-1%'}>
                0.7m
              </Text>
            </Flex>
          </Flex>
          <Flex mt={32} direction={'column'} gap={16}>
            <Text fz={13} fw={600} lh={'100%'} lts={'-1%'}>
              Fraquezas
            </Text>
            <Flex align={'center'} wrap={'wrap'} gap={10}>
              {Array.from({ length: 4 }).map((item, index) => (
                <Paper
                  key={index}
                  className="flex items-center justify-center w-max !bg-[#E96303]/[10%]"
                  py={4}
                  px={25}
                  h={24}
                  fz={13}
                  fw={600}
                  lh={'100%'}
                  lts={'-1%'}
                >
                  Fogo
                </Paper>
              ))}
            </Flex>
          </Flex>
          <Flex w={'100%'} mt={32} direction={'column'} gap={16}>
            <Text fz={13} fw={600} lh={'100%'} lts={'-1%'}>
              Fraquezas
            </Text>
            <Flex direction="column" gap={12} w="100%">
              {['Sp. ataque', 'Sp. defesa', 'Sp. defesa', 'Sp. defesa', 'Sp. defesa', 'Sp. defesa'].map((label, i) => (
                <Flex key={i} align="center" gap={12} w="100%">
                  <Text fz={12} fw={400} c="#7A7D80" w={80}>
                    {label}
                  </Text>
                  <Flex w="100%" gap={4}>
                    <Progress w="20%" h={3} value={100} />
                    <Progress w="20%" h={3} value={80} />
                    <Progress w="20%" h={3} value={60} />
                    <Progress w="20%" h={3} value={40} />
                    <Progress w="20%" h={3} value={20} />
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ModalDetailPokemon;
