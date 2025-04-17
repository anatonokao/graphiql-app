export type Texts = {
  errorLogin: string;
  header: Header;
  welcomePage: WelcomePage;
  authPage: AuthPage;
  registerPage: RegisterPage;
  graphQLPage: GraphQLPage;
};

type Header = {
  home: string;
  signIn: string;
  signUp: string;
  graphiql: string;
  exit: string;
};

type WelcomePage = {
  titleProject: string;
  subtitleAboutProject: string;
  descriptionAboutProject: string;
  keyFuturesProject: {
    title: string;
    text: string;
  }[];
  endingAboutProject: string;
  titleAboutUs: string;
  daryaDesc: { fullName: string; desc: string; role: string };
  alexanderDesc: { fullName: string; desc: string; role: string };
  valeriyDesc: { fullName: string; desc: string; role: string };
  titleAboutCourse: string;
  textAboutCourse: string;
};

type AuthPage = {
  loginTitle: string;
  email: string;
  password: string;
  loginBtn: string;
  loginText: string;
  registerLink: string;

  authSuccess: string;
  errorEmail: string;
  errorEmailRequired: string;
  errorUserDisabled: string;
  errorUserNotFound: string;
  errorPasswordRequired: string;
  errorWrongPassword: string;
  errorInvalid: string;

  errorUppercase: string;
  errorLowercase: string;
  errorDigit: string;
  errorSpecial: string;

  errorEmailInput: string;
};

type RegisterPage = {
  registerTitle: string;
  email: string;
  password: string;
  confirmPassword: string;
  registerBtn: string;
  registerText: string;
  loginLink: string;

  registerSuccess: string;
  errorWeakPassword: string;
  errorEmailAlreadyInUse: string;
  errorOperationNotAllowed: string;

  errorConfirmPassword: string;
};

type GraphQLPage = {
  getSchemaError: string;
  btnEdit: string;
  warningText: string;
  operationTitle: string;
  startBtn: string;
  incorrectOperation: string;
  prettifySuccessfully: string;
  results: string;
  vars: string;
  headers: string;
  operationText: string;
  btnSave: string;
  errorTitleAPI: string;
  errorAPI: string;
};

export type LocalizationContextType = {
  texts: Texts;
  switchLanguage: (language: string) => void;
};
