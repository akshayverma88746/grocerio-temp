import Products from './Products';
import Vegetable from './Vegetable';
import Other from './Other';
import Category from './Category';
import Navbar from '../Navbar/Navbar';
import "./prod.css"

function App() {
  return (
    <>
   
   <div className='fullbody' style={{
    backgroundImage: `url("images/product.png")`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
   }}>
    <Navbar/>
    <Category/>
    <Vegetable/>
   
    </div>
   
    </>
  );
}

export default App;
