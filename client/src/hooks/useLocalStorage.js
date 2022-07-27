import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
    const [user, setUser] = useState(() => {
        const userString = localStorage.getItem(key);
        if(!userString) return defaultValue;

        const userData = JSON.parse(userString);

        return userData ? userData : defaultValue;
    });

    function updateUser(data) {
        localStorage.setItem(key, JSON.stringify(data));

        setUser(data);
    }

    return [user, updateUser];
}