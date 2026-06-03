import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import BookingButton from '../components/BookingButton'

const values = [
  {
    icon: '🤝',
    title: 'Community',
    desc: 'We foster a warm, inclusive community where students from all 77 districts of Nepal feel welcome and supported. Friendships made here last a lifetime.',
  },
  {
    icon: '🔐',
    title: 'Safety',
    desc: '24/7 security, CCTV surveillance, and strict entry protocols ensure every student feels safe. Your parents can sleep peacefully knowing you are with us.',
  },
  {
    icon: '✨',
    title: 'Cleanliness',
    desc: 'Rooms, bathrooms, and common areas are cleaned daily. We maintain strict hygiene standards so you can focus on your studies, not housekeeping.',
  },
  {
    icon: '💰',
    title: 'Affordability',
    desc: 'We believe quality accommodation should not break the bank. Our pricing is designed specifically for students on a budget — transparent, fair, and competitive.',
  },
]

const team = [
  {
    name: 'Ram Bahadur Shrestha',
    role: 'Hostel Manager',
    desc: 'With over 8 years of experience in student accommodation, Ram ji oversees day-to-day operations and ensures every resident is comfortable.',
    initial: 'R',
  },
  {
    name: 'Sita Kumari Tamang',
    role: 'Kitchen Supervisor',
    desc: 'Sita ji leads our kitchen team with passion and expertise in traditional Nepali cooking. She makes sure every meal is nutritious and tastes like home.',
    initial: 'S',
  },
  {
    name: 'Binod Karki',
    role: 'Security In-Charge',
    desc: 'Binod ji and his team ensure the safety of all residents 24/7. His calm, professional approach keeps the hostel secure at all times.',
    initial: 'B',
  },
]

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About Us — Success Home Boys Hostel, Dillibazar Kathmandu</title>
        <meta name="description" content="Learn about Success Home Boys Hostel — our story, mission, values, and the team behind the best student hostel in Dillibazar, Kathmandu." />
      </Head>

      <PageHero
        title="About Success Home Boys Hostel"
        subtitle="A story built on care, community, and a commitment to student success."
        image="/fronthostel.jpg"
        breadcrumb="About"
      />

      {/* ── STORY SECTION ── */}
      <section id="about" className="section-padding bg-cream ">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <span className="green-badge mb-4 inline-block">Our Story</span>
              <h2 className="section-heading mb-6">
                From a Dream to a<br />
                <span className="text-green-600">Home for Hundreds</span>
              </h2>
              <div className="space-y-4 text-earth font-body leading-relaxed">
                <p>
                  Success Home Boys Hostel was founded with a simple but powerful mission: to provide students
                  coming from outside the Kathmandu Valley with a safe, clean, and affordable place to
                  stay while they pursue their dreams through education.
                </p>
                <p>
                  Every year, thousands of bright young students from districts like Pokhara, Butwal,
                  Dharan, Hetauda, Dhangadi, and beyond journey to Kathmandu for higher education.
                  Finding good, trustworthy accommodation is one of their biggest challenges.
                </p>
                <p>
                  We started with a handful of rooms and a big heart. Over the years, through word of
                  mouth and the trust of our residents, we have grown into one of Dillibazar's most
                  respected student hostels — all while keeping our family-like atmosphere intact.
                </p>
                <p>
                  Today, over 1000 students call Success Home Boys Hostel their home. We are proud of every
                  success story that started within our walls.
                </p>
              </div>

              <div className="mt-8 flex gap-4 flex-wrap">
                <BookingButton label="Book Your Bed" />
                <a
                  href="https://www.facebook.com/share/p/14arE9KLiJH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Visit Facebook Page
                </a>
              </div>
            </div>

            <div className="reveal">
              <div className="relative">
                <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-card-hover">
                  <Image
                    src="/outdoor2.jpg"
                    alt="Students studying at Success Home Boys Hostel"
                    fill
                    sizes='100vw'
                    className="object-cover"
                  />
                </div>
                {/* Floating stats */}
                <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 shadow-card">
                  <p className="font-display font-bold text-green-700 text-3xl">10+ Years</p>
                  <p className="text-earth text-sm font-body">of serving students</p>
                </div>
                <div className="absolute -top-5 -right-5 bg-green-600 rounded-2xl p-5 shadow-green text-white">
                  <p className="font-display font-bold text-3xl">1000+</p>
                  <p className="text-green-200 text-sm font-body">happy residents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section-padding bg-gradient-green text-white">
        <div className="container-custom text-center max-w-3xl mx-auto reveal">
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-6 font-body">Our Mission</span>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl mb-6 leading-tight">
            Empowering Students to<br />Focus on What Matters Most
          </h2>
          <p className="text-green-100 text-lg font-body leading-relaxed mb-8">
            Our mission is to remove the stress of accommodation from students' lives, so they can
            invest all their energy into their education, friendships, and growth. We provide more
            than a bed — we provide a foundation for your success.
          </p>
          <p className="font-display text-2xl text-green-300 italic">
            "Live. Study. Thrive."
          </p>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14 reveal">
            <span className="green-badge mb-4 inline-block">Our Values</span>
            <h2 className="section-heading mb-4">What We Stand For</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Four core values guide everything we do at Success Home Boys Hostel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="reveal card p-7 text-center hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
                  {v.icon}
                </div>
                <h3 className="font-display font-bold text-green-900 text-xl mb-3">{v.title}</h3>
                <p className="text-earth text-sm font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-14 reveal">
            <span className="green-badge mb-4 inline-block">Our Team</span>
            <h2 className="section-heading mb-4">The People Behind Success Home Boys</h2>
            <p className="section-subheading max-w-xl mx-auto">
              A dedicated team that works tirelessly to make your stay comfortable, safe, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="reveal card p-7 text-center hover:-translate-y-1"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-green rounded-full flex items-center justify-center text-white font-display font-bold text-3xl mx-auto mb-5 shadow-green">
                  {member.initial}
                </div>
                <h3 className="font-display font-bold text-green-900 text-xl mb-1">{member.name}</h3>
                <p className="green-badge mb-4 inline-block">{member.role}</p>
                <p className="text-earth text-sm font-body leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACEBOOK REFERENCE ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center reveal">
            <div className="card p-10 bg-green-50 border border-green-100">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-green-900 text-2xl mb-3">Follow Us on Facebook</h3>
              <p className="text-earth font-body leading-relaxed mb-6">
                Stay updated with latest news, availability updates, student events, and more on our official Facebook page. You can also send us a direct message for quick inquiries!
              </p>
              <a
                href="https://www.facebook.com/share/p/14arE9KLiJH/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Visit Our Facebook Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
