import './App.css'
import Footer from './components/sections/Footer'
import Hero from './components/sections/Hero'
import Navbar from './components/sections/Navbar'
import PredictorForm from './components/sections/PredictorForm'
import Testimonials from './components/sections/Testimonials'
import UserGuide from './components/sections/UserGuide'

function App() {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <Hero/>
      <UserGuide />
      <Testimonials />
      <PredictorForm />
      <Footer />
    </div>
  )
}

export default App
