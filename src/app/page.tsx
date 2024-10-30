import Contact from './Components/Layout/Contact';
import Hero from './Components/Layout/Hero';
import Projects from './Components/Layout/Projects';
import Footer from './Components/Layout/Footer';
import ScrollToTop from './Components/Layout/ScrollToTop';
import Work from './Components/Layout/Work';
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center px-4">
      <Hero />
      <Projects />
      <Work />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
