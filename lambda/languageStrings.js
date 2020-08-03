/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            WELCOME_MSG: '<speak>\
                <amazon:emotion name="excited" intensity="medium">Welcome to Alexa Sight.</amazon:emotion> \
                I can help you scan your network and list all the devices \
                on your network. Would you like to do it now?</speak>',
            LATENCY_MSG: '<speak>\
                For sure! Your average latency is {{latency}} from server located in {{server_location}}. \
                I can also monitor your internet latency twenty four seven and send you a weekly report. \
                If that sounds interesting to you, just say: "monitor my internet latency for me"</speak>',
            SPEED_TEST_MSG: '<speak>You got it. Let me do a quick speed test for you. Since you are located in Seattle, \
                I will be using the server located in San Francisco. Please hold on... \
                <break time=”3000ms“/> Your download speed is {{download_speed}} and upload speed is {{upload_speed}} \
                with your internet service provider {{isp}}. Are you having internet issues?</speak>',
            HELLO_MSG: 'Hello World!',
            HELP_MSG: 'You can say hello to me! How can I help?',
            GOODBYE_MSG: 'Goodbye!',
            REFLECTOR_MSG: 'You just triggered {{intentName}}',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MSG: 'Sorry, I had trouble doing what you asked. Please try again.'
        }
    }
}
