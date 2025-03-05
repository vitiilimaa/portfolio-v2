import useLanguage from "@portfolio/hooks/useLanguage";
import { Languages } from "@portfolio/types/Languages";

import { createContext, Dispatch, ReactNode, SetStateAction } from "react";

export type LanguageContextProps = {
  language: Languages;
  setLanguage: Dispatch<SetStateAction<Languages>>;
  handleChangeLanguage: (language: Languages, currentRoute: string) => void;
};

const LanguageContext = createContext<LanguageContextProps | null>(null);

type LanguageContextProviderProps = {
  children: ReactNode;
};
const LanguageContextProvider = (props: LanguageContextProviderProps) => {
  const { children } = props;

  const { language, setLanguage, handleChangeLanguage } = useLanguage();

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, handleChangeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContextProvider, LanguageContext };
