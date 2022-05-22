import React from 'react';


const Square = ({ value, onClick, winLine }) => (
	<button style={style(winLine)} onClick={onClick} >
		{value}
	</button>
);
const style = (winLine) => ({
	fontSize: "30px",
	cursor: "pointer",
	border: winLine ? "2px solid #03a9f4" : "none",
	color: "#FFFFFF",
	background: winLine ? "#03a9f4" : "#A9A9A9"
});
export default Square;