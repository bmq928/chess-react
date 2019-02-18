/**
 * e.x: range(3) => [0,1,2]
 * @param {Number} num 
 * @returns {Array}
 */
export function range(num) {
  return [...Array(num).keys(num)]
}