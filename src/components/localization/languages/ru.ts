import { Texts } from '../types';

const dataRu: Texts = {
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
};

export default dataRu;
