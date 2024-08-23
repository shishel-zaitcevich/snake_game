
import { AppleTypes } from "../components/Apple";
import { SnakeTypes } from "../components/Snake";


export const getDefaultSnake = (): SnakeTypes => {
    const head = { x: 4, y: 0 };

    return {
        head,
        parts: [
            { x: 0, y: 0 },
            head
        ]
    }
}

export const generateApple = (): AppleTypes => ({
    x: getRandomPosition(3, 96),
    y: getRandomPosition(3, 96),
});

const getRandomPosition = (from: number, to: number) => {
    const min = Math.ceil(from);
    const max = Math.floor(to);
    return Math.floor((Math.random() * (max - min + 1) + min) / 4) * 4;
};

export enum Direction {
  Top = 1,
  Left,
  Right,
  Bottom,
};

