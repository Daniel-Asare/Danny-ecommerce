import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as GrIcons from 'react-icons/gr'
import { useCart } from 'react-use-cart';
import '../css/navbar.css';
<css />
const Header =()=> {
  const [toggle,setToggle] = useState(true);
  const { totalItems } = useCart();
  return (
    <header className="header">
      <nav className="nav">
        <div>
        <Link to='/'><h1>nike</h1></Link>
        </div>
         <ul className={toggle ? "toggle" : ""} onClick={()=>setToggle(true)}>
          <Link to='/'><li>Home</li></Link>
          <Link to='/contact'><li>Contact</li></Link>
          <Link to='/product'><li>Product</li></Link>
          <Link to='/service'><li>Service</li></Link>
          
        </ul>
        <Link to='/cart'>
        <div className="cartIcon">
          <span>{totalItems}</span>
          <div className="cartShop">
          <FaIcons.FaShoppingCart/>
          </div>
            
        </div>
        </Link>
        <div className="navIcon">
          <span onClick={()=>setToggle(!toggle)}>{toggle? <FaIcons.FaBars/> :<GrIcons.GrClose/>}</span>
        </div>

      </nav>
    </header>
  )
}

export default Header
