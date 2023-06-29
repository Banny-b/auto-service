// * Анимация печати текста

// ToDo: Печать текста 1 раз, повторно только при смене языка страницы (v1)
const typingText = document.getElementById("hero-text");
let index = 0;
let text = ""; // Переменная для хранения текста в соответствующем языке

function type() {
    if (index < text.length) {
    typingText.textContent = text.substr(0, index + 1);
    index++;
    setTimeout(type, 200);
    }
};

function printText(language) {
const russianButton = document.getElementById("russian");
const ukrainianButton = document.getElementById("ukrainian");

    if (language === "russian") {
    text = "Компьютерная диагностика, ремонт электрооборудования";
    russianButton.classList.add("active");
    ukrainianButton.classList.remove("active");
    } else if (language === "ukrainian") {
        text = "Ком'ютерна діагностика, ремонт електроустаткування";
        russianButton.classList.remove("active");
        ukrainianButton.classList.add("active");
    }

    // Сбрасываем печать и запускаем её заново при смене языка
    index = 0;
    clearTimeout(); // Очищаем таймаут перед запуском печати
    type(); // Запускаем печать
};

function startTyping() {
const russianButton = document.getElementById("russian");
const ukrainianButton = document.getElementById("ukrainian");

russianButton.addEventListener("click", function () {
printText("russian");
});

ukrainianButton.addEventListener("click", function () {
printText("ukrainian");
});

printText("russian"); // Печатаем текст на русском языке при загрузке страницы
};

startTyping();



// ToDo: Бесконечно с задержкой между печатями 10 секунд (v2)
// const typingText = document.getElementById("hero-text");
// let index = 0;
// let text = ""; // Переменная для хранения текста в соответствующем языке

// function type() {
//     if (index < text.length) {
//         typingText.textContent = text.substr(0, index+1);
//         index++;
//         setTimeout(type, 200);
//     } else {
//         setTimeout(startTyping, 10000); // Задержка в 10 секунд перед следующим запуском
//     }
// };

// function printText(language) {
//     const russianButton = document.getElementById("russian");
//     const ukrainianButton = document.getElementById("ukrainian");

//     if (language === "russian") {
//         text = "Компьютерная диагностика, ремонт электрооборудования";
//         russianButton.classList.add("active");
//         ukrainianButton.classList.remove("active");
//     } else if (language === "ukrainian") {
//         text = "Комп'ютерна діагностика, ремонт електроустаткування";
//         russianButton.classList.remove("active");
//         ukrainianButton.classList.add("active");
//     }

//     // Сбрасываем печать и запускаем её заново при смене языка
//     index = 0;
//     type();
// };

// function startTyping() {
//     const russianButton = document.getElementById("russian");
//     const ukrainianButton = document.getElementById("ukrainian");

//     if (russianButton.classList.contains("active")) {
//         printText("russian");
//     } else if (ukrainianButton.classList.contains("active")) {
//         printText("ukrainian");
//     }
// };

// startTyping();
