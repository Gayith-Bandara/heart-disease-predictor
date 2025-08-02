import './App.css'
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
    </div>
  )
}

export default App
