import { useState } from "react";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let updateBlue = () => {
    console.log(moves.blue);
    setMoves((prevVal) => {
      return { ...prevVal, blue: prevVal.blue + 1 };
    });
  };

  let updateYellow = () => {
    console.log(moves.yellow);
    setMoves((prevVal) => {
      return { ...prevVal, yellow: prevVal.yellow + 1 };
    });
  };

  let updateGreen = () => {
    console.log(moves.green);
    setMoves((prevVal) => {
      return { ...prevVal, green: prevVal.green + 1 };
    });
  };

  let updateRed = () => {
    console.log(moves.red);
    setMoves((prevVal) => {
      return { ...prevVal, red: prevVal.red + 1 };
      
    });
  };
  return (
    <div>
      <p>Gane Begins</p>
      <div className="board">
        <p>Blue moves = {moves.blue}</p>
        <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>
          +1
        </button>
        <p>Yellow moves = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green moves = {moves.green}</p>
        <button onClick={updateGreen} style={{ backgroundColor: "green" }}>+1</button>
        <p>Red moves = {moves.red}</p>
        <button onClick={updateRed} style={{ backgroundColor: "red" }}>+1</button>
      </div>
    </div>
  );
}
