import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

/*
  IMPORTANT: this is a general-purpose template for an IT services company
  (web/software development, digital marketing, AI automation, IT products).
  It is not legal advice. Before publishing:
    1. Fill in the company details, jurisdiction and date below.
    2. Check each section matches how you really work (payment terms, who
       owns the code, refunds, support period, etc.). Where you use a
       written agreement or quote, these terms should match it.
    3. Have it reviewed by a lawyer, especially the sections on payment,
       intellectual property, limitation of liability and governing law.
*/
const company = {
  name: 'Alba TechX',
  email: 'info@albatechx.com',
  address: 'Bhubaneswar, Odisha, India',
  // Courts that will hear disputes. Confirm this with your lawyer.
  jurisdiction: 'Bhubaneswar, Odisha, India'
}

const lastUpdated = '[Add date]'

const sections = [
  {
    id: 'acceptance',
    title: 'Acceptance of these terms',
    blocks: [
      {
        type: 'p',
        text: `These Terms and Conditions ("Terms") apply to your use of the ${company.name} website and to the services we provide. In these Terms, "we", "us" and "our" mean ${company.name}, and "you" means the person or organization using our website or engaging us for a service.`
      },
      {
        type: 'p',
        text: 'By using our website or engaging our services, you agree to these Terms. If you do not agree, please do not use the website or our services.'
      }
    ]
  },
  {
    id: 'services',
    title: 'Our services',
    blocks: [
      {
        type: 'p',
        text: 'We provide software and web development, digital marketing and social media, AI and business automation, and IT products and solutions. The descriptions on our website are general. The exact scope, deliverables and timeline of any project are set out in a written proposal, quote, statement of work or other agreement between you and us (a "Project Agreement").'
      },
      {
        type: 'p',
        text: 'We may improve, change or stop offering any service from time to time.'
      }
    ]
  },
  {
    id: 'website-use',
    title: 'Using our website',
    blocks: [
      { type: 'p', text: 'When you use our website, you agree not to:' },
      {
        type: 'ul',
        items: [
          'Use it for anything unlawful, fraudulent or harmful',
          'Try to gain unauthorized access to the website, our systems or other users’ data',
          'Introduce viruses, malware or any code intended to disrupt or damage it',
          'Copy, scrape or reuse our content in bulk without our written permission',
          'Provide false or misleading information, including in our contact form'
        ]
      }
    ]
  },
  {
    id: 'agreements',
    title: 'Quotes, proposals and agreements',
    blocks: [
      {
        type: 'p',
        text: 'A quote or proposal is not a binding contract until both sides have accepted it in writing (email is enough) and, where we ask for it, an advance payment has been made. Quotes are based on the information you gave us and may change if the scope changes.'
      },
      {
        type: 'p',
        text: 'If there is a conflict between these Terms and a Project Agreement, the Project Agreement applies. Requests that go beyond the agreed scope may need a revised quote, timeline or fee.'
      }
    ]
  },
  {
    id: 'fees',
    title: 'Fees and payment',
    blocks: [
      {
        type: 'p',
        text: 'Our fees, payment schedule and any advance or milestone payments are set out in your Project Agreement or invoice. Unless stated otherwise:'
      },
      {
        type: 'ul',
        items: [
          'Invoices are payable within the period stated on the invoice',
          'Fees do not include applicable taxes, such as GST',
          'Third-party costs, such as domains, hosting, software licenses and advertising spend, are not included in our fees',
          'If a payment is overdue, we may pause work or delay delivery after giving you notice'
        ]
      }
    ]
  },
  {
    id: 'responsibilities',
    title: 'Your responsibilities',
    blocks: [
      {
        type: 'p',
        text: 'To deliver a project well and on time, we rely on you to:'
      },
      {
        type: 'ul',
        items: [
          'Give us accurate information, content, access and approvals when we ask for them',
          'Review work and give feedback within a reasonable time',
          'Make sure you have the right to use any text, images, logos, data or other material you give us',
          'Keep your own account credentials secure'
        ]
      },
      {
        type: 'p',
        text: 'Delays on your side may affect the project timeline and cost.'
      }
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual property',
    blocks: [
      {
        type: 'p',
        text: 'The content on our website, including text, graphics, logos and the code we wrote for it, belongs to us or our licensors. You may not copy, modify or distribute it without our permission.'
      },
      {
        type: 'p',
        text: 'For work we create specifically for you, ownership of the final deliverables passes to you once we have received full payment, unless your Project Agreement says otherwise.'
      },
      {
        type: 'p',
        text: 'We keep ownership of our pre-existing tools, frameworks, templates, libraries and know-how, and we grant you a license to use them as part of the deliverables. Third-party and open-source components remain under their own licenses.'
      }
    ]
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    blocks: [
      {
        type: 'p',
        text: 'We will treat non-public business information you share with us as confidential and use it only to provide our services. This does not apply to information that is already public, that you tell us we may share, or that we are required to disclose by law.'
      }
    ]
  },
  {
    id: 'third-parties',
    title: 'Third-party tools and services',
    blocks: [
      {
        type: 'p',
        text: 'Our work may involve third-party products and services, such as hosting, domains, payment gateways, social media platforms, APIs and software licenses. These are governed by their own terms and pricing. We are not responsible for their availability, changes or policies.'
      },
      {
        type: 'p',
        text: 'Our website may also link to other websites. We do not control them and are not responsible for their content or practices.'
      }
    ]
  },
  {
    id: 'ai-tools',
    title: 'AI tools and automation',
    blocks: [
      {
        type: 'p',
        text: 'Some of our solutions use AI-powered tools or automated workflows. AI-generated output can contain mistakes or be incomplete, so it should be reviewed by a person before you rely on it for important decisions. You are responsible for how you use the output in your business.'
      }
    ]
  },
  {
    id: 'disclaimers',
    title: 'Disclaimers',
    blocks: [
      {
        type: 'p',
        text: 'Our website is provided "as is" and "as available". We do not promise that it will always be available, error-free or free of harmful components.'
      },
      {
        type: 'p',
        text: 'We do not guarantee specific results from marketing, SEO or advertising work, such as search rankings, followers, traffic, leads or sales. These depend on many factors outside our control, including platform algorithms, competition and market conditions.'
      }
    ]
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    blocks: [
      {
        type: 'p',
        text: 'To the fullest extent permitted by law, we are not liable for any indirect, incidental or consequential loss, including loss of profit, revenue, data or goodwill, arising from your use of our website or services.'
      },
      {
        type: 'p',
        text: 'Our total liability for any claim relating to a service is limited to the amount you paid us for that service. Nothing in these Terms limits any liability that cannot be limited by law.'
      }
    ]
  },
  {
    id: 'termination',
    title: 'Termination',
    blocks: [
      {
        type: 'p',
        text: 'We may suspend or restrict your access to our website if you break these Terms. Either side may end a project as set out in the Project Agreement. If a project ends early, you remain responsible for work completed and costs incurred up to that point.'
      }
    ]
  },
  {
    id: 'privacy',
    title: 'Privacy',
    blocks: [{ type: 'privacy' }]
  },
  {
    id: 'changes',
    title: 'Changes to these terms',
    blocks: [
      {
        type: 'p',
        text: 'We may update these Terms from time to time. When we do, we will change the "last updated" date at the top of this page. If you keep using our website or services after a change, it means you accept the updated Terms.'
      }
    ]
  },
  {
    id: 'governing-law',
    title: 'Governing law',
    blocks: [
      {
        type: 'p',
        text: `These Terms are governed by the laws of India. Any dispute that cannot be resolved by discussion will be subject to the exclusive jurisdiction of the courts at ${company.jurisdiction}.`
      }
    ]
  },
  {
    id: 'contact',
    title: 'Contact us',
    blocks: [
      {
        type: 'p',
        text: 'If you have any questions about these Terms, you can reach us at:'
      },
      { type: 'contact' }
    ]
  }
]

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.tc-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.tc-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
`

const Contents = ({ active }) => (
  <ol className='space-y-1'>
    {sections.map((section, index) => {
      const isActive = section.id === active

      return (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
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

  if (block.type === 'privacy') {
    return (
      <p className='mt-4 text-base leading-8 text-slate-600'>
        How we collect and use your personal information is explained in our{' '}
        <Link
          to='/privacy-policy'
          className='font-semibold text-blue-600 underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none'
        >
          Privacy Policy
        </Link>
        , which forms part of these Terms.
      </p>
    )
  }

  if (block.type === 'contact') {
    return (
      <address className='mt-5 space-y-1 border-l-2 border-blue-600 pl-5 text-base not-italic leading-7 text-slate-600'>
        <p className='tc-display font-semibold text-[#0c2347]'>
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

const TandC = () => {
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
    <main className='tc-body bg-white text-slate-900'>
      <style>{css}</style>

      {/* Header */}
      <section className='border-b border-slate-200 bg-[#f4f7fc] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20'>
        <div className='mx-auto max-w-7xl'>
          <h1 className='tc-display max-w-[16ch] text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.03em] text-[#0c2347] sm:text-5xl lg:text-[3.9rem]'>
            Terms and conditions
          </h1>

          <p className='mt-5 max-w-[52ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem]'>
            The rules for using the {company.name} website and working with us.
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
              <summary className='tc-display flex cursor-pointer list-none items-center justify-between px-4 py-3.5 text-base font-medium text-[#0c2347] [&::-webkit-details-marker]:hidden'>
                On this page
                <ChevronDown
                  size={18}
                  aria-hidden='true'
                  className='transition-transform duration-200 group-open:rotate-180'
                />
              </summary>
              <nav
                aria-label='Terms and conditions contents'
                className='max-h-[60vh] overflow-y-auto border-t border-slate-200 p-4'
              >
                <Contents active={active} />
              </nav>
            </details>

            <nav
              aria-label='Terms and conditions contents'
              className='hidden lg:sticky lg:top-28 lg:block lg:max-h-[calc(100dvh-8rem)] lg:overflow-y-auto'
            >
              <p className='tc-display mb-4 text-base font-semibold text-[#0c2347]'>
                On this page
              </p>
              <Contents active={active} />
            </nav>
          </aside>

          {/* Terms text */}
          <article className='max-w-[72ch]'>
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className='scroll-mt-28 border-t border-slate-200 pb-12 pt-10 first:border-t-0 first:pt-0 last:pb-0'
              >
                <h2 className='tc-display flex gap-4 text-2xl font-semibold tracking-[-0.02em] text-[#0c2347] sm:text-[1.75rem]'>
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
              Questions about these terms?{' '}
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

export default TandC
