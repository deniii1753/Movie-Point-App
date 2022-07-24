export function validateField(key, value) {
    if(key !== 'genres') value = value.trim();
    // eslint-disable-next-line
    switch (key) {
        case 'title':
            return value.length < 2 ? 'Title should be at least 2 characters long!' : null;
        case 'writer':
            return value.includes(' ') ? null : 'Writer should have first and last name!';
        case 'director':
            return value.includes(' ') ? null : 'Director should have first and last name!';
        case 'genres':
            return value.length === 0 ? 'Please choose at least one genre!' : null;
        case 'time':
            return Number(value) <= 0 ? 'Time should be a positive number!' : null;
        case 'releaseDate':
            const regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

            return regex.test(value) ? null : 'Please enter a valid date!';
        case 'language':
            return value.length < 5 ? 'Language should be at least 5 characters long!' : null;
        case 'trailer':
            if(value.startsWith('https://www.youtube.com') || value.startsWith('www.youtube.com') || value.startsWith('https://youtube.com')) {
                return null;
            }
            return 'Please enter a valid youtube link! (e.g: https://youtube.com/watch?v=EXAMPLE)';
        case 'imgUrl':
            return value.startsWith('http://') || value.startsWith('https://') ? null : 'Please enter a valid link!';
        case 'author':
            return value.includes(' ') ? null : 'Author should have first and last name!';
        case 'authorImg':
            return value.startsWith('http://') || value.startsWith('https://') ? null : 'Please enter a valid link!';
        case 'description':
            if(value.length < 50) return 'Description should be at least 50 characters long!';
            if(value.length > 500) return 'Description should be less than 500 characters long!'

    }
}