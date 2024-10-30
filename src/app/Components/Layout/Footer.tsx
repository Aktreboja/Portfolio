import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-10">
      <p className="text-lg text-center">
        Designed and Built by{' '}
        <Link href="https://www.github.com/aktreboja" className="underline">
          Aldrich Reboja
        </Link>{' '}
        &copy; 2024
      </p>
    </footer>
  );
}
