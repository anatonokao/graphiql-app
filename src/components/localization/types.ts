export type Texts = {
  header: Header;
  welcomePage: WelcomePage;
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
  textPerson1: string;
  textPerson2: string;
  textPerson3: string;
  titleAboutCourse: string;
};

export type LocalizationContextType = {
  texts: Texts;
  switchLanguage: (language: string) => void;
};
