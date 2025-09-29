
import { Building, Users, Code, BarChart3 } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="flex flex-col h-full px-16 py-10">
        {/* Header */}
        <div className="flex-none text-center mb-6">
          <h1 className="text-7xl font-bold mb-4 text-white">Opportunities: Business Applications</h1>
          <p className="text-3xl text-gray-200">Where Agentic AI delivers immediate value in your operations</p>
        </div>

        {/* Top Row - Category Cards */}
        <div className="flex-none mb-6">
          <div className="grid grid-cols-4 gap-6">
            <div className="metric-card text-center">
              <Building className="mx-auto mb-2 text-blue-400" size={36} />
              <h4 className="text-2xl font-bold text-white mb-2">Enterprise Ops</h4>
              <ul className="text-base text-gray-200 space-y-1 mb-2">
                <li>HR &amp; Onboarding</li>
                <li>Compliance</li>
                <li>Doc Processing</li>
              </ul>
              <p className="text-base text-blue-300 font-semibold">Streamlined workflows</p>
            </div>
            
            <div className="metric-card text-center">
              <Users className="mx-auto mb-2 text-green-400" size={36} />
              <h4 className="text-2xl font-bold text-white mb-2">Customer Experience</h4>
              <ul className="text-base text-gray-200 space-y-1 mb-2">
                <li>24/7 Support</li>
                <li>Personalization</li>
                <li>Issue Resolution</li>
              </ul>
              <p className="text-base text-green-300 font-semibold">Enhanced satisfaction</p>
            </div>
            
            <div className="metric-card text-center">
              <Code className="mx-auto mb-2 text-purple-400" size={36} />
              <h4 className="text-2xl font-bold text-white mb-2">Development &amp; IT</h4>
              <ul className="text-base text-gray-200 space-y-1 mb-2">
                <li>Code Generation</li>
                <li>Testing &amp; Deployment</li>
                <li>Infrastructure Mgmt</li>
              </ul>
              <p className="text-base text-purple-300 font-semibold">Accelerated delivery</p>
            </div>
            
            <div className="metric-card text-center">
              <BarChart3 className="mx-auto mb-2 text-orange-400" size={36} />
              <h4 className="text-2xl font-bold text-white mb-2">Business Intelligence</h4>
              <ul className="text-base text-gray-200 space-y-1 mb-2">
                <li>Data Analysis</li>
                <li>Reporting</li>
                <li>Forecasting</li>
              </ul>
              <p className="text-base text-orange-300 font-semibold">Smarter decisions</p>
            </div>
          </div>
        </div>

        {/* Bottom Row - Detailed Applications */}
        <div className="flex-1 min-h-0 grid grid-cols-[3fr_1fr] gap-6">
          {/* Left - Detailed Use Cases */}
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold text-white mb-3">High-Impact Use Cases</h3>
            
            <div className="flex flex-col gap-3 flex-1">
              <div className="metric-card">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-2xl font-semibold text-blue-400">Autonomous Customer Support</h4>
                  <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-md text-base whitespace-nowrap">High ROI</span>
                </div>
                <p className="text-lg text-gray-200">
                  AI agents handle complex inquiries, escalating when needed. <span className="text-green-400 font-semibold">Reduces support tickets by 80%.</span>
                </p>
              </div>
              
              <div className="metric-card">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-2xl font-semibold text-purple-400">Intelligent HR Workflows</h4>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-md text-base whitespace-nowrap">Immediate Impact</span>
                </div>
                <p className="text-lg text-gray-200">
                  Automates onboarding, compliance, and employee support. <span className="text-green-400 font-semibold">90% faster onboarding.</span>
                </p>
              </div>
              
              <div className="metric-card">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-2xl font-semibold text-orange-400">Smart Business Operations</h4>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-md text-base whitespace-nowrap">Broad Applicability</span>
                </div>
                <p className="text-lg text-gray-200">
                  Automates travel, scheduling, and vendor management. <span className="text-green-400 font-semibold">Saves 50% of time on routine tasks.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right - ROI Summary */}
          <div className="flex flex-col">
            <div className="metric-card flex-1 flex flex-col">
              <h3 className="text-3xl font-bold text-white mb-4">Investment Returns</h3>
              
              <div className="space-y-4 flex-1">
                <div>
                  <p className="text-lg text-gray-400">Typical Payback:</p>
                  <p className="text-3xl text-green-400 font-bold">3-6 months</p>
                </div>
                
                <div>
                  <p className="text-lg text-gray-400">Cost Savings:</p>
                  <p className="text-3xl text-blue-400 font-bold">40-60%</p>
                </div>
                
                <div>
                  <p className="text-lg text-gray-400">Productivity Gain:</p>
                  <p className="text-3xl text-purple-400 font-bold">5-10x</p>
                </div>
                
                <div>
                  <p className="text-lg text-gray-400">Revenue Impact:</p>
                  <p className="text-2xl text-orange-400 font-bold">New Services</p>
                </div>
              </div>
              <div className="mt-auto pt-2">
                 <p className="text-base text-blue-200 bg-blue-600/20 p-2 rounded-lg text-center">
                  Start small, scale fast—minimal investment needed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none text-center mt-4">
          <div className="highlight-box text-xl">
            Strategic Opportunity: These applications are available today. The question is how quickly you can implement.
          </div>
        </div>
      </div>
    </div>
  );
}
