import React from 'react'
import { Link } from 'react-router-dom'

export const Product = ({productView,cartClick}) => {
  return (
    <>
<div className="card" style={{width: "18rem",padding:"20px",height:"400px",maxWidth:"450px", marginTop:"30px",textAlign:"center"}}>
  <img src={productView.image} className="card-img-top"style={{  width:"70%",
    height: "50%", margin:"auto" }} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{(productView.title).slice(0,30)}.....</h5>
    <h5 className="card-text">{productView.price}$</h5>
    <div className='d-flex justify-content-center mt-3'>
    <Link to={`products/${productView.id}`} className="btn btn-success ">Details</Link>
    <a href="#" className="btn btn-primary ms-2" onClick={cartClick.bind(this,productView)}>Add to cart</a>
    </div>
  </div>
</div>
    </>
  )
}
