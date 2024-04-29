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

//Mudar cor do nav-item de acordo com a página aberta

window.addEventListener("DOMContentLoaded", function selectNavItem() {
  previousPage = document.querySelector(".selected");
  if (previousPage) {
    previousPage.classList.remove("selected");
  }
  if (previousPage == "about2") {
    document.getElementById("cv").classList.remove("selected");
    document.getElementById("about").classList.remove("selected");
  }
  const body = document.querySelector("body");
  const currentPage = body.className;
  const element = document.getElementById(currentPage);
  element.classList.add("selected");
  if (currentPage == "about" || currentPage == "cv") {
    document.getElementById("about2").classList.add("selected");
  }
});

//form
// window.addEventListener("DOMContentLoaded", function () {
//   var form = document.getElementById("form-id");

//   document.getElementById("a-submit").addEventListener("click", function () {
//     form.submit();
//   });
// });
