import React, { useState, useEffect } from "react";
import Board from "./Board";

const Game = () => {

  const [board, setBoard] = useState(
    JSON.parse(localStorage.getItem("board")) || Array(9).fill("")
  );
  const [xIsNext, setXIsNext] = useState(
    localStorage.getItem("xIsNext") ?
      JSON.parse(localStorage.getItem("xIsNext")) : true
  );

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

  const calculateWinner = (squares) => {
    for (let i of lines) {
      const [a, b, c] = i;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(board);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(board));
    localStorage.setItem("xIsNext", JSON.stringify(xIsNext));
  }, [board, xIsNext]);

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
    <div style={style().container}>
      <button style={style().btn} onClick={restart}>
        New Game
      </button>
      <Board squares={board} onClick={handleClick} winner={winner} />
      <div style={style(winner).message}>
        {winner
          ? "Winner : " + winner
          : board.every(Boolean)
            ? "Draw"
            : "Next Player : " + (xIsNext ? "X" : "O")}
      </div>
    </div>
  );
};

const style = (winner) => ({
  container: {
    marginTop: "5rem",
    textAlign: "center",
  },
  btn: {
    marginBottom: "1rem",
    background: "#03a9f4",
    color: "#ffffff",
    border: "4px solid #03a9f4",
    borderRadius: "2px",
  },
  message: {
    marginTop: "1rem",
    fontSize: 20,
    color: winner ? "#03a9f4" : "#808080"
  },

});

export default Game;
