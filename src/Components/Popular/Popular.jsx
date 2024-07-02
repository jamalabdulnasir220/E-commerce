import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {
            data_product.map(item => {
                return <Item image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} key={item.id} id={item.id} />
            })
        }
      </div>
    </div>
  )
}

export default Popular
