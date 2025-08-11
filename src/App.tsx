import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SideBanner from './components/SideBanner'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-gray-200 font-sans">
      <Header />
      <SideBanner />
      <main className="lg:ml-14">
        <Hero />
        <section id="about" className="scroll-mt-20"><About /></section>
        <section id="projects" className="scroll-mt-20"><Projects /></section>
        <section id="skills" className="scroll-mt-20"><Skills /></section>
        <section id="resume" className="scroll-mt-20"><Resume /></section>
        <section id="contact" className="scroll-mt-20"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
} 