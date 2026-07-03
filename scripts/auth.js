async function handleLogin(email, senha) {
    try {
        const response = await fetch('http://localhost:8000/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email, senha: senha })
        });

        if (!response.ok) {
            throw new Error('Credenciais inválidas');
        }

        const data = await response.json();
        localStorage.setItem('authToken', data.access_token);
        

        window.location.href = 'form.html';

    } catch (error) {
        document.getElementById('error-message').textContent = error.message;
    }
}