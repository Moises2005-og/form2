const primeiroNome = document.getElementById("primeiro_nome")
const ultimoNome = document.getElementById("ultimo_nome")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

let obj = []

const handleSubmit = addEventListener("submit", function(event) {
    event.preventDefault()

    const payload = {
        primeiro_nome: primeiroNome.value,
        ultimo_nome: ultimoNome.value,
        Email: email.value,
        pass: password.value
    }

    obj.push(payload)

    localStorage.setItem("data", JSON.stringify(obj))
})

const obterDados = JSON.parse(localStorage.getItem("data"))

const busca = obterDados.map(item => item.Email)