import React from 'react';

export interface LinkItemProps {
  id: string;
  children: React.ReactNode;
  onClick: (linkId: string) => void;
}

export const LinkItem: React.FC<LinkItemProps> = ({
  id,
  children,
  onClick
}: LinkItemProps) => {
  const onClickHandler = () => {
    onClick(id);
  };

  return (
    <>
      <li onClick={onClickHandler} id={id}>
        {children}
      </li>
    </>
  );
};
