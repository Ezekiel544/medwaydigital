import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedClients from '@/components/FeaturedClients';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import CTA from '@/components/CTA';
import WorkProcess from '@/components/WorkProcess';
import Stats from '@/components/Stats';
// import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Faq from '@/components/faq';
import Contact from '@/components/contact';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedClients />
      <About />
      <Solutions />
      <CTA />
      <WorkProcess />
      <Stats />
      {/* <Projects /> */}
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
