import { notFound } from 'next/navigation'
import ProjectGallery from '../../../components/ProjectGallery'

// This would typically come from a database or CMS
const projects = {
  project1: {
    title: 'Benchy',
    description: 'The classic 3D printing benchmark model',
    details: 'The 3D Benchy is a small 3D printable model that has become a standard benchmark for testing and calibrating 3D printers. It tests various aspects of 3D printing including overhangs, bridges, and dimensional accuracy.',
    specs: {
      size: '6cm x 3.1cm x 3.1cm',
      material: 'PLA',
      printTime: '1 hour',
      layerHeight: '0.2mm',
    },
    mainImage: '/projects/benchy/main.jpg',
    detailImages: [
      '/projects/benchy/detail1.jpg',
      '/projects/benchy/detail2.jpg'
    ],
    youtubeVideo: 'https://www.youtube.com/embed/K5oLiGawHjw'
  }
}

export function generateStaticParams() {
  return [
    { id: 'project1' }
  ]
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-gray-400 mb-8">{project.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ProjectGallery 
            mainImage={project.mainImage} 
            detailImages={project.detailImages}
            youtubeVideo={project.youtubeVideo}
          />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <p className="text-gray-300 mb-6">{project.details}</p>
            
            <h3 className="text-xl font-semibold mb-3">Specifications</h3>
            <ul className="space-y-2">
              {Object.entries(project.specs).map(([key, value]) => (
                <li key={key} className="flex justify-between">
                  <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                  <span className="text-white">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 