// Получаем ссылки на элементы модального окна
const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

// Добавляем обработчик события на кнопку открытия модального окна
openModalBtn.addEventListener("click", openModal);

// Добавляем обработчик события на кнопку закрытия модального окна
closeModalBtn.addEventListener("click", closeModal);

// Функция для открытия модального окна
function openModal() {
    modal.classList.remove("is-hidden");
}

// Функция для закрытия модального окна
function closeModal() {
    modal.classList.add("is-hidden");
}
