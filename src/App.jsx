import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='text-white'>
      <Header />

      <div className='mx-2 md:mx-6'>
      <section id='home'>
        <Home />
      </section>

      <section id='about'>
        <About />
      </section>

      <section id='projects'>
        <Projects />
      </section>

      <section id='contact'>
        <Contact />
      </section>
      </div>

      <Footer />
    </div>
  )
}

export default App