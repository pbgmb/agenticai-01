
import { Brain, Users, TrendingUp } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="flex flex-col h-full px-16 py-12">
        {/* Header */}
        <div className="flex-none text-center mb-16">
          <h1 className="text-7xl font-bold mb-6 text-white">Key Insights: Current State</h1>
          <p className="text-4xl text-gray-200">What industry experts are saying about Agentic AI today</p>
        </div>

        {/* Main Content - Three Column Grid */}
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-12">
          {/* Core Capabilities */}
          <div className="metric-card flex flex-col">
            <div className="flex-none flex items-center gap-4 mb-8">
              <Brain className="text-blue-400" size={48} />
              <h3 className="text-4xl font-bold text-white">Core Capabilities</h3>
            </div>
            
            <div className="flex-1 min-h-0 flex flex-col justify-between">
              <ul className="text-2xl text-white space-y-4">
                <li>• <span className="text-blue-400">Autonomy</span> - Works independently</li>
                <li>• <span className="text-blue-400">Goal-orientation</span> - Focuses on business outcomes</li>
                <li>• <span className="text-blue-400">Multi-step reasoning</span> - Handles complex workflows</li>
                <li>• <span className="text-blue-400">Tool integration</span> - Uses existing business systems</li>
                <li>• <span className="text-blue-400">Memory and learning</span> - Improves over time</li>
              </ul>
              
              <div className="mt-8 p-6 bg-blue-600/20 rounded-lg">
                <p className="text-2xl text-blue-200 font-semibold text-center">
                  AI that doesn't just answer questions—it solves business problems
                </p>
              </div>
            </div>
          </div>

          {/* Industry Consensus */}
          <div className="metric-card flex flex-col">
            <div className="flex-none flex items-center gap-4 mb-8">
              <Users className="text-purple-400" size={48} />
              <h3 className="text-4xl font-bold text-white">Industry Consensus</h3>
            </div>
            
            <div className="flex-1 min-h-0 flex flex-col justify-between">
              <div>
                <p className="text-2xl text-gray-200 mb-6">
                  Leading AI researchers and business strategists agree:
                </p>
                
                <ul className="text-2xl text-white space-y-4">
                  <li>• Agentic AI will transform how businesses operate</li>
                  <li>• Shift from reactive tools to proactive partners</li>
                  <li>• Major competitive advantage for early adopters</li>
                  <li>• Foundation for next-generation business automation</li>
                </ul>
              </div>
              
              <div className="mt-8 p-6 bg-purple-600/20 rounded-lg">
                <p className="text-2xl text-purple-200 font-semibold text-center">
                  This isn't speculation—it's happening now at leading companies
                </p>
              </div>
            </div>
          </div>

          {/* Market Momentum */}
          <div className="metric-card flex flex-col">
            <div className="flex-none flex items-center gap-4 mb-8">
              <TrendingUp className="text-green-400" size={48} />
              <h3 className="text-4xl font-bold text-white">Market Movement</h3>
            </div>
            
            <div className="flex-1 min-h-0 flex flex-col justify-between">
              <div>
                <p className="text-3xl text-green-400 font-bold mb-6">Beyond Experimental Phase</p>
                
                <ul className="text-2xl text-white space-y-4">
                  <li>• Major frameworks emerging (LangChain, CrewAI)</li>
                  <li>• Enterprise pilots showing ROI</li>
                  <li>• Investment flowing to agentic solutions</li>
                  <li>• Early movers gaining competitive advantages</li>
                </ul>
              </div>
              
              <div className="mt-8 p-6 bg-orange-600/20 rounded-lg">
                <p className="text-2xl text-orange-200 font-semibold text-center">
                  The window for competitive advantage is narrowing
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none text-center mt-12">
          <div className="highlight-box text-2xl">
            Key Insight: Agentic AI is moving from 'future possibility' to 'current competitive necessity'
          </div>
        </div>
      </div>
    </div>
  );
}
