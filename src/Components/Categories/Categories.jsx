import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Categories.css'

function Categories() {

const [categories,setCategories]=useState([]);
const getCategories = async()=>{

    const {data}= await axios.get(`${import.meta.env.VITE_API}/categories/active?limit=10`);
    setCategories(data.categories);

   
}

   useEffect(()=>{
    getCategories();
   },[]);

  return (
    <>
   <div className='category-item'> 
   {categories.map(category=>
     <div className='category'  key={category.id}>
        <img src={category.image.secure_url}/>

     </div>

     )}
   </div>
    
    
     
    </>
  )
}

export default Categories