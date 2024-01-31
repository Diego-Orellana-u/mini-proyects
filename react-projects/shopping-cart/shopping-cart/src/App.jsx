import { useContext } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";


export default function App () {

    return (
        <>
            <Cart />
            <Header />
            <Products />
        </>
    )
}