"use client"
import { Provider } from "@portfolio/components/ui/provider";
import { Toaster } from "@portfolio/components/ui/toaster";
import { LanguageContextProvider } from "@portfolio/contexts/LanguageContext";
import { GeneralContainer } from "./Containers";

import { ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};
const AppProvider = (props: AppProviderProps) => {
  const { children } = props;

  return (
    <Provider>
      <Toaster />
      <LanguageContextProvider>
        <GeneralContainer>{children}</GeneralContainer>
      </LanguageContextProvider>
    </Provider>
  );
};

export default AppProvider;
