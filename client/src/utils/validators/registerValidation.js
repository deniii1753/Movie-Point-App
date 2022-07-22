export function registerValidation(key, value) {
    value = value.trim();
    // eslint-disable-next-line
    switch (key) {
        case 'firstName':
            if (value.length < 2) return 'First name should be at least 2 characters long!';
            if (value.length > 10) return 'First name should be maximum 10 characters long!';
            return null;
        case 'lastName':
            if (value.length < 2) return 'Last name should be at least 2 characters long!';
            if (value.length > 10) return 'Last name should be maximum 10 characters long!';
            return null;
        case 'username':
            if (value.length < 5) return 'Username should be at least 5 characters long!';
            if (value.length > 15) return 'Username should be maximum 15 characters long!';
            return null;
        case 'email':
            const regex = /^(.+)@(.+)$/;

            return regex.test(value) ? null : 'Email address is not valid!';
        case 'password':
            return value.length < 5 ? 'Password should be at least 5 characters long!' : null;
        case 'rePassword':
            return 
        case 'bio':
            if (value.length < 50) return 'Bio should be at least 50 characters long!';
    }
}