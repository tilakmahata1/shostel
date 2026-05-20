import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import { pricingPlans } from '../data/hostelData'

const faqs = [
  {
    q: 'Is there a security deposit required?',
    a: 'Yes, a refundable security deposit of NPR 2,000–3,000 is required at the time of check-in, depending on the room type. This is fully refunded when you vacate, provided there is no damage to the property.',
  },
  {
    q: 'How do I pay the monthly rent?',
    a: 'Monthly rent is payable on or before the 7th of each Nepali month. You can pay via cash, eSewa, Khalti, or direct bank transfer. We provide a receipt for all payments.',
  },
  {
    q: 'Are meals included in the room price?',
    a: 'Basic room prices do not include meals. However, we offer affordable optional meal plans. Dal bhat (lunch + dinner) is available at approximately NPR 80–100 per meal, or you can opt for a monthly meal plan.',
  },
  {
    q: 'What is the minimum stay duration?',
    a: 'The minimum recommended stay is one month. Short stays (weekly) may be available depending on room availability — please contact us to inquire.',
  },
  {
    q: 'Can I bring my own furniture or appliances?',
    a: 'Small personal items like reading lamps, small fans, or bedside organizers are generally allowed. Large furniture or cooking appliances in rooms are not permitted for safety reasons.',
  },
  {
    q: 'Is the hostel only for boys/males?',
    a: 'Yes, Success Boys Hostel is exclusively for male students. We maintain this policy to ensure the comfort and safety of all residents.',
  },
  {
    q: 'What are the hostel rules regarding guests and visitors?',
    a: 'Guests and visitors are allowed in the common areas only, between 8am and 8pm. Overnight guests are strictly not permitted for the safety and privacy of all residents.',
  },
  {
    q: 'Is there a curfew?',
    a: 'We have a soft curfew of 10pm on weekdays and 11pm on weekends. If you need to come in later due to studies or exams, please inform the management in advance.',
  },
  {
    q: 'What happens if I want to vacate early?',
    a: 'We require one month\'s advance notice before vacating. If you leave without notice, the security deposit may not be fully refunded. We try to be flexible for genuine cases.',
  },
  {
    q: 'Do you have availability for the upcoming academic year?',
    a: 'Availability changes frequently. Please contact us directly via phone, Facebook, or our inquiry form for the most current availability status.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-green-100 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-green-50 transition-colors"
      >
        <span className="font-display font-semibold text-green-900 pr-4">{faq.q}</span>
        <span className={`w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}>
          <svg className="w-4 h-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-earth font-body text-sm leading-relaxed border-t border-green-100 pt-4">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function Prices() {
  return (
    <Layout>
      <Head>
        <title>Pricing — Success Boys Hostel Kathmandu</title>
        <meta name="description" content="Affordable hostel pricing in Kathmandu. Student-friendly monthly rates starting from NPR 4,000. Transparent pricing with no hidden fees." />
      </Head>

      <PageHero
        title="Simple, Transparent Pricing"
        subtitle="Student-friendly rates with no hidden fees. Choose the plan that suits your budget."
        image="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1400&q=80"
        breadcrumb="Pricing"
      />

      {/* ── PRICING CARDS ── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-14 reveal">
            <span className="green-badge mb-4 inline-block">Monthly Rates</span>
            <h2 className="section-heading mb-4">Find Your Perfect Plan</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              All prices are per person per month in Nepali Rupees (NPR). Includes WiFi, security, and access to all common areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan, i) => (
              <div
                key={plan.id}
                className={`reveal rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'shadow-green ring-2 ring-green-500'
                    : 'shadow-card'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="bg-green-600 text-white text-xs font-bold text-center py-2 font-body tracking-wide uppercase">
                    ⭐ Most Popular
                  </div>
                )}

                <div className={`flex-1 p-6 flex flex-col ${plan.popular ? 'bg-white' : 'bg-white'}`}>
                  <h3 className="font-display font-bold text-green-900 text-xl mb-4">{plan.name}</h3>

                  <div className="mb-6">
                    <span className="font-display font-bold text-green-700 text-4xl">NPR {plan.price.toLocaleString()}</span>
                    <span className="text-earth font-body text-sm ml-1">/ month</span>
                  </div>

                  {/* Included */}
                  <div className="flex-1 space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-green-800 font-body">
                        <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-gray-400 font-body">
                        <svg className="w-4 h-4 text-gray-300 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {f}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className={`text-center py-3 rounded-full font-semibold font-body text-sm transition-all ${
                      plan.popular
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-green'
                        : 'border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white'
                    }`}
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 text-center reveal">
            <div className="inline-block bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 max-w-2xl">
              <p className="text-amber-800 font-body text-sm leading-relaxed">
                <span className="font-semibold">💡 Note:</span> Prices listed are per person per month. A refundable security deposit applies. Meal plans are available as add-ons. Prices may vary slightly — please contact us for the most current rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S ALWAYS INCLUDED ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 reveal">
            <span className="green-badge mb-4 inline-block">Included in All Plans</span>
            <h2 className="section-heading mb-4">What You Always Get</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '📶', label: 'Free WiFi' },
              { icon: '🔒', label: '24/7 Security' },
              { icon: '📹', label: 'CCTV' },
              { icon: '📚', label: 'Study Room' },
              { icon: '🛋️', label: 'Common Lounge' },
              { icon: '💡', label: 'Electricity' },
            ].map((item, i) => (
              <div key={item.label} className="reveal card p-5 text-center hover:-translate-y-1" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="text-green-900 font-semibold text-xs font-body">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPTIONAL ADD-ONS ── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12 reveal">
            <span className="green-badge mb-4 inline-block">Add-Ons</span>
            <h2 className="section-heading mb-4">Optional Services</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Enhance your stay with affordable add-on services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: '🍽️',
                title: 'Meal Plan',
                price: 'NPR 2,500–3,500',
                period: '/month',
                desc: 'Dal bhat lunch and dinner every day. Fresh, nutritious, and just like home cooking.',
              },
              {
                icon: '👕',
                title: 'Laundry Service',
                price: 'NPR 500',
                period: '/month',
                desc: 'Weekly laundry service — clothes washed, dried, and folded.',
              },
              {
                icon: '🔐',
                title: 'Private Locker Upgrade',
                price: 'NPR 200',
                period: '/month',
                desc: 'Upgrade to a larger personal locker for extra storage and security.',
              },
            ].map((item, i) => (
              <div key={item.title} className="reveal card p-6 hover:-translate-y-1" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-green-900 text-lg mb-1">{item.title}</h3>
                <p className="font-body text-green-700 font-bold mb-2">
                  {item.price}<span className="text-earth font-normal text-sm">{item.period}</span>
                </p>
                <p className="text-earth font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14 reveal">
            <span className="green-badge mb-4 inline-block">FAQ</span>
            <h2 className="section-heading mb-4">Frequently Asked Questions</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Got questions? We have answers. If you don't find what you need, feel free to contact us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <FAQItem faq={faq} index={i} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <p className="text-earth font-body mb-4">Still have questions?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <a
                href="https://www.facebook.com/share/p/14arE9KLiJH/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Message on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
