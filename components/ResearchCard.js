import Link from 'next/link';

const ResearchCard = ({ icon: Icon, title, description, tags, link }) => {
  return (
    <div className="card p-6">
      <div className="text-primary mb-4">
        {Icon && <Icon size={32} />}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
      {link && (
        <Link href={link} className="text-primary font-medium hover:underline">
          Learn more →
        </Link>
      )}
    </div>
  );
};

export default ResearchCard;