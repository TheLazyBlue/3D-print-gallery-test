'use client'

import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'

// This would typically come from a database or CMS
const projects = [
  {
    id: 'project1',
    title: 'Benchy',
    description: 'The classic 3D printing benchmark model',
    mainImage: '/projects/benchy/main.jpg',
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
} 