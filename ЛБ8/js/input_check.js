let formattedInputValue = ""

function getName(input_name) {
    return input_name.value.replace(/\w/gi, "")
}

function onNameInput(event) {


    let input = event.target,
        inputNameValue = getName(input),
        formatName = "";

    if (!inputNameValue) {
        return input.value = "";
    }

    if (event.data && /\w/gi.test(event.data)) {
        input.value = formattedInputValue;
    }

    formattedInputValue = inputNameValue;
}

let input = document.querySelector('input[name="name"]');
input.addEventListener("input", onNameInput);