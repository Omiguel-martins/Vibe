import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Search, Home, Sparkles, Heart, User } from 'lucide-react'
import { useCart } from '../../context/CartContext'

const navItems = [
  { to: '/', icon: Home, label: 'Início', end: true },
  { to: '/colecao', icon: Sparkles, label: 'Coleção' },
  { to: '/favoritos', icon: Heart, label: 'Favoritos' },
  { to: '/conta', icon: User, label: 'Conta' },
]

export function Header() {
  const { totalItems, setIsOpen } = useCart()

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#F8F6F2] border-b border-[#DDD8D0] shadow-sm">
      
      {/* ── Top Announcement Bar (Desktop) ────────────────── */}
      <div className="hidden md:block bg-[#F0EDE7] border-b border-[#DDD8D0]/60 py-2 text-center">
        <p className="text-[11px] 2xl:text-xs font-inter text-[#5C5248] tracking-widest uppercase font-medium">
          ✦ VIBE Perfumaria · Fragrâncias Exclusivas com Partículas Iluminadoras · Peça no WhatsApp ✦
        </p>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 bg-[#F8F6F2]">

        {/* ── Linha Superior: Logo + Ações (Desktop & Mobile) ─ */}
        <div className="flex items-center justify-between h-14 md:h-18 border-b md:border-b-0 border-[#DDD8D0]/60">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-none select-none md:mr-8"
          >
            <span
              className="text-xl md:text-2xl 2xl:text-3xl tracking-[0.3em] gradient-gold font-semibold"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              VIBE
            </span>
            <span className="text-[8px] md:text-[9px] 2xl:text-[10px] tracking-[0.45em] text-[#5C5248]/70 uppercase font-inter -mt-0.5 font-medium">
              Perfumaria
            </span>
          </Link>

          {/* ── Links de Navegação Desktop (Centro) ──────────── */}
          <nav className="hidden md:flex items-center gap-8 2xl:gap-12">
            {navItems.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `text-xs 2xl:text-sm font-inter uppercase tracking-[0.2em] py-2 transition-all relative ${
                    isActive
                      ? 'text-[#A8793C] font-semibold'
                      : 'text-[#5C5248] hover:text-[#A8793C]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A8793C] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Ações: Busca + Carrinho */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Buscar"
              className="flex items-center gap-2 px-3 py-1.5 2xl:px-4 2xl:py-2 text-[#5C5248] hover:text-[#A8793C] hover:bg-white border border-transparent hover:border-[#DDD8D0] transition-all"
            >
              <Search size={18} />
              <span className="hidden md:inline text-xs 2xl:text-sm font-inter tracking-wider text-[#5C5248]/80">
                Buscar
              </span>
            </button>

            <button
              aria-label={`Sacola (${totalItems} itens)`}
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2.5 px-3 py-1.5 2xl:px-4 2xl:py-2 bg-white border border-[#DDD8D0] hover:border-[#A8793C] text-[#1C1916] transition-all shadow-2xs cursor-pointer"
            >
              <div className="relative">
                <ShoppingBag size={19} className="text-[#A8793C]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#A8793C] text-white text-[9px] font-bold flex items-center justify-center leading-none">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </div>
              <span className="hidden md:inline text-xs 2xl:text-sm font-inter font-medium tracking-wider text-[#1C1916]">
                Sacola
              </span>
            </button>
          </div>

        </div>

        {/* ── Linha Inferior Mobile: Abas de Navegação Touch ─── */}
        <nav className="flex md:hidden items-center justify-around h-11 px-1 bg-[#F8F6F2]">
          {navItems.map(({ to, icon: Icon, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex items-center gap-1.5 px-3 py-1.5 transition-all text-xs font-inter uppercase tracking-wider relative ${
                  isActive
                    ? 'text-[#A8793C] font-semibold'
                    : 'text-[#5C5248]/70 hover:text-[#1C1916]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon size={14} strokeWidth={isActive ? 2.2 : 1.6} />
                  <span className="text-[10px] tracking-widest">{label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#A8793C] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  )
}
