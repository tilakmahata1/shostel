import Image from 'next/image'
import Link from 'next/link'

export default function RoomCard({ room }) {
  const {
    image,
    type,
    description,
    priceMonthly,
    priceNightly,
    beds,
    amenities,
    available,
    badge,
  } = room

  return (
    <div className="card overflow-hidden group hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={type}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Availability badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full font-body ${
              available
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {available ? '✓ Available' : '✗ Full'}
          </span>
        </div>
        {badge && (
          <div className="absolute top-3 right-3">
            <span className="bg-amber-400 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full font-body">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-display font-bold text-green-900 text-lg leading-tight">{type}</h3>
            <p className="text-earth text-xs font-body mt-0.5">{beds} bed{beds > 1 ? 's' : ''} per room</p>
          </div>
          <div className="text-right">
            {/* <p className="font-display font-bold text-green-700 text-lg">NPR {priceMonthly.toLocaleString()}</p> */}
            <p className="text-earth text-xs font-body">/month</p>
          </div>
        </div>

        <p className="text-earth text-sm font-body leading-relaxed mb-4">{description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {amenities.slice(0, 4).map((a) => (
            <span key={a} className="green-badge">{a}</span>
          ))}
          {amenities.length > 4 && (
            <span className="green-badge">+{amenities.length - 4} more</span>
          )}
        </div>

        {/* Action */}
        <div className="flex gap-2">
          <Link
            href="/contact"
            className="flex-1 btn-primary text-sm justify-center py-2.5"
          >
            Inquire Now
          </Link>
          <Link
            href="/rooms"
            className="px-4 py-2.5 border border-green-200 text-green-700 rounded-full text-sm font-semibold hover:bg-green-50 transition-colors font-body"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
