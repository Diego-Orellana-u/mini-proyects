import { useId, useState } from 'react'
import './Cart.css'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons'

export function Cart () {
    const cartCheckboxId = useId()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />
            <aside className='cart'>
                <ul>
                    <li>
                        <img src='https://cdn.dummyjson.com/product-images/2/thumbnail.jpg' alt='Iphone' />
                        <div>
                            <strong>Iphone X</strong> - $100
                        </div>
                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}