import React from 'react';
import Square from './Square';

const style = {
	// border: "2px solid #808080",
	width: "250px",
	height: "250px",
	margin: "0 auto",
	gap:"5px",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ squares, onClick, winner }) => (
	<div style={style}>
		{squares.map((square, i) => (
			<Square key={i} value={square} onClick={() => onClick(i)} winner={winner} />
		))}
	</div>
);
export default Board;