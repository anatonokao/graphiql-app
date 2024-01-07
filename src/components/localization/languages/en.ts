import { Texts } from '../types';

const dataEn: Texts = {
  header: {
    home: 'Home',
    signIn: 'Sign In',
    signUp: 'Sign Up',
    graphiql: 'GraphiQL',
    exit: 'Exit',
  },
  welcomePage: {
    titleProject: 'About Project',
    subtitleAboutProject:
      'Welcome to <b>GraphiQL Editor</b> - <br> your universal tool for crafting and testing GraphQL queries online in real-time!',
    descriptionAboutProject:
      "Our online editor provides a convenient interface to interact with any GraphQL API. Simply enter the link to your target API, and you'll find yourself in a virtual environment where you can freely experiment with your queries.",
    keyFuturesProject: [
      {
        title: 'Interactive Code Editor',
        text: 'Utilize our powerful code editor to write and edit GraphQL queries. Get instant suggestions and auto-completion to speed up your coding process.',
      },
      {
        title: 'Real-time Testing',
        text: 'View query results directly in the editor, instantly seeing the data returned by the API. This ensures efficient development and debugging of your queries.',
      },
      {
        title: 'API Documentation in One Place',
        text: 'Access reference information about your API right in the editor. You can learn schemas of your API right in the editor!',
      },
      {
        title: 'Security and Convenience',
        text: 'We guarantee the confidentiality of your data and offer an intuitive interface for maximum comfort during your work.',
      },
    ],
    endingAboutProject:
      '<b>GraphiQL Editor</b> – your reliable partner for efficient interaction with GraphQL APIs. Simplify the query creation process, save time, and enhance the quality of your development – join us now!',
    titleAboutUs: 'About Us',
    daryaDesc: {
      fullName: 'Darya Kurgina',
      desc: 'authorization, registration, firebase, 404 page, tests',
      role: 'Developer',
    },
    alexanderDesc: {
      fullName: 'Alexander Sologub',
      desc: 'configuration project, app design, graphiQL IDE, state management, tests',
      role: 'Team Lead',
    },
    valeriyDesc: {
      fullName: 'Valeriy Maryukhnyk',
      desc: 'welcome page, localization, header, footer, tests',
      role: 'Developer',
    },
    titleAboutCourse: 'About Course',
    textAboutCourse:
      'This project was developed as part of the <a href="https://rs.school/react/" target="_blank">React 2023</a> course at The Rolling Scopes School.',
  },
};

export default dataEn;
