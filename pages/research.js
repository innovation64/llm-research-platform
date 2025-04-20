import Link from 'next/link';
import { FiUsers, FiDatabase, FiCpu, FiBriefcase } from 'react-icons/fi';

export default function Research() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Research Areas
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Exploring the frontiers of large language models
            </p>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-12">
              My research focuses on advancing large language model capabilities through four interconnected areas: multi-agent systems, retrieval-augmented generation, reasoning mechanisms, and long-term memory architectures. The goal is to develop more capable, contextually aware AI systems that can effectively collaborate, retrieve relevant information, and reason through complex problems.
            </p>
            
            <div className="space-y-16">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start">
                  <div className="text-primary mr-4">
                    <FiUsers size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Multi-Agent Systems</h2>
                    <p className="text-gray-700 mb-6">
                      This research area focuses on developing frameworks for multiple AI agents to collaborate through specialization and coordination. I investigate both the design of agent architectures and evaluation methodologies to measure effectiveness.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Current Projects</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>XAgent evaluation framework development</li>
                          <li>Inter-agent communication protocols</li>
                          <li>Specialized agent roles and coordination mechanisms</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Key Collaborations</h3>
                        <p>Tsinghua University NLP Lab</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">XAgent</span>
                      <span className="tag">Agent Collaboration</span>
                      <span className="tag">Evaluation Metrics</span>
                      <span className="tag">Specialization</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start">
                  <div className="text-primary mr-4">
                    <FiDatabase size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Retrieval-Augmented Generation (RAG)</h2>
                    <p className="text-gray-700 mb-6">
                      My work on RAG focuses on enhancing LLMs by retrieving and effectively utilizing external knowledge. The ReproAgent project aims to improve retrieval precision, context integration, and query formulation techniques.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Current Projects</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>ReproAgent: Reproducible agents through enhanced RAG</li>
                          <li>Context integration techniques for complex queries</li>
                          <li>Domain-specific retrieval optimization</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Key Collaborations</h3>
                        <p>Tsinghua University NLP Lab, HKMU Research Team</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">ReproAgent</span>
                      <span className="tag">Knowledge Integration</span>
                      <span className="tag">Query Optimization</span>
                      <span className="tag">Context Windows</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start">
                  <div className="text-primary mr-4">
                    <FiCpu size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Reasoning in LLMs</h2>
                    <p className="text-gray-700 mb-6">
                      This research investigates methods to enhance reasoning capabilities in LLMs, particularly for handling ambiguous questions. My work has led to the development of CondAmbigQA, a benchmark for conditional ambiguous question answering.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Current Projects</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>CondAmbigQA: Benchmark and dataset for ambiguous questions</li>
                          <li>Chain-of-thought enhancement for reasoning tasks</li>
                          <li>Contextual disambiguation techniques</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Key Publications</h3>
                        <p>Li, Yang, et al. (2025). "CondAmbigQA: A Benchmark and Dataset for Conditional Ambiguous Question Answering." arXiv preprint arXiv:2502.01523</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">CondAmbigQA</span>
                      <span className="tag">Ambiguity Resolution</span>
                      <span className="tag">Chain-of-Thought</span>
                      <span className="tag">Contextual Reasoning</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-start">
                  <div className="text-primary mr-4">
                    <FiBriefcase size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Long-Term Memory in LLMs</h2>
                    <p className="text-gray-700 mb-6">
                      This research area focuses on developing mechanisms that enable LLMs to maintain contextual information over extended interactions. I'm exploring various memory architectures and information retrieval strategies to enhance long-term retention.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Current Projects</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Memory architecture design for extended interactions</li>
                          <li>Information prioritization and retrieval mechanisms</li>
                          <li>Context window expansion techniques</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-2">Key Collaborations</h3>
                        <p>HKMU Research Team</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">Memory Architecture</span>
                      <span className="tag">Context Retention</span>
                      <span className="tag">Knowledge Management</span>
                      <span className="tag">Long-term Interactions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/discuss" className="btn btn-primary">
                Discuss Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}