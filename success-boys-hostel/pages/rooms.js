import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import { rooms } from '../data/hostelData'

function RoomModal({ room, onClose }) {
  if (!room) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative h-64 rounded-t-3xl overflow-hidden">
          <Image src={room.image} alt={room.type} fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <span className={`text-sm font-semibold px-3 py-1 rounded-full font-body ${room.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {room.available ? '✓ Available' : '✗ Currently Full'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-700 shadow-md"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="font-display font-bold text-green-900 text-2xl">{room.type}</h2>
              <p className="text-earth font-body text-sm mt-1">{room.beds} bed{room.beds > 1 ? 's' : ''} per room</p>
            </div>
            <div className="text-right">
              <p className="font-display font-bold text-green-700 text-2xl">NPR {room.priceMonthly.toLocaleString()}</p>
              <p className="text-earth font-body text-xs">/month</p>
              <p className="text-earth font-body text-xs">NPR {room.priceNightly.toLocaleString()}/night</p>
            </div>
          </div>

          <p className="text-earth font-body leading-relaxed mb-5">{room.details}</p>

          <div className="mb-5">
            <h4 className="font-display font-semibold text-green-900 mb-3">Included Amenities</h4>
            <div className="grid grid-cols-2 gap-2">
              {room.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2 text-sm text-earth font-body">
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {a}
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Link href="/contact" className="flex-1 btn-primary justify-center">
              {room.available ? 'Inquire Now' : 'Join Waitlist'}
            </Link>
            <button onClick={onClose} className="px-5 py-2.5 border border-green-200 text-green-700 rounded-full font-semibold text-sm hover:bg-green-50 transition-colors font-body">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null)

  return (
    <Layout>
      <Head>
        <title>Rooms — Success Home Boys Hostel Kathmandu</title>
        <meta name="description" content="Explore our range of affordable rooms at Success Home Boys Hostel in Dillibazar, Kathmandu. 2-bed, 4-bed, 6-bed dorms, and private rooms." />
      </Head>

      <PageHero
        title="Our Rooms"
        subtitle="From budget-friendly dorms to private rooms — comfortable, clean, and designed for student life."
        image="/outdoor.jpg"
        breadcrumb="Rooms"
      />

      {/* ── INTRO ── */}
      <section className="py-12 bg-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center reveal">
            <p className="text-earth font-body text-lg leading-relaxed">
              Every room at Success Home Boys Hostel is designed with student needs in mind — quality mattresses,
              adequate storage, good ventilation, and access to all shared facilities. Choose the option that
              fits your budget and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* ── ROOMS GRID ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, i) => (
              <div
                key={room.id}
                className="reveal card overflow-hidden group"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.type}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full font-body ${room.available ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                      {room.available ? '✓ Available' : '✗ Full'}
                    </span>
                    {room.badge && (
                      <span className="bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full font-body">
                        {room.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-green-900 text-xl">{room.type}</h3>
                      <p className="text-earth font-body text-sm mt-0.5">{room.beds} bed{room.beds > 1 ? 's' : ''} per room</p>
                    </div>
                    <div className="text-right">
                      {/* <p className="font-display font-bold text-green-700 text-xl">NPR {room.priceMonthly.toLocaleString()}</p>
                      <p className="text-earth text-xs font-body">/month</p> */}
                    </div>
                  </div>

                  <p className="text-earth font-body text-sm leading-relaxed mb-4">{room.description}</p>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {room.amenities.map((a) => (
                      <span key={a} className="green-badge">{a}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Link href="/contact" className="flex-1 btn-primary text-sm justify-center py-2.5">
                      Inquire Now
                    </Link>
                    <button
                      onClick={() => setSelectedRoom(room)}
                      className="px-5 py-2.5 border border-green-200 text-green-700 rounded-full text-sm font-semibold hover:bg-green-50 transition-colors font-body"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-14 reveal">
            <span className="green-badge mb-4 inline-block">All Rooms Include</span>
            <h2 className="section-heading mb-4">Standard Inclusions</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Every room at Success Home Boys Hostel includes these essentials at no extra charge.
            </p>
          </div>



          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '📶', label: 'Free WiFi' },
              { icon: '🔒', label: '24/7 Security' },
              { icon: '📹', label: 'CCTV Safety' },
              { icon: '📚', label: 'Study Room Access' },
              { icon: '🛋️', label: 'Lounge Area' },
              { icon: '🚿', label: 'Clean Bathrooms' },
              { icon: '💡', label: '24hr Electricity' },
              { icon: '🤝', label: 'Friendly Community' },
            ].map((item, i) => (
              <div key={item.label} className="reveal card p-5 text-center" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="text-3xl block mb-2">{item.icon}</span>
                <p className="text-green-900 font-semibold text-sm font-body">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gradient-green py-14 text-center">
        <div className="container-custom max-w-2xl reveal">
          <h2 className="font-display font-bold text-white text-3xl md:text-4xl mb-4">Not Sure Which Room to Choose?</h2>
          <p className="text-green-100 font-body mb-7">Contact us and we will help you find the best option based on your budget and needs.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-semibold font-body transition-all shadow-md">
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </Layout>
  )
}
