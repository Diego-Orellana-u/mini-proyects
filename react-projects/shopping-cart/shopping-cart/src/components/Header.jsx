import { Filters } from './Filters.jsx'

export function Header({changeFilter}) {
    return (
        <header>
            <h1>React Shop</h1>
            <Filters onChange={changeFilter} />
        </header>
    )
}