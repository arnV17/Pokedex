export default 

function TodoInput(props){
    const input = props.input
    console.log("input",input)
    const [inputValue, setInputValue] = useState('')
    return(
        <div>
            <input type="text" placeholder="Add a todo" value={inputValue} 
      onChange={(e) => setInputValue(e.target.value)}  />
            <button onClick={(e)=>{



            }}>+</button>
        </div>
    )
    

}