import Head from 'next/head'
import { useEffect } from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Location from '../components/Location'
import OurSolution from '../components/OurSolution'
import Services from '../components/Services'
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration: 600
    });
  },[])

  return (
    <div>
      <Head>
        <title>Jagger-Welding ( Jagger d.o.o )</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       {/* === Hero section === */}
        <Hero />
       {/* === Services section === */}
        <Services   />
       {/* === Our Solution section === */}
        <OurSolution />
       {/* === Location section */}
        <Location />
       {/* === About section === */}
        <About />
      
      </main>
    </div>
  )
}
