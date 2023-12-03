import React, { useState } from 'react'
import './index.css'
import { formatNumberToCurrency } from '../../util';


export function Filters ({ setFilter, maxValue }) {
  const [minPrice, setMinPrice]  = useState(0);  

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value); 
    setFilter(event.target.value);
  } 

  return (
    <section className='filters'> 
      <div>
        <label>Precio a partir de:</label>
        <input
          type='range' 
          min='0'
          max={maxValue}
          onChange={handleChangeMinPrice}
          value={minPrice}
        />
        <span>$ {formatNumberToCurrency(minPrice)}</span>
      </div>  
    </section>

  )
}