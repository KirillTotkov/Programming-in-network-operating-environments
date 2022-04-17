let ans_area = document.querySelector(".output_answer_area")

function foo(a, b, c) {
    let d = (b * b - 4 * a * c) ** (0.5);
    console.log(`d = ${d}`);
    if (d < 0) {
        ans_area.innerHTML = "корней нет";
        return;
    }
    let ans = []
    ans[0] = (-b + d) / (2 * a)
    ans[1] = (-b - d) / (2 * a);
    ans = ans.filter(function (x) {
        return x >= 0
    })

    if (ans.length === 0) {
        ans_area.innerHTML = "корней нет";
        return;
    }
    ans = ans.map((x) => x ** (0.5))

    ans.forEach(function (item) {
        ans.push(item * (-1))
    })

    ans = ans.filter(function (item, pos) {
        return ans.indexOf(item) === pos
    })

    return ans
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
    if (a === "") {
        a = "1"
    }
    console.log(a);
    let b = document.querySelector("#b").value
    if (b === "") {
        b = "1"
    }
    let c = document.querySelector("#c").value
    if (c === "") {
        c = "1"
    }
    ans_area.innerHTML = ''
    let ans = foo(a, b, c)
    console.log(ans);
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
