document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth');

    authForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('senha').value;

        const botaoClicado = event.submitter.id;

        // Define a URL base do seu FastAPI
        let url = 'http://localhost:8000/auth/';
        let mensagemErroPadrao = 'Credenciais inválidas';
        let headers = { 'Accept': 'application/json' }
        let request_body;

        // Se o botão clicado foi o de registrar, muda o endpoint
        if (botaoClicado === 'create_acc') {
            url = 'http://localhost:8000/users'; // Ou a rota que definiu no FastAPI
            mensagemErroPadrao = 'Erro ao criar conta. Verifique os dados.';
            headers['Content-Type'] = 'application/json'
            request_body = JSON.stringify({ email: email, password: password })
        } else {
            headers['Content-Type'] = 'x-form-www-urlencoded'
            const params = new URLSearchParams();
            params.append('username', email);
            params.append('password', password);
            request_body = params;
        }

        // Executa a requisição dinamicamente
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: request_body
            });

            if (!response.ok) {
                throw new Error(mensagemErroPadrao);
            }

            const data = await response.json();

            // Armazena o token (comum tanto para login quanto para auto-login após cadastro)
            if (data.access_token) {
                localStorage.setItem('authToken', data.access_token);
            }

            // Redireciona o usuário
            window.location.href = 'forms.html';

        } catch (error) {
            document.getElementById('error-message').textContent = error.message;
        }
    });
});

