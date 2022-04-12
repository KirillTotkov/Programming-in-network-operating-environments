let box_sl = document.querySelectorAll('.box')

for (let i = 0; i < box_sl.length; ++i) {
    let value_cont = document.createElement("div")
    value_cont.className = "value_container"

    for (let denominator = 2; denominator < 10; ++denominator) {
        let res = `<p>${i + 2} x ${denominator} = ${(i + 2) * denominator}</p>`
        value_cont.innerHTML += res
    }
    box_sl[i].appendChild(value_cont)
}

