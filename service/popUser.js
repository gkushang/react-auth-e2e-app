var axios = require('axios');
var config = require('Config');
var Promise = require('bluebird');

module.exports = function popUser(challenge) {
    var popOptions = {
        challengeType: challenge.key,
        requestType: 'pop'
    };

    const popUserUrl = config.api.baseUrl + config.api.endPoints.popUser;

    // return axios.get(popUserUrl, {
    //     params: {
    //         challengeType: popOptions.challengeType || popOptions
    //     }
    // });

    var user = {
        "challenge": challenge,
        "_id": "1480249037900009828",
        "accountNumber": "1480249037900009828",
        "challengeType": "p2p",
        "challenges": [
            "securityQuestions",
            "email",
            "smsOneWay",
            "creditCard"
        ],
        "creditcard": [
            {
                "cardId": "1553314",
                "cardNumber": "6503026771815705",
                "cardType": "Discover",
                "country": "US",
                "currency": "USD",
                "cvv": "111",
                "expirationMonth": 0,
                "expirationYear": 2022,
                "walletId": "CC1553314"
            },
            {
                "cardId": "1553311",
                "cardNumber": "4046610339507570",
                "cardType": "Visa",
                "country": "US",
                "currency": "USD",
                "cvv": "111",
                "expirationMonth": 0,
                "expirationYear": 2019,
                "walletId": "CC1553311"
            },
            {
                "cardId": "1553313",
                "cardNumber": "5571353150073352",
                "cardType": "Master",
                "country": "US",
                "currency": "USD",
                "cvv": "111",
                "expirationMonth": 11,
                "expirationYear": 2019,
                "walletId": "CC1553313"
            },
            {
                "cardId": "1553312",
                "cardNumber": "340163010798069",
                "cardType": "Amex",
                "country": "US",
                "currency": "USD",
                "cvv": "1111",
                "expirationMonth": 0,
                "expirationYear": 2025,
                "walletId": "CC1553312"
            }
        ],
        "email": "afredirect_af-9711266005063002@paypal.com",
        "stage": "stage2md067",
        "status": "Fetched",
        "user": {
            "acceptUserLegalAgreement": true,
            "accountNumber": "1480249037900009828",
            "accountType": "personal",
            "addNewPhone": "4089673031",
            "addNewPhoneMasked": "",
            "aveMonthVolume": 0,
            "aveTransSize": 0,
            "bizMonEstablished": 0,
            "bizType": 0,
            "bizYearEstablished": 0,
            "citizenship": "US",
            "confirmEmail": true,
            "country": "US",
            "creditcard": [
                {
                    "cardNumber": "4046610339507570",
                    "cardType": "Visa",
                    "country": "US",
                    "currency": "USD",
                    "cvv": "483",
                    "expirationMonth": "12",
                    "expirationYear": "2018",
                    "firstName": "HighriskAuth-20_160_110_10",
                    "issuerRefNumber": "41",
                    "lastName": "eBay",
                    "startMonth": "01",
                    "startYear": "2015"
                },
                {
                    "cardNumber": "340163010798069",
                    "cardType": "Amex",
                    "country": "US",
                    "currency": "USD",
                    "cvv": "4412",
                    "expirationMonth": "12",
                    "expirationYear": "2024",
                    "firstName": "HighriskAuth-20_160_110_10",
                    "issuerRefNumber": "17",
                    "lastName": "eBay",
                    "startMonth": "07",
                    "startYear": "2015"
                },
                {
                    "cardNumber": "5571353150073352",
                    "cardType": "Master",
                    "country": "US",
                    "currency": "USD",
                    "cvv": "085",
                    "expirationMonth": "11",
                    "expirationYear": "2019",
                    "firstName": "HighriskAuth-20_160_110_10",
                    "issuerRefNumber": "43",
                    "lastName": "eBay",
                    "startMonth": "05",
                    "startYear": "2015"
                },
                {
                    "cardNumber": "6503026771815705",
                    "cardType": "Discover",
                    "country": "US",
                    "currency": "USD",
                    "cvv": "349",
                    "expirationMonth": "12",
                    "expirationYear": "2021",
                    "firstName": "HighriskAuth-20_160_110_10",
                    "issuerRefNumber": "69",
                    "lastName": "eBay",
                    "startMonth": "12",
                    "startYear": "2015"
                }
            ],
            "currency": "USD",
            "emailAddress": "afredirect_af-9711266005063002@paypal.com",
            "emailAlias": "Gussie82@gmail.com",
            "firstName": "HighriskAuth-20_160_110_10",
            "homeAddress1": "2211 North 1st Street",
            "homeAddress2": "3239774 Calista Court #6B",
            "homeCity": "San Jose",
            "homeCountry": "US",
            "homePhoneNumber": "+1 8453881074",
            "homeState": "CA",
            "homeZip": "95131",
            "industry": 0,
            "lastName": "eBay",
            "maskedEmailAddress": "â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢02@paâ€¢â€¢â€¢â€¢.com",
            "maskedEmailAlias": "â€¢â€¢â€¢â€¢â€¢â€¢82@gmâ€¢â€¢â€¢.com",
            "mobilePhone": "+1 4089673035",
            "onlineRevenuePercentage": 0,
            "password": "11111111",
            "phoneNumber": "4089673035",
            "phoneNumberMasked": "(4â€¢â€¢) â€¢â€¢â€¢ - 3035",
            "saleVenue": 0,
            "securityAnswer1": "What was the name of your first school?",
            "securityAnswer2": "What was the name of your first pet?",
            "securityQuestion1": 1,
            "securityQuestion2": 2,
            "subCategory": 0,
            "workPhone": "+1 7168550593"
        }
    };

    return new Promise(function(resolve, reject) {
        user.data = user;
        return resolve(user);
    })

};