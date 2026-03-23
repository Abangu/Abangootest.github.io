function goToPage() {
  // 3. Получаем значение из input
  var name = document.getElementById("pageName").value;

  if (name) {
    // 4. Формируем URL и переходим (например, page1.html)
    window.location.href = "lesson" + name + "/index.html";
    let valPas = name;
    sessionStorage.setItem("sharedData", valPas);
  } else {
    alert("Пожалуйста, введите имя страницы");
  }
}
function updateWidth() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.getElementById("width-display").innerText =
    "Ширина страницы: " + width + "px";
  document.getElementById("height-display").innerText =
    "Высота страницы: " + height + "px";
}

// Запускаем при загрузке и при изменении размера
window.addEventListener("resize", updateWidth);
updateWidth(); // Первоначальный вызов
