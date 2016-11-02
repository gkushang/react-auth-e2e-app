var axios = require('axios');
var config = require('Config');

module.exports = function fetchCode(info) {

    const retrieveSecurityCodeUrl = config.api.baseUrl +
        config.api.endPoints.retrieveSecurityCode.replace('stage', info.params.stage);

    const options = {
        params: {
            challengeType: info.challenge.key,
            userAccountNumber: info.params.accountNumber
        }
    };

    return axios.get(retrieveSecurityCodeUrl, options);
};