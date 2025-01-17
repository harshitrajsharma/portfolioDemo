
import './App.css'
import Projects from './components/Projects'
import Feedback from './components/Feedback'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Faq from './components/Faq'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsCard from './components/ProjectsCard'
import Get from './components/Get/Get'


function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Projects />
      <Feedback />
      <Faq />
      <Contact />
      <Footer />
      {/* <Get /> */}
    </div>
  )
}

export default App
