'use client'
import {
  Footer,
  Hero,
  PoplarProduct,
  SpecialOffer,
  SuperQuality,
  CustomerReviews,
} from './components/sections'
import Nav from './components/Nav'
import { motion } from 'framer-motion'



export default function Home() {
  return (
    <main className="reative">
       <Nav/>
       <motion.div
        initial={{opacity: 0, y:20}}
        animate={{ opacity: 1, y:0}}
      >
       <section className='xl:padding-1 widh:padding-r padding-b'>
       <Hero/>
       </section>
       <section className='padding'>
        <PoplarProduct/>
       </section>
       <section className='padding'>
        <SuperQuality/>
       </section>
       <section className='padding mt-10'>
        <SpecialOffer/>
       </section>
       <section className='padding bg-blue-50'>
        <CustomerReviews/>
       </section>
       <section className='padding-x padding-t pb-8 bg-black text-white '>
        <Footer/>
       </section>
       </motion.div>
    </main>
  )
}
