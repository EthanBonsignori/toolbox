import React, { FC, ReactElement } from 'react';

interface CardProps {
  title: String;
}

const Card: FC<CardProps> = ({ title }): ReactElement => {
  return (
    <div className="flex flex-col flex-wrap shadow-md h-1/3 w-1/2 bg-gray-400 rounded-b-md rounded-t-lg">
      <h1 className="">{title}</h1>
    </div>
  );
};

export default Card;
