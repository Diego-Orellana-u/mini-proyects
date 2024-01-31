import './Filters.css'
import { useFilters } from "../hooks/useFilters"
import { useId } from 'react'

export function Filters(){
    const { filters, setFilters } = useFilters()

    const handleMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    const priceId = useId()
    const categoryId = useId()
    
    return(
        <section className="filters">
            <div>
                <label htmlFor={priceId}>Price From: </label>
                <input type="range" id={priceId} min="0" max="1000" onChange={handleMinPrice} />
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryId}>Category </label>
                <select id={categoryId} onChange={handleCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </section>
    )
}