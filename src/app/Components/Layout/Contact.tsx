import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
export default function Contact() {
  return (
    <div className="flex opacity-0 animate-[fadeInLeft_1s_ease-in-out_forwards_2s]">
      <Link
        href="https://www.Github.com/aktreboja"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-8 h-8 mr-2" />
      </Link>
      <Link
        href="mailto: aktreboja@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGmail className="w-8 h-8 mx-2" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/aktreboja"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-8 h-8 mx-2" />
      </Link>
    </div>
  );
}
