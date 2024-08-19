import * as React from 'react';
import '../styles/Apple.scss';

interface AppleProps {
  position: number;
}

export default function Apple({ position }: AppleProps) {
  return (
    <div
      className={`apple pos-${position[1]}-${position[0]}`}
    />
  );
}
