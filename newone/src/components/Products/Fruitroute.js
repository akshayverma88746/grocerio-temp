import Products from './Products';
import Vegetable from './Vegetable';
import Other from './Other';
import Category from './Category';
import "./prod.css"
import Navbar from '../Navbar/Navbar';

function App() {
  return (
    <div className='any'>
   
   <div className='fullbody' style={{
    backgroundImage: `url("images/product.png")`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
   }}>
    <Navbar/>
    <Category/>
    <Products/>
   
    </div>
   
    </div>
  );
}

export default App;
