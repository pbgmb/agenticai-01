import { Settings, Target, TrendingUp, Lightbulb } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="relative w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col h-full px-16 py-10">
        {/* Header */}
        <div className="flex-none text-center mb-10">
          <h1 className="text-6xl font-bold mb-4">Future Outlook: Strategic Implications</h1>
          <p className="text-3xl text-gray-300">What Agentic AI means for your business strategy</p>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-12">
          
          {/* Left - Business Strategy Implications */}
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold text-center mb-6">Business Strategy Implications</h3>
            <div className="flex flex-col flex-1 justify-around gap-6">
              <div className="p-6 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Settings className="text-blue-400 flex-shrink-0" size={40} />
                  <div>
                    <h4 className="text-2xl font-bold">Operational Excellence</h4>
                    <p className="text-xl text-gray-300">Shift: From process management to outcome optimization.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Target className="text-red-400 flex-shrink-0" size={40} />
                  <div>
                    <h4 className="text-2xl font-bold">Competitive Positioning</h4>
                    <p className="text-xl text-gray-300">Shift: From human advantages to AI-amplified capabilities.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <TrendingUp className="text-green-400 flex-shrink-0" size={40} />
                  <div>
                    <h4 className="text-2xl font-bold">Growth &amp; Scaling</h4>
                    <p className="text-xl text-gray-300">Shift: From linear growth to exponential possibility.</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Lightbulb className="text-yellow-400 flex-shrink-0" size={40} />
                  <div>
                    <h4 className="text-2xl font-bold">Innovation &amp; Development</h4>
                    <p className="text-xl text-gray-300">Shift: From planned innovation to continuous adaptation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Organizational Transformation Needs */}
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold text-center mb-6">Organizational Transformation</h3>
            <div className="flex flex-col flex-1 justify-around gap-4">
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="text-xl font-bold text-blue-300 mb-1">Leadership Mindset Shift</h4>
                <p className="text-lg text-gray-300">Orchestrate human-AI teams and develop AI literacy.</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="text-xl font-bold text-green-300 mb-1">Workforce Evolution</h4>
                <p className="text-lg text-gray-300">Upskill for AI collaboration and hire AI-native talent.</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="text-xl font-bold text-purple-300 mb-1">Process Redesign</h4>
                <p className="text-lg text-gray-300">Rebuild workflows around AI-first principles.</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="text-xl font-bold text-orange-300 mb-1">Cultural Adaptation</h4>
                <p className="text-lg text-gray-300">Foster continuous learning and AI experimentation.</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg">
                <h4 className="text-xl font-bold text-pink-300 mb-1">Strategic Roadmap</h4>
                <p className="text-lg text-gray-300">Develop a phased approach for AI integration.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none text-center mt-8">
          <div className="highlight-box text-2xl">
            Strategic Imperative: Companies that master Agentic AI will define the next competitive landscape.
          </div>
        </div>
      </div>
    </div>
  );
}
