import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard({ activePlayerSymbol, onSquareSelect }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSquareClick(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const gameBoardVal = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      gameBoardVal[rowIndex][colIndex] = activePlayerSymbol;
      return gameBoardVal;
    });

    onSquareSelect();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={`${rowIndex}${colIndex}`}>
                <button onClick={() => handleSquareClick(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

export default GameBoard;
