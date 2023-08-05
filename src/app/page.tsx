import Brands from '@/components/Layout/Brands'
import { Gallery } from '@/components/Layout/Gallery'
import Hero from '@/components/Layout/Hero'
import Slider from '@/components/Layout/Slider'



export default function Home() {
  return (
   <main>
    <Hero/>
    <Slider/>
    <Gallery/>
    <Brands/>
   </main>
  )
}
