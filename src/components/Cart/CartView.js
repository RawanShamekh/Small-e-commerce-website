import React from 'react'
import { Product } from '../Products/Product'

export const CartView = ({cart,removeHandler}) => {
   
    
  return (
    <>
    <div className='container '>
        <div className='row'>
            {
                cart.map((product)=>{
                    return <div className='col-lg-4'>
                        <div className="card" style={{width: "18rem",padding:"20px",height:"400px",maxWidth:"450px", marginTop:"30px",textAlign:"center"}}>
  <img src={product.image} className="card-img-top"style={{  width:"70%",
    height: "50%", margin:"auto" }} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{(product.title).slice(0,30)}.....</h5>
    <h5 className="card-text">{product.price}$</h5>
    <button className='btn btn-danger' onClick={removeHandler.bind(this,product)}>Remove</button>
    
    
  </div>
</div>

                        </div>
                })
            }        
    </div>
    </div>
    </>

  );
}
