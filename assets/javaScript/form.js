document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('cadastro-form');
    const successDiv = document.getElementById('cadastro-success');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valido = true;
        let primeiroErro = '';

        // Limpa mensagens de erro
        form.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');

        // Validação simples dos campos obrigatórios
        form.querySelectorAll('input[required], select[required]').forEach(input => {
            if ((input.type === 'checkbox' && !input.checked) || (input.type !== 'checkbox' && !input.value.trim())) {
                valido = false;
                const errorSpan = input.parentElement.querySelector('.error-message');
                if (errorSpan) errorSpan.textContent = 'Campo obrigatório';
                if (!primeiroErro) primeiroErro = input.labels[0]?.innerText || input.name;
            }
        });

        // Validação de e-mail
        const email = form.email.value.trim();
        if (email && !/\S+@\S+\.\S+/.test(email)) {
            valido = false;
            form.email.parentElement.querySelector('.error-message').textContent = 'E-mail inválido';
            if (!primeiroErro) primeiroErro = 'E-mail';
        }

        // Validação de telefone (aceita formatos comuns)
        const telefone = form.telefone.value.trim();
        if (telefone && !/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(telefone)) {
            valido = false;
            form.telefone.parentElement.querySelector('.error-message').textContent = 'Telefone inválido';
            if (!primeiroErro) primeiroErro = 'Telefone';
        }

        // Validação de CEP
        const cep = form.cep.value.trim();
        if (cep && !/^\d{5}-?\d{3}$/.test(cep)) {
            valido = false;
            form.cep.parentElement.querySelector('.error-message').textContent = 'CEP inválido';
            if (!primeiroErro) primeiroErro = 'CEP';
        }

        if (valido) {
            form.reset();
            form.style.display = 'none';
            if (successDiv) {
                successDiv.style.display = 'block';
            }
        } else if (primeiroErro) {
            alert('Verifique o campo: ' + primeiroErro);
        }
    });

    form.addEventListener('reset', function () {
        form.querySelectorAll('.error-message').forEach(msg => msg.textContent = '');
        form.style.display = '';
        if (successDiv) successDiv.style.display = 'none';
    });
});