let ans_area = document.querySelector(".output_answer_area")

function calculation(a, b, c) {
    let d = b * b - 4 * a * c
    if (d < 0) {
        ans_area.innerHTML = "корней нет";
        return;
    }

    d = d ** (0.5);

    let result = []
    result[0] = (-b + d) / (2 * a)
    result[1] = (-b - d) / (2 * a);

    result = result.filter(function (x) {
        return x >= 0
    })
    if (result.length === 0) {
        ans_area.innerHTML = "корней нет";
        return;
    }

    result = result.map(function (x) {
        return Number((x ** 0.5).toFixed(2));
    })

    result.forEach(function (item) {
        result.push(item * (-1))
    })

    result = result.filter(function (item, pos) { // удаление дубликатов
        return result.indexOf(item) === pos;
    })

    return result.sort()
}

const inputs = document.querySelectorAll('input[type=number]');
Array.from(inputs).forEach(input => {
    const min = -999;
    const max = 999;

    input.addEventListener('input', (e) => {
        const value = +input.value;
        if (value > max) {
            input.value = max
        } else if (value < min) {
            input.value = min
        }
    })
})


document.getElementById("calc").onclick = function () {
    let a = document.querySelector("#a").value
    if (a === "") a = 1
    let b = document.querySelector("#b").value
    if (b === "") b = 1
    let c = document.querySelector("#c").value
    if (c === "") c = 1

    ans_area.innerHTML = ''
    let ans = calculation(a, b, c)
    if (typeof ans !== 'undefined') {
        for (let i = 0; i < ans.length; ++i) {
            ans_area.innerHTML += `${ans[i]}; `
        }
    }
}

document.getElementById("clear").onclick = function () {
    document.getElementById("a").value = ""
    document.getElementById("b").value = ""
    document.getElementById("c").value = ""
    ans_area.innerHTML = ""
}
