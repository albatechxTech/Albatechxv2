import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'

import Image1 from '../assets/Modern Coding Workspace Hero Banner.png'
import Image2 from '../assets/Modern Social Media Marketing Workspace.png'
import Image3 from '../assets/Friendly AI Automation Workspace.png'
import Image4 from '../assets/Product.png'

const slides = [
  {
    id: 1,
    image: Image1,
    tab: 'Development',
    title: 'We build digital solutions for growing businesses.',
    description:
      'From professional websites to custom software, we build reliable and scalable digital solutions designed around your business needs.',
    button: 'Explore Development'
  },
  {
    id: 2,
    image: Image2,
    tab: 'Marketing',
    title: 'Build your brand and grow your digital presence.',
    description:
      'From social media handling and content promotion to digital marketing and branding, we help businesses build a strong and consistent online presence.',
    button: 'Explore Marketing'
  },
  {
    id: 3,
    image: Image3,
    tab: 'AI & Automation',
    title: 'Make your business smarter with AI.',
    description:
      'We use AI and automation to simplify repetitive tasks, improve business workflows and help organizations work faster and smarter.',
    button: 'Explore AI Solutions'
  },
  {
    id: 4,
    image: Image4,
    tab: 'Products',
    title: 'We build our own digital products too.',
    description:
      'Alongside client projects, we develop our own digital products that solve practical business problems and create long-term value.',
    button: 'Explore Our Products'
  }
]

const SLIDE_SECONDS = 6

// Fonts + progress-bar animation (kept here so the component is self-contained)
const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.slider-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.slider-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }

@keyframes slider-fill {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
.slider-fill {
  transform-origin: left;
  animation: slider-fill ${SLIDE_SECONDS}s linear forwards;
}
@media (prefers-reduced-motion: reduce) {
  .slider-fill { animation: none; transform: scaleX(1); }
}
`

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const goTo = (index, dir) => {
    if (index === current) return
    setPrev(current)
    setDirection(dir ?? (index > current ? 1 : -1))
    setCurrent(index)
  }

  const next = () => goTo((current + 1) % slides.length, 1)
  const back = () => goTo((current - 1 + slides.length) % slides.length, -1)

  const slide = slides[current]
  const prevSlide = slides[prev]

  return (
    <section
      className='slider-body relative overflow-hidden bg-white px-5 sm:px-8 lg:px-12'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <style>{css}</style>

      <div className='mx-auto max-w-7xl'>
        {/* Main area */}
        <div className='grid min-h-[600px] items-center gap-12 pb-10 pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:pt-20'>
          {/* Text */}
          <div className='order-2 lg:order-1'>
            <AnimatePresence mode='wait' initial={false}>
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className='slider-display max-w-[17ch] text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-[#0c2347] sm:text-5xl lg:max-w-[15ch] lg:text-[3.9rem]'>
                  {slide.title}
                </h1>

                <p className='mt-6 max-w-[46ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem]'>
                  {slide.description}
                </p>

                <a
                  href='/services'
                  className='group mt-9 inline-flex items-stretch overflow-hidden rounded-md bg-blue-600 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                >
                  <span className='px-6 py-3.5'>{slide.button}</span>
                  <span className='flex w-12 items-center justify-center border-l border-white/25 bg-blue-700 transition-colors duration-200 group-hover:bg-[#0c2347]'>
                    <ArrowUpRight
                      size={18}
                      className='transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    />
                  </span>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image */}
          <div className='order-1 lg:order-2'>
            <div className='relative mr-3 mb-3 sm:mr-4 sm:mb-4'>
              {/* Offset block behind the image */}
              <div
                aria-hidden='true'
                className='absolute left-3 top-3 h-full w-full rounded-tl-[56px] rounded-br-[56px] rounded-bl-md rounded-tr-md bg-sky-100 sm:left-4 sm:top-4 lg:rounded-tl-[72px] lg:rounded-br-[72px]'
              />

              <div className='relative aspect-[5/4] overflow-hidden rounded-tl-[56px] rounded-br-[56px] rounded-bl-md rounded-tr-md bg-slate-100 lg:rounded-tl-[72px] lg:rounded-br-[72px]'>
                {/* Previous image stays underneath while the new one wipes in */}
                <img
                  src={prevSlide.image}
                  alt=''
                  aria-hidden='true'
                  className='absolute inset-0 h-full w-full object-cover'
                />

                <motion.img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.tab}
                  initial={{
                    clipPath:
                      direction > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)'
                  }}
                  animate={{ clipPath: 'inset(0 0 0 0)' }}
                  transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
                  className='absolute inset-0 h-full w-full object-cover'
                />

                {/* Name tab cut into the bottom-left corner */}
                <div className='absolute bottom-0 left-0 rounded-tr-2xl bg-white py-3 pl-5 pr-6'>
                  <p className='slider-display text-sm font-semibold text-[#0c2347]'>
                    Alba TechX
                  </p>
                  <p className='mt-0.5 text-xs text-slate-500'>
                    Technology, innovation and growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls: tabs double as the progress timer */}
        <div className='flex flex-col gap-6 pb-10 sm:flex-row sm:items-end sm:justify-between lg:gap-12 lg:pb-14'>
          <div className='grid flex-1 grid-cols-4 gap-3 sm:gap-5'>
            {slides.map((item, index) => {
              const active = index === current
              return (
                <button
                  key={item.id}
                  type='button'
                  onClick={() => goTo(index)}
                  aria-label={`Show ${item.tab}`}
                  aria-current={active ? 'true' : undefined}
                  className='group text-left focus-visible:outline-none'
                >
                  <span
                    className={`slider-display block text-xs font-medium leading-tight transition-colors duration-200 sm:text-sm ${
                      active
                        ? 'text-[#0c2347]'
                        : 'text-slate-400 group-hover:text-slate-700 group-focus-visible:text-slate-700'
                    }`}
                  >
                    {item.tab}
                  </span>

                  <span className='mt-3 block h-[3px] w-full overflow-hidden rounded-full bg-slate-200 group-focus-visible:ring-2 group-focus-visible:ring-blue-600 group-focus-visible:ring-offset-2'>
                    {active && (
                      <span
                        key={current}
                        onAnimationEnd={next}
                        style={{
                          animationPlayState: paused ? 'paused' : 'running'
                        }}
                        className='slider-fill block h-full w-full rounded-full bg-blue-600'
                      />
                    )}
                  </span>
                </button>
              )
            })}
          </div>

          <div className='flex items-center gap-4'>
            <p
              className='slider-display w-14 text-sm tabular-nums text-slate-500'
              aria-live='off'
            >
              <span className='font-semibold text-[#0c2347]'>
                {String(current + 1).padStart(2, '0')}
              </span>
              {' / '}
              {String(slides.length).padStart(2, '0')}
            </p>

            <div className='flex gap-2'>
              <button
                type='button'
                onClick={back}
                aria-label='Previous slide'
                className='flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type='button'
                onClick={next}
                aria-label='Next slide'
                className='flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider
