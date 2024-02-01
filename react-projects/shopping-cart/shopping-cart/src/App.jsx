import { useContext } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { CartContextProvider } from "./context/cart";
import { Footer } from "./components/Footer";


export default function App () {

    return (
        <CartContextProvider>
            <Cart />
            <Header />
            <Products />
            <Footer />
        </CartContextProvider>
    )
}