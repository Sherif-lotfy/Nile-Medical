"use client";
import { useState } from "react";
import MarkdownEditor from "./mde";
const Edit = ()=>{
  // const [pName , setpName] = useState();
  // const [price , setprice] = useState();

  // const handleChange =(e)=>{
  //   setpName(e.target.value);
  // } 
  // const handleChange2 =(e)=>{
  //   setprice(e.target.value);
  // }

  // const addfunc = require("./addproduct");
  // const add = ()=>{
  //   addfunc(pName , price);
  // }


  return (
    <div>
      <h1>The Control room</h1>
      <MarkdownEditor/>
      {/* <br/>
      <input type="text" name="productName" onChange={handleChange}/><br/>
      <br/>
      <input type="Number" name="price" onChange={handleChange2}/>
      <button onClick={add}>add</button> */}
    </div>
  )
}
export default Edit;