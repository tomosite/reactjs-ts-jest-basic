import React from 'react';
import { List } from 'semantic-ui-react';

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
      <List link>
        <List.Item onClick={onClickHandler}>{children}</List.Item>
      </List>
    </>
  );
};
