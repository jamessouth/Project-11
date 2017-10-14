import React from 'react';
import {NavLink} from 'react-router-dom';





const Nav = props => {



  return (

    <nav className="main-nav">
      <ul onClick={(e) => {
        if(e.target.tagName === 'A'){

          props.preset(e.target.textContent.toLowerCase());
        }


      }}>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/birds'>Birds</NavLink></li>
        <li><NavLink to='/search'>Search</NavLink></li>
      </ul>
    </nav>

  );

}

export default Nav;
