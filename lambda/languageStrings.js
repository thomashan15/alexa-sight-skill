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
                Okay, I will check your internet speed for you. Please hold on \
                <break time="3000ms"/>It seems like you are using {{isp}} as your internet provider. \
                And your internet speed is {{internet_speed}} with purchased bandwidth of {{bandwidth}}. \
                Your upload speed is {{upload_speed}}. {{result}}. Do you want to know more?</speak>',
            LATENCY_MSG: '<speak>\
                For sure! Your average latency is {{latency}} from server located in {{server_location}}. \
                I can also monitor your internet latency twenty four seven and send you a weekly report. \
                If that sounds interesting to you, just say: "monitor my internet latency for me"</speak>',
            HELLO_MSG: 'Hello World!',
            HELP_MSG: 'You can say hello to me! How can I help?',
            GOODBYE_MSG: 'Goodbye!',
            REFLECTOR_MSG: 'You just triggered {{intentName}}',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MSG: 'Sorry, I had trouble doing what you asked. Please try again.'
        }
    }
}
