import * as React from 'react';
import { useEffect, useState } from 'react';
import '../styles/Game.scss';
import { Apple, AppleTypes } from './Apple';
import { SnakeTypes, SnakeType, Snake } from './Snake';
import { Board } from './Board';
import { getDefaultSnake } from '../utils/utils';
import { generateApple } from '../utils/utils';
import { useButtons, useTimer } from '../utils/hooks';
import { Direction } from '../utils/utils';
import { Score } from './Score';

export const Game = () => {
  const { direction, setDirection } = useButtons(Direction.Right);
  const { timerInterval, timerDuration, updateTimer } = useTimer(200);
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState<SnakeTypes>(getDefaultSnake());
  const [apple, setApple] = useState<AppleTypes>(generateApple());

  useEffect(() => {
    moveSnake();
  }, [timerInterval]);

  useEffect(() => {
    if (isBorderCollision()) {
      return gameOver();
    }

    if (isSelfCollision()) {
      return gameOver();
    }

    if (canEatApple()) {
      eatApple();
      increaseSpeed();
    }
  }, [snake]);

  function moveSnake() {
    let parts = [...snake.parts];
    let head: SnakeType | null = null;

    switch (direction) {
      case Direction.Top: {
        head = {
          x: snake.head.x,
          y: snake.head.y - 4,
        };
        break;
      }
      case Direction.Left: {
        head = {
          x: snake.head.x - 4,
          y: snake.head.y,
        };
        break;
      }
      case Direction.Right: {
        head = {
          x: snake.head.x + 4,
          y: snake.head.y,
        };
        break;
      }
      case Direction.Bottom: {
        head = {
          x: snake.head.x,
          y: snake.head.y + 4,
        };
        break;
      }
    }

    if (head !== null) {
      parts.push(head);
      parts.shift();

      setSnake({
        head,
        parts,
      });
    }
  }

  function eatApple() {
    growSnake();
    generateNewApple();
    increaseScore();
  }

  function growSnake() {
    const tail = snake.parts[0];

    setSnake({
      ...snake,
      parts: [{ ...tail }, ...snake.parts],
    });
  }

  function generateNewApple() {
    setApple(generateApple());
  }

  function increaseSpeed() {
    if (timerDuration > 20) {
      updateTimer(timerDuration - 10);
    }
  }

  function increaseScore() {
    setScore(score + 1);
  }

  function canEatApple() {
    const { head } = snake;

    return head.x === apple.x && head.y === apple.y;
  }

  function isBorderCollision() {
    const { head } = snake;

    if (head.x >= 100 || head.x < 0 || head.y >= 100 || head.y < 0) {
      return true;
    } else {
      return false;
    }
  }

  function isSelfCollision() {
    const { head, parts } = snake;

    return parts.some((part) => {
      if (part !== head) {
        return part.x === head.x && part.y === head.y;
      } else {
        return false;
      }
    });
  }

  function gameOver() {
    alert(`GAME OVER! Your score ${score}`);
    resetGame();
  }

  function resetGame() {
    setDirection(Direction.Right);
    updateTimer(200);
    setScore(0);
    generateNewApple();
    setSnake(getDefaultSnake());
  }

  return (
    <div className="game__wrapper">
      <Board>
        <Snake snake={snake} />
        <Apple apple={apple} />
      </Board>
      <Score score={score} />
    </div>
  );
};
