import React from 'react'
import './products.css'
import Vegi from './vegi.json'
import Temp from '../Cart/Temp'
import { useState } from 'react'

function Vegetable() {
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
  return (
    <>
    <h1 className="f-fruits">Vegetables</h1>
            <div className="f-element">
    {
        Vegi.map(item=>(
                <div className="f-cards" key={item.id}>
        
                    <img className='f-img' src={item.image}/>
                    <div className="info">
                        <h1 className="text">{item.name}</h1>
                        <p>{item.price}/Kg</p>
                        <button className='btn' onClick={() => handleClick(item)}>Add to Cart</button>
                    </div>
                </div>
       )) }
    
    
            </div>
       </>
  )
}

export default Vegetable