import { Texts } from '../types';

const dataEn: Texts = {
  errorLogin: 'Something went wrong! You need login again',
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
  authPage: {
    loginTitle: 'Login to account',
    email: 'email',
    password: 'password',
    loginBtn: 'Login',
    loginText: "don't have an account yet?",
    registerLink: 'Register',

    authSuccess: 'Welcome to the team',
    errorEmail: 'This email address is invalid',
    errorEmailRequired: 'Email is a required',
    errorUserDisabled: 'This email address is disabled by the administrator',
    errorUserNotFound: 'This email address is not registered',
    errorWrongPassword:
      'The password is invalid or the user does not have a password',
    errorInvalid: 'Email address or password is invalid',
    errorPasswordRequired: 'Password is a required',
    errorUppercase: 'at least one uppercase required',
    errorLowercase: 'at least one lowercase required',
    errorDigit: 'at least one digit required',
    errorSpecial: 'at least one special character required',

    errorEmailInput: 'email must be a valid email',
  },
  registerPage: {
    registerTitle: 'Create Account',
    email: 'email',
    password: 'password',
    confirmPassword: 'confirm password',
    registerBtn: 'Register',
    registerText: 'you have an account?',
    loginLink: 'Login',

    registerSuccess: 'Account is created',
    errorWeakPassword: 'The password is too weak',
    errorEmailAlreadyInUse:
      'This email address is already in use by another account',
    errorOperationNotAllowed: 'Email/password accounts are not enabled',

    errorConfirmPassword: 'Password fields must match',
  },
  graphQLPage: {
    getSchemaError: 'Something went wrong!',
    btnEdit: 'Edit',
    warningText: 'Attention: only APIs that support GraphQL',
    operationTitle: 'Operation',
    startBtn: 'Run',
    incorrectOperation: 'Invalid GraphQl operation!',
    prettifySuccessfully: 'All Clear!',
    results: 'Results',
    vars: 'VARS',
    headers: 'HEADERS',
    operationText: 'Write something...',
    btnSave: 'Save',
    errorTitleAPI: 'Oops, seems something went wrong!',
    errorAPI:
      'Maybe our coders forgot to eat, and now they are not performing at their best. We are already feeding them cookies 🍪, but just to be sure, please check that the server link is correct, the server is work, and it supports GraphQL queries.',
  },
};

export default dataEn;
