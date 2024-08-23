import * as React from 'react';
import '../styles/Board.scss';

interface BoardProps {
  children: React.ReactNode;
}

export function Board({ children }: BoardProps) {
  return <div className="board">{children}</div>;
}
