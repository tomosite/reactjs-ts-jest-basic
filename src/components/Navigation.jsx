import React, { useState } from 'react';
import LinkItem from './LinkItem';

const Navigation = (props) => {
  return (
    <>
      <nav>
        <ul>
          {props.link_items.map((item) => (
            <LinkItem key={item.id} id={item.id} onClick={props.onClickItem}>
              {item.title}
            </LinkItem>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
