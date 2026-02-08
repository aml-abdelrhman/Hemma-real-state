'use client';

import React from 'react';
import Image from 'next/image';

const HeroPage: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">

      <div className="absolute inset-0 w-full h-full -z-10">
        <Image
          src="/images/heropic.png"
          alt="Hero"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </div>
  );
};

export default HeroPage;
