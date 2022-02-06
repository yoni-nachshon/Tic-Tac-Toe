import React, { useState, useEffect } from "react";
import Board from "./Board";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const restart = () => {
    setBoard(Array(9).fill(""));
    setXisNext(true);
  };

  return (
    <div style={{ marginTop: "5rem", textAlign: "center" }}>
      <button style={{ marginBottom: "1rem" }} onClick={restart}>
        New Game
      </button>
      <Board squares={board} onClick={handleClick} />
      <div style={{ marginTop: "1rem" }}>
        {winner
          ? "Winner : " + winner
          : board.every(Boolean)
          ? "Draw"
          : "Next Player : " + (xIsNext ? "X" : "O")
        }
      </div>
    </div>
  );
};

export default Game;
