import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Navbar from './Components/Layout/Navbar';
import SmoothScrollProvider from './Contexts/SmoothScrollProvider';

const montserrat = Montserrat({ subsets: ['latin'], weight: 'variable' });

export const metadata: Metadata = {
  title: 'Aldrich Reboja | Software Engineer & Developer',
  description:
    'A collection of projects and work highlighting my expertise in various technologies.',
  openGraph: {
    title: 'Aldrich Reboja',
    description:
      'A collection of projects and work highlighting my expertise in various technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description || undefined} />
      </Head>
      <body
        className={`${montserrat.className} bg-gradient-to-br from-baseBg to-secondaryBg `}
      >
        <SmoothScrollProvider>
          {/* <Navbar /> */}
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
