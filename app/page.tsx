export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Dynamic star field */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => {
          const size = Math.random() * 3;
          const delay = Math.random() * 5;
          const duration = 2 + Math.random() * 3;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: size + 'px',
                height: size + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: 0.2 + Math.random() * 0.8,
                animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
              }}
            />
          );
        })}
      </div>

      {/* Radial gradient moonlight */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12 md:py-24">
        
        {/* Hero with diagonal layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <div className="inline-block">
              <h1 className="text-8xl md:text-9xl font-black text-white leading-none tracking-tighter mb-4"
                  style={{ fontFamily: '"Space Mono", monospace' }}>
                LUNA
              </h1>
              <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-transparent" />
            </div>
            <p className="text-2xl md:text-3xl text-blue-200 font-light leading-relaxed"
               style={{ fontFamily: '"Space Mono", monospace' }}>
              Earth's celestial companion.<br/>
              <span className="text-white">384,400 km</span> of pure mystery.
            </p>
          </div>
          
          {/* Large animated moon */}
          <div className="relative h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 shadow-2xl relative"
                style={{
                  boxShadow: '0 0 60px rgba(255,255,255,0.3), inset -20px -20px 60px rgba(0,0,0,0.3)',
                  animation: 'float 6s ease-in-out infinite'
                }}
              >
                {/* Craters */}
                <div className="absolute top-1/4 left-1/3 w-16 h-16 rounded-full bg-gray-500/30 blur-sm" />
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gray-500/20 blur-sm" />
                <div className="absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-gray-600/40 blur-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats in brutalist blocks */}
        <div className="grid md:grid-cols-4 gap-6 mb-32">
          {[
            { label: 'DISTANCE', value: '384,400', unit: 'km', color: 'from-blue-500 to-cyan-400' },
            { label: 'ORBIT', value: '27.3', unit: 'days', color: 'from-purple-500 to-pink-400' },
            { label: 'DIAMETER', value: '3,474', unit: 'km', color: 'from-orange-500 to-yellow-400' },
            { label: 'GRAVITY', value: '1.62', unit: 'm/s²', color: 'from-green-500 to-emerald-400' },
          ].map((stat, i) => (
            <div 
              key={i}
              className="relative group cursor-pointer"
              style={{ animation: `slideIn 0.8s ease-out ${i * 0.1}s both` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                   style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                   className={`bg-gradient-to-br ${stat.color}`} />
              <div className="relative border-2 border-white/20 p-8 backdrop-blur-sm group-hover:border-white/40 transition-all duration-300">
                <div className="text-6xl font-black text-white mb-2" style={{ fontFamily: '"Space Mono", monospace' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-blue-300 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-white/60 font-mono">{stat.unit}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Moon phases - overlapping diagonal layout */}
        <div className="mb-32 relative">
          <h2 className="text-7xl font-black text-white mb-16 tracking-tighter" 
              style={{ fontFamily: '"Space Mono", monospace' }}>
            PHASES_
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { emoji: '🌑', name: 'NEW', desc: 'Invisible alignment' },
              { emoji: '🌓', name: 'FIRST', desc: 'Waxing crescent' },
              { emoji: '🌕', name: 'FULL', desc: 'Maximum illumination' },
              { emoji: '🌗', name: 'LAST', desc: 'Waning gibbous' },
            ].map((phase, i) => (
              <div 
                key={i}
                className="group relative"
                style={{ 
                  animation: `fadeIn 1s ease-out ${i * 0.15}s both`,
                  transform: i % 2 === 0 ? 'translateY(0)' : 'translateY(2rem)'
                }}
              >
                <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all duration-500 group-hover:scale-105">
                  <div className="text-8xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {phase.emoji}
                  </div>
                  <div className="text-2xl font-black text-white mb-2" style={{ fontFamily: '"Space Mono", monospace' }}>
                    {phase.name}
                  </div>
                  <div className="text-blue-300 text-sm font-mono">{phase.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Facts in asymmetric layout */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-8 space-y-6">
            <h2 className="text-6xl font-black text-white mb-8 tracking-tighter"
                style={{ fontFamily: '"Space Mono", monospace' }}>
              FACTS_
            </h2>
            {[
              { icon: '🚀', text: '12 humans walked on Luna (1969-1972)', highlight: '12' },
              { icon: '🌊', text: 'Gravitational pull creates Earth's tides', highlight: 'tides' },
              { icon: '⚖️', text: 'Surface gravity is 1/6th of Earth', highlight: '1/6' },
              { icon: '🌡️', text: 'Temperature swings: -173°C to +127°C', highlight: '300°C' },
            ].map((fact, i) => (
              <div 
                key={i}
                className="flex items-start gap-6 group"
                style={{ animation: `slideRight 0.8s ease-out ${i * 0.1}s both` }}
              >
                <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
                  {fact.icon}
                </div>
                <p className="text-xl text-blue-100 font-mono pt-2 group-hover:text-white transition-colors">
                  {fact.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Side quote block */}
          <div className="md:col-span-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-l-4 border-white p-8 backdrop-blur-sm self-start">
            <p className="text-2xl text-white font-light italic leading-relaxed mb-4">
              "That's one small step for man..."
            </p>
            <div className="text-blue-300 font-mono text-sm">
              — NEIL ARMSTRONG<br/>
              <span className="text-white/60">July 20, 1969</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/20 pt-12 mt-20">
          <div className="flex justify-between items-center">
            <div className="text-blue-300 font-mono">
              CREATED BY <span className="text-white font-black">HARRY</span>
            </div>
            <div className="text-white/40 font-mono text-sm">
              TO THE MOON 🚀
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}
