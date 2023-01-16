// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == null || matrix.length === 0) {
        return [];
    }
    let newMatrix = [];
    for (i = 0; i < matrix.length; i += 2) {
        newMatrix.push(matrix[i]);
        if (matrix[i + 1] === undefined) {
            break;
        } else {
            newMatrix.push(matrix[i + 1].reverse());
        }
    }
    let answer = [];
    for (a = 0; a < newMatrix.length; a++) {
        let arrMatrix = newMatrix[a];
        for (b = 0; b < arrMatrix.length; b++) {
            answer.push(arrMatrix[b]);
        }
    }
    return answer;
};
