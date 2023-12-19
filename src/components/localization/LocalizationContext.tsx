import React, { createContext, useContext, useState } from 'react';
import dataEn from './languages/en';
import { LocalizationContextType, Texts } from './types';


const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);
// const LocalizationContext = createContext<LocalizationContextType | undefined>(LocalizationProvider);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [texts, setTexts] = useState<Texts>(dataEn);
  const switchLanguage = (newLanguage: string) => {
    import(`./languages/${newLanguage}.ts`)
      .then((module) => {
        setTexts(module.default);
      });
  };


  return (
    <LocalizationContext.Provider value={{ texts, switchLanguage }}>
      {children}
    </LocalizationContext.Provider>
  );
};


export const useLocalization = (): LocalizationContextType => {
    const context = useContext(LocalizationContext);
    if (!context) {
      throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};