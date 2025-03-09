let slider = document.querySelector("#slider")
let button = document.querySelector("button")

let password = document.querySelector("#password")
let sizePassword = document.querySelector("#valor")

let containerPassword = document.querySelector("#container-password")

let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
let novaSenha = ''

sizePassword.innerHTML = slider.value

slider.oninput = function() {
    sizePassword.innerHTML = slider.value
}

function gerarSenha() {
    let senha = ''
    for(i = 0, n = caracteres.length; i < slider.value; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * n))
    }

    containerPassword.classList.remove("hide")
    password.innerHTML = senha
    novaSenha = senha

}

function copiarSenha() {
    navigator.clipboard.writeText(novaSenha)
    alert('Senha copiada com sucesso')
}
