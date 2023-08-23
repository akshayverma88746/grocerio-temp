import React from 'react';
import Dairys from './dairy.json';


function Dairy() {
  return (
    <>
    <h1 className="f-fruits">Dairy</h1>
            <div className="f-element">
    {
        Dairys.map(item=>(
                <div className="f-cards" key={item.id}>
        
                    <img className="f-img" src={item.image}/>
                    <div className="info">
                        <h1 className="text">{item.name}</h1>
                        <p>{item.price}/Kg</p>
                        <button className='btn'>Add to cart
                        </button>
                    </div>
                </div>
       )) }
    
    
            </div>
            </>
  )
}

export default Dairy