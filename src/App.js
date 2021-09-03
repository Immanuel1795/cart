import Navbar from './Navbar';
import Product from './Product';
import vegList from './Veg';
import Cart from './Cart';
import { useState } from "react";

function App() {

  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  

  function handleClick(newData){
    setCartList([...cartList, newData]);
   
    setTotal(total + newData.price);
    console.log(newData)
    if(newData.isDisabled === false){
      newData.isDisabled = true
    }
  }

  function handleDelete(deleteData){
    
    setCartList(cartList.filter(cartItem=>{
      return cartItem.id !== deleteData.details.id;
    }))

    console.log(deleteData)

    setTotal(total-deleteData.details.price);
    if(deleteData.details.isDisabled === true){
      deleteData.details.isDisabled = false
    }
    
  }


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row ">
          <div className="col-lg-3 cart-sec">
            <h1 className="my-4"><i class="cart fas fa-shopping-cart"></i></h1>
            <div className="">
            {
              cartList.map((ele, index)=>{
                console.log(ele)
              return <Cart key={index} details={ele} onDelete={handleDelete}/>
  
            })
            }
            </div>
            <h1 className="total-price">Total : &#8377;{total}</h1>
          </div>

          <div className="col-lg-9">
            <div className="row">
              {
                vegList.map((product, index)=>{
                  return <Product key={index} product={product} onAdd={handleClick}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
  

    </>
  );
}

export default App;
