import React from 'react'

const SubImage =({imgs,setValue,value})=>{
  return (
    <div className="subImgContainer">
      {
        imgs.map((img,index)=>{
       return(
        <img src={img} onClick={()=>setValue(index)} className ={`subImg ${index === value && `activeBtn`}`} key={index}/>
       )
      })
      }
    </div>
  )
}

export default SubImage;