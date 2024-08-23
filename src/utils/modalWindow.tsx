import * as React from 'react';
import '../styles/ModalWindow.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number;
}

export function ModalWindow({ isOpen, onClose, score }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay">
      <div className="modal">
        <h2>Game over</h2>
        <p className="score">Your score: {score}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
}
