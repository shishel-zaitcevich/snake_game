import { useEffect, useState } from "react";
import { Direction } from "./utils";

export const useButtons = (initialDirection: Direction) => {
    const [direction, setDirection] = useState<Direction>(initialDirection);
  
    useEffect(() => {
        document.onkeydown = keyDownHandler;
    }, [direction]);
  
    function keyDownHandler(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowUp': {
                if (direction !== Direction.Bottom) {
                    setDirection(Direction.Top);
                }
  
                break;
            }
            case 'ArrowLeft': {
                if (direction !== Direction.Right) {
                    setDirection(Direction.Left);
                }
                break;
            }
            case 'ArrowRight': {
                if (direction !== Direction.Left) {
                    setDirection(Direction.Right);
                }
                break;
            }
            case 'ArrowDown': {
                if (direction !== Direction.Top) {
                    setDirection(Direction.Bottom);
                }
                break;
            }
        }
    }
  
    return {
        direction,
        setDirection,
    };
  }
  
  
  export const useTimer = (initialTickDuration: number) => {
    const [timerDuration, setTimerDuration] = useState<number>(initialTickDuration);
    const [timerInterval, setTimerInterval] = useState<number>(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setTimerInterval(timerInterval => timerInterval + 1);
        }, timerDuration);
  
        return () => {
            clearInterval(interval)
        };
    }, [timerDuration]);
  
    function updateTimer(timerDuration: number) {
        setTimerDuration(timerDuration)
    }
  
    return {
        timerDuration,
        timerInterval,
        updateTimer
    }
  }