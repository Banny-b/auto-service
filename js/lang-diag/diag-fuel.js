const switchLanguage = (language) => {
    const russianButton = document.getElementById('russian');
    const ukrainianButton = document.getElementById('ukrainian');
    // Идентификаторы для элементов Diag-Fuel
    const diagFuelTitle = document.getElementById('diag-fuel__tit');
    const subDiagFuelItem_1 = document.getElementById('subdiag-fuel__item-1');
    const subDiagFuelItem_2 = document.getElementById('subdiag-fuel__item-2');
    // Идентификаторы для элементов подвала
    const basementContactTitle = document.getElementById('basement-title');
    const basementCity = document.getElementById('link-nav__city');
    const basementClockTitle = document.getElementById('text-info__label');
    const basementFormTitle = document.getElementById('basement-form-title');
    const basementFormButton = document.getElementById('basement-form-button');
    // Идентификаторы для плейсхолдеров формы подвала
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const messageTextarea = document.getElementById('message');
    if (language === 'russian') {
        russianButton.classList.add('active');
        ukrainianButton.classList.remove('active');
        // Тексты для элементов Diag-Fuel (рус)
        diagFuelTitle.textContent = 'Диагностика системы впрыска';
        subDiagFuelItem_1.textContent = 'Диагностика топливной системы';
        subDiagFuelItem_2.textContent = 'Чистка инжектора';
        // Тексты для элементов подвала (рус)
        basementContactTitle.textContent = 'Контакты';
        basementCity.textContent = 'г. Харьков';
        basementClockTitle.textContent = 'Время работы:';
        basementFormTitle.textContent = 'Обратная связь';
        basementFormButton.textContent = 'Оставить заявку';
        // Тексты для плейсхолдеров формы подвала (рус)
        nameInput.placeholder = 'Ваше имя';
        phoneInput.placeholder = 'Ваш телефон';
        messageTextarea.placeholder = 'Введите текст...';
    } else if (language === 'ukrainian') {
        russianButton.classList.remove('active');
        ukrainianButton.classList.add('active');
        // Тексты для элементов Diag-Fuel (укр)
        diagFuelTitle.textContent = 'Діагностика системи впорскування';
        subDiagFuelItem_1.textContent = 'Діагностика паливної системи';
        subDiagFuelItem_2.textContent = 'Чищення інжектора';
        // Тексты для элементов подвала (укр)
        basementContactTitle.textContent = 'Контакти';
        basementCity.textContent = 'м. Харків';
        basementClockTitle.textContent = 'Час роботы:';
        basementFormTitle.textContent = 'Зворотній зв\'язок';
        basementFormButton.textContent = 'Залишити заявку';
        // Тексты для плейсхолдеров формы подвала (укр)
        nameInput.placeholder = 'Ваше ім\'я';
        phoneInput.placeholder = 'Ваш телефон';
        messageTextarea.placeholder = 'Введіть текст...';
    }
};
