
import { TrendingUp, Zap, Sparkles } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="flex flex-col h-full px-16 py-12">
        {/* Header */}
        <div className="flex-none text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 text-white">Future Outlook: Timeline</h1>
          <p className="text-3xl text-gray-200">Strategic Timeline for Agentic AI Adoption</p>
        </div>

        {/* Main Content - Timeline Visualization */}
        <div className="flex-1 min-h-0 flex flex-col">
          <h3 className="text-5xl font-bold text-white text-center mb-8">Agentic AI Market Evolution 2025-2027+</h3>
          
          <div className="flex-1 grid grid-cols-3 gap-x-8">
            {/* 2025 Phase */}
            <div className="metric-card flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="text-green-400" size={48} />
                <div>
                  <h4 className="text-3xl font-bold text-green-400">2025: Adoption Acceleration</h4>
                  <p className="text-xl text-gray-300">Rapid growth beyond experiments</p>
                </div>
              </div>
              <div className="space-y-4 flex-grow">
                <div>
                  <h5 className="text-2xl font-semibold text-white mb-2">Key Developments</h5>
                  <ul className="text-xl text-gray-200 space-y-1">
                    <li>• Enterprise adoption accelerates</li>
                    <li>• Proven ROI drives investment</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-2xl font-semibold text-white mb-2">Business Implications</h5>
                  <ul className="text-xl text-gray-200 space-y-1">
                    <li>• First-mover advantages crystallize</li>
                    <li>• Talent competition begins</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto p-4 bg-green-600/20 rounded-lg">
                <p className="text-xl text-green-200 font-bold text-center">Optimal Entry Point</p>
              </div>
            </div>

            {/* 2026-2027 Phase */}
            <div className="metric-card flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Zap className="text-blue-400" size={48} />
                <div>
                  <h4 className="text-3xl font-bold text-blue-400">2026-27: Transformation</h4>
                  <p className="text-xl text-gray-300">AI becomes digital colleagues</p>
                </div>
              </div>
              <div className="space-y-4 flex-grow">
                <div>
                  <h5 className="text-2xl font-semibold text-white mb-2">Key Developments</h5>
                  <ul className="text-xl text-gray-200 space-y-1">
                    <li>• AI agents handle full workflows</li>
                    <li>• Industry-specific solutions emerge</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-2xl font-semibold text-white mb-2">Business Implications</h5>
                  <ul className="text-xl text-gray-200 space-y-1">
                    <li>• Competitive gaps widen</li>
                    <li>• Human roles shift to strategy</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto p-4 bg-yellow-600/20 rounded-lg">
                <p className="text-xl text-yellow-200 font-bold text-center">Higher Complexity & Competition</p>
              </div>
            </div>

            {/* 2027+ Phase */}
            <div className="metric-card flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <Sparkles className="text-purple-400" size={48} />
                <div>
                  <h4 className="text-3xl font-bold text-purple-400">2027+: New Paradigm</h4>
                  <p className="text-xl text-gray-300">Human-AI collaboration focus</p>
                </div>
              </div>
              <div className="space-y-4 flex-grow">
                <div>
                  <h5 className="text-2xl font-semibold text-white mb-2">Key Developments</h5>
                  <ul className="text-xl text-gray-200 space-y-1">
                    <li>• AI-native business models</li>
                    <li>• Autonomous business processes</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-2xl font-semibold text-white mb-2">Business Implications</h5>
                  <ul className="text-xl text-gray-200 space-y-1">
                    <li>• Landscape permanently altered</li>
                    <li>• High barrier to entry for laggards</li>
                  </ul>
                </div>
              </div>
              <div className="mt-auto p-4 bg-red-600/20 rounded-lg">
                <p className="text-xl text-red-200 font-bold text-center">Catch-Up Phase</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none text-center mt-4">
          <div className="highlight-box text-2xl">
            Critical Decision Point: The next 12-18 months will determine competitive positioning for the next decade.
          </div>
        </div>
      </div>
    </div>
  );
}
