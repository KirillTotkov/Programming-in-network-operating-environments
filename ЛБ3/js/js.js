
print_table(9)

function print_table(num){
    let tableElem = document.querySelector('tbody')
    for (let i = 0; i < num; ++i) {
        let new_row = document.createElement('tr')
        new_row.innerHTML += `<td>${i + 1}</td>`

        for (let j = 1; j < num; ++j) {
            if (i === 0) {
                new_row.innerHTML += `<td>${j + 1}</td>`
            } else {
                new_row.innerHTML += `<td>${(i+1)*(j+1)}</td>`
            }
        }
        tableElem.appendChild(new_row)
    }
}


let sel_form = document.forms.choice
sel_form.count.onchange = function choice() {
    let num = sel_form.count.value
    let tableElem = document.querySelector('tbody')
    tableElem.innerHTML=''
    console.log(num);
    print_table(num);
}

/*
for (let i = 0; i < 8; ++i) {
    let boxElem=document.createElement('div')
    boxElem.className='box'
    tableElem.appendChild(boxElem)

    let value_cont = document.createElement("div")
    value_cont.className = "value_container"

    for (let denominator = 2; denominator < 10; ++denominator) {
        let res = `<p>${i + 2} x ${denominator} = ${(i + 2) * denominator}</p>`
        value_cont.innerHTML += res
    }
    boxElem.append(value_cont)
}

*/
