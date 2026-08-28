import { Header } from './Header'
import { CartDrawer } from '../cart/CartDrawer'
import { Footer } from './Footer'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8F6F2] flex flex-col selection:bg-[#E8D5A3] selection:text-[#1C1916]">
      <Header />
      <main className="pt-[105px] md:pt-[110px] pb-16 flex-1 w-full">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  )
}
