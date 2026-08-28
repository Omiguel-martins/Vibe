import { Minus, Plus } from 'lucide-react'
import { cn } from '../../utils/cn'

export function QuantitySelector({ value, onChange, min = 1, max = 99, className }) {
  return (
    <div className={cn('flex items-center border border-[#DDD8D0]', className)}>
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-10 h-10 flex items-center justify-center text-[#A8793C] hover:bg-[#F0EDE7] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Diminuir quantidade"
      >
        <Minus size={14} />
      </button>

      <span className="w-12 h-10 flex items-center justify-center text-[#1C1916] font-inter font-medium text-sm border-x border-[#DDD8D0] select-none bg-white">
        {value}
      </span>

      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-10 h-10 flex items-center justify-center text-[#A8793C] hover:bg-[#F0EDE7] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Aumentar quantidade"
      >
        <Plus size={14} />
      </button>
    </div>
  )
}
