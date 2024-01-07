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
  daryaDesc: { fullName: string; desc: string; role: string };
  alexanderDesc: { fullName: string; desc: string; role: string };
  valeriyDesc: { fullName: string; desc: string; role: string };
  titleAboutCourse: string;
  textAboutCourse: string;
};

export type LocalizationContextType = {
  texts: Texts;
  switchLanguage: (language: string) => void;
};
