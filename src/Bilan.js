import React from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component'
import { useEffect } from "react";
export const Bilan  = () => {
  const column  = [
    {
      name:"nomBilan"
    }
  ]

  useEffect(()=>{
    const fetData = async() =>{
     
      axios.get('')
      .then(res => console.log(res))
      .catch(err=>console.log(err));
    }

  },[])
    return (
       <div>

       </div>
    
         
     );
   };
   export default Bilan;


   
