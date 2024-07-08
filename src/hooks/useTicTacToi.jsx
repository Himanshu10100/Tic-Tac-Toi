import { useState } from "react";

const boardInitialize = () => Array(9).fill(null);

const useTicTacToi = () => {
  const [board, setBoard] = useState(boardInitialize());
  const [isXNext, setisXNext] = useState(true);

  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
  ];

  const calculateWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERN.length; i++) {
      const [a, b, c] = WINNING_PATTERN[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    const winner = calculateWinner(board);
    console.log(winner);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setisXNext(!isXNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);

    if (winner) {
      return `Winner is ${winner}`;
    } else if (!board.includes(null)) {
      return `Match Draw`;
    } else {
      return `Player ${isXNext ? "X" : "O"} turn`;
    }
  };

  const resetGame = () => {
    setBoard(boardInitialize());
    setisXNext(true);
  };

  return { board, calculateWinner, handleClick, getStatusMessage, resetGame };
};

export default useTicTacToi;
