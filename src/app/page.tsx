import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import FourthFeatures from '@/components/FourthFeatures'
import  FifthFeatures  from '@/components/FifthFeatures'
import { FeaturedImageGallery } from '@/components/Galleries'; // Importa FeaturedImageGallery


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FourthFeatures /> 
        <FifthFeatures />
        
        <PrimaryFeatures />
        <Faqs />
      </main>
      <Footer />
      
    </>
  )
}
