import React from 'react';

export default function (props) {
  const onClickHandler = () => {
    props.onClick(props.id);
  };
  return (
    <>
      <li onClick={onClickHandler}>{props.children}</li>
    </>
  );
}
