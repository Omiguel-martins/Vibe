import { createContext, useContext, useState, useEffect } from 'react'
import { products as mockProducts } from '../data/products'
import { supabase, isSupabaseConfigured } from '../services/supabase'

const ProductContext = createContext(null)

const SUPABASE_STORAGE_URL = 'https://xjbljfnmgcydwwxvbxwj.supabase.co/storage/v1/object/public/products';

const slugToStorageMap = {
  'vibe-boa-menina': `${SUPABASE_STORAGE_URL}/vibe-boa-menina.jpg`,
  'vibe-rosa-da-manha': `${SUPABASE_STORAGE_URL}/vibe-rosa-da-manha.jpg`,
  'vibe-invencivel': `${SUPABASE_STORAGE_URL}/vibe-invencivel.jpg`,
  'vibe-combo-colecao-completa': `${SUPABASE_STORAGE_URL}/vibe-combo-trio.jpg`,
}

function resolveImageUrl(slug, url) {
  if (url && (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('data:'))) {
    return url;
  }
  if (slugToStorageMap[slug]) {
    return slugToStorageMap[slug];
  }
  return `${SUPABASE_STORAGE_URL}/vibe-boa-menina.jpg`;
}

function normalizeProduct(item) {
  if (!item) return null
  const defaultImg = resolveImageUrl(item.slug, item.thumbnail)
  
  return {
    ...item,
    price: Number(item.price),
    originalPrice: item.originalPrice !== undefined ? Number(item.originalPrice) : (item.original_price ? Number(item.original_price) : undefined),
    original_price: item.original_price !== undefined ? Number(item.original_price) : Number(item.originalPrice),
    longDescription: item.longDescription || item.long_description || item.description,
    long_description: item.long_description || item.longDescription || item.description,
    images: Array.isArray(item.images) && item.images.length > 0 && (item.images[0].startsWith('http') || item.images[0].startsWith('data:'))
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
