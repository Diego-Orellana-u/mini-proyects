import './Filters.css'
import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
    const [ minPrice, setMinPrice ] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    const {setFilters} = useFilters()

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Minimum Price</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>SmartPhones</option>
                </select>
            </div>
        </section>
    )
}