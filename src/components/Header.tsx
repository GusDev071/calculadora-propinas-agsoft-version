export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-amber-600 via-amber-800 to-amber-950">
      <div className="absolute inset-x-0 top-0 z-10" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14 md:h-20"
        >
          <path
            d="M0,48 C80,56 160,32 240,40 C320,48 400,56 480,36 C560,16 640,44 720,32 C800,20 880,48 960,40 C1040,32 1120,20 1200,36 C1280,52 1360,40 1440,44 L1440,0 L0,0 Z"
            fill="#FFFAF0"
            className="drop-shadow-sm"
          />
        </svg>

        <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={`foam-${i}`}
              className="shrink-0 rounded-full bg-[#FFFAF0]"
              style={{
                width: `${8 + Math.sin(i * 1.7) * 6}px`,
                height: `${8 + Math.cos(i * 2.1) * 5}px`,
                marginTop: `${-2 + Math.sin(i * 0.9) * 4}px`,
                marginLeft: i === 0 ? 0 : -3,
                opacity: 0.75 + Math.sin(i * 1.3) * 0.15,
              }}
            />
          ))}
        </div>

        <div className="absolute top-1.5 sm:top-2.5 inset-x-0 flex justify-center pointer-events-none">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={`foam-sm-${i}`}
              className="shrink-0 rounded-full bg-[#FFF8EC]"
              style={{
                width: `${5 + Math.sin(i * 2.3) * 3}px`,
                height: `${5 + Math.cos(i * 1.8) * 3}px`,
                marginTop: `${-1 + Math.cos(i * 1.1) * 2}px`,
                marginLeft: i === 0 ? 0 : -2,
                opacity: 0.6 + Math.cos(i * 1.5) * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />

      <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-gradient-to-r from-white/[0.07] via-white/[0.03] to-transparent" />

      <div className="absolute top-0 right-0 bottom-0 w-2/5 bg-gradient-to-l from-white/[0.04] to-transparent" />

      <div className="absolute left-[15%] top-[15%] w-[30%] h-[35%] bg-gradient-to-br from-white/10 to-transparent rounded-[50%] blur-xl" />

      <div className="absolute inset-x-0 bottom-0 pointer-events-none" style={{ height: "80%" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-white/35 animate-bubble"
            style={{
              left: `${8 + i * 9}%`,
              bottom: `${(i * 7) % 35}%`,
              animationDelay: `${i * 0.55}s`,
            }}
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`b-${i}`}
            className="absolute h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full bg-white/20 animate-bubble-delayed"
            style={{
              left: `${12 + i * 11}%`,
              bottom: `${(i * 10 + 5) % 42}%`,
              animationDelay: `${1 + i * 0.65}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 right-4 sm:right-8 pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`drop-${i}`}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/25 animate-condensation"
            style={{
              left: `${15 + i * 22}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-14 md:py-20">
        <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight max-w-2xl leading-tight drop-shadow-lg">
            Calculadora de Propinas
          </h1>
          <p className="text-white/70 font-body text-sm sm:text-base max-w-lg leading-relaxed">
            Arma tu orden, elige el porcentaje de propina y calcula el total al instante
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/5">
              <span className="text-white/60 font-body text-xs sm:text-sm">Menu</span>
              <span className="text-white font-heading font-bold text-lg sm:text-xl">12</span>
              <span className="text-white/60 font-body text-xs sm:text-sm">platillos</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/5">
              <span className="text-white/60 font-body text-xs sm:text-sm">Propinas</span>
              <span className="text-white font-heading font-bold text-lg sm:text-xl">3</span>
              <span className="text-white/60 font-body text-xs sm:text-sm">opciones</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
