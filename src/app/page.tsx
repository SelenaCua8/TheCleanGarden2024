import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import ThirdFeatures from '@/components/ThirdFeatures' 
import FourthFeatures from '@/components/FourthFeatures'
import  FifthFeatures  from '@/components/FifthFeatures'


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
