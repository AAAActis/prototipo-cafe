import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import MenuSection from '../components/sections/MenuSection'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}