'use client'

import Image from 'next/image'
import { useFadeInOnScroll } from '@/lib/hooks'
import { serviceCategories } from '@/lib/services-data'

export default function Services() {
  const fadeRef = useFadeInOnScroll<HTMLElement>()
  
  return (
    <section
      id="services"
      ref={fadeRef}
      className="p-4 md:p-8 bg-accent opacity-0 translate-y-4"
    >
      <h3 className="text-3xl font-script mb-8 text-center text-primary">
        Our Services
      </h3>
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {serviceCategories.map((cat) => (
          <div
            key={cat.title}
            className="bg-white/90 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8 p-6 md:p-10 border border-primary/20"
          >
            <div className="relative w-56 h-56 flex-shrink-0">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover rounded-lg shadow-md"
                sizes="224px"
              />
            </div>
            <div className="flex-1 w-full">
              <h4 className="text-2xl font-bold text-primary mb-4 text-center md:text-left">
                {cat.title}
              </h4>
              <ul className="divide-y divide-primary/20">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col md:flex-row md:items-center justify-between py-3 px-2 md:px-4"
                  >
                    <div>
                      <span className="font-medium text-lg text-gray-800">
                        {item.name}
                      </span>
                      {item.desc && (
                        <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <span className="text-base font-semibold bg-primary/80 text-white rounded px-4 py-1 mt-2 md:mt-0 min-w-[60px] text-center">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
