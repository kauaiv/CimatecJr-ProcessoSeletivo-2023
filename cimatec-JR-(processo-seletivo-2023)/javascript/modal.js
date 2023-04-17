function openModal(modalId) {
  // Função para abrir o modal
  var modal = document.getElementById(modalId);
  // Obtém uma referência ao elemento de modal com o ID correspondente 
  // usando 'document.getElementById' e armazena em uma variável 'modal'.
  modal.showModal();
  // Chama a função 'showModal()' do elemento de modal HTML5 para 
  //abrir o modal na tela.
}

function closeModal(modalId) {
  // Função para fechar o modal
  var modal = document.getElementById(modalId);
  // Obtém uma referência ao elemento de modal com o ID correspondente 
  // usando 'document.getElementById' e armazena em uma variável 'modal'.
  modal.close();
  // Chama a função 'close()' do elemento de modal HTML5 para fechar o modal.
}




var modais = document.querySelectorAll('.dialogbox');
// Seleciona todos os elementos com a classe CSS '.dialogbox' e armazena em uma variável 'modais'.

modais.forEach(function(modal) {
  // Para cada elemento de modal na variável 'modais', adiciona um event listener de 'mouseover'.
  modal.addEventListener('mouseover', function() {
    document.getElementById('myBody').style.filter = 'blur(3px)';
    // Quando ocorre o evento 'mouseover', define o estilo de filtro 'blur(3px)' no elemento de ID 'myBody'.
  });

  // Adiciona um event listener de 'mouseout'.
  modal.addEventListener('mouseout', function() {
    document.getElementById('myBody').style.filter = 'none';
    // Quando ocorre o evento 'mouseout', remove o estilo de filtro do elemento de ID 'myBody', definindo-o como 'none'.
  });
});
