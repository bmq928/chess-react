/**
 * e.x: range(3) => [0,1,2]
 * @param {Number} num 
 * @returns {Array}
 */
export function range(num) {
  return [...Array(num).keys(num)]
}


/**
 * fill the board
 * every null cell  => {}
 * @param {Array<Array>} defaultBoard 
 * @returns {Array<Array>}
 */
export function makeBoard(defaultBoard) {
  return defaultBoard.map(row => row.map(cell => cell || {}))
}

/**
 * from row-col-base to chess-base-coord
 * @param {{row, col}} 
 * 
 */
export function toChessCoord({row, col}) {
  const ROW_LIST = [8,7,6,5,4,3,2,1]
  const COL_LIST = ['a','b','c','d','e','f','g','h']

  return `${COL_LIST[col]}${ROW_LIST[row]}`
}