import React from 'react';


const style = {
	border: "2px solid",
	fontSize: "30px",
	cursor: "pointer",
};

const Square = ({ value, onClick }) => (
	<button style={style} onClick={onClick}>
		{value}
	</button>
);
export default Square;