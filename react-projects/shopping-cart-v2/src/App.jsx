import { useState } from "react";
import { Header } from "./components/Header";
import { Products }from "./components/Products";
import { products as initialProducts } from './mocks/products.json'
import { Footer } from "./components/Footer";
import { useFilters } from "./hooks/useFilters";


export default function App() {
  const [products] = useState(initialProducts)
  const { filters, filterProducts } = useFilters()


  const filteredProducts = filterProducts(products)

  return(
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer filters={filters}></Footer>
    </>
  )
}