import React from 'react'

function Pagination({handlenext,handleprev,pageNo}) {
  return (
    <div className='d-flex gap-3 justify-content-center align-item-center'>
        <div onClick={handleprev}><i class="fa-sharp fa-solid fa-arrow-left"></i></div>
        <div className='fw-bold'>{pageNo}</div>
        <div onClick={handlenext}><i class="fa-sharp fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination