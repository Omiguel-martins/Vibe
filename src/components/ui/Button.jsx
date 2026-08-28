import { cn } from '../../utils/cn'

const variants = {
  primary:   'bg-[#A8793C] text-white hover:bg-[#8C612E] active:bg-[#6E4C22] shadow-sm',
  secondary: 'bg-transparent border border-[#A8793C] text-[#A8793C] hover:bg-[#A8793C]/8 active:bg-[#A8793C]/15',
  ghost:     'bg-transparent text-[#A8793C] hover:bg-[#A8793C]/8',
  dark:      'bg-[#1C1916] text-white hover:bg-[#2E2A26] border border-[#1C1916]',
}

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-widest',
  md: 'px-6 py-3 text-sm tracking-widest',
  lg: 'px-8 py-4 text-base tracking-widest',
  xl: 'px-10 py-5 text-base tracking-widest w-full',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  loading = false,
  disabled = false,
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        'relative inline-flex items-center justify-center gap-2',
        'font-inter font-medium uppercase transition-all duration-200',
        'rounded-none select-none cursor-pointer',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A8793C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F6F2]',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </span>
      )}
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  )
}
