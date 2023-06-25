import React, { useEffect, useState } from 'react'
import { Product } from './Product'
import { CartView } from '../Cart/CartView'


export const ProductList = ({cartClick,removeHandler}) => {
    const [products,setProducts]=useState([]);
    const [categories,setCat]=useState([]);
    const [loader,setLoader]=useState(false)
    
    function getProducts(){
setLoader(true);
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{setProducts(json);setLoader(false)});
    
      }
      function getCategories(){
        fetch('https://fakestoreapi.com/products/categories')
                .then(res=>res.json())
                .then(json=>setCat(json));
    
      }
      function categoryHandler(cat){
        fetch(`https://fakestoreapi.com/products/category/${cat}`)
                .then(res=>res.json())
                .then(json=>setProducts(json));
    
      }
      useEffect(()=>{
        getProducts();
        getCategories();
    
      },[]);
  return (
  <>
  <div className="container">
            <div className="row">
              <div className="col-12  " style={{textAlign:"center",margin:"80px 0"}}>
                {categories.map((cat,index)=>{
                  return <button type="button" className="btn btn-lg btn-outline-dark ms-2" key={index} onClick={categoryHandler.bind(this,cat)}>{cat}</button>
                })}
              </div>
            </div>
            <div className="row">
              
                 {(loader)?<h1>Loading...</h1>:products.map((product)=>{
                  return <div className="col-12 col-sm-6  col-lg-4 d-flex justify-content-center">
                    <Product key={product.id} productView={product} cartClick={cartClick} />
                  </div>
                })
}
             

            
            </div>
          </div>
         
  </>
  )
}
