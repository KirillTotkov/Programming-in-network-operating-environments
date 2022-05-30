function check_radio_and_checkbox(elems) {
    let checked = false
    for (const elem of elems) {
        if (elem.checked) {
            checked = true
        }
    }
    return checked
}

function printAnswer(applicantForm, name) {
    applicantForm.style.display = 'none'

    let printBloc = document.createElement('div')
    printBloc.className = 'printBlock'
    printBloc.innerHTML = `<span>${name}, благодарим за заполнение анкеты</span>`
    document.body.prepend(printBloc)
}

function checkValidity(event) {
    let langElems = document.querySelectorAll('input[name="language"]')
    let genderElems = document.querySelectorAll('input[name="gender"]')

    let isValid = check_radio_and_checkbox(langElems) + check_radio_and_checkbox(genderElems) === 2

    document.querySelector('.button-yellow').disabled = !isValid
}

function onSuccess(formNode) {
    // alert('Ваша заявка отправлена!')
    formNode.classList.toggle('hidden')
}


function handleFormSubmit(event) {
    event.preventDefault()
    let formData = new FormData(applicantForm)
    let name = Array.from(formData)[0][1]
    // console.log(Array.from(formData));

    onSuccess(applicantForm)

    printAnswer(applicantForm, name)
}


const applicantForm = document.getElementById('questionnaire')
applicantForm.addEventListener('submit', handleFormSubmit)
applicantForm.addEventListener('input', checkValidity)

