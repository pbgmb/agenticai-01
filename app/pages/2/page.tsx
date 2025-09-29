
import { MessageSquare, Database, Wrench, Bot } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="flex flex-col h-full px-16 py-12">
        {/* Header: Reduced bottom margin */}
        <div className="flex-none text-center mb-12">
          <h1 className="text-7xl font-bold mb-4 text-white">What is Agentic AI?</h1>
          <p className="text-4xl text-gray-200">Beyond chatbots: AI that thinks, plans, and acts.</p>
        </div>

        {/* Main Content: Reduced grid gap */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-12">
          
          {/* Left Column - Definition: Reduced internal gaps and trimmed text */}
          <div className="flex flex-col gap-6">
            <div className="metric-card flex flex-col h-full p-8">
              <p className="text-3xl text-gray-200 leading-snug">
                Agentic AI are autonomous systems that plan, reason, and act to achieve business goals without constant human supervision.
              </p>
              
              <div className="highlight-box text-2xl my-6">
                Think of it as a digital employee that can:
              </div>
              
              {/* Shortened list */}
              <ul className="text-2xl text-white space-y-5">
                <li className="flex items-center gap-4">
                  <Bot className="text-blue-400 flex-none" size={32} />
                  Understand goals & create action plans
                </li>
                <li className="flex items-center gap-4">
                  <Bot className="text-blue-400 flex-none" size={32} />
                  Execute tasks using various tools
                </li>
                <li className="flex items-center gap-4">
                  <Bot className="text-blue-400 flex-none" size={32} />
                  Learn from outcomes to improve
                </li>
              </ul>
              
              <div className="flex-grow"></div>

              <div className="mt-6 p-4 bg-purple-600/20 rounded-lg">
                <p className="text-2xl text-purple-200 font-semibold">
                  It’s proactive problem-solving, not just reactive responses.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Evolution Timeline: Reduced internal gaps and text */}
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-bold text-white text-center">The AI Evolution Path</h3>
            
            <div className="flex flex-col gap-4 justify-around flex-grow">
              <div className="metric-card p-4">
                <div className="flex items-center gap-4">
                  <MessageSquare className="text-blue-400 flex-none" size={32} />
                  <div>
                    <h4 className="text-2xl font-semibold text-white">LLMs</h4>
                    <p className="text-xl text-gray-300">Generates human-like text</p>
                  </div>
                </div>
              </div>
              
              <div className="metric-card p-4">
                <div className="flex items-center gap-4">
                  <Database className="text-blue-400 flex-none" size={32} />
                  <div>
                    <h4 className="text-2xl font-semibold text-white">RAG Systems</h4>
                    <p className="text-xl text-gray-300">Accesses external knowledge</p>
                  </div>
                </div>
              </div>
              
              <div className="metric-card p-4">
                <div className="flex items-center gap-4">
                  <Wrench className="text-blue-400 flex-none" size={32} />
                  <div>
                    <h4 className="text-2xl font-semibold text-white">Tool-Augmented AI</h4>
                    <p className="text-xl text-gray-300">Uses software tools to act</p>
                  </div>
                </div>
              </div>
              
              <div className="metric-card bg-blue-600/20 border-blue-400/40 p-4">
                <div className="flex items-center gap-4">
                  <Bot className="text-purple-400 flex-none" size={32} />
                  <div>
                    <h4 className="text-2xl font-semibold text-white">Agentic AI</h4>
                    <p className="text-xl text-gray-300">Manages entire workflows</p>
                  </div>
                </div>
                <p className="text-lg text-purple-300 mt-1 font-semibold">← We are here</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer: Reduced top margin */}
        <div className="flex-none text-center mt-8">
          <div className="highlight-box text-2xl">
            Key Takeaway: Agentic AI shifts from a tool you use to a colleague that works with you.
          </div>
        </div>
      </div>
    </div>
  );
}
