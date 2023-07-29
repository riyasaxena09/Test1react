
import React,{ useState } from 'react'
function Form(props){
    const [idname,setid]=useState('');
  const [pricename,setprice]=useState('');
  const [name,setname]=useState('');
  function id(e){
   
    setid(e.target.value);
     console.log(idname)
    
  }
function price(e){
   
    setprice(e.target.value);
     console.log(pricename)
    
  }
  function pname(e){
   
    setname(e.target.value);
     console.log(name)
    
  }
  function submit(e){
    e.preventDefault();
  const obj={
    id:idname,
    price:pricename,
    name:name
    }
    var sobj=JSON.stringify(obj)
localStorage.setItem(obj.id,sobj)

    console.log(obj)
  props.onSave(obj);
    
  }
  return(
    <div>
      <form onSubmit={submit}>
        <label>Id:</label>
        <input type="number" onChange={id}></input>
           <label>Price:</label>
          <input type="number" onChange={price}></input>
           <label>Name:</label>
          <input type="text" onChange={pname}></input>
        <button>ADD </button>
      </form>
    </div>
  )
}
export default Form;