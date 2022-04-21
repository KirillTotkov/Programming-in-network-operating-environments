let tableElem = document.querySelector('.table')

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

