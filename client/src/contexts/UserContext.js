import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, updateUser] = useLocalStorage('user', null);

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    );
}
export default UserContext;