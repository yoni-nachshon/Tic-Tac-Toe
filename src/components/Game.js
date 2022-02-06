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
  const [board, setBoard] = useState(JSON.parse(localStorage.getItem("board")) || Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(localStorage.getItem("xIsNext") ? JSON.parse(localStorage.getItem("xIsNext")) : true);
  const winner = calculateWinner(board);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
    localStorage.setItem("xIsNext", JSON.stringify(xIsNext));
  }, [board,xIsNext]);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const restart = () => {
    setBoard(Array(9).fill(""));
    setXIsNext(true);
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
