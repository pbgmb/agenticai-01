
import Image from 'next/image';

export default function Slide1() {
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://cdn.abacus.ai/images/e03c0ba2-5839-4396-98c3-3a31d810c493.png"
          alt="Abstract technology network background with AI neural pathways"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-700/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Hero Content - centered vertically and horizontally */}
        <div className="flex-1 flex flex-col items-center justify-center px-16 text-center">
          <h1 className="text-9xl font-bold mb-8 text-white leading-tight">
            Agentic AI: The Business Revolution You Can't Ignore
          </h1>
          
          <p className="text-5xl text-gray-200 mb-12 leading-relaxed">
            How Autonomous AI Systems Will Transform Your Industry by 2025
          </p>
          
          <div className="highlight-box text-4xl mb-16">
            From Reactive Tools to Proactive Digital Partners
          </div>
          
          <p className="text-3xl text-gray-300">
            Executive Briefing for Business Leaders
          </p>
        </div>
        
        {/* Footer */}
        <div className="flex-none text-center pb-8">
          <p className="text-2xl text-gray-400">© 2025 Agentic AI Analysis Report</p>
        </div>
      </div>
    </div>
  );
}
