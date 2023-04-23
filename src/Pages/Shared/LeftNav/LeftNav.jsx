import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/categories')
        .then(res=>res.json())
        .then(data=>{
            setCategories(data)
            console.log(data)
        })
    },[])
    console.log(categories)
    return (
       <div className="">
    <h4>All Category</h4>
         <div className='ps-4'>
            {
               categories.map(category=><p
               key={category.id}
               >
               <Link to={`/categories/${category.id}`}>{category.name}</Link>
               </p>)
            }
        </div>
       </div>
    );
};

export default LeftNav;