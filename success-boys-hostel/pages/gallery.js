import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import { galleryImages } from '../data/hostelData'

const categories = [
  { key: 'all', label: 'All Photos' },
  { key: 'rooms', label: 'Rooms' },
  { key: 'kitchen', label: 'Kitchen & Dining' },
  { key: 'common', label: 'Common Areas' },
  { key: 'exterior', label: 'Exterior' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightbox, setLightbox] = useState(null) // index of open image

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight' && lightbox !== null) {
        setLightbox((prev) => (prev + 1) % filtered.length)
      }
      if (e.key === 'ArrowLeft' && lightbox !== null) {
        setLightbox((prev) => (prev - 1 + filtered.length) % filtered.length)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, filtered.length])

  // Prevent body scroll when lightbox open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <Layout>
      <Head>
        <title>Gallery — Success Boys Hostel Kathmandu</title>
        <meta name="description" content="Browse photos of Success Boys Hostel — rooms, kitchen, common areas, and more. See what your new home looks like!" />
      </Head>

      <PageHero
        title="Photo Gallery"
        subtitle="Take a visual tour of Success Boys Hostel — see the spaces you will call home."
        image="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1400&q=80"
        breadcrumb="Gallery"
      />

      {/* ── CATEGORY TABS ── */}
      <section className="py-8 bg-cream border-b border-green-100 sticky top-[68px] z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold font-body transition-all ${
                  activeCategory === cat.key
                    ? 'bg-green-600 text-white shadow-green'
                    : 'bg-white text-green-800 border border-green-200 hover:bg-green-50'
                }`}
              >
                {cat.label}
                <span className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat.key ? 'bg-white/20' : 'bg-green-100 text-green-700'}`}>
                  {cat.key === 'all' ? galleryImages.length : galleryImages.filter((i) => i.category === cat.key).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <p className="text-center text-earth font-body py-20">No images in this category yet.</p>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
              {filtered.map((img, i) => (
                <div
                  key={img.id}
                  className="break-inside-avoid relative rounded-2xl overflow-hidden cursor-pointer group shadow-card hover:shadow-card-hover transition-all"
                  onClick={() => setLightbox(i)}
                >
                  <div className="relative" style={{ paddingBottom: i % 3 === 0 ? '75%' : i % 3 === 1 ? '60%' : '80%' }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-green-900/0 group-hover:bg-green-900/40 transition-colors duration-300 flex items-end p-4">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <p className="text-white font-body font-semibold text-sm">{img.caption}</p>
                        <p className="text-green-200 font-body text-xs capitalize">{img.category}</p>
                      </div>
                    </div>
                    {/* Zoom icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filtered.length) % filtered.length) }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full" style={{ maxHeight: '80vh' }}>
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                width={1200}
                height={800}
                className="object-contain rounded-xl max-h-[80vh] w-auto mx-auto"
              />
            </div>
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filtered.length) }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-body font-semibold">{filtered[lightbox].caption}</p>
            <p className="text-gray-400 text-sm font-body">{lightbox + 1} / {filtered.length}</p>
          </div>
        </div>
      )}

      {/* ── CTA ── */}
      <section className="bg-cream py-12 text-center">
        <div className="container-custom max-w-xl reveal">
          <h3 className="font-display font-bold text-green-900 text-2xl mb-3">Want to See It in Person?</h3>
          <p className="text-earth font-body mb-6">Visit us at Dillibazar, Kathmandu, or contact us to schedule a free room tour.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary">Schedule a Tour</a>
            <a href="https://www.facebook.com/share/p/14arE9KLiJH/" target="_blank" rel="noopener noreferrer" className="btn-outline">View on Facebook</a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
