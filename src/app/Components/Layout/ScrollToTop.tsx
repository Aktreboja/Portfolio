'use client';
import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    if (scrollPosition > viewportHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showButton && (
      <button
        className="fixed bottom-4 right-4 bg-accentBg text-white p-4 rounded-full hover:bg-accentBgHover"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IoIosArrowUp />
      </button>
    )
  );
}
