'use client'

import Image from 'next/image'
import { useFadeInOnScroll } from '@/lib/hooks'

const images = [
  { src: '/images/gallery/nails1.jpg', alt: 'Nail design 1' },
  { src: '/images/gallery/2.jpg', alt: 'Nail design 2' },
  { src: '/images/gallery/3.jpg', alt: 'Nail design 3' },
  { src: '/images/gallery/4.jpg', alt: 'Nail design 4' },
  { src: '/images/gallery/5.jpg', alt: 'Nail design 5' },
  { src: '/images/gallery/6.jpg', alt: 'Nail design 6' },
]

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const ref = useFadeInOnScroll<HTMLDivElement>()
  
  return (
    <div
      ref={ref}
      className="relative aspect-square opacity-0 translate-y-4 overflow-hidden rounded-lg shadow-lg"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-110 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="p-8 bg-white">
      <h3 className="text-3xl font-script mb-8 text-center text-primary">
        Gallery
      </h3>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <GalleryImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </section>
  )
}
