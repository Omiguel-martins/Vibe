import { useEffect, useRef } from 'react'
import { X, ShoppingBag, MessageCircle, ArrowLeft } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { CartItem } from './CartItem'
import { Button } from '../ui/Button'
import { formatCurrency } from '../../utils/cn'

const WHATSAPP_NUMBER = '5566981338837'

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

  // ── Gerador de Mensagem do WhatsApp (Imprime Pedido Direto) ─
  const handleCheckoutWhatsApp = () => {
    if (isEmpty) return

    let messageText = ''

    if (items.length === 1) {
      const singleItem = items[0]
      const qtyStr = singleItem.quantity > 1 ? `${singleItem.quantity}x ` : '1x '
      messageText = `Olá, eu gostaria de comprar ${qtyStr}Body Splash ${singleItem.name} ${singleItem.subtitle}.\n\n`
    } else {
      messageText = `Olá, eu gostaria de comprar os seguintes produtos:\n\n`
      items.forEach((item) => {
        messageText += `- ${item.quantity}x Body Splash ${item.name} ${item.subtitle} (${formatCurrency(item.price * item.quantity)})\n`
      })
      messageText += `\n`
    }

    messageText += `Valor Total: ${formatCurrency(subtotal)}\n\n`
    messageText += `Como posso prosseguir com a retirada/entrega do pedido?`

    const encodedMessage = encodeURIComponent(messageText)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 drawer-overlay fade-in"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Sacola de compras"
        className="absolute right-0 top-0 bottom-0 w-full max-w-sm md:max-w-md bg-[#F8F6F2] flex flex-col border-l border-[#DDD8D0] shadow-2xl"
        style={{ animation: 'slideInRight 0.3s ease' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#DDD8D0] bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag size={20} className="text-[#A8793C]" />
            <h2 className="font-inter font-semibold text-sm tracking-wider text-[#1C1916] uppercase">
              Sua Sacola
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-[#5C5248] hover:text-[#1C1916] transition-colors cursor-pointer"
            aria-label="Fechar sacola"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
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
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="mt-2"
              >
                Explorar Coleção
              </Button>
            </div>
          ) : (
            <div>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary & Ações */}
        {!isEmpty && (
          <div className="border-t border-[#DDD8D0] bg-white px-6 py-5 space-y-3">
            <div className="space-y-1.5">
              <div className="flex justify-between text-base font-inter font-semibold text-[#1C1916] pt-1">
                <span>Total do Pedido</span>
                <span className="gradient-gold text-xl font-bold">{formatCurrency(subtotal)}</span>
              </div>
            </div>

            {/* Botão Principal: WhatsApp */}
            <Button
              variant="primary"
              size="xl"
              onClick={handleCheckoutWhatsApp}
              className="mt-2 py-4 bg-[#25D366] hover:bg-[#1EBE5B] text-white border-transparent flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageCircle size={18} />
              <span>Enviar Pedido no WhatsApp</span>
            </Button>

            {/* Botão Secundário: Continuar Comprando */}
            <Button
              variant="secondary"
              size="md"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 text-xs tracking-widest flex items-center justify-center gap-2 cursor-pointer border-[#DDD8D0] text-[#5C5248] hover:text-[#1C1916] hover:border-[#A8793C]"
            >
              <ArrowLeft size={14} />
              <span>Continuar Comprando</span>
            </Button>

            {/* Limpar sacola */}
            <button
              onClick={clearCart}
              className="w-full text-xs text-[#5C5248]/50 hover:text-red-500 transition-colors font-inter tracking-wide py-1 text-center cursor-pointer"
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
