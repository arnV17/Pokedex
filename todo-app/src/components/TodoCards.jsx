import React from 'react';
//import { useState } from 'react';


export default function TodoCards(props) {

    console.log("cards",props)

    const { todoInput, pro , index } = props;
    console.log("inexxxx^^^^^^",index);
    
    console.log("card-==-=-=-==-=-=-=-=s",todoInput,"yjkn{}{}{}}{}{}{{}{}{}}{")



    
  return (
    <div>
        <h1>{todoInput.input}</h1>
        <button>Completed</button>
        <button onClick={()=>{
            pro.delete(index)
        }}>Delete</button>
      
    </div>
  );
}