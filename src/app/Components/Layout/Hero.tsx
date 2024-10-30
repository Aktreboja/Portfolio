import React from 'react';

export default function Hero() {
  return (
    <div className="max-w-[1060px] h-fit text-title-heading my-16 max-lg:px-4">
      <h1 className="text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap font-semibold opacity-0 animate-fadeInLeft">
        Aldrich Reboja
      </h1>
      <p className="text-lg sm:text-2xl animate-fadeInLeft ml-1 text-accent text-opacity-65">
        Software Engineer
      </p>
      <div className="px-2 max-lg:w-full w-2/3">
        <p className="my-8 text-lg max-w-[95%] opacity-0 animate-[fadeInLeft_1s_ease-in-out_forwards_1s] ">
          As a <strong>Software Engineer</strong>, my journey began in the
          virtual worlds of video games, where I developed a unique blend of
          strategic thinking, problem-solving skills, and adaptability. From
          navigating intricate game mechanics to overcoming challenges, these
          experiences have shaped my approach to coding and collaboration. With
          a strong foundation in gaming, I&apos;ve cultivated a mindset that
          thrives in the fast-paced world of tech.
        </p>
        <p className="my-8 text-lg max-w-[95%] opacity-0 animate-[fadeInLeft_1s_ease-in-out_forwards_1s]">
          Now, I&apos;m excited to bring my skills and passion to a new role,
          where I can continue to grow as a developer and contribute to a
          forward-thinking company. When I&apos;m not coding, you can find me
          exploring different genres of games or discovering the flavors and
          cultures of the world through food.
        </p>
      </div>

      {/* <div className='flex opacity-0 animate-[fadeInLeft_1s_ease-in-out_forwards_2s]'>
                <Link href="https://www.Github.com/aktreboja" target='_blank' rel='noopener noreferrer'><FaGithub className='w-10 h-10 mr-2' /></Link>
                <Link href="mailto: aktreboja@gmail.com" target='_blank' rel="noopener noreferrer"><SiGmail className='w-10 h-10 mx-2' /></Link>
                <Link href="https://www.linkedin.com/in/aktreboja" target='_blank' rel="noopener noreferrer"><FaLinkedin className='w-10 h-10 mx-2' /></Link>
            </div> */}
    </div>
  );
}
