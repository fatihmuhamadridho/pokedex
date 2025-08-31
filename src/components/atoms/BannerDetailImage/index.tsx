import React from 'react';

interface BannerDetailImageProps {
  width?: string | number;
  height?: string | number;
}

const BannerDetailImage = (props: BannerDetailImageProps) => {
  const { width = '191', height = '508' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 191 508" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 12C0 5.37258 5.37258 0 12 0H191V508H12C5.37258 508 0 502.627 0 496V12Z"
        fill="url(#paint0_linear_8803_24190)"
      />
      <mask id="mask0_8803_24190" maskUnits="userSpaceOnUse" x="0" y="0" width="173" height="508">
        <rect width="173" height="508" rx="12" fill="url(#paint1_linear_8803_24190)" />
      </mask>
      <g mask="url(#mask0_8803_24190)">
        <path
          opacity="0.1"
          d="M-59 96.709C26.7697 96.709 97 169.304 97 259.735C97 350.167 26.7697 422.762 -59 422.762C-144.77 422.762 -215 350.167 -215 259.735C-215 169.304 -144.77 96.709 -59 96.709Z"
          stroke="url(#paint2_linear_8803_24190)"
          strokeWidth="20"
        />
        <path
          opacity="0.1"
          d="M-59 30.9307C64.3277 30.9307 165.069 135.272 165.069 264.947C165.069 394.623 64.3276 498.964 -59 498.964C-182.328 498.964 -283.069 394.623 -283.069 264.947C-283.069 135.272 -182.328 30.9307 -59 30.9307Z"
          stroke="url(#paint3_linear_8803_24190)"
          strokeWidth="21.8605"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_8803_24190"
          x1="25.3623"
          y1="11.4233"
          x2="362.969"
          y2="245.34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6EBDC" />
          <stop offset="1" stopColor="#E3FFA7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_8803_24190"
          x1="22.9721"
          y1="11.4233"
          x2="347.678"
          y2="215.199"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D6EBDC" />
          <stop offset="1" stopColor="#E3FFA7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_8803_24190"
          x1="18.3039"
          y1="15.4628"
          x2="-237.963"
          y2="340.262"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68AE28" />
          <stop offset="1" stopColor="#68AE28" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_8803_24190"
          x1="50.4363"
          y1="-80.8606"
          x2="-312.351"
          y2="378.945"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68AE28" />
          <stop offset="1" stopColor="#68AE28" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BannerDetailImage;
