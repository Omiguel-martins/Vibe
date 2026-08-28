import { useEffect, useRef } from 'react'
import { X, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { CartItem } from './CartItem'
import { Button } from '../ui/Button'
import { formatCurrency } from '../../utils/cn'

export function CartDrawer() {
  const { isOpen, setIsOpen, items, isEmpty, subtotal, clearCart } = useCart()
  const drawerRef = useRef(null)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  const shipping = subtotal >= 150 ? 0 : 18.9
  const total = subtotal + shipping

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 drawer-overlay fade-in"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Carrinho de compras"
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm md:max-w-md bg-[#F8F6F2] flex flex-col border-l border-[#DDD8D0] shadow-2xl"
        style={{ animation: 'slideInRight 0.3s ease' }}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#DDD8D0] bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={20} className="text-[#A8793C]" />
            <h2 className="font-inter font-semibold text-sm tracking-wider text-[#1C1916] uppercase">
              Sua Sacola
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-[#5C5248] hover:text-[#1C1916] transition-colors"
            aria-label="Fechar carrinho"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 no-scrollbar">
          {isEmpty ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-16">
              <div className="w-16 h-16 border border-[#DDD8D0] bg-white flex items-center justify-center">
                <ShoppingBag size={24} className="text-[#A8793C]/30" />
              </div>
              <p
                className="text-xl text-[#1C1916]/60 italic"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Sua sacola está vazia
              </p>
              <p className="text-xs text-[#5C5248]/70 font-inter tracking-wide">
                Descubra nossas fragrâncias exclusivas
              </p>
              <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)} className="mt-2">
                Ver Coleção
              </Button>
            </div>
          ) : (
            <div>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              <div className="py-3.5 mt-2 bg-white/70 border border-[#DDD8D0]/60 p-3 rounded-none">
                {shipping === 0 ? (
                  <p className="text-xs text-[#A8793C] text-center font-inter font-semibold">
                    ✓ Parabéns! Você ganhou Frete Grátis
                  </p>
                ) : (
                  <p className="text-xs text-[#5C5248] text-center font-inter">
                    Faltam apenas{' '}
                    <strong className="text-[#A8793C] font-semibold">
                      {formatCurrency(150 - subtotal)}
                    </strong>{' '}
                    para <span className="font-semibold text-[#1C1916]">Frete Grátis</span>!
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {!isEmpty && (
          <div className="border-t border-[#DDD8D0] bg-white px-6 py-6 space-y-3.5">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-inter text-[#5C5248]">
                <span>Subtotal</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm font-inter text-[#5C5248]">
                <span>Frete</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-[#A8793C] font-semibold">Grátis</span>
                  ) : (
                    formatCurrency(shipping)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-base font-inter font-semibold text-[#1C1916] pt-2 border-t border-[#DDD8D0]">
                <span>Total</span>
                <span className="gradient-gold text-lg">{formatCurrency(total)}</span>
              </div>
            </div>

            <Button variant="primary" size="xl" className="mt-2 py-4">
              <span>Finalizar Pedido</span>
              <ArrowRight size={16} />
            </Button>

            <button
              onClick={clearCart}
              className="w-full text-xs text-[#5C5248]/60 hover:text-red-500 transition-colors font-inter tracking-wide py-1"
            >
              Limpar sacola
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
