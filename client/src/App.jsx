import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'
import UserGuide from './components/UserGuide'

function App() {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <Hero/>
      <UserGuide />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
