import { Link } from 'react-router-dom'
import { ShieldCheck, Sparkles, RefreshCw, Mail, MessageCircle, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#DDD8D0] text-[#1C1916] mt-auto">
      
      <div className="border-b border-[#DDD8D0]/60 py-8 2xl:py-10 bg-[#F0EDE7]/40">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-6 2xl:gap-8 text-center md:text-left">
          
          <div className="flex items-center justify-center md:justify-start gap-4 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-14 2xl:h-14 border border-[#A8793C]/30 bg-white flex items-center justify-center shrink-0">
              <Sparkles size={22} className="text-[#A8793C]" />
            </div>
            <div>
              <h4 className="text-xs 2xl:text-sm font-inter font-semibold uppercase tracking-wider text-[#1C1916]">
                Atendimento Personalizado
              </h4>
              <p className="text-xs 2xl:text-sm text-[#5C5248]/80 font-inter mt-0.5">
                Faça seu pedido diretamente pelo WhatsApp
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-14 2xl:h-14 border border-[#A8793C]/30 bg-white flex items-center justify-center shrink-0">
              <ShieldCheck size={22} className="text-[#A8793C]" />
            </div>
            <div>
              <h4 className="text-xs 2xl:text-sm font-inter font-semibold uppercase tracking-wider text-[#1C1916]">
                Compra 100% Segura
              </h4>
              <p className="text-xs 2xl:text-sm text-[#5C5248]/80 font-inter mt-0.5">
                Privacidade e segurança de ponta a ponta
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 2xl:gap-5">
            <div className="w-12 h-12 2xl:w-14 2xl:h-14 border border-[#A8793C]/30 bg-white flex items-center justify-center shrink-0">
              <RefreshCw size={22} className="text-[#A8793C]" />
            </div>
            <div>
              <h4 className="text-xs 2xl:text-sm font-inter font-semibold uppercase tracking-wider text-[#1C1916]">
                Alta Fixação & Brilho
              </h4>
              <p className="text-xs 2xl:text-sm text-[#5C5248]/80 font-inter mt-0.5">
                Fragrâncias exclusivas com partículas iluminadoras
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-6 lg:px-12 2xl:px-16 py-12 2xl:py-16 grid grid-cols-1 md:grid-cols-4 gap-8 2xl:gap-12">
        
        <div className="space-y-4 text-center md:text-left">
          <Link to="/" className="inline-block">
            <span
              className="text-2xl 2xl:text-3xl tracking-[0.3em] gradient-gold font-semibold"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              VIBE
            </span>
            <span className="block text-[9px] 2xl:text-[10px] tracking-[0.45em] text-[#5C5248]/70 uppercase font-inter -mt-0.5">
              Perfumaria
            </span>
          </Link>
          <p className="text-xs 2xl:text-sm text-[#5C5248] font-inter leading-relaxed max-w-xs 2xl:max-w-sm mx-auto md:mx-0">
            Fragrâncias sofisticadas desenvolvidas para marcar presença com sutileza, elegância e brilho inconfundível.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-xs 2xl:text-sm font-inter font-semibold uppercase tracking-widest text-[#A8793C] mb-4">
            Navegação
          </h4>
          <ul className="space-y-2.5 text-xs 2xl:text-sm font-inter text-[#5C5248]">
            <li><Link to="/" className="hover:text-[#A8793C] transition-colors">Início</Link></li>
            <li><Link to="/produto/vibe-boa-menina" className="hover:text-[#A8793C] transition-colors">Boa Menina</Link></li>
            <li><Link to="/produto/vibe-rosa-da-manha" className="hover:text-[#A8793C] transition-colors">Rosa da Manhã</Link></li>
            <li><Link to="/produto/vibe-invencivel" className="hover:text-[#A8793C] transition-colors">Invencível</Link></li>
            <li><Link to="/produto/vibe-combo-colecao-completa" className="hover:text-[#A8793C] transition-colors">Combo Trio Especial</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h4 className="text-xs 2xl:text-sm font-inter font-semibold uppercase tracking-widest text-[#A8793C] mb-4">
            Atendimento
          </h4>
          <ul className="space-y-2.5 text-xs 2xl:text-sm font-inter text-[#5C5248]">
            <li>WhatsApp: (66) 98133-8837</li>
            <li>Segunda a Sexta das 09h às 18h</li>
            <li>contato@vibefragrances.com.br</li>
            <li>Dúvidas Frequentes</li>
          </ul>
        </div>

        <div className="text-center md:text-left space-y-4">
          <h4 className="text-xs 2xl:text-sm font-inter font-semibold uppercase tracking-widest text-[#A8793C]">
            Acompanhe a VIBE
          </h4>
          <p className="text-xs 2xl:text-sm text-[#5C5248] font-inter">
            Receba novidades e lançamentos exclusivos em primeira mão.
          </p>
          <div className="flex justify-center md:justify-start gap-3">
            <a href="#" aria-label="Website oficial" className="w-9 h-9 2xl:w-10 2xl:h-10 border border-[#DDD8D0] flex items-center justify-center text-[#5C5248] hover:text-[#A8793C] hover:border-[#A8793C] transition-colors">
              <Globe size={16} />
            </a>
            <a href="https://wa.me/5566981338837" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="w-9 h-9 2xl:w-10 2xl:h-10 border border-[#DDD8D0] flex items-center justify-center text-[#5C5248] hover:text-[#A8793C] hover:border-[#A8793C] transition-colors">
              <MessageCircle size={16} />
            </a>
            <a href="mailto:contato@vibefragrances.com.br" aria-label="E-mail" className="w-9 h-9 2xl:w-10 2xl:h-10 border border-[#DDD8D0] flex items-center justify-center text-[#5C5248] hover:text-[#A8793C] hover:border-[#A8793C] transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-[#DDD8D0] py-6 2xl:py-8 px-6 text-center text-[11px] 2xl:text-xs text-[#5C5248]/60 font-inter">
        <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} VIBE Perfumaria · Todos os direitos reservados.</p>
          <p className="text-[10px] 2xl:text-[11px] tracking-wider uppercase text-[#A8793C]/80 font-medium">A Arte de Se Sentir Bem</p>
        </div>
      </div>

    </footer>
  )
}
