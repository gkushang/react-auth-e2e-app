'use strict';

function create(challenge) {

    return function(user) {
        user = user.data;


        user.challenge = challenge;



        if (user.creditcard) {
            user.creditcard.map(function(creditCard) {
                console.log('CC Type', creditCard.cardType);
                user[creditCard.cardType] = creditCard;
            })
        }

        console.log('user', user);

        return user;
    }
}

module.exports = {
    create: create
};