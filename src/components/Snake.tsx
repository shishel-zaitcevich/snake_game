import * as React from 'react';
import '../styles/Snake.scss';

interface SnakeProps {
  snakeDots: number[][];
}

export default function Snake({ snakeDots }: SnakeProps) {
  return (
    <>
      {snakeDots.map((dot, i) => {
        <div
          key={i}
          className={`snake__dot pos__${dot[1]}-${dot[0]}`}
        />;
      })}
    </>
  );
}
