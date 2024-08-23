import * as React from 'react';

export interface ScoreProps {
  score: number;
}

export const Score: React.FunctionComponent<ScoreProps> = ({ score }) => {
  return (
    <div className="title">
      <label>Score: </label>
      <span>{score}</span>
    </div>
  );
};
