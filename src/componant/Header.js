import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import { Fade as Hamburger } from 'hamburger-react'

import './css/nav.css'
const Header = () =>{

  const [iteam,setIteam] = useState(false);
  const change = ()=>{
    setIteam(!iteam)
  }
    return(
        <>
       
          <nav>
            <div >
              <img className="logo" src="logo.png"></img>
            </div>
            <ul>
              <li>
                <NavLink className="txt" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="txt" to="/product">Product</NavLink>
              </li>
              <li>
                <NavLink className="txt" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className="txt" to="/checkout">CheckOut</NavLink>
              </li>
            
            </ul>



          </nav>
  
{/* ham menu */}
<div className="ham">

<div onClick={change}><Hamburger/></div>
{/* only ham return always show class does not effect */}

</div>
{/* <button onClick={change}></button> */}

{/* mnav mobile" */}

  <div className={iteam?"mnav ":"mnav mobile"}>

  <ul>
              <li>
                <NavLink className="txt" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="txt" to="/product">Product</NavLink>
              </li>
              <li>
                <NavLink className="txt" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className="txt" to="/checkout">CheckOut</NavLink>
              </li>
            
            </ul>
  </div>

        </>
    )
}
// <svg id="logo-72" width="52" height="44" viewBox="0 0 53 44" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M23.2997 0L52.0461 28.6301V44H38.6311V34.1553L17.7522 13.3607L13.415 13.3607L13.415 44H0L0 0L23.2997 0ZM38.6311 15.2694V0L52.0461 0V15.2694L38.6311 15.2694Z" class="ccustom" fill="#212326"></path> </svg>
export default Header;