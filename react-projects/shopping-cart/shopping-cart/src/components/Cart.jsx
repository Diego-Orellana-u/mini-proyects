import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css'
import { useId } from "react";
import { useCart } from "../hooks/useCart";

function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <li>
            <img 
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <div>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </div>
        </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart  }= useCart()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            
            <aside className="cart">
                <ul>
                    {
                        cart.map(product => (
                            <CartItem key={product.id} {...product} addToCart={() => addToCart(product)}/>
                        ))
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}