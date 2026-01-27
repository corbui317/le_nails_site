'use client'

import { FaStar } from 'react-icons/fa'
import { useFadeInOnScroll } from '@/lib/hooks'
import { Review } from '@/types'

interface TestimonialsProps {
  reviews?: Review[]
}

const defaultReviews: Review[] = [
  { customer_name: 'Sarah M.', rating: 5, comment: 'I felt so pampered and relaxed! My nails look stunning.' },
  { customer_name: 'Emily R.', rating: 5, comment: 'Absolutely loved the ambiance and the care I received.' },
  { customer_name: 'Jessica T.', rating: 5, comment: 'The best nail salon experience I\'ve ever had – 10/10!' },
  { customer_name: 'Amanda K.', rating: 5, comment: 'My nails have never looked better. I\'ll definitely be back!' },
  { customer_name: 'Lisa P.', rating: 5, comment: 'Friendly staff and gorgeous designs every visit.' },
  { customer_name: 'Rachel W.', rating: 5, comment: 'Exceptional attention to detail. Highly recommended!' },
  { customer_name: 'Nicole B.', rating: 5, comment: 'Quick service and amazing quality.' },
  { customer_name: 'Maria G.', rating: 5, comment: 'The salon is super clean and inviting.' },
  { customer_name: 'Jennifer L.', rating: 5, comment: 'Great prices for top-notch work!' },
]

export default function Testimonials({ reviews = defaultReviews }: TestimonialsProps) {
  const fadeRef = useFadeInOnScroll<HTMLElement>()
  const scrollingReviews = [...reviews, ...reviews]

  return (
    <section
      ref={fadeRef}
      className="p-8 bg-accent border-t overflow-hidden opacity-0 translate-y-4"
    >
      <h3 className="text-3xl font-script mb-8 text-primary text-center">
        Testimonials
      </h3>
      <div className="flex w-max space-x-6 animate-marquee">
        {scrollingReviews.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 min-w-[250px]"
          >
            <p className="italic font-script text-lg text-gray-800">
              "{testimonial.comment}"
            </p>
            <p className="mt-2 text-sm font-semibold text-primary">
              - {testimonial.customer_name}
            </p>
            <div className="flex mt-2 text-yellow-500">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
