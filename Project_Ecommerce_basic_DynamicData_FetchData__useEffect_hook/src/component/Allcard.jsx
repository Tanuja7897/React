import "tailwindcss";
function Allcard({data}){
    return(
        <div>
            {
                data.map((item)=>{
                    return<div key = {item.id}>
                    <img src={item.thumbnail} alt="" />
                    <h1 className="text-blue-600" >{item.title}</h1>
                    <h2 >Prize : {item.price}</h2>
                    <p >{item.description}</p>
                </div>
                })
            }
            
        </div>
    )
}
export default Allcard;