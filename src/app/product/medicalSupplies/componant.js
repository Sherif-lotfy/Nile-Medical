const Componant = ({price , productName})=>{
    return (
        <div className="border-2 md:h-80 h-72 m-0 w-11/12 shadow-xl md:hover:scale-105 transition-all rounded-lg overflow-hidden cursor-pointer mb-8">
            name is {productName}<br/>
            price is {price}
        </div>
          
    )
}
export default Componant;