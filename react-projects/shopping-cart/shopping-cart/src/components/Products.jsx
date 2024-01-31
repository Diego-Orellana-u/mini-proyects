import { useFilters } from "../hooks/useFilters"
import { AddToCartIcon } from "./Icons"
import './Products.css'

export function Products(){
    const { filteredProducts } = useFilters()

    return(
        <main className="products">
            <ul>
                {
                    filteredProducts.slice(0,10).map(product => {
                        return(
                            <li key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button><AddToCartIcon /></button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}