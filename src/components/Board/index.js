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
  let xIndex = 0;
  let yIndex = 0;
  return <div className="chess-board mx-auto">
    {
      [...Array(64).keys()].map((index) => {
        const piece = positionPieceMap[index];
        if ((index) % 8 === 0) {
          const temp = chessBackground[0];
          chessBackground[0] = chessBackground[1];
          chessBackground[1] = temp;
          xIndex = 0;
          yIndex += 1;
        }
        xIndex += 1;
        return <div style={chessBackground[index % 2]}>
          <div className="position-relative">
            <p className="font-weight-bold">{`${xIndex - 1},${yIndex - 1}`}</p>
            {piece ?
              <Piece name={piece.name} color={piece.set}/> : null}
          </div>
        </div>
      })
    }
  </div>;
};

export default Board;