'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectGalleryProps {
  mainImage: string
  detailImages: string[]
  youtubeVideo?: string
}

export default function ProjectGallery({ mainImage, detailImages, youtubeVideo }: ProjectGalleryProps) {
  const [selectedMedia, setSelectedMedia] = useState<'image' | 'video'>('image')
  const [selectedImage, setSelectedImage] = useState(mainImage)
  const allImages = [mainImage, ...detailImages]

  return (
    <div className="space-y-4">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          {selectedMedia === 'image' ? (
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              <Image
                src={selectedImage}
                alt="Project image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={selectedImage === mainImage}
              />
            </motion.div>
          ) : (
            <motion.div
              key="video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative h-full w-full"
            >
              <iframe
                src={youtubeVideo}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {allImages.map((image, index) => (
          <button
            key={image}
            onClick={() => {
              setSelectedMedia('image')
              setSelectedImage(image)
            }}
            className={`relative aspect-square overflow-hidden rounded-lg ${
              selectedMedia === 'image' && selectedImage === image ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={image}
              alt={`Detail view ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 12vw"
            />
          </button>
        ))}
        {youtubeVideo && (
          <button
            onClick={() => setSelectedMedia('video')}
            className={`relative aspect-square overflow-hidden rounded-lg ${
              selectedMedia === 'video' ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </div>
            <Image
              src={mainImage}
              alt="Video thumbnail"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 12vw"
            />
          </button>
        )}
      </div>
    </div>
  )
} 