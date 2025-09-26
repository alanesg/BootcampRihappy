/*função para abrir a aba de projetos*/
document.querySelector('.dropdown-toggle').addEventListener('click', function(event) {
  event.preventDefault();
  var dropdownMenu = document.querySelector('.dropdown-menu');
  
  dropdownMenu.classList.toggle('show');

  this.classList.toggle('active');
});