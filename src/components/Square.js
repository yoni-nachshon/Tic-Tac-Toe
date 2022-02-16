import React from 'react';



const Square = ({ value, onClick, winner }) => (
	<button style={style(value,winner)} onClick={onClick} >
		{value}
	</button>
);
const style = (value,winner) => ({
	fontSize: "30px",
	cursor: "pointer",
	border: value === winner ? "2px solid #03a9f4" : "none",
	color: value === winner ? "#FFFFFF" : "#9E9E9E",
	background: value === winner ? "#03a9f4" : ""
});
export default Square;