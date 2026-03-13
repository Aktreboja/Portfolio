'use client';
import React, { useEffect } from 'react';
import { quantum, infinity } from 'ldrs';

infinity.register();

export default function IndexLoader() {
  const getLoader = async () => {
    const { spiral } = await import('ldrs');
    spiral.register();
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      getLoader();
    }
  }, []);

  return (
    <div className="absolute border top-0 left-0 w-full h-fit bg-baseBg">
      <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
        <l-infinity
          stroke={6}
          stroke-length={0.15}
          color="black"
          size={100}
          speed={1.25}
        ></l-infinity>
        <p className="font-medium text-lg">Welcome</p>
      </div>
    </div>
  );
}
