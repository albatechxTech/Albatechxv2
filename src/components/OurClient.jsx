import growtern from '../assets/LOGO-B3MuebGw.png'
const defaultClients = [{ name: 'Growtern Academy', logo: growtern }]

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.oc-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.oc-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }

@keyframes oc-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.oc-track {
  animation: oc-scroll var(--oc-duration, 40s) linear infinite;
}

/* Pause while someone is looking at (or tabbing through) the logos */
.oc-marquee:hover .oc-track,
.oc-marquee:focus-within .oc-track {
  animation-play-state: paused;
}

/* Reduced motion: no scrolling, show the logos as a wrapped row instead */
@media (prefers-reduced-motion: reduce) {
  .oc-track { animation: none; width: auto; flex-wrap: wrap; justify-content: center; }
  .oc-dup { display: none; }
}
`

const fade =
  'linear-gradient(to right, transparent, black 8%, black 92%, transparent)'

const LogoItem = ({ client }) => {
  const content = client.logo ? (
    <img
      src={client.logo}
      alt={client.name}
      draggable={false}
      className='max-h-10 w-auto max-w-[150px] object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:opacity-100 group-focus-visible:grayscale-0'
    />
  ) : (
    <span className='oc-display text-lg font-semibold text-slate-400 transition-colors duration-300 group-hover:text-[#0c2347]'>
      {client.name}
    </span>
  )

  const base =
    'group flex h-24 w-[190px] shrink-0 items-center justify-center border-r border-slate-200 px-6 sm:h-28 sm:w-[230px]'

  return client.href ? (
    <a
      href={client.href}
      target='_blank'
      rel='noreferrer'
      className={`${base} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600`}
    >
      {content}
    </a>
  ) : (
    <div className={base}>{content}</div>
  )
}

const OurClient = ({
  clients = defaultClients,
  title = 'The businesses we work with.',
  description = 'We are proud to support organizations across different industries with technology that fits how they work.',
  duration = 40
}) => {
  if (!clients.length) return null

  // Make sure one set is wide enough to fill a big screen before it loops
  const repeat = Math.max(1, Math.ceil(10 / clients.length))
  const items = Array.from({ length: repeat }, () => clients).flat()

  return (
    <section className='oc-body bg-white py-16 sm:py-20 lg:py-24'>
      <style>{css}</style>

      {/* Heading uses the shared container so it lines up with every section */}
      <div className='px-5 sm:px-8 lg:px-12'>
        <div className='mx-auto grid max-w-7xl gap-5 lg:grid-cols-2 lg:items-end lg:gap-16'>
          <h2 className='oc-display max-w-[16ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
            {title}
          </h2>

          <p className='max-w-[46ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem] lg:justify-self-end'>
            {description}
          </p>
        </div>
      </div>

      {/* Scrolling logos run edge to edge */}
      <div
        className='oc-marquee mt-12 overflow-hidden border-y border-slate-200 lg:mt-16'
        style={{
          '--oc-duration': `${duration}s`,
          WebkitMaskImage: fade,
          maskImage: fade
        }}
      >
        <div className='oc-track flex w-max'>
          <ul className='flex shrink-0 border-l border-slate-200'>
            {items.map((client, index) => (
              <li key={`a-${index}`}>
                <LogoItem client={client} />
              </li>
            ))}
          </ul>

          {/* Second copy makes the loop seamless; hidden from screen readers */}
          <ul
            aria-hidden='true'
            className='oc-dup flex shrink-0 border-l border-slate-200'
          >
            {items.map((client, index) => (
              <li key={`b-${index}`}>
                <LogoItem client={{ ...client, href: undefined }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default OurClient
