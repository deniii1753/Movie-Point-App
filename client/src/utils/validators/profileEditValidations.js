export function profileEditValidations(key, value) {
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
        case 'height':
            if (value === '') return null;
            if (Number(value) < 50) return 'Height should be higher than 50cm!';
            if (Number(value) > 250) return 'Height should be lower than 250cm!';
            return null;
        case 'weight':
            if (value === '') return null;
            if (Number(value) < 20) return 'Weight should be higher than 20 kilograms!';
            if (Number(value) > 500) return 'Weight should be lower than 500 kilograms!';
            return null;
        case 'birthday':
            const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

            return regex.test(value) ? null : 'Please enter a valid date!';
        case 'imgUrl':
            return value.startsWith('http://') || value.startsWith('https://') ? null : 'Please enter a valid link!';
        case 'twitter':
            return value.startsWith('http://') || value.startsWith('https://') || value === '' ? null : 'Please enter a valid link!';
        case 'facebook':
            return value.startsWith('http://') || value.startsWith('https://') || value === '' ? null : 'Please enter a valid link!';
        case 'instagram':
            return value.startsWith('http://') || value.startsWith('https://') || value === '' ? null : 'Please enter a valid link!';
        case 'youtube':
            return value.startsWith('http://') || value.startsWith('https://') || value === '' ? null : 'Please enter a valid link!';
        case 'bio':
            if (value.length < 50) return 'Bio should be at least 50 characters long!';
            return null;
    }
    return null;
}