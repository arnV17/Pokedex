export default function Tabs() {
    const tab =["All","Completed","Open"]
    
     return (
        <nav>
            <h1>Tasks</h1>
            {tab.map((tab,i)=>{
                return(
                    <button className="status-button"  key={i}>{tab}</button>
                )
            })}
       </nav> 
    )
    

    


}
