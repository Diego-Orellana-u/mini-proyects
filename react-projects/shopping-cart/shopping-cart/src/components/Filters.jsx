import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
    const { filters, setFilters } = useFilters()
    const rangeId = useId()
    const categoryId = useId()

    const handleMoneyFilter = (e) => {
        setFilters(prevState => ({
            ...prevState, 
            minPrice: e.target.value
        }))
    }

    const handleCategoryFilter = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor={rangeId}>
                    Price starting at:
                </label>
                <input 
                    id={rangeId}
                    type="range"
                    min='0'
                    max='1000'
                    onChange={handleMoneyFilter}
                />
                <span>
                    ${filters.minPrice}
                </span>
            </div>

            <div>
                <form>
                    <label htmlFor={categoryId}> Category </label>
                    <select id={categoryId} name='categories' onChange={handleCategoryFilter}>
                        <option value='all'>All</option>
                        <option value='laptops'>Laptops</option>
                        <option value='smartphones'>SmartPhones</option>
                        <option value='groceries'>Groceries</option>
                    </select>
                </form>

            </div>

        </section>
    )
}