import { createContext, useContext, useState, useEffect } from 'react'
import { products as mockProducts } from '../data/products'
import { productImages } from '../data/productImages'
import { supabase, isSupabaseConfigured } from '../services/supabase'

const ProductContext = createContext(null)

const imageSlugMap = {
  'vibe-boa-menina': productImages.boaMenina,
  'vibe-rosa-da-manha': productImages.rosaDaManha,
  'vibe-invencivel': productImages.invencivel,
  'vibe-combo-colecao-completa': productImages.comboTrio,
}

function resolveProductImage(slug, itemImage) {
  if (imageSlugMap[slug]) {
    return imageSlugMap[slug]
  }
  if (itemImage && !itemImage.startsWith('/products/')) {
    return itemImage
  }
  return productImages.boaMenina
}

function normalizeProduct(item) {
  if (!item) return null
  const defaultImg = resolveProductImage(item.slug, item.thumbnail)
  
  return {
    ...item,
    price: Number(item.price),
    originalPrice: item.originalPrice !== undefined ? Number(item.originalPrice) : (item.original_price ? Number(item.original_price) : undefined),
    original_price: item.original_price !== undefined ? Number(item.original_price) : Number(item.originalPrice),
    longDescription: item.longDescription || item.long_description || item.description,
    long_description: item.long_description || item.longDescription || item.description,
    images: Array.isArray(item.images) && item.images.length > 0 && !item.images[0].startsWith('/products/')
      ? item.images 
      : [defaultImg],
    thumbnail: defaultImg,
    notes: typeof item.notes === 'string' ? JSON.parse(item.notes) : (item.notes || { top: [], heart: [], base: [] })
  }
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)

        if (isSupabaseConfigured) {
          const { data, error: sbError } = await supabase
            .from('products')
            .select('*')
            .order('featured', { ascending: false })

          if (sbError) throw sbError
          setProducts((data || []).map(normalizeProduct))
        } else {
          await new Promise((r) => setTimeout(r, 200))
          setProducts(mockProducts.map(normalizeProduct))
        }
      } catch (err) {
        console.error('[ProductContext]', err)
        setError(err.message)
        setProducts(mockProducts.map(normalizeProduct))
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const getById = (id) => products.find((p) => String(p.id) === String(id))
  const getBySlug = (slug) => products.find((p) => p.slug === slug)
  const featured = products.find((p) => p.featured) || products[0]

  return (
    <ProductContext.Provider
      value={{ products, loading, error, getById, getBySlug, featured }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  const ctx = useContext(ProductContext)
  if (!ctx) throw new Error('useProducts must be used inside ProductProvider')
  return ctx
}
