import Link from 'next/link';
import { FiAward, FiBookOpen, FiTarget, FiUsers } from 'react-icons/fi';

export default function PhDPosition() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              PhD Position in LLM Research
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Looking for opportunities to advance research in multi-agent systems and RAG frameworks
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-6 mb-10">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-lg mb-6">
                I am actively seeking PhD positions to continue my research in large language models, multi-agent systems, and RAG frameworks. With experience at Tsinghua University NLP Lab and HKMU, I'm looking to join a research team that focuses on advancing the capabilities of language models.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiAward size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Academic Background</h3>
                    <p>Bachelor's in Information Management and Systems from Beijing University of Chinese Medicine (2018-2022)</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiBookOpen size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Research Experience</h3>
                    <p>HKMU (2023-Present), Tsinghua University NLP Lab (2023), Zhipu AI (2022-2023)</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiTarget size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Research Focus</h3>
                    <p>Multi-agent systems, RAG, reasoning, and long-term memory in LLMs</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 text-primary">
                    <FiUsers size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Community Involvement</h3>
                    <p>Hugging Face Chinese Community, AITIME, Academic Journal Reviewer</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Research Interests for PhD</h2>
            <div className="space-y-6 mb-10">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-lg mb-2">Long-term Memory Mechanisms in LLMs</h3>
                <p>Investigating architectures that enable LLMs to maintain and effectively utilize information over extended interactions, beyond current context window limitations.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-lg mb-2">Multi-Agent Evaluation Frameworks</h3>
                <p>Developing robust methodologies to evaluate collaboration, specialization, and information sharing between multiple LLM-based agents in complex task environments.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-lg mb-2">Context-Aware Reasoning for Ambiguous Tasks</h3>
                <p>Building on my CondAmbigQA research to enable LLMs to handle ambiguity through contextual understanding and multi-step reasoning processes.</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-medium text-lg mb-2">RAG Architecture for Specialized Domains</h3>
                <p>Exploring retrieval-augmented generation techniques optimized for domain-specific knowledge integration, focusing on medical and scientific applications.</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Publications</h2>
            <div className="space-y-6 mb-10">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium text-lg">CondAmbigQA: A Benchmark and Dataset for Conditional Ambiguous Question Answering</h3>
                <p className="text-gray-600 mb-2">Li, Yang, et al. (2025). arXiv preprint arXiv:2502.01523</p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline">Paper</a>
                  <a href="#" className="text-primary hover:underline">Code</a>
                  <a href="#" className="text-primary hover:underline">Dataset</a>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium text-lg">CodeGeeX: A Pre-Trained Model for Code Generation with Multilingual Benchmarking on HumanEval-X</h3>
                <p className="text-gray-600 mb-2">Zheng, Qinkai, et al. (2023). KDD 2023</p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline">Paper</a>
                  <a href="#" className="text-primary hover:underline">Code</a>
                </div>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium text-lg">Machine Learning Models for Stroke Detection by Observing Eye-Movement Features Under Five-Color Visual Stimuli in Traditional Chinese Medicine</h3>
                <p className="text-gray-600 mb-2">Lu, Qingya, et al. (2023). Journal of Traditional Chinese Medical Sciences</p>
                <div className="flex gap-4">
                  <a href="#" className="text-primary hover:underline">Paper</a>
                </div>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Contact for PhD Opportunities</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="mb-4">
                If you are a professor or research lab looking for PhD students in the field of LLMs, multi-agent systems, or RAG, I would be happy to discuss potential research directions and opportunities.
              </p>
              <div className="space-y-2 mb-6">
                <p><strong>Email:</strong> innovation64feng@gmail.com</p>
                <p><strong>Phone:</strong> +86 13269183099 / +852 54614337</p>
                <p><strong>Current Institution:</strong> Hong Kong Metropolitan University</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://innovation64.github.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Personal Website
                </a>
                <a 
                  href="mailto:innovation64feng@gmail.com" 
                  className="btn btn-outline"
                >
                  Email Me
                </a>
                <Link href="/research" className="btn bg-gray-200 text-gray-700 hover:bg-gray-300">
                  View Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}