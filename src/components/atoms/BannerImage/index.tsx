import Image from 'next/image';
import React from 'react';

interface BannerImageProps {
  variant?: 'red' | 'blue';
}

const BannerImage = (props: BannerImageProps) => {
  const { variant = 'red' } = props;

  return (
    <Image
      style={{ width: '100vw' }}
      src={`/assets/bg_${variant}.png`}
      alt={`bg_${variant}`}
      width={1440}
      height={706}
    />
  );
};

export default BannerImage;
