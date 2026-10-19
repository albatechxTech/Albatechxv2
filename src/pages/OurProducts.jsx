import React from 'react'
import { Rocket, Sparkles, Code2, ArrowUpRight } from 'lucide-react'

const OurProducts = () => {
  return (
    <section className='relative flex min-h-[75vh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-16'>
      {/* Background Decorations */}
      <div className='pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl' />
      <div className='pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl' />

      {/* Main Content */}
      <div className='relative z-10 mx-auto w-full max-w-3xl text-center'>

        {/* Badge */}
        <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-blue-600' />
          </span>

          <span className='text-xs font-bold tracking-[0.18em] text-blue-700'>
            SOMETHING EXCITING IS COMING
          </span>
        </div>

        {/* Heading */}
        <h1 className='text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl'>
          Our Products Are
          <span className='mt-2 block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent'>
            Coming Soon.
          </span>
        </h1>

        {/* Description */}
        <p className='mx-auto mt-6 max-w-xl text-base leading-8 text-slate-500 sm:text-lg'>
          Great ideas are taking shape. We are building innovative digital
          products designed to simplify your work and bring smarter solutions to
          everyday challenges.
        </p>

        {/* Feature Cards */}
        <div className='mt-9 flex flex-wrap items-center justify-center gap-3'>
          <div className='flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm'>
            <span className='text-sm font-medium text-slate-700'>
              Smart Technology
            </span>
          </div>

          <div className='flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm'>
            <span className='text-sm font-medium text-slate-700'>
              Modern Solutions
            </span>
          </div>

          <div className='flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white/80 px-4 py-3 shadow-sm'>
            <span className='text-sm font-medium text-slate-700'>
              Built for You
            </span>
          </div>
        </div>

        {/* Bottom Message */}
        <div className='mt-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-600'>
          <span>Big ideas. Better products.</span>
          <ArrowUpRight size={17} className='text-blue-600' />
        </div>

        {/* Bottom Accent */}
        <div className='mx-auto mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-blue-600 to-violet-600' />
      </div>
    </section>
  )
}

export default OurProducts
