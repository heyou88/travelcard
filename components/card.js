import React from "react"
export default function Card(props){
    console.log(props)
    return(
        <div className="card">
           <img className="card-img" src={props.element.imageUrl}/>
           <div className="card-text">
                <div className="card-stats">
                    <img  className="location-mark" src="./images/location.png"/>
                    <span>{props.element.location}</span>
                    <a className="link" href={props.element.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div>
                    <h2>{props.element.title}</h2>
                    <p className="bold">{props.element.startDate} - {props.element.endDate}</p>
                    <p>{props.element.description}</p>
                </div>
           </div>
        </div>
       
         
             
    )
}