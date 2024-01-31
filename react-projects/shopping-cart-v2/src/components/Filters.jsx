import { useId, useState } from "react"
import './Filters.css'
import { useFilters } from "../hooks/useFilters"

export function Filters(){
    const { filters, setFilters } = useFilters()

    const moneyFilterId = useId()
    const categoryFilterId = useId()

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
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
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