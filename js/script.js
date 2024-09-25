const handleCreateAccount = addEventListener("submit", function(event) {
    event.preventDefault()

    const primeiroNome = document.getElementById("primeiro_nome")
    const ultimoNome = document.getElementById("ultimo_nome")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const confirmPassword = document.getElementById("ConfirmPassword")
    const obterDados = JSON.parse(localStorage.getItem("data")) || []

    let obj = []

    const payload = {
        primeiro_nome: primeiroNome.value,
        ultimo_nome: ultimoNome.value,
        Email: email.value,
        pass: password.value
    }


    const verificarEmailExistente = obterDados.map((item) => {
        if(payload.Email === item.Email) {
            alert("Email existente")
            return 
        } 
        this.alert("passou")
    })

    if(password.value !== confirmPassword.value) {
        alert("Senha diferente")
        return
    }

    primeiroNome.value = ""
    ultimoNome.value = ""
    email.value = ""
    password.value = ""
    confirmPassword.value = ""

    obj.push(payload)

    localStorage.setItem("data", JSON.stringify(obj))

})

const handleLogin = addEventListener("submit", function(event) {
    event.preventDefault()

    const emailLogin = document.getElementById("emailLogin")
    const passwordLogin = document.getElementById("passwordLogin")
    
    const obterDados = JSON.parse(localStorage.getItem("data")) || []
    

    const payload = {
        passLogin: passwordLogin.value,
        EmailLogin: emailLogin.value 
    }

    const data = obterDados.map((item) => {
        console.log(payload)

        if(item.pass == payload.passLogin && item.Email == payload.EmailLogin) {
            console.log("Logou!")
            this.setTimeout(function() {
                window.location.href = "index.html"
            }, 2000)
            return
        } 
        console.log("Não logou!")

        console.log("Senha incorrecta")
    })

    // console.log(data);
    
    // const verificarSenha = obterDados.filter(item => item.pass === payload.passLogin && item.Email === payload.EmailLogin)

    // if (verificarSenha) {
    //     console.log("Passou")
    // }
})