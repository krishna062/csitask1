import { Component } from "react";
import "./NavbarStyles.css" ;
import {MenuItems} from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
    
        {/* <div className="navbar__title navbar__item">Logo</div> */}
       <ul className="nav-menu">
        {MenuItems.map((item, index) => {
            return(
                <li key={index}>
                <a href={item.url} className={item.cName}>{item.title}</a>
                
                 </li>
            );
            }
        )
        }
    

       </ul>
      </nav>
    );
  }
}
export default Navbar;