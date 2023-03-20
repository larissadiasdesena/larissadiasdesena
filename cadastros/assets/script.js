
const links = document.querySelectorAll('a.link');
const section = document.querySelector('section');
const erro = document.getElementById('erro_selecao');



links.forEach(function (elem) {
    
    elem.addEventListener('click', function (event) {
        document.querySelector('section.visible').classList.remove('visible'); 
     
       
        // Adicionar classlist
        
        const elemento = document.querySelector('form' + event.target.getAttribute('href'));
        elemento.classList.add('visible');
    
       section.style.display = "none";
       erro.style.display = "block"

       

    });


});

