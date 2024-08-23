import * as React from 'react';
import '../styles/Snake.scss';

export interface SnakeType {
  x: number;
  y: number;
}

export interface SnakeTypes {
  head: SnakeType;
  parts: SnakeType[];
}

export interface SnakeProps {
  snake: SnakeTypes;
}

export const Snake: React.FunctionComponent<SnakeProps> = ({
  snake,
}) => {
  return (
    <div className="snake">
      {snake.parts.map((part, index) => {
        const position = {
          left: `${part.x}%`,
          top: `${part.y}%`,
        };

        return (
          <div
            className="snake__part"
            key={index}
            style={position}
          ></div>
        );
      })}
    </div>
  );
};
