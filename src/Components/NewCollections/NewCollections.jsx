import React from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../Items/Item'
import './NewCollections.css'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {
            new_collections.map(item => {
                return <Item id={item.id} key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
      </div>
    </div>
  )
}

export default NewCollections
