import { createContext, useState } from "react";
import { LanguageContextProps, LanguageProviderProps } from "./types";

export const LanguageContext = createContext({} as LanguageContextProps);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}