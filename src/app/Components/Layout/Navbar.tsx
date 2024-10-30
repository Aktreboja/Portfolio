import React from 'react';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center max-lg:px-8 px-24 text-lg py-16">
      <h1 className="font-semibold text-3xl cursor-pointer">Aktreboja</h1>
      <a
        href="mailto:aktreboja@gmail.com?subject=(Aktreboja.com) Add additional details here"
        target="_blank"
        rel="noopener noreferrer"
        className="border px-4 py-2 rounded-lg font-medium hover:bg-accentBg hover:text-white duration-100"
      >
        Contact
      </a>
    </nav>
  );
}
