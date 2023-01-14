$(document).ready(function () {
    $('#telefone').mask('(00) 0 0000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome",
            },
            telefone: {
                required: "Por favor, insira um número de telefone ou celular",
            },
            email: {
                required: "Por favor, insira seu email",
                email: "Por favor, insira um email.",
            },
        },
    })

})