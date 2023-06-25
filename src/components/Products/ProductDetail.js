import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


export const ProductDetail = ({cartClick}) => {
    const params=useParams();
    const [product,setProduct]=useState([]);
    fetch(`https://fakestoreapi.com/products/${params.productID}`)
    .then(res=>res.json())
    .then(json=>setProduct(json));


  return (
    <div className='container' >
   <div className="card mt-5  p-5" style={{maxWidth: "80%"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.image} className="img-fluid rounded-start" style={{width:"200px", height:"200px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.price}$</p>
        <button type="button" class="btn btn-success"onClick={cartClick.bind(this,product)}>Add To cart</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
