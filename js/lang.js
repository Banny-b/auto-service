// ! Нужна доработка!


// ToDo: Перекючение языка
const switchLanguage = (language) => {
  const russianButton = document.getElementById('russian');
  const ukrainianButton = document.getElementById('ukrainian');
  // Идентификаторы для элементов страницы Hero
  const heroTitle = document.getElementById('hero-title');
  const heroText = document.getElementById('hero-text');
  const contactButton = document.getElementById('contact-button');
  // Идентификаторы для элементов диагностики
  const diagnosticText1 = document.getElementById('diag-1');
  const diagnosticText2 = document.getElementById('diag-2');
  const diagnosticText3 = document.getElementById('diag-3');
  const diagnosticText4 = document.getElementById('diag-4');
  const diagnosticText5 = document.getElementById('diag-5');
  const diagnosticText6 = document.getElementById('diag-6');
  // Идентификаторы для элементов сервиса
  const textService1 = document.getElementById('text-service-1');
  const textService2 = document.getElementById('text-service-2');
  const textService3 = document.getElementById('text-service-3');
  const textService4 = document.getElementById('text-service-4');
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
  // Идентификатор модального окна
  const modalTitle = document.getElementById('modal-form__title');
  const modalName = document.getElementById('modal-form__name');
  const modalMail = document.getElementById('modal-form__mail');
  const modalComment = document.getElementById('modal-form__comment');
  const modalCheck = document.getElementById('modal-form__check');
  const modalContract = document.getElementById('modal-form__contract');
  const modalButton = document.getElementById('modal-form__btn');
  // Идентификатор плесхолдера модального окна
  const messageTextModal = document.getElementById('message-modal');
  // Идентификатор кнопки "Наверх"
  const scrollToTop = document.getElementById('scroll-top');
  if (language === 'russian') {
      russianButton.classList.add('active');
      ukrainianButton.classList.remove('active');
      // Тексты для элементов страницы Hero (рус)
      heroTitle.textContent = 'Автодиагност';
      heroText.textContent = 'Компьютерная диагностика, ремонт электрооборудования';
      contactButton.textContent = 'Связаться';
      // Тексты для элементов диагностики (рус)
      diagnosticText1.textContent = 'Компьютерная диагностика';
      diagnosticText2.textContent = 'Диагностика системы впрыска';
      diagnosticText3.textContent = 'Диагностика системы зажигания';
      diagnosticText4.textContent = 'Диагностика электро оборудования';
      diagnosticText5.textContent = 'Диагностика электромобилей';
      diagnosticText6.textContent = 'Настройка электроники (чип-тюнинг)';
      // Тексты для элементов сервиса (рус)
      textService1.textContent = 'Приём автомобиля в ремонт начинается с выслушивания жалоб клиента на работу определённого узла или агрегата, затем составляется начальный перечень работ для подтверждения жалобы клиента. Как правило начало работ начинается с внешнего осмотра узлов и агрегатов, замера необходимых напряжений или компьютерной диагностики.';
      textService2.textContent = 'Диагностика электронных систем автомобиля, ремонт электрических узлов, восстановление поврежденной электропроводки, контроль работы предупредительных индикаторов на панели приборов.';
      textService3.textContent = 'Поиск неисправностей в двигателе внутреннего сгорания. Проверка систем: зажигания, питания и цилиндро-поршневой группы. Выявление посторонних звуков или шумов в работе ДВС.';
      textService4.textContent = 'После выполненных работ производится проверка правильной работоспособности узлов и агрегатов, отсутствие ошибок в электронных системах, проверяется отсутствие течи технических жидкостей.';
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
      // Текст модального окна (рус)
      modalTitle.textContent = 'Оставьте свои данные, мы перезвоним';
      modalName.textContent = 'Имя';
      modalMail.textContent = 'Почта';
      modalComment.textContent ='Комментарий';
      modalCheck.textContent = 'Соглашаюсь с рассылкой и принимаю&nbsp;';
      modalContract.textContent = 'Условия договора';
      modalButton.textContent = 'Отправить';
      // Текст плесхолдера модального окна (рус)
      messageTextModal.textContent = 'Введите текст...';
      // Текст кнопки "Наверх" (рус)
      scrollToTop.textContent = 'Вверх';
  } else if (language === 'ukrainian') {
      russianButton.classList.remove('active');
      ukrainianButton.classList.add('active');
      // Тексты для элементов страницы Hero (укр)
      heroTitle.textContent = 'Автодіагност';
      heroText.textContent = 'Комп\'ютерна діагностика, ремонт електроустаткування';
      contactButton.textContent = 'Зв\'язатися';
      // Тексты для элементов диагностики (укр)
      diagnosticText1.textContent = 'Комп\'ютерна діагностика';
      diagnosticText2.textContent = 'Діагностика системи впорскування';
      diagnosticText3.textContent = 'Діагностика системи запалення';
      diagnosticText4.textContent = 'Діагностика електро устаткування';
      diagnosticText5.textContent = 'Діагностика електромобілів';
      diagnosticText6.textContent = 'Налаштування електроніки (чіп-тюнінг)';
      // Тексты для элементов сервиса (укр)
      textService1.textContent = 'Прийом автомобіля в ремонт починається з вислуховування скарг клієнта на роботу певного вузла або агрегата, потім складається початковий перелік робіт для підтвердження скарги клієнта. Зазвичай початок робіт починається з зовнішнього огляду вузлів і агрегатів, вимірювання необхідних напруг або комп\'ютерної діагностики.';
      textService2.textContent = 'Діагностика електронних систем автомобіля, ремонт електричних вузлів, відновлення пошкодженої електропроводки, контроль роботи попереджувальних індикаторів на панелі приладів.';
      textService3.textContent = 'Пошук несправностей у двигуні внутрішнього згоряння. Перевірка систем: запалення, живлення і циліндро-поршневої групи. Виявлення чужих звуків або шумів у роботі ДВС.';
      textService4.textContent = 'Після виконаних робіт проводиться перевірка правильної роботи вузлів і агрегатів, відсутність помилок в електронних системах, перевіряється відсутність витоку технічних рідин.';
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
      // Текст модального окна (укр)
      modalTitle.textContent = 'Залишіть свої дані, ми передзвонимо';
      modalName.textContent = 'Ім\'я';
      modalMail.textContent = 'Пошта';
      modalComment.textContent ='Коментар';
      modalCheck.textContent = 'Погоджуюся з розсилкою та приймаю Умови договору'; // !
      modalContract.textContent = 'Умови договору'; // ! Разобраться
      modalButton.textContent = 'Відправити';
      // Текст плесхолдера модального окна (укр)
      messageTextModal.textContent = 'Введіть текст...';
      // Текст кнопки "Наверх" (укр)
      scrollToTop.textContent = 'Вгору';
  }
};



