const transpose = (matrix) => {
    const newMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
        const newArray = [];
        for (let j = 0; j < matrix.length; j++) {
            newArray.push(matrix[j][i]);
        }
        newMatrix.push(newArray);
    }
    return newMatrix;
}

const wordSearch = (letters, word) => {
    if (word === "") {
        return false;
    }
    if (letters.length === 0 || letters[0].length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.toUpperCase().includes(word.toUpperCase())) {
            return true;
        }
    }
    const newMatrix = transpose(letters);
    const verticalJoin = newMatrix.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.toUpperCase().includes(word.toUpperCase())) {
            return true;
        }
    }
    return false;
}

module.exports = wordSearch