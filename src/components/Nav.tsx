import React, { FC, ReactElement } from 'react';

interface NavProps {}

const Nav: FC<NavProps> = ({}): ReactElement => {
  return (
    <nav className="h-[10%]">
      <ul className="flex flex-row space-x-4">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Boards</li>
      </ul>
    </nav>
  );
};

export default Nav;
