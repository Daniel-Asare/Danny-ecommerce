import React from 'react'

const Color =({color})=>{
  return (
    <div className="detailColorContainer">
      {color.map((item,index)=>{
        return (
          <div key={index} className="singleColor" style={{background : item}}></div>
        )
      })}
    </div>
  )
}

export default Color
