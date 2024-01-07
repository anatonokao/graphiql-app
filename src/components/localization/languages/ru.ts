import { Texts } from '../types';

const dataRu: Texts = {
  errorLogin: 'Что-то пошло не так! Вам нужно авторизоваться снова',
  header: {
    home: 'Главная',
    signIn: 'Войти',
    signUp: 'Зарегистрироваться',
    graphiql: 'График',
    exit: 'Выход',
  },
  welcomePage: {
    titleProject: 'О Проекте',
    subtitleAboutProject:
      'Добро пожаловать в <b>GraphQL Editor</b> – <br>ваш универсальный инструмент для создания и тестирования GraphQL запросов в реальном времени!',
    descriptionAboutProject:
      ' Наш онлайн редактор предоставляет удобный интерфейс для взаимодействия с любым GraphQL API. Просто введите ссылку на целевой API, и вы окажетесь в виртуальной среде, где сможете свободно экспериментировать с вашими запросами.',
    keyFuturesProject: [
      {
        title: 'Интерактивный Редактор Кода',
        text: 'Используйте наш мощный редактор кода для написания и редактирования GraphQL запросов. Получайте мгновенные подсказки и автозаполнение, чтобы ускорить процесс написания кода.',
      },
      {
        title: 'Тестирование в Реальном Времени',
        text: 'Просматривайте результаты запросов непосредственно в редакторе, мгновенно видя, какие данные возвращает API. Это обеспечивает эффективную разработку и отладку ваших запросов.',
      },
      {
        title: 'API Документация в Одном Месте',
        text: 'Получайте доступ к справочной информации о вашем API прямо в редакторе. Вы можете изучать схемы вашего API прямо в редакторе!',
      },
      {
        title: 'Безопасность и Удобство',
        text: 'Мы гарантируем конфиденциальность ваших данных и предоставляем интуитивный интерфейс для максимального комфорта при работе.',
      },
    ],
    endingAboutProject:
      '<b>GraphQL Editor</b> – ваш надежный партнер для эффективного взаимодействия с GraphQL API. Упростите процесс создания запросов, экономьте время и улучшайте качество вашей разработки – присоединяйтесь прямо сейчас!',
    titleAboutUs: 'О Нас',
    daryaDesc: {
      fullName: 'Дарья Кургина',
      desc: 'authorization, registration, firebase, 404 page, tests',
      role: 'Developer',
    },
    alexanderDesc: {
      fullName: 'Александр Сологуб',
      desc: 'configuration project, app design, graphiQL IDE, state management, tests',
      role: 'Team Lead',
    },
    valeriyDesc: {
      fullName: 'Валерий Марюхник',
      desc: 'welcome page, localization, header, footer, tests',
      role: 'Developer',
    },
    titleAboutCourse: 'О Курсе',
    textAboutCourse:
      'Этот проект был разработан в рамках курса <a href="https://rs.school/react/" target="_blank">React 2023</a> от The Rolling Scopes School',
  },
  authPage: {
    loginTitle: 'Войти в аккаунт',
    email: 'емайл',
    password: 'пароль',
    loginBtn: 'Авторизоваться',
    loginText: 'еще нет аккаунта?',
    registerLink: 'Зарегистрироваться',

    authSuccess: 'Добро пожаловать в команду',
    errorEmail: 'Этот адрес электронной почты недействителен',
    errorEmailRequired: 'Введите email',
    errorUserDisabled: 'Этот адрес электронной почты отключен администратором',
    errorUserNotFound: 'Этот адрес электронной почты не зарегистрирован',
    errorWrongPassword: 'Пароль недействителен или у пользователя нет пароля',
    errorInvalid: 'Адрес электронной почты или пароль недействительны.',
    errorPasswordRequired: 'Введите пароль',
    errorUppercase: 'требуется хотя бы одна заглавная буква',
    errorLowercase: 'требуется хотя бы одна строчная буква',
    errorDigit: 'требуется хотя бы одна цифра',
    errorSpecial: 'требуется хотя бы один специальный символ',

    errorEmailInput: 'невалидный адрес электронной почты',
  },
  registerPage: {
    registerTitle: 'Зарегистрироваться',
    email: 'емайл',
    password: 'пароль',
    confirmPassword: 'подтвердите пароль',
    registerBtn: 'Зарегистрироваться',
    registerText: 'у тебя есть аккаунт?',
    loginLink: 'авторизоваться',

    registerSuccess: 'Аккаунт создан',
    errorWeakPassword: 'Пароль слишком слабый',
    errorEmailAlreadyInUse:
      'Этот адрес электронной почты уже используется другой учетной записью',
    errorOperationNotAllowed:
      'Учетные записи электронной почты и паролей не включены.',

    errorConfirmPassword: 'Поля пароля должны совпадать',
  },
  graphQLPage: {
    getSchemaError: 'Что-то пошло не так!',
    btnEdit: 'Pедак.',
    warningText: 'Внимание: только API, поддерживающие GraphQL.',
    operationTitle: 'Операция',
    startBtn: 'Начать',
    incorrectOperation: 'Некорректная GraphQL операция!',
    prettifySuccessfully: 'Все Чисто!',
    results: 'Результаты',
    vars: 'Переменные',
    headers: 'Заголовки',
    operationText: 'Напиши что-нибудь...',
    btnSave: 'Сохранить',
    errorTitleAPI: 'Ой, кажется, что-то пошло не так!',
    errorAPI:
      'Возможно, наши кодеры забыли поесть, и сейчас они не в лучшей форме. Мы уже кормим их печеньками 🍪, но на всякий случай, убедитесь, что ссылка на сервер правильная, сервер работает и поддерживает GraphQL запросы.',
  },
};

export default dataRu;
