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
            WELCOME_MSG_YES: '<speak>\
                <amazon:emotion name="excited" intensity="medium">Great!</amazon:emotion>\
                Scanning your network now. <break time="3000ms" />\
                I have found {{device_count}} devices on your network. All devices are healthy and online. \
                I can continue monitoring these devices, would you like me to do that?</speak>',
            WELCOME_MSG_NO: '<speak>Okay, you can also ask me about your network latency or internet speed by asking \
                <break time="500ms" /> "run a speed test for me" or <break time="500ms" /> "tell me about my network latency".</speak>',
            WELCOME_MSG_MONITORING_YES: '<speak>Okay, I will definitely keep an eye on your devices. \
                And you can come back and ask me about the connection status on a specific device.</speak>',
            WELCOME_MSG_MONITORING_NO: '<speak>That\'s totally fine. You can ask me to check on your devices on your network anytime.</speak>',
            LATENCY_MSG: '<speak>\
                For sure! Your average latency is {{latency}} from server located in {{server_location}}. \
                I can also monitor your internet latency twenty four seven and send you a weekly report. \
                If that sounds interesting to you, just say: "start monitoring my network latency for me"</speak>',
            MONITOR_LATENCY_MSG: 'I can definitely do that. I will send the weekly update to your default email address.',
            SPEED_TEST_MSG: '<speak>You got it. Let me do a quick speed test for you. Since you are located in Seattle, \
                I will be using the server located in San Francisco. Please hold on... \
                <break time="3000ms"/> Your download speed is {{download_speed}} and upload speed is {{upload_speed}} \
                with your internet service provider {{isp}}. Are you currently having internet issues?</speak>',
            INTERNET_CONNECTION_ISSUES_YES_MSG1: 'Okay, I have detected a device is consuming 50 percent of your internet speed. \
                It is a device manufactured by Apple, and the owner is Yuki. Good luck investigating.',
            INTERNET_CONNECTION_ISSUES_YES_MSG2: 'Okay, I don\t find anything particularly interesting, \
                but I have recorded this event, and I can send this data to your internet service provider {{isp}}. Would you like me to do that?',
            INTERNET_CONNECTION_ISSUES_YES_MSG2_SEND_DATA_YES: '<speak><break time="1000ms"/>Okay, data sent. Let me know what else I can help you with.</speak>',
            INTERNET_CONNECTION_ISSUES_YES_MSG2_SEND_DATA_NO: 'Okay, I will not send the data. Let me know what else I can help you with.',
            INTERNET_CONNECTION_ISSUES_NO_MSG: 'Okay. Come back and check your internet speed anytime',
            HELLO_MSG: 'Hello World!',
            HELP_MSG: 'You can say hello to me! How can I help?',
            GOODBYE_MSG: 'Goodbye!',
            REFLECTOR_MSG: 'You just triggered {{intentName}}',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MSG: 'Sorry, I had trouble doing what you asked. Please try again.'
        }
    }
}
