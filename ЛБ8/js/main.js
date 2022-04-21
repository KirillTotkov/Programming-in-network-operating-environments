
function printAnswer(applicantForm){
    applicantForm.style.display='none'

    let printBloc=document.createElement('div')
    printBloc.className='printBlock'

    let nameElem=document.querySelector('.answer_text')
    const name="Иван Иваннов"
    nameElem.innerHTML=`${name}, благодарим за заполнение анкеты`
}

function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()
    formNode.querySelector('.button-yellow').disabled = !isValid
}

function onSuccess(formNode) {
    alert('Ваша заявка отправлена!')
    formNode.classList.toggle('hidden')
}

function handleFormSubmit(event) {
    event.preventDefault()
    let formData = new FormData(applicantForm)
    console.log(Array.from(formData));

    onSuccess(applicantForm)

    printAnswer(applicantForm)
}


const applicantForm = document.getElementById('questionnaire')
applicantForm.addEventListener('submit', handleFormSubmit)
applicantForm.addEventListener('input', checkValidity)

