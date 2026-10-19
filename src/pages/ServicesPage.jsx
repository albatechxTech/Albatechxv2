import { motion, MotionConfig } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Megaphone,
  Bot,
  Workflow,
  ShoppingBag,
  Palette,
  Search,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
  Layers3,
  Headphones,
  Rocket
} from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: '01',
    title: 'Software & Web Development',
    subtitle: 'Build. Launch. Scale.',
    description:
      'We build modern websites, custom software and web applications that help businesses streamline operations and grow online.',
    icon: Code2,
    color: '#2563eb',
    background: '#cbdcfb',
    features: [
      'Custom Website Development',
      'Web Applications & Dashboards',
      'Business Management Software',
      'Mobile-Friendly Experiences',
      'UI/UX Design',
      'Maintenance & Technical Support'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Next.js']
  },
  {
    id: '02',
    title: 'Digital Marketing & Social Media',
    subtitle: 'Reach. Engage. Grow.',
    description:
      'We help businesses strengthen their online presence through strategic digital marketing, engaging content and consistent brand communication.',
    icon: Megaphone,
    color: '#7c3aed',
    background: '#e4d8ff',
    features: [
      'Social Media Management',
      'Content Creation & Strategy',
      'Social Media Post Design',
      'Digital Advertising Campaigns',
      'Search Engine Optimization',
      'Branding & Online Promotion'
    ],
    technologies: ['SEO', 'Content', 'Branding', 'Analytics']
  },
  {
    id: '03',
    title: 'AI & Business Automation',
    subtitle: 'Automate. Optimize. Accelerate.',
    description:
      'We use AI-powered tools and workflow automation to reduce repetitive tasks, improve productivity and make everyday business operations smarter.',
    icon: Bot,
    color: '#0891b2',
    background: '#c9f0f8',
    features: [
      'AI Chatbots & Assistants',
      'Business Workflow Automation',
      'AI Tool Integration',
      'Data Processing & Reporting',
      'Process Optimization',
      'Custom Automation Solutions'
    ],
    technologies: ['AI Tools', 'APIs', 'Automation', 'Analytics']
  },
  {
    id: '04',
    title: 'IT Products & Solutions',
    subtitle: 'Discover. Integrate. Improve.',
    description:
      'We help businesses find and implement practical technology solutions, software products and IT equipment suited to their operational needs.',
    icon: ShoppingBag,
    color: '#059669',
    background: '#c9f4df',
    features: [
      'Business Software Solutions',
      'IT Hardware & Accessories',
      'Networking Solutions',
      'Cloud & Infrastructure Support',
      'Technology Consultation',
      'Product Setup & Assistance'
    ],
    technologies: ['IT Solutions', 'Cloud', 'Networking', 'Support']
  }
]

const benefits = [
  {
    icon: Palette,
    title: 'Tailored solutions',
    description:
      'Solutions designed around your goals, workflow and business requirements.'
  },
  {
    icon: Layers3,
    title: 'Modern technology',
    description:
      'Practical technology choices that support performance and future growth.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality-focused',
    description:
      'A focus on usability, reliability, responsive design and maintainability.'
  },
  {
    icon: Headphones,
    title: 'Ongoing support',
    description:
      'Technical guidance and assistance throughout your project journey.'
  }
]

// This one really is a sequence, so the step numbers stay
const process = [
  {
    number: '01',
    title: 'Understand',
    description: 'We learn about your business, challenges and goals.',
    icon: Lightbulb
  },
  {
    number: '02',
    title: 'Plan',
    description: 'We define the right approach, scope and project roadmap.',
    icon: Search
  },
  {
    number: '03',
    title: 'Build',
    description: 'We create, test and refine a solution for your needs.',
    icon: Code2
  },
  {
    number: '04',
    title: 'Launch & support',
    description: 'We help you launch and provide support as agreed.',
    icon: Rocket
  }
]

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.sp-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.sp-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
`

const asymmetric =
  'rounded-tl-[40px] rounded-br-[40px] rounded-bl-md rounded-tr-md lg:rounded-tl-[56px] lg:rounded-br-[56px]'

/* Primary button: label + arrow block (same as the rest of the site) */
const SplitButton = ({ children, icon: Icon = ArrowUpRight, ...props }) => (
  <a
    {...props}
    className='group inline-flex items-stretch overflow-hidden rounded-md bg-blue-600 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
  >
    <span className='px-6 py-3.5'>{children}</span>
    <span className='flex w-12 items-center justify-center border-l border-white/25 bg-blue-700 transition-colors duration-200 group-hover:bg-[#0c2347]'>
      <Icon
        size={18}
        className='transition-transform duration-200 group-hover:translate-y-0.5'
      />
    </span>
  </a>
)

const ServicesPage = () => {
  return (
    <MotionConfig reducedMotion='user'>
      <main className='sp-body bg-white text-slate-900'>
        <style>{css}</style>

        {/* ================= HERO ================= */}
        <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20'>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className='sp-display max-w-[16ch] text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-[#0c2347] sm:text-5xl lg:text-[3.9rem]'>
                Technology that moves your business forward.
              </h1>

              <p className='mt-6 max-w-[48ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem]'>
                From custom software and digital marketing to AI automation and
                IT solutions, we help turn business challenges into practical
                digital opportunities.
              </p>

              <div className='mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'>
                <SplitButton href='#our-services' icon={ArrowDown}>
                  Explore our services
                </SplitButton>

                <Link
                  to='/contact'
                  className='inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-6 py-3.5 text-sm font-semibold text-[#0c2347] transition-colors duration-200 hover:border-blue-600 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                >
                  Discuss your project
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </motion.div>

            {/* Service index */}
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.76, 0, 0.24, 1]
              }}
              className='relative mb-3 mr-3 sm:mb-4 sm:mr-4'
            >
              <div
                aria-hidden='true'
                className={`absolute left-3 top-3 h-full w-full bg-sky-100 sm:left-4 sm:top-4 ${asymmetric}`}
              />

              <div
                className={`relative overflow-hidden border border-slate-200 bg-white ${asymmetric}`}
              >
                <div className='grid grid-cols-2'>
                  {services.map((service, index) => {
                    const Icon = service.icon

                    return (
                      <a
                        key={service.id}
                        href={`#service-${service.id}`}
                        className={`group flex min-h-[160px] flex-col justify-between border-slate-200 p-5 transition-colors duration-200 hover:bg-blue-50/60 focus-visible:bg-blue-50/60 focus-visible:outline-none sm:min-h-[180px] sm:p-6 ${
                          index % 2 === 0 ? 'border-r' : ''
                        } ${index < 2 ? 'border-b' : ''}`}
                      >
                        <span
                          className='flex h-11 w-11 items-center justify-center rounded-md'
                          style={{
                            backgroundColor: service.background,
                            color: service.color
                          }}
                        >
                          <Icon size={22} strokeWidth={1.8} />
                        </span>

                        <span>
                          <span className='sp-display block text-[0.9375rem] font-semibold leading-snug text-[#0c2347] sm:text-base'>
                            {service.title}
                          </span>
                          <span className='mt-2 inline-flex items-center gap-1 text-sm text-slate-500 transition-colors duration-200 group-hover:text-blue-600'>
                            Explore
                            <ArrowUpRight size={14} />
                          </span>
                        </span>
                      </a>
                    )
                  })}
                </div>

                <div className='flex items-center gap-4 bg-[#0c2347] p-5 sm:p-6'>
                  <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-sky-200'>
                    <Workflow size={20} />
                  </span>
                  <div>
                    <p className='sp-display text-base font-semibold text-white'>
                      One technology partner
                    </p>
                    <p className='mt-0.5 text-sm leading-6 text-blue-100/75'>
                      Multiple digital capabilities. One clear direction.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= OUR SERVICES ================= */}
        <section
          id='our-services'
          className='scroll-mt-20 bg-[#0c2347] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24'
        >
          <div className='mx-auto max-w-7xl'>
            <div className='grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16'>
              <h2 className='sp-display max-w-[18ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl'>
                Everything you need to grow digitally.
              </h2>

              <p className='max-w-[46ch] text-base leading-7 text-blue-100/80 sm:text-[1.0625rem] lg:justify-self-end'>
                Explore our services and find the right solutions to build,
                promote and improve your business.
              </p>
            </div>

            <div className='mt-12 border-b border-white/15 lg:mt-16'>
              {services.map(service => {
                const Icon = service.icon

                return (
                  <article
                    key={service.id}
                    id={`service-${service.id}`}
                    className='grid scroll-mt-20 gap-8 border-t border-white/15 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-14'
                  >
                    {/* Left: what it is */}
                    <div>
                      <span
                        className='flex h-12 w-12 items-center justify-center rounded-md'
                        style={{
                          backgroundColor: service.background,
                          color: service.color
                        }}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </span>

                      <h3 className='sp-display mt-6 max-w-[20ch] text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-3xl'>
                        {service.title}
                      </h3>

                      <p className='sp-display mt-2 text-base text-sky-200'>
                        {service.subtitle}
                      </p>

                      <p className='mt-5 max-w-[46ch] text-[0.9375rem] leading-7 text-blue-100/80 sm:text-base'>
                        {service.description}
                      </p>

                      <Link
                        to='/contact'
                        className='group mt-7 inline-flex items-center gap-2 border-b-2 border-sky-300 pb-0.5 text-sm font-semibold text-sky-200 transition-[gap,color] duration-200 hover:gap-3 hover:text-white focus-visible:text-white focus-visible:outline-none'
                      >
                        Discuss this service
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>

                    {/* Right: what you get */}
                    <div>
                      <ul className='grid gap-x-8 gap-y-4 sm:grid-cols-2'>
                        {service.features.map(feature => (
                          <li
                            key={feature}
                            className='flex items-start gap-3 text-[0.9375rem] leading-6 text-blue-50/90'
                          >
                            <CheckCircle2
                              size={18}
                              className='mt-0.5 shrink-0 text-sky-300'
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <ul className='mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6'>
                        {service.technologies.map(technology => (
                          <li
                            key={technology}
                            className='rounded-md border border-white/20 px-3 py-1.5 text-sm text-blue-100/80'
                          >
                            {technology}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* ================= WHY ALBA TECHX ================= */}
        <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
            <div>
              <h2 className='sp-display max-w-[16ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
                More than a service. A technology partner.
              </h2>

              <p className='mt-5 max-w-[44ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem]'>
                Every business is different. We focus on understanding your
                needs and choosing practical solutions that support your goals,
                budget and long-term plans.
              </p>

              <Link
                to='/about'
                className='group mt-7 inline-flex items-center gap-2 border-b-2 border-blue-600 pb-0.5 text-sm font-semibold text-blue-600 transition-[gap,color] duration-200 hover:gap-3 hover:text-blue-700 focus-visible:outline-none'
              >
                Learn about us
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <ul className='grid border-l border-t border-slate-200 sm:grid-cols-2'>
              {benefits.map(benefit => {
                const Icon = benefit.icon

                return (
                  <li
                    key={benefit.title}
                    className='border-b border-r border-slate-200 p-6 transition-colors duration-200 hover:bg-blue-50/60 sm:p-8'
                  >
                    <span className='flex h-11 w-11 items-center justify-center rounded-md bg-blue-50 text-blue-600'>
                      <Icon size={22} strokeWidth={1.8} />
                    </span>

                    <h3 className='sp-display mt-6 text-lg font-semibold text-[#0c2347]'>
                      {benefit.title}
                    </h3>

                    <p className='mt-2 text-[0.9375rem] leading-7 text-slate-600'>
                      {benefit.description}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* ================= HOW WE WORK ================= */}
        <section className='bg-[#0c2347] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16'>
              <h2 className='sp-display max-w-[16ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl'>
                From idea to implementation.
              </h2>

              <p className='max-w-[46ch] text-base leading-7 text-blue-100/80 sm:text-[1.0625rem] lg:justify-self-end'>
                A straightforward process to help keep your project organized,
                transparent and focused on your goals.
              </p>
            </div>

            <ol className='mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4'>
              {process.map(step => {
                const Icon = step.icon

                return (
                  <li
                    key={step.number}
                    className='relative border-t border-white/20 pt-6'
                  >
                    <span
                      aria-hidden='true'
                      className='absolute -top-px left-0 h-[2px] w-12 bg-sky-300'
                    />

                    <div className='flex items-center justify-between'>
                      <span className='sp-display text-sm font-medium tabular-nums text-sky-200'>
                        {step.number}
                      </span>
                      <Icon
                        size={22}
                        strokeWidth={1.7}
                        className='text-sky-300'
                      />
                    </div>

                    <h3 className='sp-display mt-6 text-xl font-semibold'>
                      {step.title}
                    </h3>

                    <p className='mt-2 max-w-[30ch] text-[0.9375rem] leading-7 text-blue-100/75'>
                      {step.description}
                    </p>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div
              className={`flex flex-col items-start justify-between gap-8 bg-blue-600 px-6 py-12 sm:px-10 sm:py-14 md:flex-row md:items-center lg:px-16 ${asymmetric}`}
            >
              <div>
                <h2 className='sp-display max-w-[18ch] text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl'>
                  Have a project in mind? Let's talk.
                </h2>

                <p className='mt-4 max-w-[46ch] text-base leading-7 text-blue-50'>
                  Tell us what you want to build, improve or automate. Let's
                  explore the right solution for your business.
                </p>
              </div>

              <Link
                to='/contact'
                className='group inline-flex shrink-0 items-stretch overflow-hidden rounded-md bg-white text-sm font-semibold text-[#0c2347] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                <span className='px-6 py-3.5'>Start a conversation</span>
                <span className='flex w-12 items-center justify-center bg-[#0c2347] text-white transition-colors duration-200 group-hover:bg-blue-800'>
                  <ArrowUpRight
                    size={18}
                    className='transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </MotionConfig>
  )
}

export default ServicesPage
