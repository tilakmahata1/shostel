import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import RoomCard from '../components/RoomCard'
import TestimonialCard from '../components/TestimonialCard'
import BookingButton from '../components/BookingButton'
import { rooms, testimonials } from '../data/hostelData'

const highlights = [
  { icon: '📶', label: 'Free WiFi' },
  { icon: '🍽️', label: 'Quality Meals' },
  { icon: '🔒', label: 'Safe & Secure' },
  { icon: '📚', label: 'Study Room' },
  { icon: '💰', label: 'Affordable' },
  { icon: '📍', label: 'Central Location' },
]

const whyChooseUs = [
  {
    icon: '🏠',
    title: 'Home-Like Comfort',
    desc: 'Clean, cozy rooms with quality mattresses and bedding. You will feel right at home from day one.',
  },
  {
    icon: '🍛',
    title: 'Nutritious Nepali Meals',
    desc: 'Enjoy fresh dal bhat and healthy meals daily — just like your mother makes. Optional meal plans available.',
  },
  {
    icon: '🔐',
    title: 'Safety First',
    desc: '24/7 security staff, CCTV surveillance, and secure entry. Your safety is our top priority.',
  },
  {
    icon: '📶',
    title: 'Super-Fast WiFi',
    desc: 'Unlimited high-speed internet throughout the hostel. Perfect for assignments, online classes, and research.',
  },
  {
    icon: '📍',
    title: 'Prime Location',
    desc: 'Located in Dillibazar — walking distance from major colleges, hospitals, and transport hubs.',
  },
  {
    icon: '💵',
    title: 'Student-Friendly Pricing',
    desc: 'Transparent, affordable pricing starting from NPR 4,000/month. No hidden charges.',
  },
]

export default function Home() {
  const featuredRooms = rooms.slice(0, 3)
  const revealRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <Layout>
      <Head>
        <title>Success Boys Hostel — Your Study Home in Kathmandu</title>
        <meta name="description" content="Affordable, safe, and clean student hostel in Dillibazar, Kathmandu. Perfect for students from across Nepal." />
      </Head>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-black/50">
          <Image
            src="/fronthostel.jpg"
            alt="Success Boys Hostel"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-emerald-900/60 to-black/40" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-green-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-green-300/10 rounded-full blur-2xl" />

        {/* Hero content */}
        <div className="relative z-30 container-custom text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-200 px-4 py-1.5 rounded-full text-sm font-body font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Accepting Students for 2082/2083 BS
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Home Away<br />
            <span className="text-green-300">From Home</span><br />
            in Kathmandu
          </h1>

          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-body">
            Safe, clean, and affordable student accommodation in Dillibazar — the heart of Kathmandu.
            Join 100+ students from across Nepal who call Success Boys Hostel their study home.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <BookingButton label="Book Now" size="lg" />
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm font-body"
            >
              View Rooms
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { num: '100+', label: 'Happy Students' },
              { num: '5+', label: 'Years Running' },
              { num: '4.9★', label: 'Average Rating' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <p className="font-display font-bold text-white text-2xl">{stat.num}</p>
                <p className="text-green-200 text-xs font-body mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
       
      </section>

      {/* ── HIGHLIGHTS BAR ── */}
      <section className="bg-green-600 py-5">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2 text-white font-body">
                <span className="text-xl">{h.icon}</span>
                <span className="font-semibold text-sm tracking-wide">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ROOMS ── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-14 reveal">
            <span className="green-badge mb-4 inline-block">Our Rooms</span>
            <h2 className="section-heading mb-4">Comfortable Rooms for Every Budget</h2>
            <p className="section-subheading max-w-2xl mx-auto">
              From budget-friendly 6-bed dorms to semi-private 2-bed rooms — find the perfect space for your student life in Kathmandu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredRooms.map((room, i) => (
              <div key={room.id} className={`reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <RoomCard room={room} />
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link href="/rooms" className="btn-outline">
              View All Rooms & Pricing
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <div className="reveal relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-card-hover">
                <Image
                  src="/room/outdoor.jpg"
                  alt="Why choose Success Boys Hostel"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-2xl p-5 shadow-green">
                {/* <p className="font-display font-bold text-3xl">NPR 4,0</p>
                <p className="font-body text-green-200 text-sm">Starting from / month</p> */}
              </div>
            </div>

            {/* Right: features */}
            <div>
              <div className="reveal">
                <span className="green-badge mb-4 inline-block">Why Us</span>
                <h2 className="section-heading mb-4">
                  More Than Just a Hostel —<br />
                  <span className="text-green-600">A Second Home</span>
                </h2>
                <p className="section-subheading mb-8">
                  We understand what students from outside Kathmandu Valley need — safety, affordability, good food, and a community that feels like family.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyChooseUs.map((item, i) => (
                  <div
                    key={item.title}
                    className="reveal flex gap-3 p-4 rounded-xl hover:bg-green-50 transition-colors"
                    style={{ transitionDelay: `${i * 0.07}s` }}
                  >
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-display font-semibold text-green-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-earth text-xs font-body leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section-padding bg-gradient-light">
        <div className="container-custom">
          <div className="text-center mb-14 reveal">
            <span className="green-badge mb-4 inline-block">Student Reviews</span>
            <h2 className="section-heading mb-4">What Our Students Say</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Real stories from real students who found their home away from home at Success Boys Hostel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.id} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      {/* <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-14 reveal">
            <span className="green-badge mb-4 inline-block">Gallery</span>
            <h2 className="section-heading mb-4">Take a Look Inside</h2>
            <p className="section-subheading max-w-xl mx-auto">
              See our rooms, facilities, and the vibrant student community at Success Boys Hostel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80',
              'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
              'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
              'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80',
              'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80',
              'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
            ].map((src, i) => (
              <div
                key={i}
                className={`reveal relative overflow-hidden rounded-2xl group cursor-pointer ${
                  i === 0 ? 'row-span-2 h-64 md:h-auto' : 'h-40 md:h-48'
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/30 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center reveal">
            <Link href="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section> */}

      {/* ── LOCATION ── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-14 reveal">
            <span className="green-badge mb-4 inline-block">Our Location</span>
            <h2 className="section-heading mb-4">Find Us in Dillibazar</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Conveniently located in Dillibazar, Kathmandu — near major colleges, hospitals, and transport links.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center reveal">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-card h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3563!2d85.3240!3d27.7080!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a571a5b77%3A0x8dcb8985ac78ff49!2sDillibazar%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Success Boys Hostel Location"
              />
            </div>

            {/* Address info */}
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-green-900 mb-1">Address</h4>
                    <p className="text-earth font-body text-sm leading-relaxed">
                      Success Boys Hostel<br />
                      Dillibazar, Kathmandu<br />
                      Bagmati Province, Nepal
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="card p-5">
                  <span className="text-2xl block mb-2">🕐</span>
                  <h5 className="font-display font-semibold text-green-900 text-sm mb-1">Office Hours</h5>
                  <p className="text-earth text-xs font-body">Sun–Fri: 7am–9pm<br />Sat: 8am–6pm</p>
                </div>
                <div className="card p-5">
                  <span className="text-2xl block mb-2">📞</span>
                  <h5 className="font-display font-semibold text-green-900 text-sm mb-1">Call Us</h5>
                  <p className="text-earth text-xs font-body">+977-9841-XXXXXX<br />+977-01-XXXXXXX</p>
                </div>
              </div>

              <div className="card p-5 bg-green-50 border border-green-100">
                <p className="text-green-800 text-sm font-body leading-relaxed">
                  <span className="font-semibold">🚌 Nearby landmarks:</span> Dillibazar Chowk, near major hospitals and colleges. Easily accessible by public micro-bus from Ratnapark and Kalanki.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-green py-16 md:py-20">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-white text-3xl md:text-5xl mb-5 leading-tight">
              Ready to Join Our<br />Hostel Family?
            </h2>
            <p className="text-green-100 text-lg font-body mb-8 leading-relaxed">
              Don't let accommodation be a barrier to your education. Contact us today and secure your bed before it's too late!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <BookingButton label="Contact Us Today" variant="white" size="lg" />
              <a
                href="https://www.facebook.com/share/p/14arE9KLiJH/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold font-body transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Message on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
