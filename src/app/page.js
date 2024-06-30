import Image from "next/image";
import About from "@/components/about";
import Navbar from "@/components/navbar";
import Name from "@/components/name";
import Projects from "@/components/projects";
import { Oswald, Roboto_Mono, IBM_Plex_Mono } from 'next/font/google'
 
const robotomono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

const oswald = Oswald({
  weight: '500',
  subsets: ['latin'],
})
 
const ibmplex = IBM_Plex_Mono({
  weight: '300',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={ibmplex.className}>
      <Navbar />
      <Name />
      <About />
      <Projects/>
    </main>
  )
}
