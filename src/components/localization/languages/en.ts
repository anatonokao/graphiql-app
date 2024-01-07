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
    textProject:
      'GraphiQL is a playground/IDE for graphQL requests. This application contains a set of building blocks that allow its users to build GraphQL IDEs with ease.',
    titleAboutUs: 'About Us',
    textPerson1:
      'My name is Valeriy. I started learning programming last year. First I studied the frontend on different platforms and it was not systematic, but then I found RS School. I started studying from stage 0 and now I′m finishing React course. My goal is to become a front-end developer.',
    textPerson2:
      'My name is Valeriy. I started learning programming last year. First I studied the frontend on different platforms and it was not systematic, but then I found RS School. I started studying from stage 0 and now I′m finishing React course. My goal is to become a front-end developer.',
    textPerson3:
      'My name is Valeriy. I started learning programming last year. First I studied the frontend on different platforms and it was not systematic, but then I found RS School. I started studying from stage 0 and now I′m finishing React course. My goal is to become a front-end developer.',
    titleAboutCourse: 'About Course',
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
    errorUserDisabled: 'This email address is disabled by the administrator',
    erroruserNotFound: 'This email address is not registered',
    errorWrongPassword: 'The password is invalid or the user does not have a password',
    errorInvalid: 'Email address or password is invalid',

    errorUppercase: 'at least one uppercase required',
    errorLowercase: 'at least one lowercase required',
    errorDigit: 'at least one digit required',
    errorSpecial: 'at least one special character required',
  },
  registerPage: {
    registerTitle: 'Create Account',
    email: 'email',
    password: 'password',
    confirmPassword: 'confirm password',
    registerBtn: 'Register',
    registerText: "you have an account?",
    loginLink: 'Login',

    registerSuccess: 'Account is created',
    errorWeakPassword: 'The password is too weak',
    errorEmailAlreadyInUse: 'This email address is already in use by another account',
    errorOperationNotAllowed: 'Email/password accounts are not enabled',

    errorConfirmPassword: 'Password fields must match',

  },
  graphQLPage: {
    btnEdit: 'Edit',
    warningText: 'Attention: only APIs that support GraphQL',
    operationTitle: 'Operation',
    startBtn: 'Run',
    results: 'Results',
    vars: 'VARS',
    headers: 'HEADERS',
    operationText: 'Write something...',
    btnSave: 'Save',
    errorTitleAPI: 'Oops, seems something went wrong!',
    errorAPI: 'Maybe our coders forgot to eat, and now they are not performing at their best. We are already feeding them cookies 🍪, but just to be sure, please check that the server link is correct, the server is work, and it supports GraphQL queries.'
  }
};

export default dataEn;
