document.addEventListener("DOMContentLoaded", function () {
  var idioma = navigator.language || navigator.userLanguage;
  var lang = idioma.indexOf("es") === 0 ? "es" : "en";

  fetch(`../translations/${lang}.json`)
    .then(response => response.json())
    .then(data => {
      // Iterar sobre los elementos con el atributo data-i18n
      document.querySelectorAll("[data-i18n]").forEach(element => {
        var key = element.getAttribute("data-i18n");

        // Verificar si la clave existe en el JSON antes de asignar el texto
        if (data[key]) {
          element.textContent = data[key];
        }
      });
    })
    .catch(error => console.error("Error al cargar las traducciones:", error));
});
