import React from 'react'
import './category.css';
import {useNavigate, useLocation,BrowserRouter as Router, Link, NavLink} from "react-router-dom";
function Category() {
  return (
    <>
          <div className="c-container">
          <h3 className='head3'>Shop By</h3>
        <h1 className="category">Categories</h1>
        <div className="c-element">
            <div className="c-cards">
                <Link to="/products">
                <img className="c-img" src="./images/fruits.svg"/>
                <div className="c-info">
                    <h1 className="c-text">Fruits</h1>
                
                </div>
                </Link>
            </div>
            
            <div className="c-cards">
            <Link to="/vegetables">
                <img className="c-img" src="./images/vege1.png"/>
                <div className="c-info">
                    <h1 className="c-text">Vegetables</h1>
                   
                </div>
            </Link>
            </div>
            
            <div className="c-cards">
            <Link to="/dprod">
                <img className="c-img" src="./images/dairy.png"/>
                <div className="c-info">
                    <h1 className="c-text">Dairy</h1>
                   
                </div>
            </Link>
            </div>
            
            <div className="c-cards">
            <Link to="/grocery">
                <img className="c-img" src="./images/grocery.png"/>
                <div className="c-info">
                    <h1 className="c-text">Grocery</h1>
                   
                </div>
                </Link>
            </div>
            
            
          
            
            
          

            </div>

        </div>




            
            

        
    
    {/* </div> */}

    </>

  )
}

export default Category