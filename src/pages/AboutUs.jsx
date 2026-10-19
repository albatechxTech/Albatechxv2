import { motion, MotionConfig } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Code2,
  Megaphone,
  Bot,
  ShoppingBag,
  Palette,
  Layers3,
  ShieldCheck,
  Headphones
} from 'lucide-react'

import { FaLinkedinIn } from 'react-icons/fa'

import HeroImage from '../assets/Modern Coding Workspace Hero Banner.png'
import ProductImage from '../assets/Product.png'

const areas = [
  {
    title: 'Software & web development',
    description:
      'Websites, custom software and web applications that help businesses streamline operations and grow online.',
    icon: Code2,
    color: '#2563eb',
    background: '#cbdcfb'
  },
  {
    title: 'Digital marketing & social media',
    description:
      'Strategic marketing, engaging content and consistent brand communication for a stronger online presence.',
    icon: Megaphone,
    color: '#7c3aed',
    background: '#e4d8ff'
  },
  {
    title: 'AI & business automation',
    description:
      'AI-powered tools and workflow automation that reduce repetitive tasks and make operations smarter.',
    icon: Bot,
    color: '#0891b2',
    background: '#c9f0f8'
  },
  {
    title: 'IT products & solutions',
    description:
      'Practical technology solutions, software products and IT equipment suited to how a business operates.',
    icon: ShoppingBag,
    color: '#059669',
    background: '#c9f4df'
  }
]

const principles = [
  {
    icon: Palette,
    title: 'Tailored solutions',
    description:
      'Solutions designed around your goals, workflow and business requirements, not a template that happens to be close.'
  },
  {
    icon: Layers3,
    title: 'Modern technology',
    description:
      'Practical technology choices that support performance today and leave room for growth later.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality-focused',
    description:
      'A focus on usability, reliability, responsive design and maintainability in everything we deliver.'
  },
  {
    icon: Headphones,
    title: 'Ongoing support',
    description:
      'Technical guidance and assistance throughout your project journey, and after launch as agreed.'
  }
]

/*
  OUR TEAM: replace the placeholders below with your real people.
  - photo: import an image at the top of this file and pass it here, e.g.
      import FounderPhoto from '../assets/founder.jpg'
      ... photo: FounderPhoto
    Leave it as null to show a coloured initials block instead.
  - linkedin: full profile URL, or remove the line to hide the icon.
  - You can add more people to a group, or add new groups
    (e.g. "Core team"). A group with no members is not shown.
*/
const team = [
  {
    title: 'Founders',
    note: 'The people who started Alba TechX and lead it today.',
    members: [
      {
        name: 'Purbesh Swain',
        role: 'Founder',
        bio: 'Add a short introduction: background, what they focus on, and why they started Alba TechX.',
        photo: null,
        linkedin: 'https://www.linkedin.com/in/purbesh-swain-a1960919b/'
      }
    ]
  },
  {
    title: 'Mentors',
    note: 'Experienced guides who help shape our direction.',
    members: [
      {
        name: 'Gokulananda Pradhan',
        role: 'Mentor',
        bio: 'Add a short introduction: their experience and how they support the company.',
        photo: null,
        linkedin:
          'https://www.linkedin.com/in/gokulananda-pradhan-197384369/?isSelfProfile=false'
      }
    ]
  }
]

const monogramColors = [
  { bg: '#cbdcfb', fg: '#2563eb' },
  { bg: '#e4d8ff', fg: '#7c3aed' },
  { bg: '#c9f0f8', fg: '#0891b2' },
  { bg: '#c9f4df', fg: '#059669' }
]

const initials = name =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(word => word[0].toUpperCase())
    .join('')

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.ab-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.ab-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
`

const asymmetric =
  'rounded-tl-[56px] rounded-br-[56px] rounded-bl-md rounded-tr-md lg:rounded-tl-[72px] lg:rounded-br-[72px]'

const SplitLink = ({ to, children }) => (
  <Link
    to={to}
    className='group inline-flex items-stretch overflow-hidden rounded-md bg-blue-600 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
  >
    <span className='px-6 py-3.5'>{children}</span>
    <span className='flex w-12 items-center justify-center border-l border-white/25 bg-blue-700 transition-colors duration-200 group-hover:bg-[#0c2347]'>
      <ArrowUpRight
        size={18}
        className='transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
      />
    </span>
  </Link>
)

const AboutUs = () => {
  return (
    <MotionConfig reducedMotion='user'>
      <main className='ab-body bg-white text-slate-900'>
        <style>{css}</style>

        {/* ================= HERO ================= */}
        <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20'>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className='order-2 lg:order-1'
            >
              <h1 className='ab-display max-w-[16ch] text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-[#0c2347] sm:text-5xl lg:text-[3.9rem]'>
                Technology built around how your business works.
              </h1>

              <p className='mt-6 max-w-[48ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem]'>
                Alba TechX works across software and web development, digital
                marketing, AI automation and IT solutions. We help businesses
                turn everyday challenges into practical digital opportunities.
              </p>

              <div className='mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center'>
                <SplitLink to='/services'>See what we do</SplitLink>

                <Link
                  to='/contact'
                  className='inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3.5 text-sm font-semibold text-[#0c2347] transition-colors duration-200 hover:border-blue-600 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                >
                  Contact us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              animate={{ clipPath: 'inset(0 0 0 0%)' }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1]
              }}
              className='order-1 lg:order-2'
            >
              <div className='relative mb-3 mr-3 sm:mb-4 sm:mr-4'>
                <div
                  aria-hidden='true'
                  className={`absolute left-3 top-3 h-full w-full bg-sky-100 sm:left-4 sm:top-4 ${asymmetric}`}
                />

                <div
                  className={`relative aspect-[5/4] overflow-hidden bg-slate-100 ${asymmetric}`}
                >
                  <img
                    src={HeroImage}
                    alt='Alba TechX team workspace'
                    className='h-full w-full object-cover'
                  />

                  <div className='absolute bottom-0 left-0 rounded-tr-2xl bg-white py-3 pl-5 pr-6'>
                    <p className='ab-display text-sm font-semibold text-[#0c2347]'>
                      Alba TechX
                    </p>
                    <p className='mt-0.5 text-xs text-slate-500'>
                      Technology, innovation and growth
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}
        <section className='bg-[#f4f7fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
            <h2 className='ab-display max-w-[16ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
              Practical technology, chosen for your goals.
            </h2>

            <div className='max-w-[60ch] space-y-5 text-base leading-8 text-slate-600 sm:text-[1.0625rem]'>
              <p>
                Every business is different. We focus on understanding your
                needs and choosing practical solutions that support your goals,
                budget and long-term plans.
              </p>

              <p>
                From professional websites and custom software to social media,
                AI-powered workflows and IT products, our work is built around
                reliability, usability and long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* ================= WHAT WE DO ================= */}
        <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16'>
              <h2 className='ab-display max-w-[16ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
                Four areas, one technology partner.
              </h2>

              <p className='max-w-[46ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem] lg:justify-self-end'>
                You can work with us on one area or combine several, depending
                on what your business needs right now.
              </p>
            </div>

            <ul className='mt-12 grid border-l border-t border-slate-200 sm:grid-cols-2 lg:mt-16'>
              {areas.map(area => {
                const Icon = area.icon

                return (
                  <li
                    key={area.title}
                    className='border-b border-r border-slate-200'
                  >
                    <Link
                      to='/services'
                      className='group flex h-full flex-col p-6 transition-colors duration-200 hover:bg-blue-50/60 focus-visible:bg-blue-50/60 focus-visible:outline-none sm:p-8'
                    >
                      <span
                        className='flex h-12 w-12 items-center justify-center rounded-md'
                        style={{
                          backgroundColor: area.background,
                          color: area.color
                        }}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </span>

                      <h3 className='ab-display mt-6 text-xl font-semibold text-[#0c2347]'>
                        {area.title}
                      </h3>

                      <p className='mt-2 max-w-[44ch] text-[0.9375rem] leading-7 text-slate-600'>
                        {area.description}
                      </p>

                      <span className='mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-[gap] duration-200 group-hover:gap-2.5'>
                        Learn more
                        <ArrowUpRight size={16} />
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* ================= OWN PRODUCTS ================= */}
        <section className='bg-[#f4f7fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20'>
            <div className='relative mb-3 mr-3 sm:mb-4 sm:mr-4'>
              <div
                aria-hidden='true'
                className={`absolute left-3 top-3 h-full w-full bg-blue-600 sm:left-4 sm:top-4 ${asymmetric}`}
              />

              <div
                className={`relative aspect-[5/4] overflow-hidden bg-slate-100 ${asymmetric}`}
              >
                <img
                  src={ProductImage}
                  alt='Digital products built by Alba TechX'
                  className='h-full w-full object-cover'
                />
              </div>
            </div>

            <div>
              <h2 className='ab-display max-w-[16ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
                We build our own digital products too.
              </h2>

              <p className='mt-5 max-w-[46ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem]'>
                Alongside client projects, we develop our own digital products
                that solve practical business problems and create long-term
                value.
              </p>

              <Link
                to='/contact'
                className='group mt-7 inline-flex items-center gap-2 border-b-2 border-blue-600 pb-0.5 text-sm font-semibold text-blue-600 transition-[gap,color] duration-200 hover:gap-3 hover:text-blue-700 focus-visible:outline-none'
              >
                Ask about our products
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ================= OUR TEAM ================= */}
        <section
          id='team'
          className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'
        >
          <div className='mx-auto max-w-7xl'>
            <div className='grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16'>
              <h2 className='ab-display max-w-[16ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
                The people behind Alba TechX.
              </h2>

              <p className='max-w-[46ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem] lg:justify-self-end'>
                Meet the people who lead the company and guide the way we work.
              </p>
            </div>

            <div className='mt-12 border-b border-slate-200 lg:mt-16'>
              {team
                .filter(group => group.members.length > 0)
                .map(group => (
                  <div
                    key={group.title}
                    className='grid gap-8 border-t border-slate-200 py-10 lg:grid-cols-[0.35fr_1fr] lg:gap-16 lg:py-14'
                  >
                    <div>
                      <h3 className='ab-display text-xl font-semibold text-[#0c2347] sm:text-2xl'>
                        {group.title}
                      </h3>
                      {group.note && (
                        <p className='mt-2 max-w-[26ch] text-[0.9375rem] leading-6 text-slate-500'>
                          {group.note}
                        </p>
                      )}
                    </div>

                    <ul className='grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3'>
                      {group.members.map((member, index) => {
                        const tone =
                          monogramColors[index % monogramColors.length]

                        return (
                          <li key={member.name}>
                            <div className='aspect-[4/5] overflow-hidden rounded-tl-[40px] rounded-br-[40px] rounded-bl-md rounded-tr-md bg-slate-100'>
                              {member.photo ? (
                                <img
                                  src={member.photo}
                                  alt={member.name}
                                  className='h-full w-full object-cover object-top'
                                />
                              ) : (
                                <div
                                  aria-hidden='true'
                                  className='ab-display flex h-full w-full items-center justify-center text-6xl font-semibold'
                                  style={{
                                    backgroundColor: tone.bg,
                                    color: tone.fg
                                  }}
                                >
                                  {initials(member.name)}
                                </div>
                              )}
                            </div>

                            <div className='mt-5 flex items-start justify-between gap-4'>
                              <div>
                                <h4 className='ab-display text-xl font-semibold text-[#0c2347]'>
                                  {member.name}
                                </h4>
                                <p className='mt-1 text-sm font-medium text-blue-600'>
                                  {member.role}
                                </p>
                              </div>

                              {member.linkedin && (
                                <a
                                  href={member.linkedin}
                                  target='_blank'
                                  rel='noreferrer'
                                  aria-label={`${member.name} on LinkedIn`}
                                  className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-slate-300 text-slate-600 transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                                >
                                  <FaLinkedinIn size={15} />
                                </a>
                              )}
                            </div>

                            {member.bio && (
                              <p className='mt-3 max-w-[40ch] text-[0.9375rem] leading-7 text-slate-600'>
                                {member.bio}
                              </p>
                            )}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* ================= HOW WE APPROACH WORK ================= */}
        <section className='bg-[#0c2347] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div className='grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16'>
              <h2 className='ab-display max-w-[16ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] sm:text-5xl'>
                How we approach every project.
              </h2>

              <p className='max-w-[46ch] text-base leading-7 text-blue-100/80 sm:text-[1.0625rem] lg:justify-self-end'>
                Four things we hold ourselves to, whatever the size of the
                project.
              </p>
            </div>

            <ul className='mt-12 border-b border-white/15 lg:mt-16'>
              {principles.map(item => {
                const Icon = item.icon

                return (
                  <li
                    key={item.title}
                    className='grid gap-4 border-t border-white/15 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:py-10'
                  >
                    <div className='flex items-center gap-4'>
                      <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-sky-200'>
                        <Icon size={22} strokeWidth={1.8} />
                      </span>
                      <h3 className='ab-display text-xl font-semibold sm:text-2xl'>
                        {item.title}
                      </h3>
                    </div>

                    <p className='max-w-[52ch] text-[0.9375rem] leading-7 text-blue-100/80 sm:text-base'>
                      {item.description}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
          <div className='mx-auto max-w-7xl'>
            <div
              className={`flex flex-col items-start justify-between gap-8 bg-blue-600 px-6 py-12 sm:px-10 sm:py-14 md:flex-row md:items-center lg:px-16 ${asymmetric}`}
            >
              <div>
                <h2 className='ab-display max-w-[18ch] text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl'>
                  Let's build something meaningful together.
                </h2>

                <p className='mt-4 max-w-[46ch] text-base leading-7 text-blue-50'>
                  Tell us what you want to build, improve or automate, and we'll
                  explore the right solution with you.
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

export default AboutUs
