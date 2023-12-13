export const metadata = {
  title: 'AM Solutions',
  description: 'Qualidade e Eficiência!',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Hero1 from '/components/ComponentesTeste/Hero1.jsx'
import Comp2 from '/components/ComponentesTeste/Comp2.jsx'
import Comp3 from '/components/ComponentesTeste/Comp3.jsx'
import Comp4 from '/components/ComponentesTeste/Comp4.jsx'
import Comp5 from '/components/ComponentesTeste/Comp5.jsx'

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <Hero1 />
      <Comp2 />
      <Comp3 />
      <Comp5 />
      <Comp4 />
      {/* <Features />  */}
      {/* <Zigzag /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}

