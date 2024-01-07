export type Texts = {
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
  textProject: string;
  titleAboutUs: string;
  textPerson1: string;
  textPerson2: string;
  textPerson3: string;
  titleAboutCourse: string;
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
  errorUserDisabled: string;
  erroruserNotFound: string;
  errorWrongPassword: string;
  errorInvalid: string;

  errorUppercase: string;
  errorLowercase: string;
  errorDigit: string;
  errorSpecial: string;
}

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
}

type GraphQLPage = {
  btnEdit: string;
  warningText: string;
  operationTitle: string;
  startBtn: string;
  results: string;
  vars: string;
  headers: string;
  operationText: string;
  btnSave: string;
  errorTitleAPI: string;
  errorAPI: string;
}

export type LocalizationContextType = {
  texts: Texts;
  switchLanguage: (language: string) => void;
};
