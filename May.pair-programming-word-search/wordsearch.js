const transpose = function (matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let newMatrix = [];

  for (k = 0; k < columns; k++) {
    newMatrix[k] = Array(rows);
  }

  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < columns; k++) {
      newMatrix[k][i] = matrix[i][k];
    }
  }
  return newMatrix;
};

// wordSearch function
const wordSearch = (letters, word) => {
  if (letters.length === 0 || letters[0].length === 0) {
    return undefined;
  }
  if (word === "") {
    return false;
  }
  if (typeof word !== "string") {
    return undefined;
  }

  const horizontalJoin = letters.map((ls) => ls.join(""));
  const newMatrix = transpose(letters);
  const verticalJoin = newMatrix.map((ls) => ls.join(""));

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
