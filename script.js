const filePath = "folderlist.txt";
fetch(filePath)
  .then((response) => response.text())
  .then((content) => {
    // Разбиваем текст по переносам строк и считаем элементы
    const lines = content.split(/\r\n|\r|\n/);
    let maxLess = lines.length - 1;

    //Выводим количество строк при первом взаимодействии с полем input
    document.getElementById("lessCount").textContent = " " + maxLess;
  });

// Ограничение вводимых значений
const input = document.getElementById("pageName");
function difInput(input) {
  // Если введено ровно 0, меняем на 1
  if (input.value === "0") {
    input.value = "1";
  }
  // Если пользователь ввел 0 первым, а потом другие цифры,
  // например "05", убираем ведущий ноль
  if (input.value.length > 1 && input.value[0] === "0") {
    input.value = input.value.replace(/^0+/, "");
  }
}

// Слушаем событие ввода
input.addEventListener("input", async () => {
  const lineNum = parseInt(input.value);

  // Проверка на корректность числа
  if (isNaN(lineNum) || lineNum < 1) {
    return;
  }

  try {
    // 1. Загружаем файл по относительному пути
    const response = await fetch("folderlist.txt");
    if (!response.ok) throw new Error("Файл не найден");
    // Весь массив текста
    const text = await response.text();

    // 2. Разбиваем текст на строки
    const lines = text.split("\n");
    let maxLesson = lines.length - 1;

    // 3. Получаем строку (индексация в массиве начинается с 0)
    if (lineNum > lines.length - 1) {
      document.getElementById("pageName").value = lines.length - 1;
    }
  } catch (error) {
    document.getElementById("lessCount").textContent =
      "Ошибка: " + error.message;
  }
  plcHld();
});

function goToPage() {
  // 3. Получаем значение из input
  var name = document.getElementById("pageName").value;

  // Получаем список уроков из текстового файла
  const filePath = "folderlist.txt";
  fetch(filePath)
    .then((response) => response.text())
    .then((content) => {
      // Разбиваем текст по переносам строк и считаем элементы
      const fldlines = content.split(/\r\n|\r|\n/);

      if (name) {
        // 4. Формируем URL и переходим (например, page1.html)
        window.location.href = "lesson" + name + "/index.html";
        // Отправляем данные в дочерние окна
        let valPas = name;
        sessionStorage.setItem("sharedData", valPas);
        sessionStorage.setItem("sharedData1", fldlines[name - 1]); //
      } else {
        alert("Пожалуйста, введите имя страницы");
      }
    });
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
