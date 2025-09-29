
import { Zap, Heart, Rocket, DollarSign } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="flex flex-col h-full px-16 py-10">
        {/* Header */}
        <div className="flex-none text-center mb-10">
          <h1 className="text-6xl font-bold mb-4 text-white">Opportunities: Competitive Advantages</h1>
          <p className="text-3xl text-gray-300">How Agentic AI creates sustainable business differentiation</p>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 min-h-0 grid grid-cols-[2fr_1fr] gap-12">
          {/* Left - Competitive Advantages */}
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-white mb-2">Strategic Advantages by Category</h3>
            
            <div className="grid grid-cols-1 gap-4 flex-1">
              <div className="metric-card-sm">
                <div className="flex items-center gap-4 mb-3">
                  <Zap className="text-blue-400" size={36} />
                  <h4 className="text-2xl font-bold text-white">Operational Excellence</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <ul className="text-xl text-white space-y-2">
                    <li>• 24/7 operations & consistency</li>
                    <li>• Scalable capacity without hiring</li>
                    <li>• Reduced operational costs</li>
                  </ul>
                  <div className="p-3 bg-blue-600/20 rounded-lg">
                    <p className="text-lg text-blue-200 font-semibold">Moat: Unmatched speed and consistency.</p>
                  </div>
                </div>
              </div>
              
              <div className="metric-card-sm">
                <div className="flex items-center gap-4 mb-3">
                  <Heart className="text-red-400" size={36} />
                  <h4 className="text-2xl font-bold text-white">Superior Customer Experience</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <ul className="text-xl text-white space-y-2">
                    <li>• Instant, personalized responses</li>
                    <li>• Proactive problem solving</li>
                    <li>• Multi-channel consistency</li>
                  </ul>
                  <div className="p-3 bg-red-600/20 rounded-lg">
                    <p className="text-lg text-red-200 font-semibold">Moat: Deep customer loyalty through superior service.</p>
                  </div>
                </div>
              </div>
              
              <div className="metric-card-sm">
                <div className="flex items-center gap-4 mb-3">
                  <Rocket className="text-purple-400" size={36} />
                  <h4 className="text-2xl font-bold text-white">Innovation Velocity</h4>
                </div>
                <div className="grid grid-cols-2 gap-4 items-center">
                  <ul className="text-xl text-white space-y-2">
                    <li>• Faster product development</li>
                    <li>• Rapid, data-driven iteration</li>
                    <li>• Automated optimization</li>
                  </ul>
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <p className="text-lg text-purple-200 font-semibold">Moat: First-mover advantage in new markets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Timeline & Positioning */}
          <div className="flex flex-col">
            <div className="metric-card">
              <h3 className="text-3xl font-bold text-white mb-4">Competitive Window Analysis</h3>
              
              <div className="space-y-4 flex-1">
                <div className="p-4 bg-green-600/20 rounded-lg">
                  <h4 className="text-xl font-bold text-green-400 mb-2">Early Adopters (Now)</h4>
                  <p className="text-lg text-green-300 font-semibold mb-2">6-18 month advantage</p>
                  <p className="text-base text-white">Build learning curves, optimize processes, and secure market position.</p>
                  <p className="text-base text-green-200 font-semibold">Result: Maximum differentiation potential.</p>
                </div>
                
                <div className="p-4 bg-yellow-600/20 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Fast Followers (2025)</h4>
                  <p className="text-lg text-yellow-300 font-semibold mb-2">Catching up phase</p>
                  <p className="text-base text-white">Leverage proven use cases with reduced risk but face higher competition.</p>
                  <p className="text-base text-yellow-200 font-semibold">Result: Significant advantage still possible.</p>
                </div>
                
                <div className="p-4 bg-red-600/20 rounded-lg">
                  <h4 className="text-xl font-bold text-red-400 mb-2">Late Majority (2026+)</h4>
                  <p className="text-lg text-red-300 font-semibold mb-2">Table stakes</p>
                  <p className="text-base text-white">Becomes an industry standard with minimal differentiation.</p>
                  <p className="text-base text-red-200 font-semibold">Result: Advantage window closes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none text-center mt-8">
          <div className="highlight-box text-2xl">
            The greatest competitive advantage goes to companies that act now. Waiting means falling behind.
          </div>
        </div>
      </div>
    </div>
  );
}
