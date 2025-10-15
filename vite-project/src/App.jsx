import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Counter from './components/Counter'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
