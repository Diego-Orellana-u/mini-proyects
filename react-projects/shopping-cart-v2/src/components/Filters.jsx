import { useState } from "react"
import './Filters.css'

export function Filters(){
    const [ minPrice, setMinPrice ] = useState(0)

    const handleMinPrice = (e) => {
        setMinPrice(e.target.value)
    }

    return(
        <section className="filters">
            <div>
                <label htmlFor="price">Price From: </label>
                <input
                    id='price' 
                    type="range"
                    min='0'
                    max='1000'
                    onChange={handleMinPrice}
                />
                <span>${minPrice}</span>
            </div>
            
            <div>
                <label htmlFor='category'>Category </label>
                <select id="category">
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </ section>
    )
}