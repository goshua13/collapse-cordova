import React from "react";
import { Link} from 'react-router-dom';
import history from '../history';

const Menu = ({ title, style, link, list }) => {
  return (
    <div className={style}>
      <Link to={link} style={{color: 'red'}} >{title}</Link>
      <div className='list-unstyled'>{list}</div>
    </div>
  );
};

export default Menu;

