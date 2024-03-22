import React from "react";
import { Fragment } from "react";

export const Rechercher = () =>{
  

    return(<Fragment><h4 className="text-center mt-5">Rechercher un patient</h4>
     <form className="d-flex"> 
        <input type="text" className="form-control"/>
        <button className="btn btn-success">Rechercher</button>
     </form>
    
    
    
    
    </Fragment>
   
)};
export default  Rechercher;