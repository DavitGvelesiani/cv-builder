import { createContext, useState, useEffect } from "react";

export const userContext = createContext({});

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const localData = localStorage.getItem("user");

        return localData ? JSON.parse(localData) : {
        name: '',
        surname: '',
        image: null,
        aboutMe: '',
        email: '',
        number: '',
        experience: [],
        education: []
    }});

    useEffect(() => { 
        localStorage.setItem("user", JSON.stringify(user))
    }, [user]);

    

    return <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>
}

export default UserContextProvider;