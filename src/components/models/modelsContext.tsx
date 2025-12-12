import { createContext, ReactNode } from 'react';
import { modelsData } from './modelsData';

export const ModelsDataContext = createContext(modelsData);

export const ModelsDataContextProvider = ({ children }: { children: ReactNode }) => {
  return <ModelsDataContext.Provider value={modelsData}>{children}</ModelsDataContext.Provider>;
};
