import Link from 'next/link';

const PhDBanner = () => {
  return (
    <div className="bg-blue-50 border-b border-blue-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <span className="text-blue-800 font-medium">Looking for PhD positions in LLM research!</span>
          <Link href="/phd" className="ml-4 text-blue-600 font-medium hover:underline">
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PhDBanner;