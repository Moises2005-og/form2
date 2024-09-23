const primeiroNome = document.getElementById("primeiro_nome")
const ultimoNome = document.getElementById("ultimo_nome")
const email = document.getElementById("email")
const number = document.getElementById("telefone")
const message = document.getElementById("message")


let obj = []

const handleSubmit = addEventListener("submit", function(event) {
    event.preventDefault()

    const payload = {
        primeiro_nome: primeiroNome.value,
        ultimo_nome: ultimoNome.value,
        Email: email.value,
        phoneNumber: number.value,
        Message: message.value
    }

    obj.push(payload)

    this.localStorage.setItem("data", JSON.stringify(obj))
})