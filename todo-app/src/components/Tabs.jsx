export default function Tabs() {
    const tabo =["All","Completed","Active"]
    return (
        <nav>
            <h1>Tasks</h1>
            {tabo.map((tab,i)=>{
                return(
                    <button className="status-button"  key={i}>{tab}</button>
                )
            })}
       </nav> 
    )
    

    


}
