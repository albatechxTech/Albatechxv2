import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Palette,
  Megaphone,
  Bot,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight
} from 'lucide-react'

const defaultServices = [
  {
    id: 1,
    title: 'Product Development',
    description:
      'We turn innovative ideas into high-performing digital products—from concept to deployment. Our expert team specializes in seamless UI/UX design, agile development, and scalable solutions to drive business success. With a user-centric approach, we craft custom software and web applications that ensure efficiency, performance, and market readiness.',
    icon: Code2,
    color: '#2563eb',
    background: '#cbdcfb',
    link: '/services'
  },
  {
    id: 2,
    title: 'Digital Marketing',
    description:
      'Build a stronger online presence with strategic digital marketing, creative campaigns, and engaging content. We help businesses reach the right audience, strengthen brand recognition, and turn online engagement into meaningful growth.',
    icon: Megaphone,
    color: '#7c3aed',
    background: '#e4d8ff',
    link: '/services'
  },
  {
    id: 3,
    title: 'AI & Business Automation',
    description:
      'Simplify everyday operations with AI-powered tools and intelligent automation. From workflow optimization to AI integrations, we help businesses reduce repetitive tasks and improve productivity.',
    icon: Bot,
    color: '#0891b2',
    background: '#c9f0f8',
    link: '/services'
  },
  {
    id: 4,
    title: 'UI/UX & Brand Design',
    description:
      'Create a memorable digital identity with modern interfaces, thoughtful user experiences, and consistent visual branding. We design experiences that are intuitive, attractive, and aligned with your business goals.',
    icon: Palette,
    color: '#db2777',
    background: '#f9d5e8',
    link: '/services'
  },
  {
    id: 5,
    title: 'IT Products & Solutions',
    description:
      'Find practical technology solutions for your business, from software products to IT infrastructure guidance. We help you choose and implement solutions that match your needs and future plans.',
    icon: ShoppingBag,
    color: '#059669',
    background: '#c9f4df',
    link: '/services'
  }
]

// Same fonts as the slider and navbar; progress-bar animation for autoplay
const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.svc-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.svc-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }

@keyframes svc-fill {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
.svc-fill {
  transform-origin: left;
  animation-name: svc-fill;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
@media (prefers-reduced-motion: reduce) {
  .svc-fill { animation: none; transform: scaleX(1); }
}
`

const SWIPE_DISTANCE = 70

const ServiceSwipeCards = ({ services = defaultServices, interval = 6000 }) => {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const total = services.length
  if (!total) return null

  const goTo = (index, dir) => {
    if (index === active) return
    setPrev(active)
    setDirection(dir ?? (index > active ? 1 : -1))
    setActive(index)
  }

  const next = () => goTo((active + 1) % total, 1)
  const back = () => goTo((active - 1 + total) % total, -1)

  // The two services that "peek" out behind the front card
  const peekOne = services[(active + 1) % total]
  const peekTwo = services[(active + 2) % total]

  return (
    <section
      className='svc-body overflow-hidden bg-[#f4f7fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false)
        }
      }}
    >
      <style>{css}</style>

      <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
        {/* LEFT: heading + clickable service list */}
        <div>
          <h2 className='svc-display max-w-[18ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
            All-in-one IT solutions for the digital era.
          </h2>

          <p className='mt-5 max-w-[46ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem]'>
            We provide a complete suite of technology solutions that combine
            innovation, efficiency, and compliance.
          </p>

          {/* Service list (desktop): doubles as navigation */}
          <ul className='mt-9 hidden border-t border-slate-200 lg:block'>
            {services.map((service, index) => {
              const isActive = index === active
              const Icon = service.icon || Code2

              return (
                <li key={service.id} className='border-b border-slate-200'>
                  <button
                    type='button'
                    onClick={() => goTo(index)}
                    aria-current={isActive ? 'true' : undefined}
                    className='group flex w-full items-center gap-4 py-3.5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600'
                  >
                    <span
                      className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-300'
                      style={{
                        backgroundColor: isActive
                          ? service.background
                          : 'transparent',
                        color: isActive ? service.color : '#94a3b8'
                      }}
                    >
                      <Icon size={19} strokeWidth={1.8} />
                    </span>

                    <span
                      className={`svc-display text-lg font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-[#0c2347]'
                          : 'text-slate-500 group-hover:text-[#0c2347]'
                      }`}
                    >
                      {service.title}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          <a
            href='/services'
            className='group mt-9 inline-flex items-stretch overflow-hidden rounded-md bg-blue-600 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            <span className='px-6 py-3.5'>Explore all services</span>
            <span className='flex w-12 items-center justify-center border-l border-white/25 bg-blue-700 transition-colors duration-200 group-hover:bg-[#0c2347]'>
              <ArrowUpRight
                size={18}
                className='transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
              />
            </span>
          </a>
        </div>

        {/* RIGHT: swipe cards */}
        <div className='w-full'>
          <div className='relative mb-6 mr-6'>
            {/* Cards peeking out behind: the next two services */}
            <div
              aria-hidden='true'
              className='absolute inset-0 translate-x-6 translate-y-6 rounded-tl-[40px] rounded-br-[40px] rounded-bl-md rounded-tr-md opacity-70 transition-colors duration-500'
              style={{ backgroundColor: peekTwo.background }}
            />
            <div
              aria-hidden='true'
              className='absolute inset-0 translate-x-3 translate-y-3 rounded-tl-[40px] rounded-br-[40px] rounded-bl-md rounded-tr-md transition-colors duration-500'
              style={{ backgroundColor: peekOne.background }}
            />

            {/* All cards share one grid cell, so the box is as tall as the
                longest card and nothing ever needs an inner scrollbar */}
            <div className='relative grid'>
              {services.map((service, index) => {
                const isActive = index === active
                const isPrev = index === prev && prev !== active
                const Icon = service.icon || Code2

                return (
                  <motion.article
                    key={service.id}
                    aria-hidden={!isActive}
                    initial={false}
                    animate={
                      isActive
                        ? { x: 0, opacity: 1, scale: 1 }
                        : {
                            x: (isPrev ? -direction : direction) * 70,
                            opacity: 0,
                            scale: 0.97
                          }
                    }
                    transition={{
                      x: { type: 'spring', stiffness: 240, damping: 28 },
                      opacity: { duration: 0.25 },
                      scale: { duration: 0.3 }
                    }}
                    drag={isActive ? 'x' : false}
                    dragSnapToOrigin
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -SWIPE_DISTANCE) next()
                      else if (info.offset.x > SWIPE_DISTANCE) back()
                    }}
                    className={`flex flex-col rounded-tl-[40px] rounded-br-[40px] rounded-bl-md rounded-tr-md p-6 [grid-area:1/1] sm:p-9 ${
                      isActive
                        ? 'cursor-grab active:cursor-grabbing'
                        : 'pointer-events-none'
                    }`}
                    style={{ backgroundColor: service.background }}
                  >
                    <span className='flex h-12 w-12 items-center justify-center rounded-md bg-white/85 sm:h-14 sm:w-14'>
                      <Icon
                        size={26}
                        strokeWidth={1.7}
                        style={{ color: service.color }}
                      />
                    </span>

                    <h3 className='svc-display mt-6 text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#0c2347] sm:text-[1.75rem]'>
                      {service.title}
                    </h3>

                    <p className='mt-4 max-w-[52ch] text-[0.9375rem] leading-7 text-slate-700 sm:text-base'>
                      {service.description}
                    </p>

                    <a
                      href={service.link || '/services'}
                      tabIndex={isActive ? 0 : -1}
                      draggable={false}
                      className='mt-8 inline-flex items-center gap-2 self-start border-b-2 pb-0.5 text-sm font-semibold transition-[gap] duration-200 hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 sm:text-base'
                      style={{
                        color: service.color,
                        borderColor: service.color
                      }}
                    >
                      Learn more
                      <ArrowUpRight size={17} />
                    </a>
                  </motion.article>
                )
              })}
            </div>
          </div>

          {/* CONTROLS: progress segments, counter, arrows */}
          <div className='mr-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8'>
            <div className='flex flex-1 gap-2'>
              {services.map((service, index) => {
                const isActive = index === active
                return (
                  <button
                    key={service.id}
                    type='button'
                    onClick={() => goTo(index)}
                    aria-label={`Show ${service.title}`}
                    aria-current={isActive ? 'true' : undefined}
                    className='group flex-1 py-3 focus-visible:outline-none'
                  >
                    <span className='block h-[3px] w-full overflow-hidden rounded-full bg-slate-300 group-hover:bg-slate-400 group-focus-visible:ring-2 group-focus-visible:ring-blue-600 group-focus-visible:ring-offset-2'>
                      {isActive && (
                        <span
                          key={active}
                          onAnimationEnd={next}
                          style={{
                            animationDuration: `${interval}ms`,
                            animationPlayState: isPaused ? 'paused' : 'running'
                          }}
                          className='svc-fill block h-full w-full rounded-full bg-blue-600'
                        />
                      )}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className='flex items-center justify-between gap-4 sm:justify-start'>
              <p className='svc-display w-14 text-sm tabular-nums text-slate-500'>
                <span className='font-semibold text-[#0c2347]'>
                  {String(active + 1).padStart(2, '0')}
                </span>
                {' / '}
                {String(total).padStart(2, '0')}
              </p>

              <div className='flex gap-2'>
                <button
                  type='button'
                  onClick={back}
                  aria-label='Previous service'
                  className='flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  type='button'
                  onClick={next}
                  aria-label='Next service'
                  className='flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSwipeCards
