import React from 'react'

export default function Card(props){
    
    return (
        <div>
            <div>
                <img src={props.image} alt="img not found" width='312px' height='231px'style={{ borderRadius : '0.5rem'}} />
                <h3>{props.name}</h3>
                <p>{ props.createdInDb? props.dietType.map(e=> e.dietname) : props.dietName}</p>
            </div>
        </div>
    )
    
}