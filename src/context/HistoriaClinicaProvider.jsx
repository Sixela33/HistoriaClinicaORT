import { createContext, useState, useContext } from "react";

export const HospiContext = createContext();

export const HistoriaClinicaProvider = ({ children }) => {

    return (
        <HospiContext.Provider
            value={{}}>
            {children}
        </HospiContext.Provider>
)}

export const useHospi = () => {
    return useContext(HospiContext);
  };