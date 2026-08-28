import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ArrowLeft, Heart, Share2, ShoppingBag, CheckCircle, Truck, Sparkles } from 'lucide-react'
import { useProducts } from '../context/ProductContext'
import { useCart } from '../context/CartContext'
import { ProductGallery } from '../components/product/ProductGallery'
import { QuantitySelector } from '../components/ui/QuantitySelector'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { formatCurrency, discountPercent } from '../utils/cn'

const badgeVariantMap = {
  DESTAQUE: 'gold',
  NOVO: 'dark',
  EXCLUSIVO: 'exclusive',
  LANÇAMENTO: 'gold',
  COMBO: 'exclusive',
}

export function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { getBySlug, loading } = useProducts()
  const { addItem } = useCart()

  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeTab, setActiveTab] = useState('description')
  const [favorited, setFavorited] = useState(false)

  const product = getBySlug(slug)
  const discount = product ? discountPercent(product.originalPrice, product.price) : 0

  useEffect(() => {
    setQuantity(1)
    setAdded(false)
    window.scrollTo(0, 0)
  }, [slug])

  const handleAddToCart = () => {
    if (!product) return
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2200)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-10 h-10 border border-[#DDD8D0] border-t-[#A8793C] rounded-full animate-spin" />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-8 text-center">
        <p className="text-[#5C5248] font-inter">Produto não encontrado.</p>
        <Button variant="secondary" size="sm" onClick={() => navigate('/')}>
          Voltar ao início
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-[#F8F6F2]">

      <div className="border-b border-[#DDD8D0] bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl 2xl:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 h-12 2xl:h-14 flex items-center justify-between">
          
          <div className="flex items-center gap-2 text-xs 2xl:text-sm font-inter text-[#5C5248]">
            <Link to="/" className="hover:text-[#A8793C] transition-colors flex items-center gap-1">
              <ArrowLeft size={14} />
              <span>Início</span>
            </Link>
            <span>/</span>
            <span className="text-[#A8793C] truncate font-medium">{product.subtitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFavorited((f) => !f)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs 2xl:text-sm font-inter border transition-all ${
                favorited 
                  ? 'border-red-300 text-red-500 bg-red-50' 
                  : 'border-[#DDD8D0] text-[#5C5248] hover:text-[#A8793C] hover:border-[#A8793C]'
              }`}
              aria-label={favorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <Heart size={14} fill={favorited ? 'currentColor' : 'none'} />
              <span className="hidden sm:inline">{favorited ? 'Salvo' : 'Favoritar'}</span>
            </button>
            
            <button
              className="p-2 text-[#5C5248] hover:text-[#A8793C] border border-[#DDD8D0] hover:border-[#A8793C] transition-all"
              aria-label="Compartilhar"
            >
              <Share2 size={15} />
            </button>
          </div>

        </div>
      </div>

      <div className="max-w-7xl 2xl:max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-12 2xl:px-16 py-8 md:py-12 2xl:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 2xl:gap-20 items-start">

          <div className="lg:col-span-6 lg:sticky lg:top-[135px]">
            <ProductGallery images={product.images} name={`${product.name} ${product.subtitle}`} />
          </div>

          <div className="lg:col-span-6 flex flex-col">

            <div className="flex items-center gap-2.5 mb-3">
              {product.badge && (
                <Badge variant={badgeVariantMap[product.badge] || 'gold'}>
                  {product.badge}
                </Badge>
              )}
              <span className="text-xs 2xl:text-sm tracking-[0.3em] text-[#5C5248]/70 uppercase font-inter font-medium">
                Coleção {product.collection}
              </span>
            </div>

            <h1 style={{ fontFamily: '"Playfair Display", serif' }}>
              <span className="block text-xs sm:text-sm 2xl:text-base tracking-[0.35em] text-[#A8793C] uppercase font-inter font-semibold mb-1">
                {product.name}
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-[#1C1916] font-semibold leading-tight">
                {product.subtitle}
              </span>
            </h1>

            <p
              className="text-[#5C5248] text-base sm:text-lg 2xl:text-xl mt-3 2xl:mt-4 italic leading-relaxed"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              "{product.tagline}"
            </p>

            <div className="mt-6 2xl:mt-8 p-4 sm:p-6 bg-white border border-[#DDD8D0] shadow-2xs">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl 2xl:text-5xl font-inter font-semibold gradient-gold">
                  {formatCurrency(product.price)}
                </span>
                {discount > 0 && (
                  <>
                    <span className="text-base sm:text-lg 2xl:text-xl text-[#5C5248]/50 line-through font-inter">
                      {formatCurrency(product.originalPrice)}
                    </span>
                    <span className="text-xs 2xl:text-sm bg-[#E8D5A3] text-[#6E4C22] border border-[#C9A96E]/30 px-2.5 py-0.5 font-inter font-semibold">
                      -{discount}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-xs 2xl:text-sm text-[#5C5248]/70 font-inter mt-1.5">
                em até 3x de {formatCurrency(product.price / 3)} sem juros no cartão
              </p>
            </div>

            <div className="flex items-center justify-between py-3.5 border-b border-[#DDD8D0] text-xs 2xl:text-sm font-inter text-[#5C5248]">
              <span className="tracking-wider uppercase">Volume: <strong className="text-[#1C1916]">{product.volume}</strong></span>
              <span className="text-emerald-700 font-medium">✓ Em estoque pronto para envio</span>
            </div>

            <div className="mt-6 2xl:mt-8 flex flex-col sm:flex-row items-stretch gap-3 2xl:gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs tracking-widest text-[#5C5248] uppercase font-inter sm:hidden">
                  Qtd:
                </span>
                <QuantitySelector value={quantity} onChange={setQuantity} max={product.stock} />
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                className={`flex-1 transition-all text-xs 2xl:text-sm tracking-[0.2em] py-4 2xl:py-5 ${
                  added ? '!bg-green-600 hover:!bg-green-600' : ''
                }`}
              >
                {added ? (
                  <>
                    <CheckCircle size={18} />
                    Adicionado à Sacola!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    Adicionar à Sacola · {formatCurrency(product.price * quantity)}
                  </>
                )}
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-[#DDD8D0]">
              <div className="flex items-center gap-2 text-xs 2xl:text-sm font-inter text-[#5C5248]">
                <Truck size={16} className="text-[#A8793C] shrink-0" />
                <span>Frete Grátis acima de R$ 150</span>
              </div>
              <div className="flex items-center gap-2 text-xs 2xl:text-sm font-inter text-[#5C5248]">
                <Sparkles size={16} className="text-[#A8793C] shrink-0" />
                <span>Partículas iluminadoras</span>
              </div>
            </div>

            <div className="mt-10 2xl:mt-12">
              <div className="flex border-b border-[#DDD8D0]">
                {[
                  { id: 'description', label: 'Descrição' },
                  { id: 'notes', label: 'Pirâmide Olfativa' },
                  { id: 'details', label: 'Especificações' },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex-1 py-3.5 text-xs 2xl:text-sm font-inter tracking-wider uppercase transition-all ${
                      activeTab === id
                        ? 'text-[#A8793C] border-b-2 border-[#A8793C] font-semibold -mb-px'
                        : 'text-[#5C5248]/60 hover:text-[#1C1916]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="pt-6 pb-2">
                {activeTab === 'description' && (
                  <div className="fade-in-up space-y-4">
                    <p className="text-sm sm:text-base 2xl:text-lg text-[#5C5248] font-inter leading-relaxed">
                      {product.description}
                    </p>
                    <p className="text-xs sm:text-sm 2xl:text-base text-[#5C5248]/80 font-inter leading-relaxed">
                      {product.longDescription}
                    </p>
                  </div>
                )}

                {activeTab === 'notes' && (
                  <div className="fade-in-up">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 2xl:gap-4">
                      {[
                        { label: 'Notas de Topo', key: 'top' },
                        { label: 'Notas de Coração', key: 'heart' },
                        { label: 'Notas de Base', key: 'base' },
                      ].map(({ label, key }) => (
                        <div
                          key={key}
                          className="p-4 2xl:p-5 border border-[#DDD8D0] bg-white text-center sm:text-left shadow-2xs"
                        >
                          <p className="text-[10px] 2xl:text-xs tracking-[0.2em] text-[#A8793C] uppercase font-inter mb-2 font-semibold">
                            {label}
                          </p>
                          <div className="space-y-1">
                            {product.notes?.[key]?.map((note) => (
                              <p key={note} className="text-xs 2xl:text-sm text-[#5C5248] font-inter leading-relaxed">
                                • {note}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div className="fade-in-up bg-white border border-[#DDD8D0] divide-y divide-[#DDD8D0] shadow-2xs">
                    {[
                      { label: 'Volume Líquido', value: product.volume },
                      { label: 'Categoria', value: 'Body Splash com Partículas Iluminadoras' },
                      { label: 'Concentração Olfativa', value: 'Eau Fraîche Premium' },
                      { label: 'Coleção Oficial', value: product.collection },
                      { label: 'Desenvolvimento', value: 'Marina Gabriela Fragrances' },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-center px-5 py-3.5 text-xs 2xl:text-sm font-inter">
                        <span className="text-[#5C5248]">{label}</span>
                        <span className="text-[#1C1916] font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 px-5 py-3 bg-white/95 backdrop-blur-md border-t border-[#DDD8D0] shadow-lg pb-safe">
        <Button
          variant="primary"
          size="xl"
          onClick={handleAddToCart}
          className={`transition-all ${added ? '!bg-green-600 hover:!bg-green-600' : ''}`}
        >
          {added ? (
            <>
              <CheckCircle size={18} />
              Adicionado à Sacola!
            </>
          ) : (
            <>
              <ShoppingBag size={18} />
              Adicionar · {formatCurrency(product.price * quantity)}
            </>
          )}
        </Button>
      </div>

    </div>
  )
}
