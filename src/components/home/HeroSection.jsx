import { useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { formatCurrency, discountPercent } from '../../utils/cn'

export function HeroSection({ product }) {
  const navigate = useNavigate()
  const { addItem } = useCart()

  if (!product) return null

  const discount = discountPercent(product.originalPrice, product.price)

  return (
    <section className="relative overflow-hidden bg-[#F8F6F2] py-8 md:py-16 lg:py-20 2xl:py-24 border-b border-[#DDD8D0]/60">

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(ellipse 70% 60% at 75% 40%,
              rgba(168, 121, 60, 0.08) 0%,
              transparent 70%),
            radial-gradient(ellipse 60% 50% at 20% 80%,
              rgba(168, 121, 60, 0.04) 0%,
              transparent 60%)
          `,
        }}
      />

      <div className="hidden lg:block absolute top-0 left-12 2xl:left-20 w-px h-full bg-gradient-to-b from-[#DDD8D0]/0 via-[#DDD8D0] to-[#DDD8D0]/0" />
      <div className="hidden lg:block absolute top-0 right-12 2xl:right-20 w-px h-full bg-gradient-to-b from-[#DDD8D0]/0 via-[#DDD8D0] to-[#DDD8D0]/0" />

      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-16 items-center">

          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            
            <div className="flex items-center gap-3 mb-4 fade-in-up">
              <Badge variant="gold">
                {product.badge}
              </Badge>
              <span className="text-xs 2xl:text-sm tracking-[0.35em] text-[#A8793C] uppercase font-inter font-medium">
                Coleção {product.collection}
              </span>
            </div>

            <h1
              className="fade-in-up"
              style={{ animationDelay: '0.1s', fontFamily: '"Playfair Display", serif' }}
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-semibold gradient-gold tracking-wide leading-tight">
                {product.name}
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl italic text-[#1C1916]/80 mt-1">
                {product.subtitle}
              </span>
            </h1>

            <p
              className="text-[#5C5248] mt-4 2xl:mt-6 max-w-lg 2xl:max-w-xl leading-relaxed text-base sm:text-lg 2xl:text-xl italic fade-in-up"
              style={{
                animationDelay: '0.2s',
                fontFamily: '"Cormorant Garamond", serif',
              }}
            >
              "{product.tagline}"
            </p>

            <p className="text-xs sm:text-sm 2xl:text-base text-[#5C5248]/80 font-inter mt-3 max-w-md 2xl:max-w-lg leading-relaxed hidden sm:block fade-in-up"
               style={{ animationDelay: '0.25s' }}>
              {product.description}
            </p>

            <div
              className="flex items-baseline gap-4 mt-6 2xl:mt-8 fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <span className="text-3xl sm:text-4xl 2xl:text-5xl font-inter font-semibold gradient-gold">
                {formatCurrency(product.price)}
              </span>
              {discount > 0 && (
                <>
                  <span className="text-base sm:text-lg 2xl:text-xl text-[#5C5248]/50 line-through font-inter">
                    {formatCurrency(product.originalPrice)}
                  </span>
                  <span className="text-xs 2xl:text-sm bg-[#E8D5A3] text-[#6E4C22] border border-[#C9A96E]/30 px-2.5 py-0.5 font-inter font-semibold">
                    -{discount}% OFF
                  </span>
                </>
              )}
            </div>

            <p className="text-xs 2xl:text-sm text-[#5C5248]/60 font-inter tracking-widest mt-1.5">
              Frasco de {product.volume} · Partículas iluminadoras · Fixação prolongada
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 2xl:gap-4 w-full max-w-md 2xl:max-w-lg mt-6 2xl:mt-8 fade-in-up"
              style={{ animationDelay: '0.35s' }}
            >
              <Button
                variant="primary"
                size="lg"
                className="flex-1 py-4 2xl:py-5 text-xs 2xl:text-sm tracking-[0.2em]"
                onClick={() => addItem(product)}
              >
                Adicionar à Sacola
              </Button>
              <Button
                variant="secondary"
                size="md"
                className="flex-1 py-4 2xl:py-5 text-xs 2xl:text-sm tracking-[0.2em]"
                onClick={() => navigate(`/produto/${product.slug}`)}
              >
                Conhecer Notas
              </Button>
            </div>

            <div
              className="w-full max-w-lg 2xl:max-w-xl mt-8 2xl:mt-10 pt-6 border-t border-[#DDD8D0] fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <p className="text-[10px] 2xl:text-xs tracking-[0.35em] text-[#5C5248]/60 uppercase font-inter mb-3">
                Pirâmide Olfativa
              </p>
              <div className="grid grid-cols-3 gap-2.5 2xl:gap-3.5">
                {[
                  { label: 'Topo', notes: product.notes?.top?.slice(0, 2) },
                  { label: 'Coração', notes: product.notes?.heart?.slice(0, 2) },
                  { label: 'Base', notes: product.notes?.base?.slice(0, 2) },
                ].map(({ label, notes }) => (
                  <div key={label} className="p-3 2xl:p-4 bg-white border border-[#DDD8D0]/80 text-center shadow-2xs">
                    <p className="text-[9px] 2xl:text-[10px] tracking-[0.2em] text-[#A8793C] uppercase font-inter mb-1 font-semibold">
                      {label}
                    </p>
                    {notes?.map((note) => (
                      <p key={note} className="text-[11px] 2xl:text-xs text-[#5C5248] font-inter leading-tight">
                        {note}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 flex justify-center items-center relative z-10 my-4 lg:my-0">
            <div
              className="absolute w-72 h-72 sm:w-96 sm:h-96 2xl:w-[520px] 2xl:h-[520px] rounded-full blur-3xl opacity-25 scale-90 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #A8793C 0%, rgba(232, 213, 163, 0.5) 50%, transparent 75%)',
              }}
            />

            <div
              className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] 2xl:w-[480px] 2xl:h-[600px] cursor-pointer float"
              onClick={() => navigate(`/produto/${product.slug}`)}
            >
              <img
                src={product.images[0]}
                alt={`${product.name} ${product.subtitle}`}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
