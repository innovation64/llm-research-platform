const SectionHeader = ({ title, description }) => {
    return (
      <div className="text-center mb-12">
        <h2 className="mb-4">{title}</h2>
        {description && (
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        )}
      </div>
    );
  };
  
  export default SectionHeader;