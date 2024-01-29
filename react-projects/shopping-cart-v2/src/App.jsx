import { Header } from "./components/Header";
import { Products }from "./components/Products";
import { products as initialProducts } from './mocks/products.json'


export default function App() {
  return(
    <>
      <Header />
      <Products products={initialProducts} />
    </>
  )
}