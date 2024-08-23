import * as React from 'react';
import '../styles/Apple.scss';

export interface AppleTypes {
  x: number;
  y: number;
}

interface AppleProps {
  apple: AppleTypes;
}

export function Apple({ apple }: AppleProps) {
  const styles = {
    left: `${apple.x}%`,
    top: `${apple.y}%`,
  };

  return <div className="apple" style={styles}></div>;
}
