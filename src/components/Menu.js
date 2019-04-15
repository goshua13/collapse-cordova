import React from "react";
import { Link} from 'react-router-dom';

const Menu = ({ title, style, link, list }) => {

  const renderMenus = (prop) => {
    console.log(prop)
  }
  return (
    <div className={style}>
      <Link to={link} style={{color: 'red'}}>{title}</Link>
      <div className='list-unstyled'>{list}</div>
      {renderMenus()}
    </div>
  );
};

export default Menu;

