import { useState, createContext } from "react";

const ParameterContext = createContext('')

const ParameterSearch = ({ children }) => {
    const [searchvalue, setSearchvalue] = useState()
    const [finishSearch, setFinishSearch] = useState()
    const value = [searchvalue, setSearchvalue, finishSearch, setFinishSearch]

    return (
        <ParameterContext.Provider value={value}>{children}</ParameterContext.Provider>
    )
}

export { ParameterContext, ParameterSearch }