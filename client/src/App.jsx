import './App.css'
import Footer from './components/sections/Footer'
import Sections from './components/sections/Sections'
import Hero from './components/sections/Hero'
import Navbar from './components/sections/Navbar'
import PredictorForm from './components/sections/PredictorForm'
import Testimonials from './components/sections/Testimonials'
import UserGuide from './components/sections/UserGuide'

function App() {
  return (
    <div className="w-full overflow-x-hidden md:h-auto md:overflow-x-visible dark:bg-black relative">
      <Navbar />
      <Hero/>
      <Sections />
      <PredictorForm />
      <Footer />
    </div>
  )
}

export default App
