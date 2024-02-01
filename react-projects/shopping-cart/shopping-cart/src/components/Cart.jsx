import { useContext, useId } from "react"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons"
import './Cart.css'
import { CartContext } from "../context/cart"

export function Cart () {
    const cartCheckboxId = useId()

    const { cart, addToCart, clearCart } = useContext(CartContext)

    return(
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden/>
            
            <aside className="cart">
                <ul>
                    {
                        cart.map(product => {
                            return(
                                <li key={product.id}>
                                    <img src={product.thumbnail} alt={product.title} />
                                    <div>
                                        <strong>{product.title}</strong> - ${product.price}
                                    </div>

                                    <footer>
                                        <small>
                                            Qty: {product.quantity}
                                        </small>
                                        <button onClick={() => addToCart(product)}>
                                            +
                                        </button>
                                    </footer>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => clearCart()}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}