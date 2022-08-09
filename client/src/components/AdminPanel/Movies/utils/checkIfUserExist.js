import * as userService from "../../../../services/userService";

export function checkIfUserExists(userId, authToken) {
    return userService.getUser(userId, authToken)
        .then(data => {
            if(data !== null) return true;
            return false;
        })
        .catch(() => false)
}