const button = document.getElementById("botao")


const loading = () => {
    button.innerHTML = '<img src = "./imagens/Loading-PNG-Images.png" class = "loading">'
    
}

const removeLoading = () => {
    button.innerHTML = 'Enviar'
}

const clearForm = () => {
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('telefone').value = ''
    document.querySelectorAll('input[name="opcoes"]').forEach((radio) => {
        radio.checked = false
    })
    document.getElementById('mensagem-area').value = ''
}

const handleSubmit = (event) => {
    event.preventDefault()
    loading()

const nome = document.getElementById('nome').value
const email = document.getElementById('email').value
const telefone = document.getElementById('telefone').value
const opcoes = document.querySelector('input[name="opcoes"]:checked').value
const mensagem = document.getElementById('mensagem-area').value

    fetch('https://api.sheetmonkey.io/form/oBUYYAPh33KsxKXSsbr5jc',{

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: nome, email: email, telefone: telefone, assunto: opcoes, mensagem: mensagem} )
    }).then(() => {
        removeLoading()
        clearForm()
    })
}


