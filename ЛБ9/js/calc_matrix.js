function calculate(matrix) {

    // let matrix = [[3, -2, 4, 21], [3, 4, -2, 9], [2, -1, -1, 10]]
    // let matrix = [[3, 2, -11], [-1, 5, 15]]

    let equally = []
    let main_matrix = matrix.map(function (val) {
        equally.push(val[matrix.length]);
        return val.slice(0, -1);
    });

    let main_det = Math.round(math.det(main_matrix))
    if (main_det === 0) {
        // return "Нет решений";
        return;
    }

    let column = []
    for (let i = 0; i < main_matrix.length; ++i) {
        column.push(i)
    }

    let result = []
    for (let i = 0; i < main_matrix.length; ++i) {
        let det_x = Math.round(math.det(math.subset(main_matrix, math.index(column, i), equally)))
        result.push(det_x / main_det)
    }

    result = result.filter(function (item, pos) {
        return result.indexOf(item) === pos
    })

    console.log(result);
    return result
}

