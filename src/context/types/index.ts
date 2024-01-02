import { Dispatch, ReactNode, SetStateAction } from "react";

export type LanguageContextProps = {
  language: "pt" | "en";
  setLanguage: Dispatch<SetStateAction<"pt" | "en">>
}

export type LanguageProviderProps = {
  children: ReactNode
}