import { useProducts } from '../context/ProductContext'
import { HeroSection } from '../components/home/HeroSection'
import { ProductShowcase } from '../components/home/ProductShowcase'
import { CollectionBanner } from '../components/home/CollectionBanner'

export function Home() {
  const { products, featured, loading } = useProducts()

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="w-10 h-10 border border-[#DDD8D0] border-t-[#A8793C] rounded-full animate-spin" />
        <p className="text-xs text-[#5C5248]/60 tracking-widest font-inter uppercase">
          Carregando…
        </p>
      </div>
    )
  }

  return (
    <div>
      <HeroSection product={featured} />
      <ProductShowcase products={products} />
      <CollectionBanner />
    </div>
  )
}
