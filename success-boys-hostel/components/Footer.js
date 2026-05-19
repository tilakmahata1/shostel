import Link from 'next/link'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/rooms', label: 'Our Rooms' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/prices', label: 'Pricing' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-green-950 text-white ">  
      {/* Main footer */}
      <div className="container-custom py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1 ">
            <div className="flex items-center gap-2 mb-4 align-center justify-center md:justify-start">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl font-display font-bold">S</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-white block leading-none">Success Boys</span>
                <span className="text-green-400 text-xs font-body tracking-widest uppercase">Hostel</span>
              </div>
            </div>
            <p className="text-green-300 text-sm leading-relaxed mb-5 font-body">
              Your study home in the heart of Kathmandu. Safe, clean, and affordable accommodation for students from across Nepal.
            </p>
            {/* Social */}
            <div className="flex gap-3 align-center justify-center md:justify-start">
              <a
                href="https://www.facebook.com/share/p/14arE9KLiJH/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-green-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="tel:+977-01-09345"
                className="w-9 h-9 bg-green-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="mailto:successboyshostel@gmail.com"
                className="w-9 h-9 bg-green-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
  <h4 className="font-display font-semibold text-white mb-5 text-lg">
    Quick Links
  </h4>

  <ul className="space-y-2 flex flex-col items-center md:items-start">
    {quickLinks.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className="text-green-300 hover:text-green-400 text-sm font-body transition-colors flex items-center gap-1.5 group"
        >
          <span className="w-1 h-1 bg-green-500 rounded-full group-hover:w-2 transition-all" />
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Facilities */}
          <div className='text-center md:text-left'>
            <h4 className="font-display font-semibold text-white mb-5 text-lg">Our Facilities</h4>
            <ul className="space-y-2 text-sm text-green-300 font-body flex flex-col items-center md:items-start">
              {[
                'Free High-Speed WiFi',
                'Quality Dal Bhat Meals',
                'Clean Shared Bathrooms',
                'Study & Reading Room',
                '24/7 Security & CCTV',
                'Laundry Service',
                'Common Lounge Area',
                'Friendly Management',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className='text-center md:text-left'>
            <h4 className="font-display font-semibold text-white mb-5 text-lg">Contact Us</h4>
            <ul className="space-y-4 font-body flex flex-col items-center md:items-start">
              <li className="flex items-start gap-3 text-sm text-green-300">
                <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Dillibazar, Kathmandu<br />Bagmati Province, Nepal</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-green-300">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+977-9841-XXXXXX" className="hover:text-green-400 transition-colors">+977-9841-XXXXXX</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-green-300">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@successboyshostel.com.np" className="hover:text-green-400 transition-colors">info@successboyshostel.com.np</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-green-300">
                <svg className="w-4 h-4 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <a
                  href="https://www.facebook.com/share/p/14arE9KLiJH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  Facebook Page
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-green-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-green-400 text-sm font-body text-center sm:text-left">
            © {currentYear} Success Boys Hostel. All rights reserved.
          </p>
          <p className="text-green-500 text-xs font-body">
            Dillibazar, Kathmandu, Nepal
          </p>
        </div>
      </div>
    </footer>
  )
}
