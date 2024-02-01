import { useContext } from "react"
import { useFilters } from "../hooks/useFilters"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import './Products.css'
import { CartContext } from "../context/cart"

export function Products(){
    const { filteredProducts } = useFilters()

    const { cart, addToCart, removeFromCart} = useContext(CartContext)

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return(
        <main className="products">
            <ul>
                {
                    filteredProducts.slice(0,10).map(product => {
                        const isProductInCart = checkProductInCart(product)
                        return(
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button style={{backgroundColor: isProductInCart ? 'red' : '#333'}} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                                        {
                                            isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon /> 
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}