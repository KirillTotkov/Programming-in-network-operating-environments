function get_column_free_members(matrix) {
    let B = [] // столбец свободных членов системы

    matrix.forEach(function (row) {
        B.push(row[[matrix.length]])
    })

    return B
}

function copy_matrix(matrix) {
    let result = []
    let n = matrix.length

    for (let i = 0; i < n; ++i) {
        let tmp = []
        for (let j = 0; j < n; ++j) {
            tmp.push(matrix[i][j])
        }
        result.push(tmp)
    }

    return result
}

function calculate(matrix) {
    let n = matrix.length
    let B = get_column_free_members(matrix)
    let main_matrix = copy_matrix(matrix)
    let main_det = get_determinant(main_matrix)

    if (main_det === 0) {
        return;
    }

    let result = []

    for (let i = 0; i < n; ++i) {
        let tmp = copy_matrix(main_matrix)
        for (let j = 0; j < n; ++j) {
            tmp[j][i] = B[j]
        }
        result.push((get_determinant(tmp) / main_det).toFixed(2))
    }

    return result
}