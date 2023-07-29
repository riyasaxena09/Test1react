import React from 'react'
import Product from './Product'
function ProductList(props){
  return(
    props.list.length>0?
    props.list.map((product,i)=>{
      return <Product product={product} index={i} key={i} remove={props.remove}></Product>;
    }):<h1>no product</h1>
  );
}
export default ProductList;