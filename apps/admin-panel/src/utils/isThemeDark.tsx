import { themes } from "../constants";

export const isThemeDark = function (theme: string) {
  return themes.dark.includes(theme);
};
