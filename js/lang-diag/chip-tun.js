const switchLanguage = (language) => {
    const russianButton = document.getElementById('russian');
    const ukrainianButton = document.getElementById('ukrainian');
    // Идентификаторы для элементов Diag-Chip
    const diagChipTitle = document.getElementById('diag-chip__tit');
    const subDiagChipItem_1 = document.getElementById('subdiag-chip__item-1');
    const subDiagChipItem_2 = document.getElementById('subdiag-chip__item-2');
    // Идентификаторы для элементов подвала
    const basementContactTitle = document.getElementById('basement-title');
    const basementCity = document.getElementById('link-nav__city');
    const basementClockTitle = document.getElementById('text-info__label');
    const basementClockTime = document.getElementById('text-info__time');
    const basementFormTitle = document.getElementById('basement-form-title');
    const basementFormButton = document.getElementById('basement-form-button');
    // Идентификаторы для плейсхолдеров формы подвала
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const messageTextarea = document.getElementById('message');
    if (language === 'russian') {
        russianButton.classList.add('active');
        ukrainianButton.classList.remove('active');
        // Тексты для элементов Diag-Chip (рус)
        diagChipTitle.textContent = 'Настройка электроники';
        subDiagChipItem_1.textContent = 'Перепрограммирование электронных блоков (чип-тюнинг)';
        subDiagChipItem_2.textContent = 'Ремонт электронных блоков';
        // Тексты для элементов подвала (рус)
        basementContactTitle.textContent = 'Контакты';
        basementCity.textContent = 'г. Харьков';
        basementClockTitle.textContent = 'Время работы:';
        basementClockTime.textContent = 'c';
        basementFormTitle.textContent = 'Обратная связь';
        basementFormButton.textContent = 'Оставить заявку';
        // Тексты для плейсхолдеров формы подвала (рус)
        nameInput.placeholder = 'Ваше имя';
        phoneInput.placeholder = 'Ваш телефон';
        messageTextarea.placeholder = 'Введите текст...';
    } else if (language === 'ukrainian') {
        russianButton.classList.remove('active');
        ukrainianButton.classList.add('active');
        // Тексты для элементов Diag-Chip (укр)
        diagChipTitle.textContent = 'Налаштування електроніки';
        subDiagChipItem_1.textContent = 'Перепрограмування електронних блоків (чіп-тюнінг)';
        subDiagChipItem_2.textContent = 'Ремонт електронних блоків';
        // Тексты для элементов подвала (укр)
        basementContactTitle.textContent = 'Контакти';
        basementCity.textContent = 'м. Харків';
        basementClockTitle.textContent = 'Час роботы:';
        basementClockTime.textContent = 'з';
        basementFormTitle.textContent = 'Зворотній зв\'язок';
        basementFormButton.textContent = 'Залишити заявку';
        // Тексты для плейсхолдеров формы подвала (укр)
        nameInput.placeholder = 'Ваше ім\'я';
        phoneInput.placeholder = 'Ваш телефон';
        messageTextarea.placeholder = 'Введіть текст...';
    }
};
