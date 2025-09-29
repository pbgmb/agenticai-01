
import { Search, Calendar, Play } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="relative w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col h-full p-10">
        {/* Header */}
        <div className="flex-none text-center mb-6">
          <h1 className="text-6xl font-bold mb-3">Action Steps for Business Leaders</h1>
          <p className="text-3xl text-gray-300">Your roadmap to competitive advantage through Agentic AI</p>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 grid grid-rows-2 gap-8 min-h-0">
          
          {/* Top Row - Immediate Action Cards */}
          <div className="grid grid-cols-3 gap-8">
            <div className="metric-card text-center flex flex-col p-6">
              <Search className="mx-auto mb-2 text-blue-400" size={48} />
              <h4 className="text-3xl font-bold mb-1">Assess &amp; Prioritize</h4>
              <p className="text-2xl text-blue-300 font-semibold mb-3">Week 1-2</p>
              <ul className="text-2xl text-gray-200 space-y-1 text-left px-4 flex-1">
                <li>• Identify high-impact processes</li>
                <li>• Define success metrics</li>
              </ul>
              <p className="text-base text-blue-200 font-semibold mt-2 p-2 bg-white/5 rounded-lg">Outcome: Clear priority list</p>
            </div>
            
            <div className="metric-card text-center flex flex-col p-6">
              <Calendar className="mx-auto mb-2 text-green-400" size={48} />
              <h4 className="text-3xl font-bold mb-1">Plan &amp; Prepare</h4>
              <p className="text-2xl text-green-300 font-semibold mb-3">Week 3-4</p>
              <ul className="text-2xl text-gray-200 space-y-1 text-left px-4 flex-1">
                <li>• Select pilot use case</li>
                <li>• Assemble project team</li>
              </ul>
              <p className="text-base text-green-200 font-semibold mt-2 p-2 bg-white/5 rounded-lg">Outcome: Detailed roadmap</p>
            </div>
            
            <div className="metric-card text-center flex flex-col p-6">
              <Play className="mx-auto mb-2 text-purple-400" size={48} />
              <h4 className="text-3xl font-bold mb-1">Execute &amp; Learn</h4>
              <p className="text-2xl text-purple-300 font-semibold mb-3">Month 2-4</p>
              <ul className="text-2xl text-gray-200 space-y-1 text-left px-4 flex-1">
                <li>• Launch pilot project</li>
                <li>• Monitor performance & iterate</li>
              </ul>
              <p className="text-base text-purple-200 font-semibold mt-2 p-2 bg-white/5 rounded-lg">Outcome: Proven AI capability</p>
            </div>
          </div>

          {/* Bottom Row - Detailed Framework + CTA */}
          <div className="grid grid-cols-[2fr_1fr] gap-8 min-h-0">
            
            {/* Left - 90-Day Framework */}
            <div className="metric-card flex flex-col p-8">
              <h3 className="text-4xl font-bold mb-4">90-Day Quick Start Framework</h3>
              <div className="flex flex-col justify-around flex-1 space-y-3">
                <div>
                  <h4 className="text-2xl font-bold text-blue-400">Days 1-30: Foundation</h4>
                  <p className="text-xl text-gray-300">Align teams, educate, and identify high-value use cases. Deliverable: AI strategy document.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-green-400">Days 31-60: Pilot Prep</h4>
                  <p className="text-xl text-gray-300">Design the pilot, form the team, and allocate resources. Deliverable: A launch-ready pilot plan.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-purple-400">Days 61-90: Implementation</h4>
                  <p className="text-xl text-gray-300">Execute pilot, monitor KPIs, and prepare for scaling. Deliverable: Proven capability & scaling roadmap.</p>
                </div>
              </div>
            </div>

            {/* Right - Call-to-Action */}
            <div className="metric-card flex flex-col p-8">
              <h3 className="text-3xl font-bold text-center mb-3">Get the Complete Strategy</h3>
              <p className="text-xl text-gray-300 mb-3">Our full report provides the deep strategic insight needed for success.</p>
              <div>
                <p className="text-xl text-white font-semibold mb-2">Report Includes:</p>
                <ul className="text-base text-gray-200 space-y-1">
                  <li>✓ Detailed implementation frameworks</li>
                  <li>✓ Industry-specific use cases & ROI</li>
                  <li>✓ Risk management & evaluation guides</li>
                </ul>
              </div>
              <div className="flex-1"></div>
              <button className="w-full py-3 mt-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-2xl rounded-lg transition-all">
                Download Full Report
              </button>
              <p className="text-base text-green-200 font-semibold text-center mt-2 p-1 bg-green-600/20 rounded-lg">
                Bonus: AI readiness assessment tool
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center mt-4">
          <p className="text-2xl text-gray-400">
            The AI revolution is now. Act quickly to gain a competitive advantage.
          </p>
        </div>
      </div>
    </div>
  );
}
