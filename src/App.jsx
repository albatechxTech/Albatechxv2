import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import ContactPage from './pages/ContactPage'
import AboutUs from './pages/AboutUs'
import PrivecyPolice from './pages/PrivecyPolicy'
import TandC from './pages/TandC'
import OurProducts from './pages/OurProducts'
import ScrollToTop from './components/ScrollToTop'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/privacy-policy' element={<PrivecyPolice />} />
        <Route path='/term-condition' element={<TandC />} />
        <Route path='/our-products' element={<OurProducts />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
