import { useState } from 'react'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { products as initialProducts} from './mocks/products.json'
import { useFilters } from './hooks/useFilters.jsx'
import { Footer } from './components/Footer.jsx'
import { Cart } from './components/Cart.jsx'
import { CartContextProvider } from './context/cart.jsx'


export default function App () {
  const [ products ] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartContextProvider>
      <h1>Cart App</h1> 
      <div>
        <Header />
        <Cart />
        <Products products={filteredProducts}/>
        <Footer />
      </div>
    </CartContextProvider>
  )
}