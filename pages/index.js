import Head from 'next/head'
import { useEffect } from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Location from '../components/Location'
import OurSolution from '../components/OurSolution'
import Services from '../components/Services'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'



export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration: 700
    });
  },[])

  return (
    <div>
      <Head>
        <title>Jagger-Welding ( Jagger d.o.o )</title>
        <meta name="description" content="Jagger-Welding ( Jagger d.o.o )" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       {/* === Hero section === */}
        <Hero />
       {/* === About section === */}
        <About />
       {/* === Services section === */}
        <Services   />
       {/* === Our Solution section === */}
        <OurSolution />
       {/* === Gallery section === */}
        {/* <Gallery /> */}
       {/* === Location section */}
        <Location />
       {/* === Contact section === */}
        <Contact />

      </main>
    </div>
  )
}
