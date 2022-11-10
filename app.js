import React from "react"
import Nav from "./components/navbar"
import Card from "./components/card"
import data from "./data"
export default function App(){
    const cardElement= data.map(element=>{
        return(
            <Card 
            element={element}/>
        )
    })
    return(
        <div>
          <Nav/>
          {cardElement}
        </div>
          
    )
}