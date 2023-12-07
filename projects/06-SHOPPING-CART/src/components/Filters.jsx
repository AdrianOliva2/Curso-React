import { useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';

export function Filters() {
    const { filters, setFilters } = useFilters();
    //const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (e) => {
        //setMinPrice(e.target.value);
        setFilters(prevState => ({
            ... prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ... prevState,
            category: e.target.value
        }))
    }

    return (
        <section className='filters'>

            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input type='range' id={minPriceFilterId} min='0' max='1000' value={filters.minPrice} onChange={handleChangeMinPrice} />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select id={categoryFilterId} defaultChecked={filters.category} defaultValue={filters.category} onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='laptops'>Portátiles</option>
                    <option value='smartphones'>Móviles</option>
                </select>
            </div>

        </section>
    )
}