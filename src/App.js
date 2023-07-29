
import React,{ useState } from 'react'
import Footer from './F';
import ProductList from './ProductList';
import Form from './Form'

export default function App() {
  const ex=[
    
  ]
  
  const [list,setlist]=useState(ex);
  const [total,sett]=useState(0);
  function data(obj){
    let newlist=[obj,...list];
    setlist(newlist);
    let t=total;
    t+=Number(obj.price);
    sett(t);
    console.log(newlist);
  }
  function remove(index){
    let n=[...list];
    let ta=total;
    localStorage.removeItem(Number(n[index].id))
    ta-=n[index].price;
    console.log(ta)
    sett(ta)
    n.splice(index,1);
 
    setlist(n);
  }
 



  return (
    <main>
     <Form onSave={data}></Form>
      <ProductList list={list} remove={remove}></ProductList>
      <Footer footer={total}></Footer>
    </main>
  )
}
