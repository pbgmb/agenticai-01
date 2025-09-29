
import { AlertTriangle, Eye, Users, Shield } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="flex flex-col h-full px-16 py-10">
        {/* Header */}
        <div className="flex-none text-center mb-10">
          <h1 className="text-6xl font-bold mb-4 text-white">Challenges: Implementation Barriers</h1>
          <p className="text-3xl text-gray-200">Real obstacles and practical solutions for successful adoption</p>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-12">
          {/* Left - Challenge Categories (2x2 Grid) */}
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <div className="metric-card-sm">
              <div className="flex items-center gap-4 mb-3">
                <AlertTriangle className="text-red-400" size={40} />
                <div>
                  <h4 className="text-2xl font-bold text-white">Technical Reliability</h4>
                  <p className="text-lg text-red-300">High - but solvable</p>
                </div>
              </div>
              <ul className="text-xl text-white space-y-2 mb-4">
                <li>• AI hallucinations & errors</li>
                <li>• Integration complexity</li>
              </ul>
              <div className="p-3 bg-red-600/20 rounded-lg mt-auto">
                <p className="text-lg text-red-200">
                  <span className="font-semibold">Impact:</span> Risk of errors in critical processes
                </p>
              </div>
            </div>

            <div className="metric-card-sm">
              <div className="flex items-center gap-4 mb-3">
                <Eye className="text-yellow-400" size={40} />
                <div>
                  <h4 className="text-2xl font-bold text-white">Decision Transparency</h4>
                  <p className="text-lg text-yellow-300">Medium - improving</p>
                </div>
              </div>
              <ul className="text-xl text-white space-y-2 mb-4">
                <li>• "Black box" decision making</li>
                <li>• Audit & compliance concerns</li>
              </ul>
              <div className="p-3 bg-yellow-600/20 rounded-lg mt-auto">
                <p className="text-lg text-yellow-200">
                  <span className="font-semibold">Impact:</span> Governance & accountability gaps
                </p>
              </div>
            </div>

            <div className="metric-card-sm">
              <div className="flex items-center gap-4 mb-3">
                <Users className="text-blue-400" size={40} />
                <div>
                  <h4 className="text-2xl font-bold text-white">Change Management</h4>
                  <p className="text-lg text-blue-300">Medium - standard</p>
                </div>
              </div>
              <ul className="text-xl text-white space-y-2 mb-4">
                <li>• Employee resistance & fear</li>
                <li>• Skill gaps & training needs</li>
              </ul>
              <div className="p-3 bg-blue-600/20 rounded-lg mt-auto">
                <p className="text-lg text-blue-200">
                  <span className="font-semibold">Impact:</span> Slower adoption and utilization
                </p>
              </div>
            </div>

            <div className="metric-card-sm">
              <div className="flex items-center gap-4 mb-3">
                <Shield className="text-purple-400" size={40} />
                <div>
                  <h4 className="text-2xl font-bold text-white">Control & Oversight</h4>
                  <p className="text-lg text-purple-300">Medium - evolving</p>
                </div>
              </div>
              <ul className="text-xl text-white space-y-2 mb-4">
                <li>• Defining AI boundaries</li>
                <li>• Risk management frameworks</li>
              </ul>
              <div className="p-3 bg-purple-600/20 rounded-lg mt-auto">
                <p className="text-lg text-purple-200">
                  <span className="font-semibold">Impact:</span> Misalignment with business goals
                </p>
              </div>
            </div>
          </div>

          {/* Right - Implementation Assessment */}
          <div className="flex flex-col gap-6">
            <div className="metric-card flex-1 flex flex-col">
              <h3 className="text-3xl font-bold text-white mb-4 text-center">Implementation Difficulty Assessment</h3>
              <div className="flex-1 grid grid-rows-3 gap-4">
                <div className="p-4 bg-green-600/20 rounded-lg">
                  <h4 className="text-xl font-bold text-green-400 mb-2">Low Complexity</h4>
                  <p className="text-base text-white mb-2">Apps: Basic support, Doc processing, Scheduling</p>
                  <div className="flex justify-between text-base">
                    <p>Timeline: <span className="font-semibold text-green-300">2-4 mos</span></p>
                    <p>Success: <span className="font-semibold text-green-300">High (80%+)</span></p>
                    <p>Investment: <span className="font-semibold text-green-300">Low-Med</span></p>
                  </div>
                </div>

                <div className="p-4 bg-yellow-600/20 rounded-lg">
                  <h4 className="text-xl font-bold text-yellow-400 mb-2">Medium Complexity</h4>
                  <p className="text-base text-white mb-2">Apps: Complex workflows, Multi-system integration</p>
                  <div className="flex justify-between text-base">
                    <p>Timeline: <span className="font-semibold text-yellow-300">6-12 mos</span></p>
                    <p>Success: <span className="font-semibold text-yellow-300">Med (60-80%)</span></p>
                    <p>Investment: <span className="font-semibold text-yellow-300">Med-High</span></p>
                  </div>
                </div>

                <div className="p-4 bg-red-600/20 rounded-lg">
                  <h4 className="text-xl font-bold text-red-400 mb-2">High Complexity</h4>
                  <p className="text-base text-white mb-2">Apps: Mission-critical systems, Regulated environments</p>
                  <div className="flex justify-between text-base">
                    <p>Timeline: <span className="font-semibold text-red-300">12+ mos</span></p>
                    <p>Success: <span className="font-semibold text-red-300">Variable</span></p>
                    <p>Investment: <span className="font-semibold text-red-300">High</span></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-blue-600/20 rounded-lg">
              <p className="text-xl text-blue-200 font-semibold mb-2 text-center">
                Strategic Approach: Start with low-complexity, high-impact projects.
              </p>
              <p className="text-center text-lg text-white">
                <span className="font-semibold">Keys to Success:</span> Pilot Programs · Strong PM · Clear Metrics · Stakeholder Buy-in
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none text-center mt-8">
          <div className="highlight-box text-xl">
            Challenge Reality: Every barrier is solvable with the right approach—early adopters are proving this daily.
          </div>
        </div>
      </div>
    </div>
  );
}
