import Link from 'next/link';

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img 
        src={image || "/api/placeholder/600/300"} 
        alt={`${title} Project`} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <Link href={link} className="text-primary font-medium hover:underline">
          View Project →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;