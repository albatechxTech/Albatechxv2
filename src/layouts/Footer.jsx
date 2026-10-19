import { Link } from 'react-router-dom'
import { ArrowUp, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

import Logo from '../assets/Albatechx logo.png'

const companyLinks = [
  { name: 'About us', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Contact', to: '/contact' }
]

const serviceLinks = [
  { name: 'Web development', to: '/services' },
  { name: 'Software development', to: '/services' },
  { name: 'Digital marketing', to: '/services' },
  { name: 'View all services', to: '/services' }
]

const legalLinks = [
  { name: 'Privacy policy', to: '/privacy-policy' },
  { name: 'Terms & conditions', to: '/term-condition' }
]

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.ft-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.ft-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
`

const linkClass =
  'w-fit text-[0.9375rem] text-blue-100/80 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:text-white focus-visible:underline focus-visible:outline-none'

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className='ft-display text-base font-semibold text-white'>{title}</h3>

    <ul className='mt-5 flex flex-col gap-3'>
      {links.map(link => (
        <li key={link.name}>
          <Link to={link.to} className={`block ${linkClass}`}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <footer className='ft-body border-t border-white/10 bg-[#07162f] px-5 sm:px-8 lg:px-12'>
      <style>{css}</style>

      <div className='mx-auto max-w-7xl'>
        {/* Main footer */}
        <div className='grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-14 lg:py-16'>
          {/* Brand */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <Link
              to='/'
              className='inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
            >
              <img
                src={Logo}
                alt='Alba Techx'
                className='h-16 w-auto object-contain sm:h-20'
              />
            </Link>

            <p className='mt-5 max-w-[34ch] text-[0.9375rem] leading-7 text-blue-100/80'>
              Building reliable digital solutions for businesses, brands and
              modern organizations.
            </p>

            <Link
              to='/contact'
              className='group mt-7 inline-flex items-center gap-2 border-b-2 border-sky-300 pb-0.5 text-sm font-semibold text-sky-200 transition-[gap,color] duration-200 hover:gap-3 hover:text-white focus-visible:outline-none focus-visible:text-white'
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <FooterColumn title='Company' links={companyLinks} />
          <FooterColumn title='Services' links={serviceLinks} />

          {/* Contact */}
          <div>
            <h3 className='ft-display text-base font-semibold text-white'>
              Get in touch
            </h3>

            <ul className='mt-5 flex flex-col gap-4'>
              <li className='flex items-start gap-3'>
                <MapPin size={18} className='mt-1 shrink-0 text-sky-300' />
                <p className='text-[0.9375rem] leading-6 text-blue-100/80'>
                  Bhubaneswar, Odisha
                  <br />
                  India
                </p>
              </li>

              <li>
                <a
                  href='mailto:info@albatechx.com'
                  className='flex items-center gap-3 text-[0.9375rem] text-blue-100/80 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none'
                >
                  <Mail size={18} className='shrink-0 text-sky-300' />
                  <span className='break-all underline-offset-4 hover:underline'>
                    info@albatechx.com
                  </span>
                </a>
              </li>

              <li>
                <a
                  href='tel:+918917655837'
                  className='flex items-center gap-3 text-[0.9375rem] text-blue-100/80 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none'
                >
                  <Phone size={18} className='shrink-0 text-sky-300' />
                  <span className='underline-offset-4 hover:underline'>
                    +91 89176 55837
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-sm text-blue-100/60'>
            © {currentYear} Alba Techx. All rights reserved.
          </p>

          <div className='flex items-center justify-between gap-6 sm:justify-end'>
            <ul className='flex flex-wrap items-center gap-x-6 gap-y-2'>
              {legalLinks.map(link => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className='text-sm text-blue-100/60 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline focus-visible:text-white focus-visible:underline focus-visible:outline-none'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type='button'
              onClick={scrollToTop}
              aria-label='Back to top'
              className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/25 text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#0c2347] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
