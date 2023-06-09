window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollButton = document.querySelector(".scrollButton");
    if (window.innerWidth >= 480 && window.innerWidth <= 1199) {
        scrollButton.classList.remove("show"); // Удаляем класс .show, чтобы скрыть кнопку
    } else {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollButton.classList.add("show"); // Добавляем класс .show, чтобы показать кнопку
        } else {
            scrollButton.classList.remove("show"); // Удаляем класс .show, чтобы скрыть кнопку
        }
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// window.onscroll = function() {
//     scrollFunction();
// };

// function scrollFunction() {
//     const scrollButtons = document.getElementsByClassName("scrollButton");
//     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
//         for (let i = 0; i < scrollButtons.length; i++) {
//         scrollButtons[i].style.display = "block";
//         }
//     } else {
//         for (let i = 0; i < scrollButtons.length; i++) {
//         scrollButtons[i].style.display = "none";
//         }
//     }
// };

// function scrollToTop() {
//     document.body.scrollTop = 0; // Для Safari
//     document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
// };