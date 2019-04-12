import React from "react";
import { Link} from 'react-router-dom';

const Menu = ({ title, style, link, list, currentUser }) => {
  return (
    <div className={style}>
      <Link to={link} className={title[1]}>{title[0]}</Link>
      <h5 className='current-user'>{currentUser}</h5>
      <div className='list-unstyled'>{list}</div>
    </div>
  );
};

export default Menu;
