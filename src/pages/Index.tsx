
import { useEffect } from 'react';
import Header from '../components/Header';
import VideoCard from '../components/VideoCard';
import { projects } from '../data/projects';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-200"
    // style={{ backgroundImage: 'url(/public/bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
>
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:px-8">
        <div className="video-grid">
          {projects.map((project) => (
            <VideoCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      
      <footer className="container mx-auto px-4 py-8 md:px-8 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Keelan Keohane. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Index;
