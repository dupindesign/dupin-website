// Função para ajustar a altura dos textareas
function adjustTextareaHeight() {
  const textareas = document.querySelectorAll(".form-input");
  textareas.forEach((textarea) => {
    textarea.style.height = "auto"; // Resetar a altura para recalcular corretamente
    textarea.style.height = textarea.scrollHeight + "px"; // Ajustar a altura com base no conteúdo
  });
}

// Adicionar um event listener para o evento de input nos textareas
document.addEventListener("input", function (event) {
  const element = event.target;
  if (element && element.classList.contains("form-input")) {
    adjustTextareaHeight();
  }
});

// Ajustar a altura dos textareas quando a página carregar
window.addEventListener("load", adjustTextareaHeight);

//Ajustar a altura quando a página mudar de tamanho
window.addEventListener("resize", adjustTextareaHeight);

//form
window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form-id");

  document.getElementById("a-submit").addEventListener("click", function () {
    form.submit();
  });
});
