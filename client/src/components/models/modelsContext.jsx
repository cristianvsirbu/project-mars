import { createContext } from "react";
import { modelsData } from "./modelsData";

export const ModelsDataContext = createContext(modelsData);
export const ModelsDataContextProvider = ({ children }) => {
    return (
        <ModelsDataContext.Provider value={modelsData}>
            {children}
        </ModelsDataContext.Provider>
    );
}
