import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

import Logo from '../assets/navbLogo.png'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Our Products', path: '/our-products' },
  { name: 'Contact', path: '/contact' }
]

// Same fonts as the slider, so the two feel like one system
const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.nav-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.nav-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
`

// Text + arrow block button (same as the slider button)
const CtaButton = ({ onClick, className = '' }) => (
  <Link
    to='/contact'
    onClick={onClick}
    className={`group items-stretch overflow-hidden rounded-md bg-blue-600 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${className}`}
  >
    <span className='flex-1 px-5 py-2.5 text-center'>Let's talk</span>
    <span className='flex w-10 items-center justify-center border-l border-white/25 bg-blue-700 transition-colors duration-200 group-hover:bg-[#0c2347]'>
      <ArrowUpRight
        size={17}
        className='transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
      />
    </span>
  </Link>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { pathname } = useLocation()

  const closeMenu = () => setIsOpen(false)

  // Close the menu when the route changes (e.g. browser back button)
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Close the menu if the screen grows to desktop size (or phone is rotated)
  // otherwise page scroll would stay locked with no menu visible
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = e => e.matches && setIsOpen(false)

    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Border and shadow appear only after the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll and allow Escape while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return

    const onKey = e => e.key === 'Escape' && setIsOpen(false)
    const previous = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  return (
    <header
      className={`nav-body sticky top-0 z-50 bg-white transition-[border-color,box-shadow] duration-300 ${
        scrolled || isOpen
          ? 'border-b border-slate-200 shadow-[0_6px_20px_-12px_rgba(12,35,71,0.25)]'
          : 'border-b border-transparent'
      }`}
    >
      <style>{css}</style>

      <nav className='relative z-10 bg-white px-5 sm:px-8 lg:px-12'>
        <div className='mx-auto flex h-[72px] max-w-7xl items-center justify-between lg:h-20'>
          {/* Logo */}
          <Link
            to='/'
            onClick={closeMenu}
            className='flex min-w-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600'
          >
            <img
              src={Logo}
              alt='Alba Techx'
              className='h-10 w-auto max-w-[60vw] object-contain min-[400px]:h-11 sm:h-12 lg:h-14'
            />
          </Link>

          {/* Desktop navigation */}
          <div className='hidden items-center gap-9 lg:flex'>
            {navItems.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `group relative py-2 text-[15px] font-medium transition-colors duration-200 focus-visible:outline-none ${
                    isActive
                      ? 'text-[#0c2347]'
                      : 'text-slate-500 hover:text-[#0c2347] focus-visible:text-[#0c2347]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    {/* Hover line grows from the left */}
                    {!isActive && (
                      <span className='absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-slate-300 transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100' />
                    )}

                    {/* Active line slides between links */}
                    {isActive && (
                      <motion.span
                        layoutId='navbar-active'
                        className='absolute -bottom-0.5 left-0 h-[2px] w-full rounded-full bg-blue-600'
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 34
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <CtaButton className='hidden lg:inline-flex' />

          {/* Mobile menu button */}
          <button
            type='button'
            onClick={() => setIsOpen(prev => !prev)}
            className='ml-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors duration-150 active:border-blue-600 active:bg-blue-600 active:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:hidden'
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode='wait' initial={false}>
              <motion.span
                key={isOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className='flex'
              >
                {isOpen ? <X size={21} /> : <Menu size={21} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile menu: full-screen panel that wipes down from the header */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className='fixed inset-x-0 top-0 z-0 flex h-dvh flex-col overflow-y-auto overscroll-contain bg-white px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-[72px] sm:px-8 lg:hidden'
          >
            <div className='mt-2 flex flex-col'>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 + index * 0.05,
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className='border-b border-slate-200'
                >
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `nav-display flex min-h-[56px] items-center justify-between py-3.5 text-xl font-semibold leading-none tracking-[-0.02em] transition-colors duration-150 sm:text-2xl ${
                        isActive
                          ? 'text-blue-600'
                          : 'text-[#0c2347] active:text-blue-600'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{item.name}</span>
                        {isActive && <ArrowUpRight size={22} />}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className='mt-auto pt-8'
            >
              <p className='mb-4 max-w-[30ch] text-sm leading-6 text-slate-500'>
                Have a project in mind? Tell us about it and we'll get back to
                you.
              </p>

              <CtaButton onClick={closeMenu} className='flex w-full' />

              <p className='mt-6 text-xs text-slate-400'>
                © {new Date().getFullYear()} Alba Techx
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
