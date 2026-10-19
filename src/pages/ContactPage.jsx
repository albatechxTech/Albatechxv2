import { Plus } from 'lucide-react'
import ContactSection from '../components/Contactsection'



const steps = [
  {
    number: '01',
    title: 'You send a message',
    description:
      'Tell us what you want to build, improve or automate. A few lines is enough.'
  },
  {
    number: '02',
    title: 'We get in touch',
    description:
      'We reach out to understand your business, your goals and what you need.'
  },
  {
    number: '03',
    title: 'We suggest an approach',
    description:
      'We recommend the right solution and define the scope of the project with you.'
  }
]

const faqs = [
  {
    question: 'What kind of projects do you take on?',
    answer:
      'We work on websites, custom software and web applications, digital marketing and social media, AI and business automation, and IT products and solutions.'
  },
  {
    question: "Can I contact you if I'm not sure what I need?",
    answer:
      'Yes. Describe the problem you want to solve or the goal you have, and we will help you work out which solution fits.'
  },
  {
    question: 'How do I get a quote?',
    answer:
      'Send us a message with some details about your project. We will discuss the scope with you and share an estimate based on what you need.'
  },
  {
    question: 'Do you offer support after launch?',
    answer:
      'Yes. We provide maintenance and technical support after launch, as agreed for your project.'
  }
]

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.cp-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.cp-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
`

// TODO: connect your backend here. This receives
// { name, email, phone, interest, message } and must throw if sending fails.
// Example:
//   const res = await fetch('/api/contact', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(values)
//   })
//   if (!res.ok) throw new Error('Failed to send')
const handleSubmit = async values => {
  console.log('Contact form submitted:', values)
}

const ContactPage = () => {
  return (
    <main className='cp-body'>
      <style>{css}</style>

      {/* Contact form + details (this is the hero of the page) */}
      <ContactSection
        headingLevel='h1'
        title="Let's talk about your project."
        description="Tell us what you want to build or fix, and we'll get back to you with the next steps."
        onSubmit={handleSubmit}
      />

      {/* What happens next */}
      <section className='bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16'>
            <h2 className='cp-display max-w-[16ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
              What happens after you write to us.
            </h2>

            <p className='max-w-[46ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem] lg:justify-self-end'>
              No long forms and no pressure. Here is how a conversation with us
              usually goes.
            </p>
          </div>

          <ol className='mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-3 lg:mt-16'>
            {steps.map(step => (
              <li
                key={step.number}
                className='relative border-t border-slate-200 pt-6'
              >
                <span
                  aria-hidden='true'
                  className='absolute -top-px left-0 h-[2px] w-12 bg-blue-600'
                />

                <span className='cp-display text-sm font-medium tabular-nums text-blue-600'>
                  {step.number}
                </span>

                <h3 className='cp-display mt-5 text-xl font-semibold text-[#0c2347]'>
                  {step.title}
                </h3>

                <p className='mt-2 max-w-[34ch] text-[0.9375rem] leading-7 text-slate-600'>
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className='bg-[#f4f7fc] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'>
        <div className='mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
          <div>
            <h2 className='cp-display max-w-[14ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0c2347] sm:text-5xl'>
              Questions you may have.
            </h2>

            <p className='mt-5 max-w-[40ch] text-base leading-7 text-slate-600 sm:text-[1.0625rem]'>
              Can't find your answer here? Send us a message and we'll help.
            </p>

            <a
              href='#contact'
              className='mt-7 inline-flex items-center gap-2 border-b-2 border-blue-600 pb-0.5 text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700 focus-visible:outline-none'
            >
              Ask us directly
            </a>
          </div>

          <div className='border-t border-slate-300'>
            {faqs.map(item => (
              <details
                key={item.question}
                className='group border-b border-slate-300'
              >
                <summary className='cp-display flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium text-[#0c2347] transition-colors duration-200 hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden'>
                  {item.question}
                  <Plus
                    size={20}
                    aria-hidden='true'
                    className='shrink-0 text-blue-600 transition-transform duration-200 group-open:rotate-45'
                  />
                </summary>

                <p className='max-w-[60ch] pb-6 pr-10 text-base leading-7 text-slate-600'>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
