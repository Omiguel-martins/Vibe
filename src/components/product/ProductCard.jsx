import { useNavigate } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Badge } from '../ui/Badge'
import { formatCurrency, discountPercent } from '../../utils/cn'

export function ProductCard({ product }) {
  const navigate = useNavigate()
  const { addItem } = useCart()

  const discount = discountPercent(product.originalPrice, product.price)

  const badgeVariantMap = {
    DESTAQUE: 'gold',
    NOVO: 'dark',
    EXCLUSIVO: 'exclusive',
    LANÇAMENTO: 'gold',
    COMBO: 'exclusive',
  }

  return (
    <div
      className="group relative bg-white border border-[#DDD8D0] hover:border-[#A8793C]/40 hover:shadow-md transition-all duration-300 w-full flex flex-col"
      style={{ touchAction: 'pan-y' }}
    >
      {product.badge && (
        <div className="absolute top-2.5 left-2.5 z-10">
          <Badge variant={badgeVariantMap[product.badge] || 'gold'}>
            {product.badge}
          </Badge>
        </div>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation()
          addItem(product)
        }}
        className="absolute top-2.5 right-2.5 z-10 w-9 h-9 flex items-center justify-center bg-white/95 border border-[#DDD8D0] text-[#A8793C] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 hover:bg-[#A8793C] hover:text-white hover:border-[#A8793C] shadow-sm cursor-pointer"
        aria-label={`Adicionar ${product.name} ${product.subtitle} ao carrinho`}
      >
        <ShoppingBag size={15} />
      </button>

      <button
        onClick={() => navigate(`/produto/${product.slug}`)}
        className="relative block w-full aspect-square overflow-hidden bg-[#F8F6F2] cursor-pointer p-4"
        aria-label={`Ver ${product.name} ${product.subtitle}`}
      >
        <img
          src={product.thumbnail}
          alt={`${product.name} ${product.subtitle}`}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
      </button>

      <div className="p-4 border-t border-[#F0EDE7] flex flex-col flex-1 justify-between">
        <button
          onClick={() => navigate(`/produto/${product.slug}`)}
          className="text-left w-full cursor-pointer"
        >
          <p className="text-[10px] 2xl:text-xs tracking-[0.2em] text-[#A8793C]/80 font-inter uppercase">
            {product.name}
          </p>
          <p className="text-sm 2xl:text-base text-[#1C1916] font-inter mt-0.5 leading-tight font-medium">
            {product.subtitle}
          </p>
        </button>

        <div className="mt-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-base 2xl:text-lg font-inter font-semibold text-[#A8793C]">
              {formatCurrency(product.price)}
            </span>
            {discount > 0 && (
              <span className="text-xs text-[#5C5248]/50 line-through font-inter">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          <p className="text-[10px] 2xl:text-xs text-[#5C5248]/40 font-inter tracking-widest mt-1">
            {product.volume}
          </p>
        </div>
      </div>
    </div>
  )
}
