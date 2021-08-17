import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['one punch']);

 /*    const handleAdd = () => {
        setCategories ([...categories, 'HunterX']);
    } */
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories}></AddCategory>
            <hr />
            {/* <button onClick={handleAdd}> Agregar</button> */}

          <ol>
            {
                categories.map(category => 
                    <GifGrid
                      key={category} 
                      category={category}
                    />
                )
            }    
          </ol>  
        </>
    )
}