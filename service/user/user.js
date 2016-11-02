var axios = require('axios');
var config = require('Config');
var userDomain = require('../../domain/user');
var log = require('debug')('user-domain');

function request(url, challenge) {

    log(url);

    const options = {
        params: {
            challengeType: challenge.key
        }
    };

    return axios.get(url, options)
        .then(userDomain.create(challenge));
}

function pop(challenge) {
    const url = config.api.baseUrl + config.api.endPoints.popUser;

    return request(url, challenge);
}

function create(challenge) {
    const url = config.api.baseUrl + config.api.endPoints.createUser;
    return request(url, challenge);
}

module.exports = {
    pop: pop,
    create: create
};
