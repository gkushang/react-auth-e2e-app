var axios = require('axios');

module.exports = function popUser(challenge) {

    var popOptions = {
        challengeType: challenge.key,
        requestType: 'pop'
    };

    var authUserServe = {
        host: 'http://authserv-8375.ccg21.dev.paypalcorp.com/msmaster/users/pop'
    };


    return axios.get(authUserServe.host, {
        params: {
            challengeType: popOptions.challengeType || popOptions
        }
    });

    // return {
    //     data: {
    //         challenge: challenge,
    //         "_id":"2033841388529860244",
    //         "accountNumber":"2033841388529860244",
    //         "available":151,
    //         "challengeType":"sms",
    //         "challenges":[
    //             "smsOneWay",
    //             "email",
    //             "ivr",
    //             "securityQuestions"
    //         ],
    //         "email":"auth-auto-25411586010834548@paypal.com",
    //         "stage":"msmaster",
    //         "status":"Fetched",
    //         "user":{
    //             "acceptUserLegalAgreement":true,
    //             "accountNumber":"2033841388529860244",
    //             "accountType":"personal",
    //             "addNewPhone":"4089673031",
    //             "addNewPhoneMasked":"",
    //             "aveMonthVolume":0,
    //             "aveTransSize":0,
    //             "bizMonEstablished":0,
    //             "bizType":0,
    //             "bizYearEstablished":0,
    //             "citizenship":"US",
    //             "confirmEmail":true,
    //             "country":"US",
    //             "currency":"USD",
    //             "emailAddress":"auth-auto-25411586010834548@paypal.com",
    //             "firstName":"Auth-110_160_50_20",
    //             "homeAddress1":"2211 North 1st Street",
    //             "homeAddress2":"897070 McKinley Street Unit 6A",
    //             "homeCity":"San Jose",
    //             "homeCountry":"US",
    //             "homePhoneNumber":"+1 4089673035",
    //             "homeState":"CA",
    //             "homeZip":"95131",
    //             "industry":0,
    //             "lastName":"Login",
    //             "maskedEmailAddress":"â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢48@paâ€¢â€¢â€¢â€¢.com",
    //             "mobilePhone":"+1 4089673035",
    //             "onlineRevenuePercentage":0,
    //             "password":"11111111",
    //             "phoneNumber":"4089673035",
    //             "phoneNumberMasked":"(4â€¢â€¢) â€¢â€¢â€¢ - 3035",
    //             "saleVenue":0,
    //             "securityAnswer1":"What was the name of your first school?",
    //             "securityAnswer2":"What was the name of your first pet?",
    //             "securityQuestion1":1,
    //             "securityQuestion2":2,
    //             "subCategory":0,
    //             "workPhone":"+1 3175908021"
    //         }
    //     }
    // };
};