import React from "react";

const Menu = ({ title, style, link, list, history }) => {

  return (
    <div className={style}>
      <div onClick={() =>  history.push(link)}>{title}</div>
      <div className='list-unstyled'>{list}</div>
    </div>
  );
};

export default Menu;

