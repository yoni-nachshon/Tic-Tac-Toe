import React from 'react';
import Square from './Square';

const style = {
	width: "250px",
	height: "250px",
	margin: "0 auto",
	gap: "5px",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick, winingLine }) => (
	<div style={style}>
		{squares.map((square, i) => {
			const winLine = winingLine &&
				(winingLine[0] === i ||
					winingLine[1] === i ||
					winingLine[2] === i)
			return (
				<Square
					key={i}
					value={square}
					onClick={() => onClick(i)}
					winLine={winLine}
				/>
			)
		})}
	</div>
);
export default Board;