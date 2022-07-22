exports.passwordValidator = (password, rePassword) => {
    if(!password) throw {status: 400, message: 'Password is required!'};
    if(password.length < 5) throw {status: 400, message: 'Password should be at least 5 characters long!'};
    if(password !== rePassword) throw {status: 400, message: 'Passwords don\'t match!'};
};