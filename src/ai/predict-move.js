/* eslint-disable max-len */
import {
  pawnEvalBlack,
  pawnEvalWhite,
  knightEval,
  bishopEvalWhite,
  bishopEvalBlack,
  rookEvalBlack,
  rookEvalWhite,
  evalQueen,
  kingEvalBlack,
  kingEvalWhite
} from './constant'

const DEPTH = 2
let positionCount = 0
// let game = new Chess()



/*The 'AI' part starts here */

export function predictMove(game) {
  if (game.game_over()) {
    alert('Game over')
  }

  positionCount = 0
  return minimaxRoot(DEPTH, game, true)
}

function minimaxRoot(depth, game, isMaximisingPlayer) {

  let newGameMoves = game.moves()
  let bestMove = -9999
  let bestMoveFound

  for (let i = 0; i < newGameMoves.length; i++) {
    let newGameMove = newGameMoves[i]
    game.move(newGameMove)
    let value = minimax(depth - 1, game, -10000, 10000, !isMaximisingPlayer)
    game.undo()
    if (value >= bestMove) {
      bestMove = value
      bestMoveFound = newGameMove
    }
  }
  return bestMoveFound
}

function minimax(depth, game, alpha, beta, isMaximisingPlayer) {
  positionCount++
  if (depth === 0) {
    return -evaluateBoard(game.board())
  }

  let newGameMoves = game.moves()

  if (isMaximisingPlayer) {
    let bestMove = -9999
    for (let i = 0; i < newGameMoves.length; i++) {
      game.move(newGameMoves[i])
      bestMove = Math.max(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer))
      game.undo()
      alpha = Math.max(alpha, bestMove)
      if (beta <= alpha) {
        return bestMove
      }
    }
    return bestMove
  } else {
    let bestMove = 9999
    for (let i = 0; i < newGameMoves.length; i++) {
      game.move(newGameMoves[i])
      bestMove = Math.min(bestMove, minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer))
      game.undo()
      beta = Math.min(beta, bestMove)
      if (beta <= alpha) {
        return bestMove
      }
    }
    return bestMove
  }
}

function evaluateBoard(board) {
  let totalEvaluation = 0
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      totalEvaluation = totalEvaluation + getPieceValue(board[i][j], i, j)
    }
  }
  return totalEvaluation
}

function getPieceValue (piece, x, y) {
  if (piece === null) {
    return 0
  }
  const getAbsoluteValue = function (piece, isWhite, x, y) {
    if (piece.type === 'p') {
      return 10 + (isWhite ? pawnEvalWhite[y][x] : pawnEvalBlack[y][x])
    } else if (piece.type === 'r') {
      return 50 + (isWhite ? rookEvalWhite[y][x] : rookEvalBlack[y][x])
    } else if (piece.type === 'n') {
      return 30 + knightEval[y][x]
    } else if (piece.type === 'b') {
      return 30 + (isWhite ? bishopEvalWhite[y][x] : bishopEvalBlack[y][x])
    } else if (piece.type === 'q') {
      return 90 + evalQueen[y][x]
    } else if (piece.type === 'k') {
      return 900 + (isWhite ? kingEvalWhite[y][x] : kingEvalBlack[y][x])
    }
    throw new Error('Unknown piece type: ' + piece.type)
  }

  const absoluteValue = getAbsoluteValue(piece, piece.color === 'w', x, y)
  return piece.color === 'w' ? absoluteValue : -absoluteValue
}


/* board visualization and games state handling */

// let onDragStart = function (source, piece, position, orientation) {
//   if (game.in_checkmate() === true || game.in_draw() === true ||
//     piece.search(/^b/) !== -1) {
//     return false
//   }
// }

// let makeBestMove = function () {
//   let bestMove = getBestMove(game)
//   game.ugly_move(bestMove)
//   board.position(game.fen())
//   renderMoveHistory(game.history())
//   if (game.game_over()) {
//     alert('Game over')
//   }
// }




// let renderMoveHistory = function (moves) {
//   let historyElement = $('#move-history').empty()
//   historyElement.empty()
//   for (let i = 0; i < moves.length; i = i + 2) {
//     historyElement.append('<span>' + moves[i] + ' ' + (moves[i + 1] ? moves[i + 1] : ' ') + '</span><br>')
//   }
//   historyElement.scrollTop(historyElement[0].scrollHeight)

// }

// let onDrop = function (source, target) {

//   let move = game.move({
//     from: source,
//     to: target,
//     promotion: 'q'
//   })

//   removeGreySquares()
//   if (move === null) {
//     return 'snapback'
//   }

//   renderMoveHistory(game.history())
//   window.setTimeout(makeBestMove, 250)
// }

// let onSnapEnd = function () {
//   board.position(game.fen())
// }

// let onMouseoverSquare = function (square, piece) {
//   let moves = game.moves({
//     square: square,
//     verbose: true
//   })

//   if (moves.length === 0) return

//   greySquare(square)

//   for (let i = 0; i < moves.length; i++) {
//     greySquare(moves[i].to)
//   }
// }

// let onMouseoutSquare = function (square, piece) {
//   removeGreySquares()
// }

// let removeGreySquares = function () {
//   $('#board .square-55d63').css('background', '')
// }

// let greySquare = function (square) {
//   let squareEl = $('#board .square-' + square)

//   let background = '#a9a9a9'
//   if (squareEl.hasClass('black-3c85d') === true) {
//     background = '#696969'
//   }

//   squareEl.css('background', background)
// }

// let cfg = {
//   draggable: true,
//   position: 'start',
//   onDragStart: onDragStart,
//   onDrop: onDrop,
//   onMouseoutSquare: onMouseoutSquare,
//   onMouseoverSquare: onMouseoverSquare,
//   onSnapEnd: onSnapEnd
// }
// board = ChessBoard('board', cfg)