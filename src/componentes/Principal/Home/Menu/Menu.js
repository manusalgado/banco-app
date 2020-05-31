import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

class Menu extends React.Component {
  render() {  
    return (
        <div>
        <Link to="/seguridad"><img src="/img/imgMenu.jpg" useMap="#mapa1" className="imagemenu"/></Link>
        </div>
       
    )
  }
}

export default Menu;
