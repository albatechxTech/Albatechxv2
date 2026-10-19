import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import * as Fa from 'react-icons/fa'
import * as Fa6 from 'react-icons/fa6'

/*
  IMPORTANT: replace every placeholder below with your own company details.
  (The screenshot you sent shows another company's contact info, so none of
  that has been copied here.)
*/
const defaultContact = {
  phones: [
    { label: 'Call anytime', value: '+91 89176 55837' },
    { label: 'Customer support', value: '+91 89176 55837' }
  ],
  emails: ['contact@albatechx.com', 'info@albatechx.com'],
  addresses: [{ label: 'Head office', text: 'Bubaneswer, Odisha India' }],
  socials: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/growtern-technology/posts/',
      icon: Fa.FaLinkedinIn
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61595229470062',
      icon: Fa.FaFacebookF
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/albatechx_official/',
      icon: Fa.FaInstagram
    },
    // { name: 'X', href: '#', icon: Fa6.FaXTwitter ?? Fa.FaTwitter }
  ]
}

const interests = ['Development', 'Marketing', 'AI & Automation', 'Products']

const css = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600&family=Instrument+Sans:wght@400;500;600&display=swap');

.ct-display { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }
.ct-body { font-family: 'Instrument Sans', ui-sans-serif, system-ui, sans-serif; }
`

const inputClass =
  'w-full border-0 border-b-2 border-slate-300 bg-transparent px-0 py-2.5 text-base text-[#0c2347] placeholder:text-slate-400 transition-colors duration-200 focus:border-blue-600 focus:outline-none focus:ring-0 aria-[invalid=true]:border-red-500'

const Field = ({ id, label, error, optional, children }) => (
  <div>
    <label
      htmlFor={id}
      className='ct-display text-sm font-medium text-[#0c2347]'
    >
      {label}
      {optional && (
        <span className='ml-1.5 font-normal text-slate-400'>optional</span>
      )}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className='mt-1.5 text-sm text-red-600'>
        {error}
      </p>
    )}
  </div>
)

const telHref = value => `tel:${value.replace(/[^\d+]/g, '')}`

const ContactSection = ({ contact = defaultContact, onSubmit }) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | failed

  const setValue = (key, value) => {
    setValues(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  const validate = () => {
    const next = {}

    if (!values.name.trim()) next.name = 'Please enter your name.'

    if (!values.email.trim()) next.email = 'Please enter your email.'
    else if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next.email = 'This email address does not look right.'

    if (values.phone.trim() && !/^[+\d][\d\s-]{6,}$/.test(values.phone.trim()))
      next.phone = 'Use digits only, for example +91 98765 43210.'

    if (!values.message.trim())
      next.message = 'Please tell us a little about your project.'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (status === 'sending' || !validate()) return

    setStatus('sending')

    try {
      // Connect your backend here (API route, EmailJS, Formspree, etc.)
      // by passing an async onSubmit prop. Without one, nothing is sent.
      await onSubmit?.(values)
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  const reset = () => {
    setValues({ name: '', email: '', phone: '', interest: '', message: '' })
    setErrors({})
    setStatus('idle')
  }

  const errorProps = key => ({
    'aria-invalid': errors[key] ? 'true' : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined
  })

  return (
    <section
      id='contact'
      className='ct-body bg-[#0c2347] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24'
    >
      <style>{css}</style>

      <div className='mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
        {/* LEFT: heading + contact details */}
        <div>
          <h2 className='ct-display max-w-[14ch] text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl'>
            Let's talk about your project.
          </h2>

          <p className='mt-5 max-w-[42ch] text-base leading-7 text-blue-100/80 sm:text-[1.0625rem]'>
            Tell us what you want to build or fix, and we'll get back to you
            with the next steps.
          </p>

          <dl className='mt-10 space-y-8'>
            {/* Phone */}
            <div className='flex gap-4'>
              <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-sky-200'>
                <Phone size={18} />
              </span>
              <div className='grid gap-x-10 gap-y-4 sm:grid-cols-2'>
                {contact.phones.map(phone => (
                  <div key={phone.label}>
                    <dt className='text-sm text-blue-100/70'>{phone.label}</dt>
                    <dd className='mt-1'>
                      <a
                        href={telHref(phone.value)}
                        className='ct-display text-lg font-medium text-white underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none'
                      >
                        {phone.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className='flex gap-4'>
              <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-sky-200'>
                <Mail size={18} />
              </span>
              <div>
                <dt className='text-sm text-blue-100/70'>Email</dt>
                <dd className='mt-1 space-y-1'>
                  {contact.emails.map(email => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className='ct-display block break-all text-lg font-medium text-white underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none'
                    >
                      {email}
                    </a>
                  ))}
                </dd>
              </div>
            </div>

            {/* Address */}
            <div className='flex gap-4'>
              <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/10 text-sky-200'>
                <MapPin size={18} />
              </span>
              <div className='space-y-4'>
                {contact.addresses.map(address => (
                  <div key={address.label}>
                    <dt className='text-sm text-blue-100/70'>
                      {address.label}
                    </dt>
                    <dd className='mt-1 max-w-[38ch] text-base leading-7 text-white'>
                      {address.text}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </dl>

          {/* Social */}
          <div className='mt-10 flex items-center gap-3'>
            <p className='mr-1 text-sm text-blue-100/70'>Follow us</p>
            {contact.socials.map(social => {
              const Icon = social.icon
              if (!Icon) return null

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noreferrer'
                  aria-label={social.name}
                  className='flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#0c2347] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        {/* RIGHT: form */}
        <div className='relative mb-3 mr-3 sm:mb-4 sm:mr-4'>
          <div
            aria-hidden='true'
            className='absolute left-3 top-3 h-full w-full rounded-tl-[40px] rounded-br-[40px] rounded-bl-md rounded-tr-md bg-blue-600 sm:left-4 sm:top-4'
          />

          <div className='relative rounded-tl-[40px] rounded-br-[40px] rounded-bl-md rounded-tr-md bg-white p-6 sm:p-10'>
            <AnimatePresence mode='wait' initial={false}>
              {status === 'sent' ? (
                <motion.div
                  key='sent'
                  role='status'
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className='flex min-h-[420px] flex-col items-start justify-center'
                >
                  <CheckCircle2 size={40} className='text-blue-600' />
                  <h3 className='ct-display mt-6 text-3xl font-semibold tracking-[-0.02em] text-[#0c2347]'>
                    Thanks, {values.name.trim().split(' ')[0]}.
                  </h3>
                  <p className='mt-3 max-w-[40ch] text-base leading-7 text-slate-600'>
                    We've received your message and will get back to you at{' '}
                    {values.email.trim()}.
                  </p>
                  <button
                    type='button'
                    onClick={reset}
                    className='mt-8 rounded-md border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[#0c2347] transition-colors duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key='form'
                  noValidate
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className='space-y-7'
                >
                  <div className='grid gap-7 sm:grid-cols-2'>
                    <Field id='ct-name' label='Name' error={errors.name}>
                      <input
                        id='ct-name'
                        type='text'
                        autoComplete='name'
                        value={values.name}
                        onChange={e => setValue('name', e.target.value)}
                        placeholder='Your full name'
                        className={inputClass}
                        {...errorProps('name')}
                      />
                    </Field>

                    <Field id='ct-email' label='Email' error={errors.email}>
                      <input
                        id='ct-email'
                        type='email'
                        autoComplete='email'
                        value={values.email}
                        onChange={e => setValue('email', e.target.value)}
                        placeholder='you@company.com'
                        className={inputClass}
                        {...errorProps('email')}
                      />
                    </Field>
                  </div>

                  <Field
                    id='ct-phone'
                    label='Phone'
                    optional
                    error={errors.phone}
                  >
                    <input
                      id='ct-phone'
                      type='tel'
                      autoComplete='tel'
                      value={values.phone}
                      onChange={e => setValue('phone', e.target.value)}
                      placeholder='+91 98765 43210'
                      className={inputClass}
                      {...errorProps('phone')}
                    />
                  </Field>

                  {/* What do you need */}
                  <fieldset>
                    <legend className='ct-display text-sm font-medium text-[#0c2347]'>
                      What do you need help with?
                      <span className='ml-1.5 font-normal text-slate-400'>
                        optional
                      </span>
                    </legend>

                    <div className='mt-3 flex flex-wrap gap-2'>
                      {interests.map(option => {
                        const selected = values.interest === option

                        return (
                          <button
                            key={option}
                            type='button'
                            aria-pressed={selected}
                            onClick={() =>
                              setValue('interest', selected ? '' : option)
                            }
                            className={`rounded-md border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                              selected
                                ? 'border-blue-600 bg-blue-600 text-white'
                                : 'border-slate-300 text-slate-600 hover:border-blue-600 hover:text-blue-600'
                            }`}
                          >
                            {option}
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>

                  <Field id='ct-message' label='Message' error={errors.message}>
                    <textarea
                      id='ct-message'
                      rows={4}
                      value={values.message}
                      onChange={e => setValue('message', e.target.value)}
                      placeholder='A few lines about what you are looking for'
                      className={`${inputClass} resize-none`}
                      {...errorProps('message')}
                    />
                  </Field>

                  {status === 'failed' && (
                    <p role='alert' className='text-sm text-red-600'>
                      Your message could not be sent. Please try again, or email
                      us directly.
                    </p>
                  )}

                  <button
                    type='submit'
                    disabled={status === 'sending'}
                    className='group flex w-full items-stretch overflow-hidden rounded-md bg-blue-600 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-70 sm:inline-flex sm:w-auto'
                  >
                    <span className='flex-1 px-6 py-3.5 text-center'>
                      {status === 'sending' ? 'Sending…' : 'Send message'}
                    </span>
                    <span className='flex w-12 items-center justify-center border-l border-white/25 bg-blue-700 transition-colors duration-200 group-hover:bg-[#0c2347]'>
                      <ArrowUpRight
                        size={18}
                        className='transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                      />
                    </span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
