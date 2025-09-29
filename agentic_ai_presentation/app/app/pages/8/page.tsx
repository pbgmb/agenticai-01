
import { Shield, CheckSquare, Users } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="flex flex-col h-full px-16 py-10">
        {/* Header */}
        <div className="flex-none text-center mb-8">
          <h1 className="text-7xl font-bold mb-4 text-white">Challenges: Risk Mitigation</h1>
          <p className="text-4xl text-gray-200">Proven strategies to minimize risk and maximize success</p>
        </div>

        {/* Top Row - Strategy Cards */}
        <div className="flex-none mb-6">
          <div className="grid grid-cols-3 gap-8">
            <div className="metric-card text-center">
              <Shield className="mx-auto mb-3 text-blue-400" size={48} />
              <h4 className="text-3xl font-bold text-white mb-3">Technical Safeguards</h4>
              <ul className="text-2xl text-gray-200 space-y-1 mb-3">
                <li>• Human-in-the-loop validation</li>
                <li>• Confidence scoring</li>
              </ul>
              <p className="text-2xl text-blue-300 font-bold">95%+ reliability</p>
            </div>
            
            <div className="metric-card text-center">
              <CheckSquare className="mx-auto mb-3 text-green-400" size={48} />
              <h4 className="text-3xl font-bold text-white mb-3">Governance Framework</h4>
              <ul className="text-2xl text-gray-200 space-y-1 mb-3">
                <li>• Clear AI boundaries</li>
                <li>• Audit trails & monitoring</li>
              </ul>
              <p className="text-2xl text-green-300 font-bold">Full transparency</p>
            </div>
            
            <div className="metric-card text-center">
              <Users className="mx-auto mb-3 text-purple-400" size={48} />
              <h4 className="text-3xl font-bold text-white mb-3">Change Management</h4>
              <ul className="text-2xl text-gray-200 space-y-1 mb-3">
                <li>• Gradual rollout</li>
                <li>• Training programs</li>
              </ul>
              <p className="text-2xl text-purple-300 font-bold">High adoption</p>
            </div>
          </div>
        </div>

        {/* Bottom Row - Detailed Mitigation */}
        <div className="flex-1 min-h-0 grid grid-cols-[2fr_1fr] gap-8">
          {/* Left - Comprehensive Risk Management */}
          <div className="flex flex-col metric-card p-6">
            <h3 className="text-4xl font-bold text-white mb-4">Comprehensive Risk Management</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 flex-1">
              <div className="flex flex-col">
                <h4 className="text-2xl font-bold text-blue-400 mb-2">Ensuring Reliability</h4>
                <ul className="text-2xl text-white space-y-1 list-disc list-inside">
                  <li>Use human review checkpoints</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl font-bold text-yellow-400 mb-2">Maintaining Transparency</h4>
                <ul className="text-2xl text-white space-y-1 list-disc list-inside">
                  <li>Log all AI decisions & audits</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl font-bold text-green-400 mb-2">Maintaining Control</h4>
                <ul className="text-2xl text-white space-y-1 list-disc list-inside">
                  <li>Define clear operating boundaries</li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl font-bold text-purple-400 mb-2">Ensuring Adoption</h4>
                <ul className="text-2xl text-white space-y-1 list-disc list-inside">
                  <li>Provide comprehensive training</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right - Risk Framework */}
          <div className="metric-card flex flex-col h-full p-6">
            <h3 className="text-3xl font-bold text-white mb-4">Executive Risk Framework</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center p-2 bg-yellow-600/20 rounded-lg">
                <span className="text-2xl text-white">Operational</span>
                <span className="text-2xl text-yellow-300 font-semibold">Medium</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-green-600/20 rounded-lg">
                <span className="text-2xl text-white">Financial</span>
                <span className="text-2xl text-green-300 font-semibold">Low</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-blue-600/20 rounded-lg">
                <span className="text-2xl text-white">Regulatory</span>
                <span className="text-2xl text-blue-300 font-semibold">Medium</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-600/20 rounded-lg">
                <span className="text-2xl text-white">Competitive</span>
                <span className="text-2xl text-red-300 font-semibold">High</span>
              </div>
            </div>
            <div className="mt-auto">
              <div className="p-3 bg-orange-600/20 rounded-lg">
                <p className="text-2xl text-orange-200 font-bold text-center">
                  The biggest risk is inaction as competitors advance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none text-center mt-6">
          <div className="highlight-box text-2xl">
            Risk Management Reality: Leading companies are managing these risks successfully—proven frameworks exist.
          </div>
        </div>
      </div>
    </div>
  );
}
