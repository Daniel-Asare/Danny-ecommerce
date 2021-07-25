import React from 'react'
import { useGlobalContext } from './Context'
import { Link } from 'react-router-dom';
import '../css/product.css';
import { useCart } from 'react-use-cart';

const Products = () => {
  const {product} = useGlobalContext()
  const {addItem} = useCart()
  return (
  <>
   <div className="productContainer">
    {product.map(item=>{
      const {id,title,img,price} = item
      return (
        <article key={id}>
        <div className="product-img">
          <Link to={`/product/${id}`}><img src={img} alt={img} /></Link>
        </div>
        <Link to={`/product/${id}`}><h3>{title}</h3></Link>
          <h4 className='product-price'>Price : ${price}</h4>
        <a href="#" className="cart-btn" type="button" onClick={()=> addItem(item)}>Add To Cart</a>

      </article>
)
})}
</div>
  </>  
  )
}

export default Products
