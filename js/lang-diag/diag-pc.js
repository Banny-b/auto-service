const switchLanguage = (language) => {
    const russianButton = document.getElementById('russian');
    const ukrainianButton = document.getElementById('ukrainian');
    // Идентификаторы для элементов Diag-PC
    const diagPcTitle = document.getElementById('diag-pc__tit');
    const subDiagPcItem_1 = document.getElementById('subdiag-pc__item-1');
    const subDiagPcItem_2 = document.getElementById('subdiag-pc__item-2');
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
        // Тексты для элементов Diag-PC (рус)
        diagPcTitle.textContent = 'Компьютерная диагностика';
        subDiagPcItem_1.textContent = 'Компьютерная диагностика автомобиля';
        subDiagPcItem_2.textContent = 'Диагностика электроники';
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
        // Тексты для элементов Diag-PC (укр)
        diagPcTitle.textContent = 'Комп\'ютерна діагностика';
        subDiagPcItem_1.textContent = 'Комп\'ютерна діагностика автомобіля';
        subDiagPcItem_2.textContent = 'Діагностика електроніки';
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
