import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const [startX, setStartX] = useState(null)

  const prev = useCallback(() => setActive((a) => (a - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setActive((a) => (a + 1) % images.length), [images.length])

  const onTouchStart = (e) => setStartX(e.touches[0].clientX)
  const onTouchEnd = (e) => {
    if (startX === null) return
    const delta = e.changedTouches[0].clientX - startX
    if (delta > 50) prev()
    else if (delta < -50) next()
    setStartX(null)
  }

  return (
    <div className="w-full flex flex-col items-center">
      
      <div
        className="relative w-full aspect-square max-w-lg 2xl:max-w-xl overflow-hidden bg-[#F0EDE7] border border-[#DDD8D0] select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 40%, rgba(168,121,60,0.08) 0%, transparent 75%)',
          }}
        />

        <img
          key={active}
          src={images[active]}
          alt={`${name} - foto ${active + 1}`}
          className="w-full h-full object-contain p-4 md:p-8 fade-in transition-all duration-300"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center bg-white/90 border border-[#DDD8D0] text-[#A8793C] hover:bg-white hover:border-[#A8793C] transition-all shadow-sm"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 flex items-center justify-center bg-white/90 border border-[#DDD8D0] text-[#A8793C] hover:bg-white hover:border-[#A8793C] transition-all shadow-sm"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-200 ${
                  i === active
                    ? 'w-5 h-1.5 bg-[#A8793C]'
                    : 'w-1.5 h-1.5 rounded-full bg-[#A8793C]/25'
                }`}
                aria-label={`Ir para foto ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 mt-4 w-full max-w-lg 2xl:max-w-xl justify-center no-scrollbar overflow-x-auto">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-16 h-16 sm:w-20 sm:h-20 bg-white overflow-hidden transition-all duration-200 ${
                i === active
                  ? 'border-2 border-[#A8793C] shadow-xs'
                  : 'border border-[#DDD8D0] opacity-60 hover:opacity-100 hover:border-[#A8793C]/50'
              }`}
              aria-label={`Ver foto ${i + 1}`}
            >
              <img src={src} alt="" className="w-full h-full object-contain p-1" />
            </button>
          ))}
        </div>
      )}

    </div>
  )
}
