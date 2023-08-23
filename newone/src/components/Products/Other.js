import React from 'react'
import './products.css';
import Others from './other.json';

function Other() {
  return (
    <>
    <h1 className="f-fruits">Grocery</h1>
            <div className="f-element">
    {
        Others.map(item=>(
                <div className="f-cards" key={item.id}>
        
                    <img className='f-img' src={item.image}/>
                    <div className="info">
                        <h1 className="text">{item.name}</h1>
                        <p>{item.price}/Kg</p>
                        <button className='btn'>Add To cart</button>
                    </div>
                </div>
       )) }
    
    
            </div>
       </>
  )
}

export default Other