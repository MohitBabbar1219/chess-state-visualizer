import React from 'react';
import Piece from "../Piece";

const Board = (props) => {
  const chessBackground = [
    {backgroundColor: '#744A32'},
    {backgroundColor: '#DBB187'},
  ];

  const positionPieceMap = {};
  props.gameState.forEach(piece => positionPieceMap[(piece.position.y * 8) + piece.position.x] = piece);
  console.log(positionPieceMap);

  return <div className="chess-board mx-auto">
    {
      [...Array(64).keys()].map((index) => {
        const piece = positionPieceMap[index];
        if ((index) % 8 === 0) {
          const temp = chessBackground[0];
          chessBackground[0] = chessBackground[1];
          chessBackground[1] = temp;
        }
        return <div style={chessBackground[index % 2]}>
          <div className="position-relative">
            {piece ? <Piece name={piece.name} color={piece.set} /> : null}
          </div>
        </div>
      })
    }
  </div>;
};

export default Board;