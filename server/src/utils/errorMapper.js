exports.getErrorMessage = (err) => {
    if (err.hasOwnProperty('errors')) {
        return Object.values(err.errors)[0].message; // Mongoose error
    }

    return err.message;
}