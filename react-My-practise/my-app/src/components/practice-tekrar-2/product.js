import React from 'react'
import fruits from"./Fruits"

const Product = () => {
          const listfruits = fruits.map((fruit,index) => <li key={fruit.id} 
          style={{color:fruit.isFruit ? "red" : "green"}}>{fruit.title}</li>)
  return (
   <ul>{listfruits}</ul>
  )
}

export default Product