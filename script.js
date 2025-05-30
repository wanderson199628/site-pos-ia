// Script para simular envio do formulário de upload
document.getElementById('form-upload').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('mensagem').textContent = 'Tarefa enviada com sucesso (simulação).';
  this.reset();
});
