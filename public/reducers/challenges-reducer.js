export default function() {
    return {
        challenges: [
            {
                type: 'Password Recovery',
                key: 'passwordRecovery'
            },
            {
                type: 'Sms',
                key: 'sms'
            },
            {
                type: 'Two Way Sms',
                key: 'twoWaySms'
            },
            {
                type: 'Ivr',
                key: 'ivr',
            },
            {
                type: 'Pin Less Ivr',
                key: 'pinLessIvr'
            },
            {
                type: 'Email',
                key: 'email'
            },
            {
                type: 'Email Alias',
                key: 'emailAlias'
            },
            {
                type: 'Ssn',
                key: 'ssn'
            },
            {
                type: 'Security Questions',
                key: 'securityQuestions'
            },
            {
                type: 'Credit Card',
                key: 'creditCard'
            },
            {
                type: 'Poma',
                key: 'poma'
            },
            {
                type: 'P2P',
                key: 'p2p'
            }
        ],
        securityCodes: [
            {type: 'Sms'},
            {type: 'Email'}
        ]
    }
}