// ЗАГРУЗКА И ОПРЕДЕЛЕНИЕ КОЛИЧЕСТВА СТРОК ТЕКСТОВОГО ФАЙЛА И ПОЛУЧЕНИЕ ПЕРВОЙ СТРОКИ
const input = document.getElementById("myInput");
const myInput = parseInt(document.getElementById("myInput").value) - 1;
const button = document.getElementById("playBtn");

const display = document.getElementById("output");
const display1 = document.getElementById("myHeader");

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

const filePath = "video/example1.txt";
fetch(filePath)
  .then((response) => response.text())
  .then((content) => {
    // Разбиваем текст по переносам строк и считаем элементы
    const lines = content.split(/\r\n|\r|\n/);
    let maxVal = lines.length;

    document.getElementById("myInput").value = 1;
    document.getElementById("lineCount").textContent = " " + maxVal;
    display.textContent = 1; // Строка: 1
    display1.textContent = lines[0];
    document.getElementById("outtest").innerText = filePath;
    document.getElementById("output1").textContent =
      "video/" + input.value + ".webm";
  });

// ПОЛУЧЕНИЕ ЗНАЧЕНИЯ СТРОКИ ТЕКСТОВОГО ФАЙЛа
// Задаём нижние границы по нулю
function readLineInput(input) {
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
    display.textContent = 1;
    return;
  }

  try {
    // 1. Загружаем файл по относительному пути
    const response = await fetch("video/example1.txt");
    if (!response.ok) throw new Error("Файл не найден");
    // Весь массив текста
    const text = await response.text();

    // 2. Разбиваем текст на строки
    const lines = text.split("\n");
    let maxValue = lines.length;

    //Выводим количество строк при первом взаимодействии с полем input
    document.getElementById("lineCount").textContent = " " + maxValue;
    // 3. Получаем строку (индексация в массиве начинается с 0)
    if (lineNum <= lines.length) {
      display.textContent = lineNum;
      display1.textContent = lines[lineNum - 1];
    } else {
      display.textContent = maxValue;
      display1.textContent = lines[maxValue - 1];
      document.getElementById("myInput").value = lines.length;
    }
    document.getElementById("output1").textContent =
      "video/" + input.value + ".webm";
  } catch (error) {
    display.textContent = "Ошибка: " + error.message;
  }
});

// ПЕРВАЯ КНОПКА
function readLineFirstButton() {
  const FfilePath = "video/example1.txt";
  fetch(FfilePath)
    .then((response) => response.text())
    .then((content) => {
      // Разбиваем текст по переносам строк и считаем элементы
      const Flines = content.split(/\r\n|\r|\n/);
      let FmaxVal = Flines.length;

      document.getElementById("myInput").value = 1;
      document.getElementById("lineCount").textContent = " " + FmaxVal;
      display.textContent = 1;
      display1.textContent = Flines[0];
      document.getElementById("outtest").innerText = FfilePath;
      document.getElementById("output1").textContent =
        "video/" + input.value + ".webm";
    });
}

// НАЗАД КНОПКА
function readLinePrevButton() {
  const FfilePath = "video/example1.txt";
  fetch(FfilePath)
    .then((response) => response.text())
    .then((content) => {
      // Разбиваем текст по переносам строк и считаем элементы
      const Flines = content.split(/\r\n|\r|\n/);
      let FmaxVal = Flines.length;
      let myInput = parseInt(document.getElementById("myInput").value) - 1;
      if (myInput < 1) myInput = FmaxVal;
      document.getElementById("myInput").value = myInput;
      document.getElementById("lineCount").textContent = " " + FmaxVal; // Количество строк:
      display.textContent = myInput;
      display1.textContent = Flines[myInput - 1];
      document.getElementById("outtest").innerText = FfilePath;
      document.getElementById("output1").textContent =
        "video/" + input.value + ".webm";
    });
}

// ПРОИЗВОЛЬНО КНОПКА

function readLineRandButton() {
  const FfilePath = "video/example1.txt";
  fetch(FfilePath)
    .then((response) => response.text())
    .then((content) => {
      // Разбиваем текст по переносам строк и считаем элементы
      const Flines = content.split(/\r\n|\r|\n/);
      FmaxVal = Flines.length;
      // Math.random() дает 0..1, масштабируем [2]
      const randomNumber = Math.floor(Math.random() * FmaxVal) + 1;
      document.getElementById("myInput").value = randomNumber;
      document.getElementById("lineCount").textContent = " " + FmaxVal;
      display.textContent = randomNumber;
      display1.textContent = Flines[randomNumber - 1];
      document.getElementById("outtest").innerText = FfilePath;
      document.getElementById("output1").textContent =
        "video/" + input.value + ".webm";
    });
}

// ВПЕРЁД КНОПКА
function readLineButton() {
  const FfilePath = "video/example1.txt";
  fetch(FfilePath)
    .then((response) => response.text())
    .then((content) => {
      // Разбиваем текст по переносам строк и считаем элементы
      const Flines = content.split(/\r\n|\r|\n/);
      let FmaxVal = Flines.length;
      let myInput = parseInt(document.getElementById("myInput").value) + 1;
      if (myInput > FmaxVal) myInput = 1;
      document.getElementById("myInput").value = myInput;
      document.getElementById("lineCount").textContent = " " + FmaxVal; // Количество строк:
      display.textContent = myInput;
      display1.textContent = Flines[myInput - 1];
      document.getElementById("outtest").innerText = FfilePath;
      document.getElementById("output1").textContent =
        "video/" + input.value + ".webm";
    });
}

// ПОСЛЕДНЯЯ КНОПКА
function readLineLastButton() {
  const FfilePath = "video/example1.txt";
  fetch(FfilePath)
    .then((response) => response.text())
    .then((content) => {
      // Разбиваем текст по переносам строк и считаем элементы
      const Flines = content.split(/\r\n|\r|\n/);
      let FmaxVal = Flines.length;

      document.getElementById("myInput").value = FmaxVal;
      document.getElementById("lineCount").textContent = " " + FmaxVal;
      display.textContent = FmaxVal;
      display1.textContent = Flines[FmaxVal - 1];
      document.getElementById("outtest").innerText = FfilePath;
      document.getElementById("output1").textContent =
        "video/" + input.value + ".webm";
    });
}

button.addEventListener("click", function () {
  // 3. Записываем значение в переменную
  let inputValue = input.value;

  const playlist = "video/" + inputValue + ".webm";
  // Загружаем переменную с именем файла в videoPlayer.
  document.getElementById("myVideo").value = playlist;
  let videoPlayer = document.getElementById("myVideo");
  videoPlayer.src = document.getElementById("myVideo").value;
  videoPlayer.play(); // Метод .play() запускает воспроизведение [2]
});

function playVideo() {}
