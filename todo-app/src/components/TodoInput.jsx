import React, {useState} from 'react'


export default function TodoInput(props){
    const handleAddTodo = props
    console.log("handleAddTodo",handleAddTodo)
    const [inputValue, setInputValue] = useState('')
    return(
        <div>
            <input type="text" placeholder="Add a todo" value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)}  />
            <button onClick={()=>{
                if (inputValue === ''){
                    console.log("No input")


                }
                else{
                    props.handleAddTodo(inputValue)
                    setInputValue('')

                }

        



            }}>+</button>
        </div>
    )
    

}