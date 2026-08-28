import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { ProductProvider } from './context/ProductContext'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'

export default function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produto/:slug" element={<ProductPage />} />
              <Route path="/colecao" element={<ComingSoon title="Coleção" />} />
              <Route path="/favoritos" element={<ComingSoon title="Favoritos" />} />
              <Route path="/conta" element={<ComingSoon title="Minha Conta" />} />
              <Route path="*" element={<ComingSoon title="Página não encontrada" />} />
            </Routes>
          </Layout>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

function ComingSoon({ title }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-8 text-center">
      <div className="w-12 h-12 border border-[#DDD8D0] bg-white flex items-center justify-center">
        <span className="text-[#A8793C]/40 text-xl">✦</span>
      </div>
      <h2
        className="text-2xl gradient-gold"
        style={{ fontFamily: '"Playfair Display", serif' }}
      >
        {title}
      </h2>
      <p className="text-xs text-[#5C5248]/50 font-inter tracking-widest">
        Em breve
      </p>
    </div>
  )
}
