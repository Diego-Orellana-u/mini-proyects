import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useFilters } from './hooks/useFilters.jsx'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Cart } from './components/Cart.jsx'
import { CartContextProvider } from './context/cart.jsx'


function App() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartContextProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartContextProvider>
  )
}

export default App
