const div = document.querySelector("#Botóndiv");
    
div.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Hola! Soy el div');

});

