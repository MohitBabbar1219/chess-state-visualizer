import React from 'react';
import {FaChessPawn, FaChessBishop, FaChessKing, FaChessKnight, FaChessQueen, FaChessRook} from 'react-icons/fa';

const Piece = (props) => {
  const nameIconMap = {
    pawn: <FaChessPawn color={props.color} className="chess-piece"/>,
    bishop: <FaChessBishop color={props.color} className="chess-piece"/>,
    king: <FaChessKing color={props.color} className="chess-piece"/>,
    knight: <FaChessKnight color={props.color} className="chess-piece"/>,
    queen: <FaChessQueen color={props.color} className="chess-piece"/>,
    rook: <FaChessRook color={props.color} className="chess-piece"/>
  };

  return nameIconMap[props.name];
};

export default Piece;