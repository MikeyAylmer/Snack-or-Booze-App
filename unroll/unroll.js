function unroll(squareArray) {
    const result = [];
    let top = 0,
        bottom = squareArray.length - 1,
        left = 0,
        right = squareArray[0].length - 1;

    while (top <= bottom && left <= right) {
        // Move from left to right
        for (let i = left; i <= right; i++) {
            result.push(squareArray[top][i]);
        }
        top++;

        // Move from top to bottom
        for (let i = top; i <= bottom; i++) {
            result.push(squareArray[i][right]);
        }
        right--;

        // Move from right to left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(squareArray[bottom][i]);
            }
            bottom--;
        }

        // Move from bottom to top
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(squareArray[i][left]);
            }
            left++;
        }
    }

    return result;
}

const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

const unrolledArray = unroll(square);
console.log(unrolledArray);



module.exports = unroll;
