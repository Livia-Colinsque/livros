const imagemPrincipal = document.getElementById('imagem-principal');
const miniatura = document.querySelectorAll('miniatura');
miniatura.forEach(miniaturas=> {
  miniatura.addEventListener('click', function(){
const novaImage = this.getAttribute('data-image');
imagemPrincipal.prc = novaImage;
  });
});
