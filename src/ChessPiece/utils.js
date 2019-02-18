import React from 'react'

import pngBlackBishop from './sprites/blackBishop.png'
import pngBlackKing from './sprites/blackKing.png'
import pngBlackKnight from './sprites/blackKnight.png'
import pngBlackPawn from './sprites/blackPawn.png'
import pngBlackQueen from './sprites/blackQueen.png'
import pngBlackRook from './sprites/blackRook.png'
import pngWhiteBishop from './sprites/whiteBishop.png'
import pngWhiteKing from './sprites/whiteKing.png'
import pngWhiteKnight from './sprites/whiteKnight.png'
import pngWhitePawn from './sprites/whitePawn.png'
import pngWhiteQueen from './sprites/whiteQueen.png'
import pngWhiteRook from './sprites/whiteRook.png'
import {
  BLACK, WHITE,
  BISHOP, KING, KNIGHT, PAWN, QUEEN, ROOK
} from '../constants'


/**
 * get the img for the chess piece
 * @param {String} name 
 * @param {String} color 
 * @returns {JSX.Element}
 */
export function getPieceImg(name, color) {

  const piece = `${color}${name}`
  
  switch (piece) {
    case `${BLACK}${BISHOP}`: return <img src={pngBlackBishop} alt={piece} />
    case `${BLACK}${KING}`: return <img src={pngBlackKing} alt={piece} />
    case `${BLACK}${KNIGHT}`: return <img src={pngBlackKnight} alt={piece} />
    case `${BLACK}${PAWN}`: return <img src={pngBlackPawn} alt={piece} />
    case `${BLACK}${QUEEN}`: return <img src={pngBlackQueen} alt={piece} />
    case `${BLACK}${ROOK}`: return <img src={pngBlackRook} alt={piece} />
    case `${WHITE}${BISHOP}`: return <img src={pngWhiteBishop} alt={piece} />
    case `${WHITE}${KING}`: return <img src={pngWhiteKing} alt={piece} />
    case `${WHITE}${KNIGHT}`: return <img src={pngWhiteKnight} alt={piece} />
    case `${WHITE}${PAWN}`: return <img src={pngWhitePawn} alt={piece} />
    case `${WHITE}${QUEEN}`: return <img src={pngWhiteQueen} alt={piece} />
    case `${WHITE}${ROOK}`: return <img src={pngWhiteRook} alt={piece} />

    default:
      throw new Error('cannot found this chess piece')

  }
}

