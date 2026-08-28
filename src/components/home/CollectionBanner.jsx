import { Sparkles, Shield, Heart } from 'lucide-react'

const perks = [
  {
    icon: Sparkles,
    title: 'Exclusividade',
    desc: 'Fragrâncias únicas com partículas brilhantes para quem marca presença com sutileza.',
  },
  {
    icon: Shield,
    title: 'Qualidade Premium',
    desc: 'Ingredientes selecionados e alta fixação para acompanhar todos os momentos do seu dia.',
  },
  {
    icon: Heart,
    title: 'Embalagem Sofisticada',
    desc: 'Frascos luxuosos de 200ml desenvolvidos para transformar sua rotina em uma experiência única.',
  },
]

export function CollectionBanner() {
  return (
    <section className="py-12 md:py-16 2xl:py-24 bg-[#F8F6F2]">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16">

        {/* Brand banner centralizado com acabamento de alta costura */}
        <div
          className="relative overflow-hidden py-12 md:py-16 2xl:py-20 px-6 sm:px-12 2xl:px-16 text-center flex flex-col items-center justify-center w-full"
          style={{
            background: `linear-gradient(135deg,
              rgba(248, 246, 242, 0.6) 0%,
              rgba(232, 213, 163, 0.28) 50%,
              rgba(248, 246, 242, 0.6) 100%)`,
            border: '1px solid rgba(168, 121, 60, 0.25)',
          }}
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 2xl:w-10 2xl:h-10 border-t-2 border-l-2 border-[#A8793C]/40" />
          <div className="absolute top-0 right-0 w-8 h-8 2xl:w-10 2xl:h-10 border-t-2 border-r-2 border-[#A8793C]/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 2xl:w-10 2xl:h-10 border-b-2 border-l-2 border-[#A8793C]/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 2xl:w-10 2xl:h-10 border-b-2 border-r-2 border-[#A8793C]/40" />

          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer pointer-events-none" />

          {/* Top Tagline */}
          <p className="text-xs sm:text-sm 2xl:text-base tracking-[0.4em] text-[#A8793C] uppercase font-inter mb-3 font-semibold text-center">
            A Arte de Se Sentir Bem
          </p>

          {/* Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl gradient-gold mb-4 text-center font-semibold"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            VIBE Collection
          </h2>

          {/* Subtitle / Quote */}
          <p
            className="text-[#5C5248] max-w-md sm:max-w-xl 2xl:max-w-2xl mx-auto text-center leading-relaxed text-base sm:text-lg 2xl:text-xl"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic' }}
          >
            Cada frasco conta uma história. Cada nota olfativa é uma memória inesquecível que fica no ar.
          </p>
        </div>

        {/* Perks Grid Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8 mt-10 2xl:mt-14">
          {perks.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white border border-[#DDD8D0] p-6 2xl:p-8 text-center flex flex-col items-center hover:border-[#A8793C]/40 hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 2xl:w-14 2xl:h-14 flex items-center justify-center border border-[#A8793C]/30 bg-[#F8F6F2] mb-4">
                <Icon size={22} className="text-[#A8793C]" />
              </div>
              <h3 className="text-xs 2xl:text-sm font-inter font-semibold uppercase tracking-wider text-[#1C1916] mb-2">
                {title}
              </h3>
              <p className="text-xs 2xl:text-sm text-[#5C5248]/80 font-inter leading-relaxed max-w-xs 2xl:max-w-sm">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
