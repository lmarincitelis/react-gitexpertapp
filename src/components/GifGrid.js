import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

 const   [images, setImages]=useState([]); 

//   useEffect(()=>{
//      getGifs( category ) 
//      .then ( imgs=> setImages( imgs ));
//   }, [ category ])

  //const [count,setCount] = useState(0)  

  const {data, loading}= useFetchGifs(category);

//   getGifs();
    return (
       <>
        <h3> {category} </h3>
        
        <div  className="card-grid">
           
           
              {
                 data.map( img =>(
                    <GifGridItem 
                      key= {img.id}
                      { ...img }  
                    />
                 ))
              }
           
         </div>
         </> 
    )

    }   