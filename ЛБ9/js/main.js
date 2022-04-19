paint_matrix(3)

function paint_matrix(countEquations) {
    let calculatorElem = document.querySelector(".calculator")
    let bracesElem = document.createElement("div")
    bracesElem.className = "braces"
    let createElem = document.createElement("div")
    createElem.className = "curly"
    bracesElem.append(createElem)
    calculatorElem.append(bracesElem)

    let curlyElem = document.querySelector(".curly")
    for (let i = 0; i < countEquations; ++i) {
        let newRow = document.createElement("span")
        newRow.className = "equation"
        newRow.innerHTML = `<input type="number" class="input-text x1" placeholder="1" maxlength="4">x<sub>1</sub>`
        for (let j = 1; j < countEquations; ++j) {
            newRow.innerHTML += ` +<input type="number" class="input-text x1" placeholder="1" maxlength="4">x<sub>${j + 1}</sub>`

        }
        newRow.innerHTML += ` = <input type="number" class="input-text s" placeholder="1" maxlength="4"><br>`
        curlyElem.append(newRow)
    }
}

let sel_form = document.forms.choice
sel_form.count.onchange = function choice() {
    let num = sel_form.count.value
    let delInput = document.querySelector(".braces")
    delInput.remove()
    paint_matrix(num)
}


document.getElementById("calc").onclick = function () {
    let spanElems = document.getElementsByClassName("equation")
    let matrix = []
    for (let i = 0; i < spanElems.length; ++i) {
        let span_input = spanElems[i].querySelectorAll("input")
        let temp = []
        for (let j = 0; j < span_input.length; ++j) {
            temp.push(Number(span_input[j].value))
        }
        matrix.push(temp)
    }
    console.log(matrix);
    let answer = calculate(matrix);

    let ans_area = document.querySelector(".output_answer_area")
    if (typeof answer !== 'undefined') {
        for (let i = 0; i < answer.length; ++i) {
            ans_area.innerHTML += `${answer[i]}; `
        }
    } else {
        ans_area.innerHTML = "Нет решений"
    }
}


document.getElementById("clear").onclick = function () {
    let inputElems = document.getElementsByClassName("input-text")
    for (let i = 0; i < inputElems.length; ++i) {
        inputElems[i].value = ""
    }
}