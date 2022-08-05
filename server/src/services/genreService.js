const Genre = require('../models/Genre');

exports.getGenres = (search, limit, skip) => {
    const searchObject = {};

    if (search.key === '_id') {
        searchObject._id = search.value;
    } else {
        search.key ? searchObject[search.key] = { $regex: `${search.value}`, $options: 'i' } : {};
    }

    return Genre.find(searchObject)
        .skip(skip)
        .limit(limit);
}

exports.getCount = (search) => {
    const searchObject = {};

    if (search.key === '_id') {
        searchObject._id = search.value;
    } else {
        search.key ? searchObject[search.key] = { $regex: `${search.value}`, $options: 'i' } : {};
    }

    return Genre.count(searchObject);
}

exports.getTotalCount = () => {
    return Genre.count();
}

exports.getOne = (genreId) => {
    return Genre.findOne({_id: genreId});
}