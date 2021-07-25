import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { useGlobalContext } from './Context'
import '../css/detail.css'
import SubImage from './SubImage'
import Color from './Color'
import {useCart} from 'react-use-cart'

const Detail =()=> {
  const {addItem} =useCart()
  const {product,addCart} = useGlobalContext()
  const [productDetail,setProductDetail] = useState([])
  const {id} = useParams();
  const [value,setValue] = useState(0)

  useEffect(()=>{
    const newProduct = product.filter(item=>item.id === Number(id))
    setProductDetail(newProduct)
  },[]);
  return (
    <>
    {productDetail.map(product=>{
      const {id,title,desc,subImg,color,price} = product
      return(
      <article className="detailContainer" key={id}>
        <img src={subImg[value]} alt={subImg[0]} className="detailImg" />
        <div className="detailInfo">
          <h2 className='title'>{title}</h2>
          <h1 className='price'>Price : ${price}</h1>
          < SubImage imgs={subImg} value={value} setValue={setValue}/>
          <p className="detailDesc">{desc}</p>
          <h3>
            color : <Color color={color}/>
          </h3>
         <a className='detailCartBtn' onClick={()=>addItem(product)}>Add To Cart</a>
        </div>
      </article>
      )
    })}
    </>
  )
}

export default Detail
