import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import { facilities } from '../data/hostelData'

export default function Facilities() {
  return (
    <Layout>
      <Head>
        <title>Facilities & Services — Success Home Boys Hostel Kathmandu</title>
        <meta name="description" content="Explore all facilities at Success Home Boys Hostel — WiFi, meals, security, study room, laundry, and more. Everything a student needs." />
      </Head>

      <PageHero
        title="Facilities & Services"
        subtitle="Everything you need for a comfortable, productive student life — all under one roof."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
        breadcrumb="Facilities"
      />

      {/* ── INTRO ── */}
      <section className="py-12 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-earth font-body text-lg leading-relaxed">
              At Success Home Boys Hostel, we believe every student deserves the best possible environment to study
              and grow. That's why we have invested in facilities that make daily life easy, comfortable, and
              enjoyable — so you can focus on your education.
            </p>
          </div>
        </div>
      </section>

      {/* ── FACILITIES GRID ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, i) => (
              <div
                key={facility.id}
                className="reveal card p-7 hover:-translate-y-1 flex gap-5"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-green-900 text-lg mb-2">{facility.title}</h3>
                  <p className="text-earth font-body text-sm leading-relaxed">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED FACILITIES (detailed) ── */}

      {/* Meals */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <span className="green-badge mb-4 inline-block">Food & Kitchen</span>
              <h2 className="section-heading mb-5">Taste of Home, Every Day</h2>
              <p className="text-earth font-body leading-relaxed mb-4">
                We know how much it means to have a good meal after a long day of classes. Our kitchen
                serves freshly cooked, nutritious Nepali meals — including the beloved dal bhat tarkari —
                that taste just like what you get at home.
              </p>
              <p className="text-earth font-body leading-relaxed mb-6">
                Optional meal plans are available at affordable rates. The shared kitchen is also open
                for residents who prefer to cook their own meals.
              </p>
              <ul className="space-y-2">
                {[
                  'Fresh dal bhat tarkari daily',
                  'Hygienic cooking environment',
                  'Optional meal plans available',
                  'Clean, well-equipped shared kitchen',
                  'Dining area for group meals',
                  'Vegetarian options always available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-earth font-body text-sm">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="/kitchen.jpg"
                alt="Hostel kitchen"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Study Room */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-card-hover order-2 lg:order-1">
              <Image
                src="/room/outdoor.jpg"
                alt="Study room"
                fill
                className="object-cover"
              />
            </div>
            <div className="reveal order-1 lg:order-2">
              <span className="green-badge mb-4 inline-block">Study & Focus</span>
              <h2 className="section-heading mb-5">A Space Designed for Learning</h2>
              <p className="text-earth font-body leading-relaxed mb-4">
                Our dedicated study room is designed to help you concentrate and achieve your academic
                goals. With good lighting, comfortable seating, and a quiet environment, it's the
                perfect place to prepare for exams or work on assignments.
              </p>
              <p className="text-earth font-body leading-relaxed mb-6">
                With free high-speed WiFi throughout the hostel, you can attend online classes, do
                research, and connect with classmates without any interruptions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '📚', label: 'Quiet Study Room' },
                  { icon: '📶', label: 'Unlimited WiFi' },
                  { icon: '💡', label: 'Good Lighting' },
                  { icon: '🪑', label: 'Comfortable Seating' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 bg-green-50 rounded-xl p-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-green-900 font-semibold text-sm font-body">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding bg-gradient-green text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-6 font-body">Safety & Security</span>
              <h2 className="font-display font-bold text-white text-3xl md:text-5xl mb-5 leading-tight">
                Your Safety is Our<br />Top Priority
              </h2>
              <p className="text-green-100 font-body leading-relaxed mb-6">
                We understand that being far from home can be worrying — for both you and your family.
                That's why we have invested heavily in security systems and trained staff to ensure you
                feel safe at all times.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🔒', label: '24/7 Security Guards' },
                  { icon: '📹', label: 'CCTV Surveillance' },
                  { icon: '🚪', label: 'Secure Entry System' },
                  { icon: '🆘', label: 'Emergency Contacts' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex gap-3 items-center">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white font-semibold text-sm font-body">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
                <p className="font-display font-bold text-white text-6xl mb-3">24/7</p>
                <p className="text-green-200 text-xl font-body mb-8">Always Watching. Always Safe.</p>
                <p className="text-green-100 font-body text-sm leading-relaxed">
                  Our security team works round the clock. CCTV cameras cover all key areas.
                  All visitors are logged. You can share our security details with your parents
                  so they know you are in safe hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding bg-cream text-center">
        <div className="container-custom max-w-2xl reveal">
          <span className="green-badge mb-4 inline-block">Ready to Join?</span>
          <h2 className="section-heading mb-4">Experience All These Facilities</h2>
          <p className="section-subheading mb-7">
            Come visit us in Dillibazar or contact us to learn more about our facilities and available rooms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Book a Visit</Link>
            <Link href="/prices" className="btn-outline">View Pricing</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
