import { ProductCard } from '../product/ProductCard'

export function ProductShowcase({ products }) {
  if (!products?.length) return null

  return (
    <section className="py-12 md:py-16 2xl:py-20 bg-[#F8F6F2]">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16">
        
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-2.5">
            <div className="w-8 h-px bg-[#A8793C]/40" />
            <p className="text-[11px] 2xl:text-xs tracking-[0.4em] text-[#A8793C] uppercase font-inter font-semibold">
              Coleção Oficial
            </p>
            <div className="hidden md:block flex-1 h-px bg-[#DDD8D0]" />
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-[#1C1916] font-normal"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Fragrâncias & Combos Exclusivos
          </h2>
          <p className="text-xs sm:text-sm 2xl:text-base text-[#5C5248]/75 font-inter mt-2">
            Body splashes com partículas iluminadoras que perfumam e irradiam elegância por onde você passar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 2xl:gap-8">
          {products.map((product, i) => (
            <div
              key={product.id}
              className="fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
