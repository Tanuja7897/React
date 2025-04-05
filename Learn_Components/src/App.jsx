import Message from "./Message";
let message= [
    "hello i am tanuja" , "nice to meet yiu " , ""
]

function App(){
    return(
        <div>
        {
            message.map((data,index)=>{
                return <Message key={index} message={data}/>
            })
        }
        </div>
    )
}

export default App;
