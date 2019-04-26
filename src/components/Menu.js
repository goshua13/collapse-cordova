import React from "react";

const Menu = ({ title, style, link, list, history }) => {

  return (
    <div className={style} onClick={() => history.push(link)}>
      <div>{title}</div>
      <div className='list-unstyled' onClick={e => e.stopPropagation()}>{list}</div>
    </div>
  );
};

export default Menu;

