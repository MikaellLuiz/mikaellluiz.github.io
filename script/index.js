//esconder elementos da pagina
window.addEventListener('wheel', function() {
  var sections = document.querySelectorAll('#about, #experiences, #projects, #contact, footer');
  var homeSection = document.querySelector('#home');
  if (homeSection) {
    sections.forEach(function(section) {
      section.style.display = 'flex'; 
    });
  }
});

function moveAbout(){
  var sections = document.querySelectorAll('#about, #experiences, #projects, #contact, footer');
  var homeSection = document.querySelector('#home');
  if (homeSection) {
    sections.forEach(function(section) {
      section.style.display = 'flex'; 
    });
  };

}

//animação da seção experiencias
const observer = new IntersectionObserver(entries => { 
  Array.from(entries).forEach( entry => {
    if(entry.intersectionRatio >= 1){
        entry.target.classList.add('animate-experience-off')
      }
  })
  
}, {
  threshold: [0, .25, 1]
})

Array.from(document.querySelectorAll('.animate-experience')).forEach(element =>{
  observer.observe(element)
})
/*
//Copiar para area de transferência
document.addEventListener('DOMContentLoaded', function() {
  let buttons = document.getElementsByClassName('bt_copy');
  Array.from(buttons).forEach(function(clipbord){
    clipbord.addEventListener('click', function(){
      let text = clipbord.getAttribute('data_texto');

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
          .then(function() {
            console.log('Texto copiado para área de transferência: ' + text);
          })
          .catch(function(err) {
            let error_message = 'Erro ao copiar o texto: ' + err;
            clipbord.nextElementSibling.textContent = error_message;
            console.error(error_message);
          });
      } else {
        console.error('A API Clipboard não é suportada neste navegador.');
      }
    });
  });
});*/
