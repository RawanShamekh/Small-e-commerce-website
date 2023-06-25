import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";
import { useEffect, useState } from "react";
import { Product } from "./components/Products/Product";
import { About } from "./components/About/About";
import { ProductDetail } from "./components/Products/ProductDetail";
import { CartView } from "./components/Cart/CartView";
import { ProductList } from "./components/Products/ProductList";

function App() {

  const [cart,setCart]=useState([]);
 
  function cartClick(product){
    setCart([...cart,product])
    console.log(cart);

  }
  function removeHandler(product){
    setCart(cart.filter((item=>item.id != product.id)))
        

  }
  function cartHandler(){
    setViewCart(!viewCart);
  }
  const [viewCart,setViewCart]=useState(false);

  return (
    <div className="App">
      <Navbar cartLen={cart.length} cartHandler={cartHandler}/>
      <Routes>
        <Route path="/" element={
          <>
          <Slider/>
          {(viewCart?<CartView cart={cart} removeHandler={removeHandler} />:<ProductList removeHandler={removeHandler} cartClick={cartClick}/>)}
          
          


        
          </>
        }></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/cartview' element={<CartView cart={cart} removeHandler={removeHandler} />}></Route>
        <Route path="products/:productID" element={<><ProductDetail cartClick={cartClick}/></>}></Route>
      </Routes>
   
      
    </div>
  );
}

export default App;
