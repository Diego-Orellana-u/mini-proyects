import { useId } from 'react'
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import './Cart.css'

export function Cart(){
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
                        <img src='https://i.dummyjson.com/data/products/3/thumbnail.jpg' alt='Iphone' />

                        <div>
                            <strong>Iphone</strong> - $1499
                        </div>

                        <footer>
                            <small>
                                Qty: q
                            </small>
                        </footer>

                        <button>
                            +
                        </button>
                    </li>
                    
                </ul>
                <button> <ClearCartIcon /> </button>
            </aside>
        </>
    )
}