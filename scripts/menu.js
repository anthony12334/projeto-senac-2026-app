 
 
 
const toggleButton = document.querySelector('#container header .toggle');

const headerElement = document.querySelector('#container header')

toggleButton.addEventListener('click', function() {
    headerElement.classList.toggle('active');
})