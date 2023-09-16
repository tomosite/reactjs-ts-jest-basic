import React from 'react';
import { LinkItem, LinkItemProps } from '.';

export interface NavigationProps {
  links: Array<LinkItemProps>;
}

export const Navigation: React.FC<NavigationProps> = ({
  links
}: NavigationProps) => {
  return (
    <>
      <nav>
        <ul>
          {links.map((item) => (
            <LinkItem key={item.id} id={item.id} onClick={() => {}}>
              {item.children}
            </LinkItem>
          ))}
        </ul>
      </nav>
    </>
  );
};
