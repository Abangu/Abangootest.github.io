function goToPage() {
  // 3. Получаем значение из input
  var name = document.getElementById("pageName").value;

  if (name) {
    // 4. Формируем URL и переходим (например, page1.html)
    window.location.href = "lesson" + name + "/index.html";
  } else {
    alert("Пожалуйста, введите имя страницы");
  }
}
