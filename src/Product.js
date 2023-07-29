import React from 'react'
function Product(props){
  return(
  <div className='row'>
    <div className='col-4'>
    <h2>{props.product.name} <span>{props.product.price}</span> <button onClick={()=>{
    props.remove(props.index)
    }}>delete</button></h2>
    </div>
  </div>
    );
}
    export default Product;
    