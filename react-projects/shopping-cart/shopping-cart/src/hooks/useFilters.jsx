import { useContext } from "react"
import { products as initialProducts } from '../mocks/products.json'
import { FiltersContext } from "../context/filters"

export function useFilters () {
    const { filters, setFilters } = useContext(FiltersContext)

    function filterProducts(products){
        return(
            products.filter(product => {
                return(
                    (product.price >= filters.minPrice) &&
                    (
                        filters.category === 'all' || 
                        product.category === filters.category
                    )
                )
            })
        )
    }

    const filteredProducts = filterProducts(initialProducts)

    return { filteredProducts, filters, setFilters}
}
