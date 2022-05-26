function sub_matrix(matrix, col, n) {
    let data = []

    for (let i = 1; i < n; ++i) {
        let tmp = []
        for (let j = 0; j < n; ++j) {
            if (j !== col) {
                tmp.push(matrix[i][j])
            }
        }
        data.push(tmp)
    }

    return data
}

function get_determinant(matrix) {
    let n = matrix.length
    // console.log(n);
    let determinant = 0;

    if (n === 1) {
        return matrix[0]
    } else if (n === 2) {
        return matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1];
    } else if (n > 2) {
        for (let i = 0; i < n; ++i) {
            determinant += matrix[0][i] * (i % 2 === 0 ? 1 : -1) * get_determinant(sub_matrix(matrix, i, n))
        }
    }

    return determinant
}