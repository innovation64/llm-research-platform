import Link from 'next/link';
import { FiUsers, FiDatabase, FiCpu, FiBriefcase } from 'react-icons/fi';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advancing LLM Research for Real-World Impact
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Exploring multi-agent systems, retrieval-augmented generation (RAG), and reasoning capabilities in large language models
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/research" className="btn bg-white text-blue-600 hover:bg-blue-50">
                Explore Research
              </Link>
              <Link href="/discuss" className="btn bg-transparent border-2 border-white hover:bg-white/10">
                Join Discussion
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* PhD Banner */}
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
      
      {/* Research Areas Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Research Focus</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My research explores the frontiers of large language models with a focus on multi-agent collaboration, knowledge retrieval, and reasoning capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-6">
              <div className="text-primary mb-4">
                <FiUsers size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Agent Systems</h3>
              <p className="text-gray-600 mb-4">
                Developing frameworks for multiple AI agents to collaborate through specialization and coordination. This research explores both agent architecture and evaluation methodologies.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag">XAgent</span>
                <span className="tag">Evaluation</span>
                <span className="tag">Agent Collaboration</span>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="text-primary mb-4">
                <FiDatabase size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Retrieval-Augmented Generation</h3>
              <p className="text-gray-600 mb-4">
                Enhancing LLMs by retrieving and utilizing external knowledge. Current work focuses on the ReproAgent project, improving retrieval precision, context integration, and query formulation.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag">ReproAgent</span>
                <span className="tag">Knowledge Integration</span>
                <span className="tag">Context Optimization</span>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="text-primary mb-4">
                <FiCpu size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reasoning in LLMs</h3>
              <p className="text-gray-600 mb-4">
                Investigating how to enhance reasoning capabilities, particularly for ambiguous questions. This research has led to the development of CondAmbigQA, a benchmark for conditional ambiguous question answering.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag">CondAmbigQA</span>
                <span className="tag">Ambiguity Resolution</span>
                <span className="tag">Contextual Reasoning</span>
              </div>
            </div>
            
            <div className="card p-6">
              <div className="text-primary mb-4">
                <FiBriefcase size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Long-Term Memory in LLMs</h3>
              <p className="text-gray-600 mb-4">
                Developing mechanisms that enable LLMs to maintain contextual information over extended interactions, focusing on memory architectures and information retrieval strategies.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="tag">Memory Architecture</span>
                <span className="tag">Context Retention</span>
                <span className="tag">Knowledge Management</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/research" className="btn btn-outline">
              Learn More About Research
            </Link>
          </div>
        </div>
      </section>
      
      {/* Current Projects Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Current Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Active research projects exploring different aspects of LLM capabilities and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <img 
                src="/api/placeholder/600/300" 
                alt="CondAmbigQA Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3">CondAmbigQA</h3>
                <p className="text-gray-600 mb-4">
                  A benchmark and dataset for evaluating how LLMs handle ambiguous questions that require contextual understanding and reasoning to resolve.
                </p>
                <Link href="/projects/condambigqa" className="text-primary font-medium hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
            
            <div className="card">
              <img 
                src="/api/placeholder/600/300" 
                alt="Enhanced RAG Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3">Enhanced RAG for Multi-Agent Systems</h3>
                <p className="text-gray-600 mb-4">
                  Developing advanced retrieval-augmented generation techniques specifically designed for multi-agent systems.
                </p>
                <Link href="/projects/enhanced-rag" className="text-primary font-medium hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
            
            <div className="card">
              <img 
                src="/api/placeholder/600/300" 
                alt="Memory Architecture Project" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="mb-3">Long-Term Memory Architecture</h3>
                <p className="text-gray-600 mb-4">
                  Investigating mechanisms that enable LLMs to maintain and organize information over extended interactions.
                </p>
                <Link href="/projects/memory-architecture" className="text-primary font-medium hover:underline">
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Discussions Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4">Recent Discussions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join the conversation about LLM research, applications, and future directions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="message-card">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Prof. Sarah Chen</span>
                <span className="text-gray-500 text-sm">April 10, 2025</span>
              </div>
              <p className="text-gray-700 mb-2">
                Your work on conditional ambiguous question answering is quite interesting. Have you considered applying this to medical information retrieval where ambiguity is common but potentially dangerous?
              </p>
              <div className="text-gray-500 text-sm">
                University of California, Berkeley
              </div>
            </div>
            
            <div className="message-card">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Dr. Michael Zhang</span>
                <span className="text-gray-500 text-sm">April 5, 2025</span>
              </div>
              <p className="text-gray-700 mb-2">
                I'm working on similar multi-agent evaluation frameworks at MIT. Would be great to compare notes on how you're measuring inter-agent communication efficiency.
              </p>
              <div className="text-gray-500 text-sm">
                MIT CSAIL
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link href="/discuss" className="btn btn-primary">
              Join the Discussion
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-blue-600 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-4">Interested in Collaboration?</h2>
            <p className="text-xl mb-8 opacity-90">
              I'm actively seeking collaborations with researchers, academic institutions, and industry partners to advance LLM research.
            </p>
            <Link href="/collaborate" className="btn bg-white text-blue-600 hover:bg-blue-50">
              Explore Collaboration Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}