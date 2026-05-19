import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../components/Layout'
import PageHero from '../components/PageHero'

const roomOptions = [
  {
    label: '4-Bed Shared Dorm ',
    value: '4-Bed Shared Dorm',
  },
  {
    label: '3-Bed Shared Dorm ',
    value: '3-Bed Shared Dorm',
  },
  {
    label: '2-Bed Shared Dorm ',
    value: '2-Bed Shared Dorm',
  },
  {
    label: 'Private Single Room ',
    value: 'Private Single Room',
  },
  {
    label: 'Not sure yet — need guidance',
    value: 'Need Guidance',
  },
]
const districts = [
  'Achham', 'Arghakhanchi', 'Baglung', 'Baitadi', 'Bajhang', 'Bajura', 'Banke',
  'Bara', 'Bardiya', 'Bhaktapur', 'Bhojpur', 'Chitwan', 'Dadeldhura', 'Dailekh',
  'Dang', 'Darchula', 'Dhading', 'Dhankuta', 'Dhanusa', 'Dolakha', 'Dolpa',
  'Doti', 'Eastern Rukum', 'Gorkha', 'Gulmi', 'Humla', 'Ilam', 'Jajarkot',
  'Jhapa', 'Jumla', 'Kailali', 'Kalikot', 'Kanchanpur', 'Kapilvastu', 'Kaski',
  'Kathmandu', 'Kavrepalanchok', 'Khotang', 'Lalitpur', 'Lamjung', 'Mahottari',
  'Makwanpur', 'Manang', 'Morang', 'Mugu', 'Mustang', 'Myagdi', 'Nawalpur',
  'Nuwakot', 'Okhaldhunga', 'Palpa', 'Panchthar', 'Parbat', 'Parsa', 'Pyuthan',
  'Ramechhap', 'Rasuwa', 'Rautahat', 'Rolpa', 'Rupandehi', 'Salyan', 'Sankhuwasabha',
  'Saptari', 'Sarlahi', 'Sindhuli', 'Sindhupalchok', 'Siraha', 'Solukhumbu',
  'Sunsari', 'Surkhet', 'Syangja', 'Taplejung', 'Terhathum', 'Udayapur',
  'Western Rukum',
]

function FormField({ label, error, children, required }) {
  return (
    <div>
      <label className="block text-green-900 font-semibold font-body text-sm mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs mt-1 font-body">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    district: '',
    roomType: '',
    moveInDate: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border font-body text-sm transition-all outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 ${
      errors[field]
        ? 'border-red-400 bg-red-50'
        : 'border-green-200 bg-white hover:border-green-300'
    }`

  const validate = () => {
    const newErrors = {}
    if (!form.fullName.trim() || form.fullName.trim().length < 2)
      newErrors.fullName = 'Please enter your full name (at least 2 characters).'
    if (!form.phone.trim() || !/^[\d\s\+\-]{7,15}$/.test(form.phone))
      newErrors.phone = 'Please enter a valid phone number.'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address.'
    if (!form.district)
      newErrors.district = 'Please select your home district.'
    if (!form.roomType)
      newErrors.roomType = 'Please select a room type preference.'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

 const handleSubmit = async (e) => {
  e.preventDefault()

  const newErrors = validate()

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors)
    return
  }

  try {
    setLoading(true)

    const response = await fetch(
      'http://127.0.0.1:8000/api/contact/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: form.fullName,
          phone: form.phone,
          email: form.email,
          district: form.district,
          room_type: form.roomType,
          move_in_date: form.moveInDate,
          message: form.message,
        }),
      }
    )

    const data = await response.json()

    console.log(data)

    if (!response.ok) {
      alert(JSON.stringify(data))
      return
    }

    setSubmitted(true)

  } catch (error) {
    console.log(error)
    alert('Something went wrong')
  } finally {
    setLoading(false)
  }
}

  return (
    <Layout>
      <Head>
        <title>Contact & Book — Success Boys Hostel Kathmandu</title>
        <meta
          name="description"
          content="Contact Success Boys Hostel in Dillibazar, Kathmandu. Book your room, schedule a visit, or ask us anything. We respond quickly!"
        />
      </Head>

      <PageHero
        title="Contact & Booking"
        subtitle="Get in touch with us — we are happy to answer your questions and help you find the right room."
        image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1400&q=80"
        breadcrumb="Contact"
      />

      {/* ── QUICK CONTACT STRIP ── */}
      <section className="bg-green-600 py-5">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            <a
              href="tel:+977-9825487923"
              className="flex items-center gap-2 text-white font-body font-semibold text-sm hover:text-green-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +977-9825487923
            </a>
            <a
              href="mailto:successhomeboyshostel@gmail.com"
              className="flex items-center gap-2 text-white font-body font-semibold text-sm hover:text-green-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              successhomeboyshostel@gmail.com
            </a>
            <a
              href="https://www.facebook.com/share/p/14arE9KLiJH/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-body font-semibold text-sm hover:text-green-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook Page
            </a>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── LEFT: FORM ── */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                <div className="mb-8">
                  <span className="green-badge mb-3 inline-block">Booking Inquiry</span>
                  <h2 className="section-heading text-3xl mb-2">Send Us a Message</h2>
                  <p className="text-earth font-body text-sm leading-relaxed">
                    Fill in the form below and we will get back to you within 24 hours. You can also
                    message us directly on{' '}
                    <a
                      href="https://www.facebook.com/share/p/14arE9KLiJH/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-semibold hover:underline"
                    >
                      Facebook
                    </a>{' '}
                    for a quicker response.
                  </p>
                </div>

                {submitted ? (
                  /* Success state */
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-green-900 text-2xl mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-earth font-body leading-relaxed mb-2">
                      Thank you, <strong>{form.fullName}</strong>! We have received your inquiry.
                    </p>
                    <p className="text-earth font-body text-sm leading-relaxed mb-8">
                      Our team will contact you at <strong>{form.phone}</strong>{form.email ? ` or ${form.email}` : ''} within 24 hours.
                      You can also reach us directly on Facebook for a faster response.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <button
                        onClick={() => { setSubmitted(false); setForm({ fullName: '', phone: '', email: '', district: '', roomType: '', moveInDate: '', message: '' }) }}
                        className="btn-outline text-sm"
                      >
                        Send Another Message
                      </button>
                      <a
                        href="https://www.facebook.com/share/p/14arE9KLiJH/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm"
                      >
                        Message on Facebook
                      </a>
                    </div>
                  </div>
                ) : (
                  /* Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name + Phone */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Full Name" error={errors.fullName} required>
                        <input
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Roshan Thapa"
                          className={inputClass('fullName')}
                          data-error={!!errors.fullName}
                        />
                      </FormField>
                      <FormField label="Phone Number" error={errors.phone} required>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9825487923"
                          className={inputClass('phone')}
                          data-error={!!errors.phone}
                        />
                      </FormField>
                    </div>

                    {/* Email */}
                    <FormField label="Email Address" error={errors.email}>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com (optional)"
                        className={inputClass('email')}
                        data-error={!!errors.email}
                      />
                    </FormField>

                    {/* District + Room Type */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <FormField label="Home District / City" error={errors.district} required>
                        <select
                          name="district"
                          value={form.district}
                          onChange={handleChange}
                          className={`${inputClass('district')} cursor-pointer`}
                          data-error={!!errors.district}
                        >
                          <option value="">Select your district</option>
                          {districts.map((d) => (
                            <option key={d} value={d}>{d}</option>
                          ))}
                        </select>
                      </FormField>
                      <FormField label="Room Type Preference" error={errors.roomType} required>
                        <select
  name="roomType"
  value={form.roomType}
  onChange={handleChange}
  className={`${inputClass('roomType')} cursor-pointer`}
  data-error={!!errors.roomType}
>
  <option value="">Select room type</option>

  {roomOptions.map((opt) => (
    <option key={opt.value} value={opt.value}>
      {opt.label}
    </option>
  ))}
</select>
                      </FormField>
                    </div>

                    {/* Move-in Date */}
                    <FormField label="Expected Move-in Date" error={errors.moveInDate}>
                      <input
                        type="date"
                        name="moveInDate"
                        value={form.moveInDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={inputClass('moveInDate')}
                      />
                    </FormField>

                    {/* Message */}
                    <FormField label="Message / Special Requests" error={errors.message}>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any questions, special requirements, or things you'd like to know about the hostel..."
                        className={`${inputClass('message')} resize-none`}
                      />
                    </FormField>

                    {/* Terms note */}
                    <p className="text-earth text-xs font-body leading-relaxed">
                      By submitting this form, you agree to be contacted by Success Boys Hostel regarding your inquiry. We respect your privacy and will never share your details with third parties.
                    </p>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── RIGHT: CONTACT INFO ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact Details Card */}
              <div className="card p-7">
                <h3 className="font-display font-bold text-green-900 text-xl mb-6">Contact Details</h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900 font-body text-sm">Address</p>
                      <p className="text-earth font-body text-sm leading-relaxed mt-0.5">
                        Success Boys Hostel<br />
                        Dillibazar, Kathmandu<br />
                        Bagmati Province, Nepal
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900 font-body text-sm">Phone</p>
                      <a href="tel:+977-9825487923" className="text-green-600 font-body text-sm hover:underline block mt-0.5">+977-9825487923</a>
                      <a href="tel:+977-9863645825" className="text-green-600 font-body text-sm hover:underline block">+977-9863645825  </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900 font-body text-sm">Email</p>
                      <a href="mailto:successhomeboys@gmail.com" className="text-green-600 font-body text-sm hover:underline block mt-0.5">
                        successhomeboys@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-green-900 font-body text-sm">Facebook</p>
                      <a
                        href="https://www.facebook.com/share/p/14arE9KLiJH/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-body text-sm hover:underline block mt-0.5"
                      >
                        Visit Our Facebook Page →
                      </a>
                      <p className="text-earth text-xs font-body mt-0.5">Message us for quick replies!</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Office Hours */}
              <div className="card p-7">
                <h3 className="font-display font-bold text-green-900 text-xl mb-5">Office Hours</h3>
                <ul className="space-y-3">
                  {[
                    { day: 'Sunday – Friday', time: '7:00 AM – 9:00 PM' },
                    { day: 'Saturday', time: '8:00 AM – 6:00 PM' },
                    { day: 'Public Holidays', time: '9:00 AM – 5:00 PM' },
                  ].map((item) => (
                    <li key={item.day} className="flex justify-between items-center text-sm font-body">
                      <span className="text-earth">{item.day}</span>
                      <span className="font-semibold text-green-800 bg-green-50 px-3 py-1 rounded-full text-xs">{item.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-earth text-xs font-body leading-relaxed border-t border-green-50 pt-4">
                  For urgent matters outside office hours, please call or message us on Facebook. We always try to respond as quickly as possible.
                </p>
              </div>

              {/* Facebook CTA */}
              <div className="card p-6 bg-blue-50 border border-blue-100 text-center">
                <svg className="w-10 h-10 text-blue-600 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <p className="text-blue-900 font-display font-semibold mb-1">Prefer Facebook?</p>
                <p className="text-blue-700 font-body text-xs mb-4 leading-relaxed">
                  You can also visit our Facebook page to make reservations or send us a message directly.
                </p>
                <a
                  href="https://www.facebook.com/share/p/14arE9KLiJH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm font-body transition-colors"
                >
                  Open Facebook Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10 reveal">
            <span className="green-badge mb-4 inline-block">Find Us</span>
            <h2 className="section-heading mb-3">We Are in Dillibazar, Kathmandu</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Easily accessible by public transport. Close to major colleges, hospitals, and shopping areas.
            </p>
          </div>

          <div className="reveal rounded-2xl overflow-hidden shadow-card-hover h-80 md:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3563!2d85.3240!3d27.7080!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190a571a5b77%3A0x8dcb8985ac78ff49!2sDillibazar%2C%20Kathmandu!5e0!3m2!1sen!2snp!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Success Boys Hostel - Dillibazar, Kathmandu"
            />
          </div>

          {/* Nearby landmarks */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
            {[
              { icon: '🏫', label: 'Near Major Colleges', desc: 'Walking distance from top institutions' },
              { icon: '🏥', label: 'Near Hospitals', desc: 'Healthcare facilities close by' },
              { icon: '🛒', label: 'Shopping & Markets', desc: 'Dillibazar market nearby' },
              { icon: '🚌', label: 'Public Transport', desc: 'Easy micro-bus access to all areas' },
            ].map((item) => (
              <div key={item.label} className="card p-4 text-center">
                <span className="text-2xl block mb-2">{item.icon}</span>
                <p className="font-semibold text-green-900 text-sm font-body">{item.label}</p>
                <p className="text-earth text-xs font-body mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
