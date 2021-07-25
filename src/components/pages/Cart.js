import React from 'react'
import { useCart } from 'react-use-cart'
import * as AiIcons from 'react-icons/ai'
import '../css/cart.css'
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart =()=> {

  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
  } = useCart()

  
  if(isEmpty){
    return(
    <div className="cartContainer">
    <h1 style= {{marginTop:'4rem'}}>Your cart is empty</h1>
   
    </div>
    )
  }


  return (
    <div className="cartContainer">
     {items.map(item=>{
       return (
         <div className="cartItems" key={item.id}>
           <span className="cartClose" onClick={()=>removeItem(item.id)} >
             <AiIcons.AiOutlineCloseCircle/>
           </span>
           <div className="cartItemImg">
             <img src={item.img} alt={item.img} />
           </div>
           <div className="cartInfo">
             <h3>{item.title}</h3>
             <p>${item.price} x {item.quantity}</p>
           </div>
          <div className="cartBtns">
             <button type="button" onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}><AiIcons.AiOutlineMinus/></button>
             <span style={{padding:' 1rem'}} className="cart-num">{item.quantity}</span>
             <button type="button"  onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}><AiIcons.AiOutlinePlus/></button>
           </div>
         </div>
       )
       
      })} 
      <h2 style={{marginTop:'3rem',marginBottom:`3rem`, wordSpacing:'0.6rem'}}>CartTotal :${cartTotal}</h2>
     <ToastContainer draggable={false} transition={Zoom} autoClose={3000}/>
    </div>
  )
}

export default Cart
