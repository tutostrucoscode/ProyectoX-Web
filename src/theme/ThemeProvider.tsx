import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { themeCreator } from "./base";
import { StylesProvider } from "@mui/styles";

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProviderWrapper: React.FC = (props) => {
  //Obtienes un valor almacendo en el localStorage [NebulaFighterTheme Es el nombre de un thema y es el thema por defecto si en el localStorage no hay almacendo alguno]
  const curThemeName = localStorage.getItem("appTheme") || "NebulaFighterTheme";
  console.log("theme/ThemeProvider.tsx - localStorage:",curThemeName);
  //Almacena en el estado el nombre del thema que se usa actualmente
  const [themeName, _setThemeName] = useState(curThemeName);
  console.log("theme/ThemeProvider.tsx - useState:",themeName);
  //Function que retorna el thema ya construido
  const theme = themeCreator(themeName);
  console.log("theme/ThemeProvider.tsx - themeCreator:",theme);
  //Se activa si se cambia el tipo de thema a usar
  const setThemeName = (themeName: string): void => {
    console.log("theme/ThemeProvider.tsx - setThemeName:",themeName);
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  /**
   * StylesProvider: Este componente le permite cambiar el comportamiento de la solución de estilo. Hace que las opciones estén disponibles en el árbol de React gracias al contexto.
   * ThemeProvider: Este componente toma un accesorio y lo hace disponible en el árbol de React gracias al contexto. Preferiblemente debe usarse en la raíz de su árbol de componentes.
   */
  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
