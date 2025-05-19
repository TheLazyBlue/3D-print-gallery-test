'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  description: string
  mainImage: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-accent rounded-lg overflow-hidden cursor-pointer"
      >
        <div className="relative aspect-square">
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <p className="text-gray-400">{project.description}</p>
        </div>
      </motion.div>
    </Link>
  )
} 