import { createContext } from 'react';
import { modelsData } from './modelsData';

export const ModelsDataContext = createContext(modelsData);
import { ReactNode } from 'react';

export const ModelsDataContextProvider = ({ children }: { children: ReactNode }) => {
  return <ModelsDataContext.Provider value={modelsData}>{children}</ModelsDataContext.Provider>;
};
