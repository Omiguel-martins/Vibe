import { cn } from '../../utils/cn'

const badgeVariants = {
  gold:      'bg-[#A8793C] text-white',
  dark:      'bg-[#1C1916] text-[#E8D5A3]',
  new:       'bg-[#1C1916] text-white',
  exclusive: 'bg-[#E8D5A3] text-[#6E4C22] border border-[#C9A96E]/40',
}

export function Badge({ children, variant = 'gold', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5',
        'text-[10px] font-inter font-semibold tracking-[0.15em] uppercase',
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
