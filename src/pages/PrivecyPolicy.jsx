import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

/*
  IMPORTANT: this is a general-purpose template written from what your website
  does (contact form, services, analytics-type cookies). It is not legal advice.
  Before publishing:
    1. Fill in the company details and date below.
    2. Check each section matches what you actually do (for example, if you
       use Google Analytics, a chat widget, or newsletter tools, name them in
       the cookies / sharing sections).
    3. Have it reviewed by a lawyer familiar with Indian data protection law.
*/
const company = {
  name: 'Alba TechX',
  email: 'info@albatechx.com',
  address: 'Bhubaneswar, Odisha, India'
}

const lastUpdated = '[Add date]'

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    blocks: [
      {
        type: 'p',
        text: `This Privacy Policy explains how ${company.name} ("we", "us" or "our") collects, uses, stores and shares personal information when you visit our website or contact us about our services.`
      },
      {
        type: 'p',
        text: 'By using our website you acknowledge that you have read this policy. If you do not agree with it, please do not use the website or submit your information to us.'
      }
    ]
  },
  {
    id: 'information-we-collect',
    title: 'Information we collect',
    blocks: [
      { type: 'h', text: 'Information you give us' },
      {
        type: 'p',
        text: 'When you fill in our contact form, email us or speak to us, we may collect:'
      },
      {
        type: 'ul',
        items: [
          'Your name, email address and phone number',
          'The service you are interested in',
          'The message and any other details you choose to share about your project or business'
        ]
      },
      { type: 'h', text: 'Information collected automatically' },
      {
        type: 'p',
        text: 'When you visit our website, certain technical information may be collected through cookies and similar technologies, such as:'
      },
      {
        type: 'ul',
        items: [
          'Your IP address, browser type and device type',
          'The pages you visit, the time you spend on them and the page that referred you',
          'General location information derived from your IP address'
        ]
      },
      {
        type: 'p',
        text: 'Please do not send sensitive information, such as bank or card details, passwords or health information, through our contact form or by email.'
      }
    ]
  },
  {
    id: 'how-we-use-information',
    title: 'How we use your information',
    blocks: [
      { type: 'p', text: 'We use personal information to:' },
      {
        type: 'ul',
        items: [
          'Respond to your enquiries and discuss your project with you',
          'Provide, manage and support our services',
          'Communicate with you about projects, quotes, updates and support',
          'Keep our website secure and prevent misuse or fraud',
          'Understand how our website is used so we can improve it',
          'Meet our legal and regulatory obligations'
        ]
      },
      {
        type: 'p',
        text: 'We will only send you marketing or promotional messages where you have agreed to receive them or where the law allows, and you can opt out at any time.'
      }
    ]
  },
  {
    id: 'consent',
    title: 'Consent and legal basis',
    blocks: [
      {
        type: 'p',
        text: 'We process your personal information where you have given your consent, for example by submitting our contact form, or where otherwise permitted by applicable law.'
      },
      {
        type: 'p',
        text: 'You can withdraw your consent at any time by contacting us using the details at the end of this policy. Withdrawing consent does not affect processing that took place before you withdrew it.'
      }
    ]
  },
  {
    id: 'sharing',
    title: 'Sharing your information',
    blocks: [
      {
        type: 'p',
        text: 'We do not sell your personal information. We may share it only in the following situations:'
      },
      {
        type: 'ul',
        items: [
          'With service providers that help us run our website and business, such as hosting, email and analytics providers. They may only use the information to provide services to us and must protect it.',
          'With professional advisers such as accountants, auditors and lawyers, where needed.',
          'With government or law enforcement authorities where we are required to by law, or to protect our rights, safety or property.',
          'With a successor organization, if we are involved in a merger, acquisition or sale of our business. We would tell you if this changed how your information is handled.'
        ]
      }
    ]
  },
  {
    id: 'cookies',
    title: 'Cookies and similar technologies',
    blocks: [
      {
        type: 'p',
        text: 'Our website may use cookies and similar technologies to make the site work properly, remember your preferences and understand how visitors use it.'
      },
      {
        type: 'p',
        text: 'You can control or delete cookies through your browser settings. If you disable cookies, some parts of the website may not work as intended. Third-party tools we use, such as analytics services, may set their own cookies, which are governed by their own privacy policies.'
      }
    ]
  },
  {
    id: 'retention',
    title: 'How long we keep information',
    blocks: [
      {
        type: 'p',
        text: 'We keep personal information only for as long as it is needed for the purposes described in this policy, including to respond to you, deliver our services, resolve disputes and meet legal obligations. When it is no longer needed, we delete it or make it anonymous.'
      }
    ]
  },
  {
    id: 'security',
    title: 'Keeping your information safe',
    blocks: [
      {
        type: 'p',
        text: 'We use reasonable technical and organizational measures to protect personal information against loss, misuse and unauthorized access. However, no method of transmission over the internet or method of storage is completely secure, so we cannot guarantee absolute security.'
      }
    ]
  },
  {
    id: 'your-rights',
    title: 'Your rights and choices',
    blocks: [
      {
        type: 'p',
        text: 'Depending on where you live, you may have rights under applicable data protection laws, including those in India. In general, you can ask us to:'
      },
      {
        type: 'ul',
        items: [
          'Tell you what personal information we hold about you',
          'Correct information that is inaccurate or incomplete',
          'Delete your personal information, where we are not required to keep it',
          'Stop using your information, or withdraw a consent you have given'
        ]
      },
      {
        type: 'p',
        text: 'To make a request or raise a concern about how we handle your information, contact us using the details below. We will respond within the time required by applicable law.'
      }
    ]
  },
  {
    id: 'third-party-links',
    title: 'Links to other websites',
    blocks: [
      {
        type: 'p',
        text: 'Our website may link to other websites, such as social media pages. We are not responsible for the privacy practices or content of those sites, and we encourage you to read their privacy policies.'
      }
    ]
  },
  {
    id: 'children',
    title: "Children's privacy",
    blocks: [
      {
        type: 'p',
        text: 'Our website and services are not directed at children under 18, and we do not knowingly collect personal information from them. If you believe a child has given us personal information, please contact us and we will delete it.'
      }
    ]
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    blocks: [
      {
        type: 'p',
        text: 'We may update this policy from time to time. When we do, we will change the "last updated" date at the top of this page. If you keep using our website after a change, it means you accept the updated policy.'
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact us',
    blocks: [
      {
        type: 'p',
        text: 'If you have any questions about this policy or about how we handle your information, you can reach us at:'
      },
      { type: 'contact' }
    ]
  }
]

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.pp-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.pp-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
`

const Contents = ({ active, onNavigate }) => (
  <ol className='space-y-1'>
    {sections.map((section, index) => {
      const isActive = section.id === active

      return (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            onClick={onNavigate}
            aria-current={isActive ? 'true' : undefined}
            className={`flex gap-3 border-l-2 py-1.5 pl-4 text-[0.9375rem] leading-6 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
              isActive
                ? 'border-blue-600 font-medium text-[#0c2347]'
                : 'border-slate-200 text-slate-500 hover:border-slate-400 hover:text-[#0c2347]'
            }`}
          >
            <span className='tabular-nums text-slate-400'>
              {String(index + 1).padStart(2, '0')}
            </span>
            {section.title}
          </a>
        </li>
      )
    })}
  </ol>
)

const Block = ({ block }) => {
  if (block.type === 'h') {
    return (
      <h3 className='pp-display mt-8 text-lg font-semibold text-[#0c2347]'>
        {block.text}
      </h3>
    )
  }

  if (block.type === 'ul') {
    return (
      <ul className='mt-4 space-y-3'>
        {block.items.map(item => (
          <li
            key={item}
            className='flex gap-3 text-base leading-7 text-slate-600'
          >
            <span
              aria-hidden='true'
              className='mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600'
            />
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'contact') {
    return (
      <address className='mt-5 space-y-1 border-l-2 border-blue-600 pl-5 text-base not-italic leading-7 text-slate-600'>
        <p className='pp-display font-semibold text-[#0c2347]'>
          {company.name}
        </p>
        <p>{company.address}</p>
        <p>
          Email:{' '}
          <a
            href={`mailto:${company.email}`}
            className='text-blue-600 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none'
          >
            {company.email}
          </a>
        </p>
      </address>
    )
  }

  return <p className='mt-4 text-base leading-8 text-slate-600'>{block.text}</p>
}

const PrivecyPolicy = () => {
  const [active, setActive] = useState(sections[0].id)

  // Highlight the section currently being read
  useEffect(() => {
    const elements = sections
      .map(section => document.getElementById(section.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -75% 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className='pp-body bg-white text-slate-900'>
      <style>{css}</style>

      {/* Header */}
      <section className='border-b border-slate-200 bg-[#f4f7fc] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20'>
        <div className='mx-auto max-w-7xl'>
          <h1 className='pp-display max-w-[16ch] text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-[#0c2347] sm:text-5xl lg:text-[3.9rem]'>
            Privacy policy
          </h1>

          <p className='mt-5 max-w-[52ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem]'>
            How {company.name} collects, uses and protects your information.
          </p>

          <p className='mt-6 text-sm text-slate-500'>
            Last updated:{' '}
            <span className='font-medium text-[#0c2347]'>{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Body */}
      <section className='px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20'>
        <div className='mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-20'>
          {/* Contents: collapsible on small screens, sticky on large */}
          <aside>
            <details className='group rounded-md border border-slate-300 lg:hidden'>
              <summary className='pp-display flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-base font-medium text-[#0c2347] [&::-webkit-details-marker]:hidden'>
                On this page
                <ChevronDown
                  size={18}
                  aria-hidden='true'
                  className='transition-transform duration-200 group-open:rotate-180'
                />
              </summary>
              <nav
                aria-label='Privacy policy contents'
                className='border-t border-slate-200 p-4'
              >
                <Contents active={active} />
              </nav>
            </details>

            <nav
              aria-label='Privacy policy contents'
              className='hidden lg:sticky lg:top-28 lg:block'
            >
              <p className='pp-display mb-4 text-base font-semibold text-[#0c2347]'>
                On this page
              </p>
              <Contents active={active} />
            </nav>
          </aside>

          {/* Policy text */}
          <article className='max-w-[72ch]'>
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className='scroll-mt-28 border-t border-slate-200 pb-12 pt-10 first:border-t-0 first:pt-0 last:pb-0'
              >
                <h2 className='pp-display flex gap-4 text-2xl font-semibold tracking-[-0.02em] text-[#0c2347] sm:text-[1.75rem]'>
                  <span className='text-lg font-medium tabular-nums text-blue-600 sm:text-xl'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </h2>

                {section.blocks.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </section>
            ))}

            <p className='mt-12 border-t border-slate-200 pt-8 text-base text-slate-600'>
              Have a question about your data?{' '}
              <Link
                to='/contact'
                className='font-semibold text-blue-600 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none'
              >
                Get in touch
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default PrivecyPolicy
