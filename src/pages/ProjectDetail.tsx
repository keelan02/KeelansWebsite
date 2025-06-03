
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const projectId = parseInt(id || '1');
  const project = projects.find(p => p.id === projectId);
  
  const prevProject = projects.find(p => p.id === projectId - 1);
  const nextProject = projects.find(p => p.id === projectId + 1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!project) {
      navigate('/');
    }
  }, [project, navigate, id]);
  
  if (!project) {
    return null;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <div className="fixed bottom-8 right-8 z-10">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <ArrowLeft size={16} />
          <span>Retour</span>
        </Link>
      </div>
      
      {prevProject && (
        <Link 
          to={`/project/${prevProject.id}`} 
          className="project-navigation prev"
          aria-label="Projet précédent"
        >
          <ChevronLeft size={24} />
        </Link>
      )}
      
      {nextProject && (
        <Link 
          to={`/project/${nextProject.id}`} 
          className="project-navigation next"
          aria-label="Projet suivant"
        >
          <ChevronRight size={24} />
        </Link>
      )}
      
      <main className="flex-grow container mx-auto px-4 py-8 md:px-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video relative bg-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {project.videoUrl.includes('youtube') ? (
  <iframe
    src={project.videoUrl}
    title={project.title}
    className="absolute inset-0 w-full h-full"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
) : (
  <video
    src={project.videoUrl}
    title={project.title}
    className="absolute inset-0 w-full h-full object-cover"
    controls
    playsInline
  />
)}
/>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <div className="prose prose-zinc max-w-none">
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="container mx-auto px-4 py-8 md:px-8 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Keelan Keohane. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
