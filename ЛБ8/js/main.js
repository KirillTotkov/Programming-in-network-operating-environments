function printAnswer(applicantForm,name) {
    applicantForm.style.display = 'none'

    let printBloc = document.createElement('div')
    printBloc.className = 'printBlock'
    printBloc.innerHTML = `<span>${name}, благодарим за заполнение анкеты</span>`
    document.body.prepend(printBloc)
}

function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
    formNode.querySelector('.button-yellow').disabled = !isValid
}

function onSuccess(formNode) {
    // alert('Ваша заявка отправлена!')
    formNode.classList.toggle('hidden')
}

function handleFormSubmit(event) {
    event.preventDefault()
    let formData = new FormData(applicantForm)
    let name=Array.from(formData)[0][1]
    console.log(Array.from(formData));

    onSuccess(applicantForm)

    printAnswer(applicantForm,name)
}


const applicantForm = document.getElementById('questionnaire')
applicantForm.addEventListener('submit', handleFormSubmit)
applicantForm.addEventListener('input', checkValidity)

