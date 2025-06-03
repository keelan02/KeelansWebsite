import { Link } from 'react-router-dom';

export interface Project {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
}

interface VideoCardProps {
  project: Project;
}

const VideoCard = ({ project }: VideoCardProps) => {
  return (
    <Link to={`/project/${project.id}`} className="group">
      <div className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
        <div className="aspect-video relative bg-red-700 overflow-hidden">
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4 bg-gray-900">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
