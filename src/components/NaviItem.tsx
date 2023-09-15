import * as React from 'react';
export interface NaviItemProps {
  id: string;
  children: React.ReactNode;
  onClick: (linkId: string) => void;
}

export const NaviItem: React.FunctionComponent<NaviItemProps> = ({
  id,
  children,
  onClick
}: NaviItemProps) => {
  const onClickHandler = () => {
    onClick(id);
  };
  return (
    <>
      <li onClick={onClickHandler}>{children}</li>
    </>
  );
};
