import ContactSection from '../components/Contactsection'
import OurClient from '../components/OurClient'
import ServiceSwipeCards from '../components/ServiceSwipeCards'
import Slider from '../components/Slider'
import TechStack from '../components/Techstack'

const HomePage = () => {
  return (
    <div>
      <Slider />
      <ServiceSwipeCards />
      <TechStack />
      <ContactSection />
      <OurClient />
    </div>
  )
}

export default HomePage
