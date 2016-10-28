var axios = require('axios');
var config = require('Config');

module.exports = function securityCode(info) {

    console.log('Request SC......now.', info);

    const retrieveSecurityCodeUrl = config.api.baseUrl +
        config.api.endPoints.retrieveSecurityCode.replace('stage', info.params.stage);

    console.log('Request SC.......', retrieveSecurityCodeUrl);

    return axios.get(retrieveSecurityCodeUrl, {
        params: {
            challengeType: info.challenge.key,
            userAccountNumber: info.params.accountNumber
        }
    });
};