import React from 'react';
import "./style.scss";
import { NavLink } from 'react-router-dom';

//TODO ADD HOME ICON WITH NAVLINK TO HOMEPAGE

const Header = ({categories, logo}) => {

  return (
    <div className="header">
        <img className="logo" src={logo} alt="Logo TND Consulting" />
        <div className="header_buttons">  
            {categories.map((category) => (
                <NavLink key={category.id} to={`/${category.slug}`} >
                <button   className="header_buttons--button">{category.name}</button>
                </NavLink>
            ))}
        </div>
        
    </div>
  )
}

export default Header