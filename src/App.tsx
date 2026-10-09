import ContactForm from './components/ContactForm'
import Finishes from './components/Finishes'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Solutions from './components/Solutions'
import TechnicalBadges from './components/TechnicalBadges'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Finishes />
        <Projects />
        <ContactForm />
        <TechnicalBadges />
      </main>
      <Footer />
    </>
  )
}
