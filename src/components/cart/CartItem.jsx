import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { formatCurrency } from '../../utils/cn'

export function CartItem({ item }) {
  const { removeItem, updateQuantity } = useCart()

  return (
    <div className="flex gap-3.5 py-4 border-b border-[#DDD8D0] fade-in-up items-center">
      <div className="w-16 h-16 shrink-0 border border-[#DDD8D0] overflow-hidden bg-[#F0EDE7] p-1">
        <img
          src={item.thumbnail}
          alt={`${item.name} ${item.subtitle}`}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[10px] tracking-[0.2em] text-[#A8793C] font-inter uppercase font-medium">
          {item.name}
        </p>
        <p className="text-sm text-[#1C1916] font-inter truncate font-medium">
          {item.subtitle}
        </p>
        <p className="text-sm text-[#A8793C] font-semibold mt-0.5">
          {formatCurrency(item.price)}
        </p>
      </div>

      <div className="flex flex-col items-end justify-between gap-2">
        <button
          onClick={() => removeItem(item.id)}
          className="text-[#5C5248]/50 hover:text-red-500 transition-colors p-1"
          aria-label="Remover item"
        >
          <Trash2 size={14} />
        </button>

        <div className="flex items-center border border-[#DDD8D0]">
          <button
            onClick={() =>
              item.quantity > 1
                ? updateQuantity(item.id, item.quantity - 1)
                : removeItem(item.id)
            }
            className="w-7 h-7 flex items-center justify-center text-[#A8793C] hover:bg-[#F0EDE7] transition-colors"
            aria-label="Diminuir"
          >
            <Minus size={11} />
          </button>
          <span className="w-7 h-7 flex items-center justify-center text-[#1C1916] text-xs font-inter border-x border-[#DDD8D0] bg-white">
            {item.quantity}
          </span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-7 h-7 flex items-center justify-center text-[#A8793C] hover:bg-[#F0EDE7] transition-colors"
            aria-label="Aumentar"
          >
            <Plus size={11} />
          </button>
        </div>
      </div>
    </div>
  )
}
