import React from 'react';
import {useNavigate, useLocation, BrowserRouter as Router, Link, NavLink} from "react-router-dom";
import "./home.css";
import "../Footer/footer1.css"
import State from '../Cards/State'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Home = () => {
  const location = useLocation()
  return (
    <div className="back">
        <body>
            <Navbar/>
            <div class="img-container">
                <img src="images/main.png" alt="main" class="img" />
            </div>
            <div class="moto">
                <h1 style={{color: '#697ed9', paddingLeft: '50px'}}>Quick</h1>
                <h1 style={{paddingLeft: '50px'}}>delivery at</h1>
                <h1 style={{paddingLeft: '50px'}}>your doorstep</h1>
            </div>
            <p id="ptag" style={{paddingLeft: '110px'}}>Your one-stop destination for daily fresh groceries delivered right to </p>
            <p id="ptag" style={{paddingLeft: '110px'}}>your doorsteps! We take immense pride in curating the finest</p>
            <p id="ptag" style={{paddingLeft: '110px'}}>selection of farm-fresh produce at unbeatable prices. </p>
            <div>
                <div class="glass1">
                    <a href="#">
                        <img src="../images/weigh-scale.png" alt="weight" id="comp" />
                        <p id="ptag1" style={{color: '#323335', fontWeight: '600'}}>Compare</p>
                    </a>
                </div>
    
                <div class="glass">
                    <Link to="/products">
                        <img src="../images/carrot.svg" alt="order" id="comp" />
                        <p id="ptag1" style={{color: '#323335', fontWeight: '600'}}>Order Now</p>
                    </Link>
                </div>
    
                <div class="contact">
                    <a href="#contact">
                        <img src="../images/message.svg" alt="contact" id="msg" />
                    </a>
                </div>
            </div>
    
            {/* <!--Vegetable setion --> */}
            <div class= "main-glass">
                <div class="container">
                    <h1 class="fruits">Fruits</h1>
                    <div class="element">
                        <div class="cards">
                            <img src="../images/mango.webp" alt="fruit"/>
                            <div class="info">
                                <h1 class="text">Mango</h1>
                                <p>Rs 80/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="/images/guava.webp" alt="fruit"/>
                            <div class="info">
                                <h1 class="text">Guava</h1>
                                <p>Rs 60/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/apple.webp" alt="fruit"/>
                            <div class="info">
                                <h1 class="text">Apple</h1>
                                <p>Rs 90/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/banana.webp" alt="fruit"/>
                            <div class="info">
                                <h1 class="text">Bannana</h1>
                                <p>Rs 40/dozen</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/grapes.webp" alt="fruit"/>
                            <div class="info">
                                <h1 class="text">Grapes</h1>
                                <p>Rs 120/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/orange.webp" alt="fruit"/>
                            <div class="info">
                                <h1 class="text">Oranges</h1>
                                <p>Rs 80/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/pomegranate.webp" alt="fruit"/>
                            <div class="info">
                                <h1 class="text">Pomegranate</h1>
                                <p>Rs 150/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/pineapple.webp" alt="fruit"/>
                            <div class="info">
                                <h1 class="text">Pineapple</h1>
                                <p>Rs 50/kg</p>
                            </div>
                        </div>
                    </div>
            
                    <h1 class="vegetables">Vegetable</h1>
                    <div class="element">
                        <div class="cards">
                            <img src="./images/brinjal.jpg" alt="vege"/>
                            <div class="info">
                                <h1 class="text">Brinjal</h1>
                                <p>Rs 40/kg</p>
                            </div>
                        </div>
                        <div class="cards">
                            <img src="./images/cabbage.webp" alt="vege"/>
                            <div class="info">
                                <h1 class="text">Cabbage</h1>
                                <p>Rs 30/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/capsicum.webp" alt="vege"/>
                            <div class="info">
                                <h1 class="text">Capsicum</h1>
                                <p>Rs 80/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/cauliflower.webp" alt="vege"/>
                            <div class="info">
                                <h1 class="text">Cauliflower</h1>
                                <p>Rs 30/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/ladyfinger.webp" alt="vege"/>
                            <div class="info">
                                <h1 class="text">Lady Finger</h1>
                                <p>Rs 30/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/peas.webp" alt="vege"/>
                            <div class="info">
                                <h1 class="text">Peas</h1>
                                <p>Rs 50/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/pumpkin.webp" alt="vege"/>
                            <div class="info">
                                <h1 class="text">Pumpkin</h1>
                                <p>Rs 80/kg</p>
                            </div>
            
                        </div>
                        <div class="cards">
                            <img src="./images/carrot.webp" alt="vege"/>
                            <div class="info">
                                <h1 class="text">Carrot</h1>
                                <p>Rs 40/kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <State/>
            {/* <!-- --About---- --> */}
            <div class="about-glass">
                <section id="about">
                    <div class="about-description">
                        <h2 class="tag_titlee">About Us</h2>
                        <div class="about-image">
                            <img src="./images/image333.png" alt="About Us Image"/>
                        </div>
                        <div class="tag_indicato">
                            <p style={{minHeight: 'auto', lineHeight: '1.7', letterSpacing: '0.3px'}}>"It is a proven fact that eating fruits and vegetables on a daily basis is highly beneficial to one and all. Both fruits and vegetables are high in nutritional value and fiber. Consuming these on a daily basis also helps the body stay light, fit and healthy and plays a major role in boosting the immune system. So, we help you cleanse the body and get rid of harmful toxins by providing farm fresh fruits and vegetables.  Royal Fruits And Vegetables have been in the industry since years now and are located in Malad West, Mumbai, Maharashtra. The quality of fruits and vegetables you consume is as important to us as it is to you, which is why we have earned the trust of many and are leading the market. We make sure you eat healthy and stay happy."</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* <!-- --Contact---- --> */}
            <div class="cont-glass">
                <section id="contact">
                        <div class="contact_section">
                            <div class="tag_section tag_center">
                                <h2 class="tag_title">Contact Us</h2>
                                <div class="tag_indicator"></div>
                                <div class="line"></div> 
                                <div class="circle"></div> 
                            </div>
                        </div>
                        <h4 class="desc">Feel free to write, if you have any query.</h4>
                        <div class="contact_box_section">
                        <div class="map_section">
                            <div style={{width: '100%'}}>
                                <iframe style={{borderRadius:"30px"}} width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13783.3791616049!2d77.98489026778655!3d30.270003229183253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b9518933719%3A0xc25309614b33ceb1!2sBharu%20Wala%20Grant%2C%20Uttarakhand%20248002!5e0!3m2!1sen!2sin!4v1691942158357!5m2!1sen!2sin"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
                            </div>
                        </div>
                        <div class="form_section">
                            <form>
                                
                                <div class="input_group">
                                    <div class="input_box">
                                        <label for="firstname" class="label">Firstname</label>
                                        <input type="text" class="input" placeholder="Enter your firstname"/>
                                    </div>
                                    <div class="input_box">
                                        <label for="lastname" class="label">Lastname</label>
                                        <input type="text" class="input" placeholder="Enter your lastname"/>
                    
                                    </div>
                                </div>
                                
                                <div class="input_group">
                                    <div class="input_box">
                                        <label for="email" class="label">Email</label>
                                        <input type="email" class="input" placeholder="grocerio@gmail.com"/>
                                    </div>
                                    <div class="input_box">
                                        <label for="subject" class="label">Subject </label>
                                        <input type="text" class="input" placeholder="e.g. Related to "/>
                    
                                    </div>
                                </div>
                                
                                <div class="message_box">
                                    <label for="project_desc" class="label">Message</label>
                                    <textarea name="project_desc" id="project_desc" cols="30" rows="6" placeholder="Feel free to write "></textarea>
                                </div>
                                <button class="button-18">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </body>
    </div>
  )
}

export default Home