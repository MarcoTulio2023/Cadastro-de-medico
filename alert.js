document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('medicoForm');
    const successAlert = document.getElementById('successAlert');
    const errorAlert = document.getElementById('errorAlert');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const crm = document.getElementById('crm').value;
        const especializacao = document.getElementById('especializacao').value;

        // Esconde ambos os alertas ao enviar o formulário
        successAlert.style.display = 'none';
        errorAlert.style.display = 'none';

        if (!nome ) {
            errorAlert.style.display = 'block';
            // Remove o alerta de erro após 3 segundos
            setTimeout(() => {
                errorAlert.style.display = 'none';
            }, 3000);
            return;
        }

        else if (!email ) {
            errorAlert.style.display = 'block';
            // Remove o alerta de erro após 3 segundos
            setTimeout(() => {
                errorAlert.style.display = 'none';
            }, 3000);
            return;
        }

        else if ( !crm ) {
            errorAlert.style.display = 'block';
            // Remove o alerta de erro após 3 segundos
            setTimeout(() => {
                errorAlert.style.display = 'none';
            }, 3000);
            return;
        }

        else if ( !especializacao) {
            errorAlert.style.display = 'block';
            // Remove o alerta de erro após 3 segundos
            setTimeout(() => {
                errorAlert.style.display = 'none';
            }, 3000);
            return;
        }

        // Se todos os campos foram preenchidos, limpa o formulário e exibe mensagem de sucesso
        form.reset();
        successAlert.style.display = 'block';

        // Remove o alerta de sucesso após 3 segundos
        setTimeout(() => {
            successAlert.style.display = 'none';
        }, 3000);
    });
});
