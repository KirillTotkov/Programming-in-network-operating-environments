let input = document.querySelector('input[name="name"]');

let tmp="";

function getName(input_name) {
    return input_name.value.trim().replace(/\w/gi, "")
}

function onNameInput(event) {
    let input = event.target,
        inputNameValue = getName(input),
        formatName = "";

    if (!inputNameValue) {
        return input.value = "";
    }

    if (event.data && /\w/gi.test(event.data)) {
        input.value = tmp;
    }

    tmp=inputNameValue;

    console.log("Name: ", tmp);
}

input.addEventListener("input", onNameInput);