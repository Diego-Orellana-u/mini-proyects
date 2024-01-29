import { useContext, useId, useState } from "react"
import './Filters.css'
import { FiltersContext } from "../context/filters"

export function Filters(){
    const [ minPrice, setMinPrice ] = useState(0)
    const { setFilters } = useContext(FiltersContext)

    const moneyFilterId = useId()
    const categoryFilterId = useId()

    const handleMinPrice = (e) => {
        setMinPrice(e.target.value)
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

    return(
        <section className="filters">
            <div>
                <label htmlFor={moneyFilterId} >Price From: </label>
                <input
                    id={moneyFilterId} 
                    type="range"
                    min='0'
                    max='1000'
                    onChange={handleMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            
            <div>
                <label htmlFor={categoryFilterId} >Category </label>
                <select id={categoryFilterId} onChange={handleCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </ section>
    )
}