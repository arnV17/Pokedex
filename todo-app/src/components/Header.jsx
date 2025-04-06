export function Header(props){
    const todos = props.todos
    const openTasks = todos.filter(todo => !todo.complete).length
    
    console.log("open tasks")
    console.log(props.todos[0].input)

    return(


        <div>You have header {openTasks} open tasks</div>
        
    )

}
export default Header;
