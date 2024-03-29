import React, { useContext } from 'react'
import "./TopBar.css"
import CurrencyContext from '../store/Store'


const TopBar = () => {
  const store = useContext(CurrencyContext)
  const { currencies } = store
  console.log(currencies)

  const formatCurrency = (currency) => {
    if (Object.keys(currencies).length === 0) return 0;
    return (1 / currencies[currency]).toFixed()
  }

  return (
   <header>
    <nav className='navbar'>
      <h3>Exchange</h3>
      <div>
        <div>$: {formatCurrency("USD")} ₺</div>
        <div>€: {formatCurrency("EUR")} ₺</div>
      </div>
      
    </nav>
   </header>
  )
}

export default TopBar