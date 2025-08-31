import { Pokemon } from '@/@core/domains/models/pokemon.model';
import BannerDetailImage from '@/components/atoms/BannerDetailImage';
import { Box, Flex, Modal, Paper, Progress, Text, UnstyledButton } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import Image from 'next/image';
import React from 'react';

interface ModalDetailPokemonProps {
  opened: boolean;
  onClose: () => void;
  data: Pokemon;
}

const ModalDetailPokemon = (props: ModalDetailPokemonProps) => {
  const { opened, onClose, data } = props;
  const statLabels: Record<keyof typeof data.statistics, string> = {
    health_power: 'HP',
    attack: 'Serangan',
    defense: 'Pertahanan',
    sp_attack: 'Sp. Serangan',
    sp_defense: 'Sp. Pertahanan',
    speed: 'Kecepatan',
  };

  function renderSegments(value: number, max = 100, segments = 5) {
    const percent = (value / max) * 100;
    const filled = (percent / 100) * segments;

    return Array.from({ length: segments }).map((_, i) => {
      let segmentValue = 0;

      if (i + 1 <= Math.floor(filled)) {
        segmentValue = 100;
      } else if (i < filled && filled < i + 1) {
        segmentValue = (filled - i) * 100;
      }

      return <Progress key={i} w="20%" h={6} value={segmentValue} color={segmentValue > 0 ? '#EF0001' : '#EFF3F6'} />;
    });
  }

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
      <UnstyledButton className="absolute top-[16px] right-[16px] z-10" onClick={onClose}>
        <IconX size={24} />
      </UnstyledButton>
      <Flex h={'100%'} align={'start'} gap={74}>
        <Box className="relative">
          <BannerDetailImage width={191} height={508} />
          <Box className="absolute inset-0 top-[30%] left-[7px]" style={{ width: 220, height: 220 }}>
            <Image
              src={data.image || '/assets/pokeball.png'}
              alt={`pokemon-${data.name}`}
              fill
              sizes="236px"
              style={{ objectFit: 'contain' }}
              placeholder="blur"
              blurDataURL="/assets/pokeball.png"
            />
          </Box>
        </Box>
        <Flex w={'100%'} h={'100%'} pt={32} pr={46} direction={'column'}>
          <Flex align={'center'} gap={8}>
            <Text fz={28} fw={'bold'} lh={'100%'} lts={'-1%'} c={'#2F3133'} tt={'capitalize'}>
              {data.name}
            </Text>
            <Text fz={16} fw={'normal'} lh={'100%'} lts={'-1%'} c={'#7A7D80'}>
              #{data.id.padStart(3, '0')}
            </Text>
          </Flex>
          <Flex align={'center'} gap={10}>
            {data.type.map((item, index) => (
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
                tt={'capitalize'}
              >
                {item}
              </Paper>
            ))}
          </Flex>
          <Flex mt={32} align={'center'} gap={48}>
            <Flex direction={'column'} gap={4}>
              <Text fz={13} fw={400} lh={'100%'} lts={'-1%'}>
                Tinggi
              </Text>
              <Text fz={14} fw={600} lh={'100%'} lts={'-1%'}>
                {data.height}m
              </Text>
            </Flex>
            <Flex direction={'column'} gap={4}>
              <Text fz={13} fw={400} lh={'100%'} lts={'-1%'}>
                Berat
              </Text>
              <Text fz={14} fw={600} lh={'100%'} lts={'-1%'}>
                {data.weight}kg
              </Text>
            </Flex>
            <Flex direction={'column'} gap={4}>
              <Text fz={13} fw={400} lh={'100%'} lts={'-1%'}>
                Keterampilan
              </Text>
              <Text fz={14} fw={600} lh={'100%'} lts={'-1%'} tt={'capitalize'}>
                {data.skill}
              </Text>
            </Flex>
          </Flex>
          <Flex mt={32} direction={'column'} gap={16}>
            <Text fz={13} fw={600} lh={'100%'} lts={'-1%'}>
              Kelemahan
            </Text>
            <Flex align={'center'} wrap={'wrap'} gap={10}>
              {data.weakness.map((item, index) => (
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
                  tt={'capitalize'}
                >
                  {item}
                </Paper>
              ))}
            </Flex>
          </Flex>
          <Flex w={'100%'} mt={32} direction={'column'} gap={16}>
            <Text fz={13} fw={600} lh={'100%'} lts={'-1%'}>
              Statistik
            </Text>
            <Flex direction="column" gap={12} w="100%">
              {Object.entries(data.statistics).map(([key, value]) => (
                <Flex key={key} align="center" gap={12} w="100%">
                  <Text fz={12} fw={400} c="#7A7D80" w={120}>
                    {statLabels[key as keyof typeof statLabels]}
                  </Text>
                  <Flex w="100%" gap={4}>
                    {renderSegments(value)}
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
