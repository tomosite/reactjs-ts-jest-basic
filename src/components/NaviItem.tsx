import React, { FunctionComponent } from "react";

export interface NaviItemProps {
  id: string;
  onClick: (linkId: string) => void;
}


export const NaviItemProps: FunctionComponent<NaviItemProps> = ({id, children}) => {

  const onClickHandler = () => {
    props.onClick(props.id);
  };
  return (
    <>
      <li onClick={onClickHandler}>{props.children}</li>
    </>
  );
}
