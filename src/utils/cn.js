// Utility: merge Tailwind class names
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Format currency BRL
export function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

// Calculate discount percentage
export function discountPercent(original, current) {
  if (!original || original <= current) return 0
  return Math.round(((original - current) / original) * 100)
}
