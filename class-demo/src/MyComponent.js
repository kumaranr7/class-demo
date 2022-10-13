import React, {useState} from "react";

export default function MyComponent(){

    const [count, setCount] = useState(150)
    const [page, setPage] = useState("Home")
    const [currency, setCurrecy] = useState("USD")


    function convertCurrency(){

        if (currency === "CAD"){
           setCount(count*0.73) 
           setCurrecy("USD")
        }
        if (currency === "USD"){
            setCount(count*1.38) 
            setCurrecy("CAD")
         }

        
    }

    return(

        <div>
            <h2>{page}</h2>
            <h1>{count} &nbsp;{currency}</h1>
            <button onClick={()=>{
                setCount(count+1)
                }}>+</button>
            <button onClick={()=>{setCount(count-1)}}>-</button>

            <hr />
            <br />

            <button onClick={()=>{setPage("Home")}}>Home</button>
            <button onClick={()=>{setPage("Profile")}}>Profile</button>
            <button onClick={()=>{setPage("Contact")}}>Contact</button>

            <br />
            <hr />
            <br />

            <button onClick={()=>{setCurrecy("USD")}}>USD</button>
            <button onClick={()=>{setCurrecy("CAD")}}>CAD</button>

            <button onClick={()=>{convertCurrency()}}>convert</button>



        </div>
    )
}