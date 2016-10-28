var axios = require('axios');
var config = require('Config');

module.exports = function popUser(challenge) {
    var popOptions = {
        challengeType: challenge.key,
        requestType: 'pop'
    };

    const popUserUrl = config.api.baseUrl + config.api.endPoints.popUser;

    return axios.get(popUserUrl, {
        params: {
            challengeType: popOptions.challengeType || popOptions
        }
    });
};