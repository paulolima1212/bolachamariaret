import { createContext, useContext, useState } from "react";
import { OrderProps } from "../interfaces/Order";

interface AppContextProps{
    orders: OrderProps[]
    setOrders: React.Dispatch<React.SetStateAction<never[]>>
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)

export function AppContextProvider({children}:{children:JSX.Element}){

    const [orders, setOrders] = useState([]);

    return(
        <AppContext.Provider value={{orders, setOrders}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return(
        useContext(AppContext)
    )
}