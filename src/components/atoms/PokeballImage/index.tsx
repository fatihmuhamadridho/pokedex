import { Box } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';

interface PokeballImageProps {
  variant?: 'pokeball' | 'masterball';
}

const PokeballImage = (props: PokeballImageProps) => {
  const { variant = 'pokeball' } = props;
  return (
    <Box
      className={clsx(
        'absolute z-10 inset-0',
        variant === 'masterball' ? 'left-[31vw] top-[25vw]' : 'left-[23vw] top-[19vw]',
      )}
    >
      <Image
        style={{ width: variant === 'masterball' ? '37vw' : '53vw' }}
        src={`/assets/${variant}.png`}
        alt={variant}
        width={variant === 'masterball' ? 532 : 772}
        height={variant === 'masterball' ? 532 : 772}
        priority
      />
    </Box>
  );
};

export default PokeballImage;
