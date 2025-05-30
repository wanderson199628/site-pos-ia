
function validarFormulario() {
  const input = document.getElementById('arquivo');
  const mensagem = document.getElementById('mensagem');
  if (!input.files.length) {
    mensagem.textContent = "Por favor, selecione um arquivo.";
    mensagem.style.color = 'red';
    return false;
  } else {
    mensagem.textContent = "Arquivo enviado com sucesso! (Simulação)";
    mensagem.style.color = 'green';
    return false;
  }
}
