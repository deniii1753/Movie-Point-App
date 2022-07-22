export function comparePasswords(password, rePassword) {
    return password.trim() === rePassword.trim() ? null : 'Passwords does not match!';
}