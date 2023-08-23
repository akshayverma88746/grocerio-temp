
import Products from './Products';
import Vegetable from './Vegetable';
import Other from './Other';
import Dairy from './Dairy';
import Category from './Category';
import Navbar from '../Navbar/Navbar';


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
    <Dairy/>
   
    </div>
   
    </>
  );
}

export default App;
