document.addEventListener('DOMContentLoaded', function(){
    
    const token = localStorage.getItem('authToken');
    
    
    const links = document.querySelectorAll('.link-do-cabecalho');

    links.forEach(link => {
        
        if (link.getAttribute('href') === './login.html') {
            
            
            if (token) {
                link.setAttribute('href', './forms.html');
            }
        }
    })
})