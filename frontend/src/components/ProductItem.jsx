import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    
    const {currency} = useContext(ShopContext);

  return (
    <Link
    onClick={() => scrollTo(0, 0)}
    className="text-gray-700 cursor-pointer"
    to={`/product/${id}`}
  >
    <div className="overflow-hidden rounded-lg transform hover:scale-105 hover:border-blue-500 transition-all duration-300">
      <img
        className="hover:scale-110 transition ease-in-out"
        src={image[0]}
        alt=""
      />
    </div>
    <p className="pt-3 pb-1 text-sm">{name}</p>
    <p className="text-sm font-medium">
      {currency}
      {price}
    </p>
  </Link>
  
  )
}

export default ProductItem