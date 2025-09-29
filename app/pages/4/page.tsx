import { Zap, Clock, DollarSign, TrendingUp } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="flex flex-col h-full px-16 py-10">
        {/* Header */}
        <div className="flex-none text-center mb-8">
          <h1 className="text-6xl font-bold mb-4 text-white">Key Insights: Market Impact</h1>
          <p className="text-3xl text-gray-200">How Agentic AI is reshaping business operations</p>
        </div>

        {/* Stats Row */}
        <div className="flex-none mb-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="metric-card text-center p-4">
              <Zap className="mx-auto mb-2 text-blue-400" size={48} />
              <div className="text-7xl font-bold text-blue-400">5X-10X</div>
              <div className="text-2xl text-white font-semibold">Productivity Gains</div>
              <p className="text-base text-gray-300">Reported by early adopters</p>
            </div>
            
            <div className="metric-card text-center p-4">
              <Clock className="mx-auto mb-2 text-green-400" size={48} />
              <div className="text-7xl font-bold text-green-400">24/7</div>
              <div className="text-2xl text-white font-semibold">Operation Capability</div>
              <p className="text-base text-gray-300">Autonomous workflows</p>
            </div>
            
            <div className="metric-card text-center p-4">
              <DollarSign className="mx-auto mb-2 text-purple-400" size={48} />
              <div className="text-7xl font-bold text-purple-400">40-60%</div>
              <div className="text-2xl text-white font-semibold">Cost Reduction</div>
              <p className="text-base text-gray-300">In routine processes</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 min-h-0 grid grid-cols-[3fr_2fr] gap-8">
          {/* Left - Transformation Examples */}
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-bold text-white mb-2">Real-World Business Transformations</h3>
            
            <div className="metric-card p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl font-semibold text-blue-400">Customer Service</h4>
                <span className="text-lg text-green-400 font-bold">3x faster resolution</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-xl text-white"><span className="text-gray-400 text-base block">Before:</span> Manual agent support</p>
                <p className="text-xl text-white"><span className="text-gray-400 text-base block">After:</span> AI resolves 80% of issues</p>
              </div>
            </div>
            
            <div className="metric-card p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl font-semibold text-purple-400">HR &amp; Onboarding</h4>
                <span className="text-lg text-green-400 font-bold">90% time reduction</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-xl text-white"><span className="text-gray-400 text-base block">Before:</span> Manual processing</p>
                <p className="text-xl text-white"><span className="text-gray-400 text-base block">After:</span> Automated workflows</p>
              </div>
            </div>
            
            <div className="metric-card p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl font-semibold text-orange-400">Software Development</h4>
                <span className="text-lg text-green-400 font-bold">50% faster cycles</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-xl text-white"><span className="text-gray-400 text-base block">Before:</span> Manual coding &amp; testing</p>
                <p className="text-xl text-white"><span className="text-gray-400 text-base block">After:</span> AI-assisted development</p>
              </div>
            </div>
          </div>

          {/* Right - Business Impact Summary */}
          <div className="metric-card flex flex-col p-6">
            <h3 className="text-4xl font-bold text-white mb-4">Bottom Line Impact</h3>
            
            <ul className="text-2xl text-white space-y-3">
              <li className="flex items-center gap-3"><Zap className="text-blue-400 flex-none" size={28} /> Operational efficiency</li>
              <li className="flex items-center gap-3"><DollarSign className="text-green-400 flex-none" size={28} /> Cost optimization</li>
              <li className="flex items-center gap-3"><Clock className="text-purple-400 flex-none" size={28} /> 24/7 business capability</li>
              <li className="flex items-center gap-3"><TrendingUp className="text-pink-400 flex-none" size={28} /> Scalable growth</li>
            </ul>
            
            <div className="flex-grow"></div>
            
            <div className="p-4 bg-blue-600/20 rounded-lg">
              <p className="text-xl text-blue-200 font-semibold text-center">
                Agentic AI is a fundamental business advantage, not just an improvement.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none text-center mt-auto pt-4">
          <div className="highlight-box text-xl">
            Market Reality: Agentic AI replaces workflows, creating new competitive moats.
          </div>
        </div>
      </div>
    </div>
  );
}
