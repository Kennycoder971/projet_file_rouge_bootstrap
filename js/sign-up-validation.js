const form = document.querySelector('form')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const passwordInput2 = document.querySelector('#password2')

const displayMsg = ({ input, regex, errorMsg }) => {
    const errorParagraph = input.parentElement.querySelector('.error-msg')
    if (!regex.test(input.value)) {
        errorParagraph.textContent = errorMsg
        errorParagraph.style.display = 'block'
        return false
    }
    return true
}

const confirmPasword = () => {
    const errorParagraph = passwordInput.parentElement.querySelector('.error-msg')
    if (passwordInput2.value !== passwordInput.value) {
        errorParagraph.textContent = 'Les mots de passe ne sont pas les mêmes.'
        return false
    }
    return true
}
const emailValidation = {
    input: emailInput,
    regex: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
    errorMsg: 'Veillez rentrer un email valide.'
}

const passwordValidation = {
    input: passwordInput,
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
    errorMsg: 'Veuillez rentrer un mot de passe correcte.'
}


form.addEventListener('submit', (e) => {

    const resultEmail = displayMsg(emailValidation)
    const resultPassword = displayMsg(passwordValidation)
    const passwordEquals = confirmPasword()
    const inputsAreValid = resultEmail && resultPassword && passwordEquals

    if (!inputsAreValid) {

        e.preventDefault()
    }
})