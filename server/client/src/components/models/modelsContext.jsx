import { createContext } from "react";
import { modelsData } from "./modelsData";
import PropTypes from 'prop-types';

export const ModelsDataContext = createContext(modelsData);
export const ModelsDataContextProvider = ({ children }) => {
    return (
        <ModelsDataContext.Provider value={modelsData}>
            {children}
        </ModelsDataContext.Provider>
    );
}

ModelsDataContextProvider.propTypes = {
    children: PropTypes.any.isRequired,
}
