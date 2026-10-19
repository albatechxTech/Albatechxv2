import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as Si from 'react-icons/si'

/*
  Each item can have:
    icon  - a react-icons component
    logo  - an image path (e.g. imported from /assets) if you want your own logo
    If neither is given, a coloured monogram is shown (see AWS and Azure).
*/
const defaultCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'React', icon: Si.SiReact, color: '#00b5d8' },
      { name: 'Next.js', icon: Si.SiNextdotjs, color: '#111827' },
      { name: 'Angular', icon: Si.SiAngular, color: '#dd0031' },
      { name: 'Vue.js', icon: Si.SiVuedotjs, color: '#4fc08d' },
      { name: 'TypeScript', icon: Si.SiTypescript, color: '#3178c6' },
      { name: 'JavaScript', icon: Si.SiJavascript, color: '#e6c800' },
      { name: 'Tailwind CSS', icon: Si.SiTailwindcss, color: '#06b6d4' },
      { name: 'HTML5', icon: Si.SiHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: Si.SiCss ?? Si.SiCss3, color: '#1572b6' }
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: Si.SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: Si.SiExpress, color: '#404040' },
      { name: 'Python', icon: Si.SiPython, color: '#3776ab' },
      { name: 'Django', icon: Si.SiDjango, color: '#092e20' },
      { name: 'PHP', icon: Si.SiPhp, color: '#777bb4' },
      { name: 'Laravel', icon: Si.SiLaravel, color: '#ff2d20' }
    ]
  },
  {
    id: 'database',
    label: 'Database',
    items: [
      { name: 'MongoDB', icon: Si.SiMongodb, color: '#47a248' },
      { name: 'MySQL', icon: Si.SiMysql, color: '#4479a1' },
      { name: 'PostgreSQL', icon: Si.SiPostgresql, color: '#4169e1' },
      { name: 'Redis', icon: Si.SiRedis, color: '#dc382d' },
      { name: 'Firebase', icon: Si.SiFirebase, color: '#f5a800' }
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud',
    items: [
      { name: 'AWS', monogram: 'AWS', color: '#ff9900' },
      { name: 'Microsoft Azure', monogram: 'Az', color: '#0078d4' },
      { name: 'Google Cloud', icon: Si.SiGooglecloud, color: '#4285f4' },
      { name: 'Vercel', icon: Si.SiVercel, color: '#111827' },
      { name: 'Netlify', icon: Si.SiNetlify, color: '#00a896' },
      { name: 'Cloudflare', icon: Si.SiCloudflare, color: '#f38020' },
      { name: 'DigitalOcean', icon: Si.SiDigitalocean, color: '#0080ff' }
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile apps',
    items: [
      { name: 'Flutter', icon: Si.SiFlutter, color: '#02569b' },
      { name: 'React Native', icon: Si.SiReact, color: '#00b5d8' },
      { name: 'Kotlin', icon: Si.SiKotlin, color: '#7f52ff' },
      { name: 'Swift', icon: Si.SiSwift, color: '#f05138' },
      { name: 'Android', icon: Si.SiAndroid, color: '#3ddc84' },
      { name: 'iOS', icon: Si.SiApple, color: '#111827' },
      { name: 'Ionic', icon: Si.SiIonic, color: '#3880ff' }
    ]
  },
  {
    id: 'analytics',
    label: 'Analytics',
    items: [
      {
        name: 'Google Analytics',
        icon: Si.SiGoogleanalytics,
        color: '#e37400'
      },
      { name: 'Power BI', icon: Si.SiPowerbi, color: '#d9a900' },
      { name: 'Tableau', icon: Si.SiTableau, color: '#e97627' },
      { name: 'Mixpanel', icon: Si.SiMixpanel, color: '#7856ff' },
      { name: 'Hotjar', icon: Si.SiHotjar, color: '#fd3a5c' }
    ]
  },
  {
    id: 'devops',
    label: 'DevOps',
    items: [
      { name: 'Docker', icon: Si.SiDocker, color: '#2496ed' },
      { name: 'Kubernetes', icon: Si.SiKubernetes, color: '#326ce5' },
      { name: 'Jenkins', icon: Si.SiJenkins, color: '#d24939' },
      { name: 'GitHub Actions', icon: Si.SiGithubactions, color: '#2088ff' },
      { name: 'Terraform', icon: Si.SiTerraform, color: '#7b42f6' },
      { name: 'Git', icon: Si.SiGit, color: '#f05032' }
    ]
  }
]

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.ts-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.ts-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
.ts-tabs { scrollbar-width: none; }
.ts-tabs::-webkit-scrollbar { display: none; }
`

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } }
}

const cellVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
  }
}

const TechLogo = ({ item }) => {
  if (item.logo) {
    return <img src={item.logo} alt='' className='h-9 w-9 object-contain' />
  }

  if (item.icon) {
    const Icon = item.icon
    return <Icon size={36} style={{ color: item.color }} aria-hidden='true' />
  }

  // Fallback: coloured monogram
  return (
    <span
      aria-hidden='true'
      className='ts-display flex h-9 min-w-9 items-center justify-center rounded-md px-1.5 text-sm font-semibold text-white'
      style={{ backgroundColor: item.color }}
    >
      {item.monogram || item.name.slice(0, 2)}
    </span>
  )
}

const TechStack = ({ categories = defaultCategories }) => {
  const [activeId, setActiveId] = useState(categories[0]?.id)

  const active = categories.find(c => c.id === activeId) || categories[0]
  if (!active) return null

  return (
    <section className='ts-body bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
      <style>{css}</style>

      <div className='mx-auto max-w-7xl'>
        {/* Heading */}
        <div className='grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16'>
          <h2 className='ts-display text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
            Our tech stack
          </h2>

          <p className='max-w-[46ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem] lg:justify-self-end'>
            We use AI, cloud, IoT and analytics to drive smart innovation, with
            tools chosen for each project rather than one stack for everything.
          </p>
        </div>

        {/* Tabs */}
        <div
          role='tablist'
          aria-label='Technology categories'
          className='ts-tabs -mx-5 mt-10 flex gap-8 overflow-x-auto border-b border-slate-200 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-14 lg:gap-10 lg:px-0'
        >
          {categories.map(category => {
            const isActive = category.id === active.id

            return (
              <button
                key={category.id}
                type='button'
                role='tab'
                id={`tab-${category.id}`}
                aria-selected={isActive}
                aria-controls='techstack-panel'
                onClick={e => {
                  setActiveId(category.id)
                  e.currentTarget.scrollIntoView({
                    inline: 'center',
                    block: 'nearest',
                    behavior: 'smooth'
                  })
                }}
                className={`ts-display relative shrink-0 py-4 text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:text-blue-600 sm:text-[1.0625rem] ${
                  isActive
                    ? 'text-[#0c2347]'
                    : 'text-slate-500 hover:text-[#0c2347]'
                }`}
              >
                {category.label}

                {isActive && (
                  <motion.span
                    layoutId='techstack-tab'
                    className='absolute -bottom-px left-0 h-[2px] w-full rounded-full bg-blue-600'
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Tech grid: cells share hairline borders */}
        <div
          role='tabpanel'
          id='techstack-panel'
          aria-labelledby={`tab-${active.id}`}
          className='mt-8 lg:mt-10'
        >
          <AnimatePresence mode='wait' initial={false}>
            <motion.ul
              key={active.id}
              variants={gridVariants}
              initial='hidden'
              animate='show'
              exit={{ opacity: 0, transition: { duration: 0.12 } }}
              className='grid grid-cols-2 border-l border-t border-slate-200 sm:grid-cols-3 lg:grid-cols-5'
            >
              {active.items.map(item => (
                <motion.li
                  key={item.name}
                  variants={cellVariants}
                  className='group flex min-h-[124px] flex-col justify-between border-b border-r border-slate-200 bg-white p-5 transition-colors duration-200 hover:bg-blue-50/60 sm:min-h-[150px] sm:p-6'
                >
                  <TechLogo item={item} />

                  <p className='ts-display text-[0.9375rem] font-medium text-[#0c2347] sm:text-base'>
                    {item.name}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default TechStack
