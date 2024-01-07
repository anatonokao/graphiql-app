export type Texts = {
    home: string;
    signIn: string;
    signUp: string;
    graphiql: string;
    exit: string;
    titleProject: string;
    textProject: string;
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