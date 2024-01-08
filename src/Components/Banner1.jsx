import React from 'react'

function Banner1() {
  return (
   <>
<div className='flex items-center justify-center m-20'>
  <div className=' h-96 w-2/4'>
    <img src="./image/banner-1.jpg" width="500" alt="" />
  </div>
  <div className=' h-96 w-2/4 p-20'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque commodi minus placeat! Dignissimos, saepe!</p>
    <h1>Winter Discount Up to 30%</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    <button type="button" className="btn btn-outline-danger pl-4 pr-4">
      Shop Now
    </button>
  </div>
</div>
   </>
  )
}

export default Banner1