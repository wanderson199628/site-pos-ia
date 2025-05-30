
document.getElementById('form-tarefas').addEventListener('submit', function(e) {
  e.preventDefault();
  var arquivo = document.getElementById('arquivo').files[0];
  if (!arquivo) {
    alert('Por favor, selecione um arquivo para enviar.');
    return;
  }
  // Simulação do envio, pois não temos backend
  document.getElementById('status').textContent = 'Arquivo "' + arquivo.name + '" enviado com sucesso! (simulado)';
  this.reset();
});
