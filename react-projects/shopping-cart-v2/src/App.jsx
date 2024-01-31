import { useState } from "react";
import { Header } from "./components/Header";
import { Products }from "./components/Products";
import { products as initialProducts } from './mocks/products.json'
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartContextProvider } from "./context/cart";


export default function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()


  const filteredProducts = filterProducts(products)

  return(
    <CartContextProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer ></Footer>
    </CartContextProvider>
  )
}