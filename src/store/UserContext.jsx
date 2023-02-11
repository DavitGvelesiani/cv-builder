import { createContext, useState } from "react";

export const userContext = createContext({});


const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        image: null,
        aboutMe: '',
        email: '',
        number: ''
    });

    return <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
}

export default UserContextProvider;