
import Hero from '../components/hero/Hero'
import NewCollections from '../components/newCollections/NewCollections'
import Offers from '../components/offers/Offers'
import Popular from '../components/popular/Popular'


const Shop = () => {
  return (
    <div className=''>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  )
}

export default Shop
