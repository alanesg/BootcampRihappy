/*função para abrir a aba de projetos*/
document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
  event.preventDefault();

  var dropdownMenu = document.querySelector('.dropdown-menu'); //pega o dropdown menu
  var caret = this.querySelector('.caret'); //pega a setinha do dropdown

  dropdownMenu.classList.toggle('show');

  this.classList.toggle('active'); //aba de dropdown ativada

  caret.classList.toggle('rotate'); //rotação da setinha
});







