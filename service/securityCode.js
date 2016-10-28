var axios = require('axios');
var config = require('Config');

module.exports = function securityCode(info) {

    const retrieveSecurityCodeUrl = config.api.baseUrl +
        config.api.endPoints.retrieveSecurityCode.replace('stage', info.param.stage);

    console.log('Request SC.......');

    return axios.get(retrieveSecurityCodeUrl, {
        params: {
            challengeType: info.challenge.key,
            userAccountNumber: info.params.accountNumberOrEmail
        }
    });
};