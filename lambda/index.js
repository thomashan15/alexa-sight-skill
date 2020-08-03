/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
// i18n library dependency, we use it below in a localization interceptor
const i18n = require('i18next');
// i18n strings for all supported locales
const languageStrings = require('./languageStrings');
const { getUserData } = require('./info_query');

const mbpsToReadableString = (strWithTrailingMbps) => {
    return `${strWithTrailingMbps.slice(0, -4)} mega bits per second`;
}

const msToReadableString = (strWithTrailingMs) => {
    return `${strWithTrailingMs.slice(0, -2)} millisecond`;
}

const translateServerLocationToCityName = (latencyServerCode) => {
    return {
        'SEA': 'Seattle',
        'ORD': 'Chicago',
        'SFO': 'San Francisco',
        'LAX': 'Los Angeles'
    }[latencyServerCode];
}

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    async handle(handlerInput) {
        // const data = await getUserData();
        // const downloadSpeedReadableStr = mbpsToReadableString(data.data.download_speed_mbps);
        // const uploadSpeedReadableStr = mbpsToReadableString(data.data.upload_speed_mbps);
        // const bandwidthSpeedReadableStr = mbpsToReadableString(data.data.bandwidth);
        // const issueReasons = [
        //     'high latency',
        //     'high bandwidth consumption',
        //     'low bandwidth available',
        //     'high internet usage from another device'
        // ]
        // const randomIssueReasonSelected = Math.floor(Math.random() * 4);
        // const GOOD_INTERNET = 'Your internet is at or above average comparing to the average speed from your internet service provider.';
        // const BAD_INTERNET = 'Your internet is having some issues with ' + issueReasons[randomIssueReasonSelected];
        // const resultString = Math.random() * 2 > 1 ? GOOD_INTERNET : BAD_INTERNET;
        // const simpleInternetTestResponse = handlerInput.t('WELCOME_MSG', {
        //     isp: data.data.isp,
        //     internet_speed: downloadSpeedReadableStr,
        //     bandwidth: bandwidthSpeedReadableStr,
        //     upload_speed: uploadSpeedReadableStr,
        //     result: resultString
        // });

        return handlerInput.responseBuilder
            .speak(handlerInput.t('WELCOME_MSG'))
            .reprompt(handlerInput.t('WELCOME_MSG'))
            .getResponse();
    }
};

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('HELLO_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('HELP_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('GOODBYE_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const LatencyIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'LatencyIntent';
    },

    async handle(handlerInput) {
        const data = await getUserData();
        const speakOutput = handlerInput.t('LATENCY_MSG', {
            latency: msToReadableString(data.data.latency.internet_latency_avg_ms),
            server_location: translateServerLocationToCityName(data.data.latency.latency_server)
        });

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SpeedTestIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SpeedTestIntent';
    },

    async handle(handlerInput) {
        const data = await getUserData();
        const downloadSpeedReadableStr = mbpsToReadableString(data.data.download_speed_mbps);
        const uploadSpeedReadableStr = mbpsToReadableString(data.data.upload_speed_mbps);
        const bandwidthSpeedReadableStr = mbpsToReadableString(data.data.bandwidth);
        const speakOutput = handlerInput.t('SPEED_TEST_MSG', {
            isp: data.data.isp,
            download_speed: downloadSpeedReadableStr,
            upload_speed: uploadSpeedReadableStr,
        });

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const YesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent';
    },

    async handle(handlerInput) {
        const data = await getUserData();
        const downloadSpeedReadableStr = mbpsToReadableString(data.data.download_speed_mbps);
        const uploadSpeedReadableStr = mbpsToReadableString(data.data.upload_speed_mbps);
        const bandwidthSpeedReadableStr = mbpsToReadableString(data.data.bandwidth);
        const speakOutput = handlerInput.t('WELCOME_MSG_YES', {
            isp: data.data.isp,
            internet_speed: downloadSpeedReadableStr,
            bandwidth: bandwidthSpeedReadableStr,
            upload_speed: uploadSpeedReadableStr,
        });

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ignored in locales that do not support it yet
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = handlerInput.t('FALLBACK_MSG');

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder
            .speak(handlerInput.t('GOODBYE_MSG'))
            .getResponse(); // notice we send an empty response
    }
};

/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents
 * by defining them above, then also adding them to the request handler chain below
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = handlerInput.t('REFLECTOR_MSG', {intentName: intentName});

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = handlerInput.t('ERROR_MSG');
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// This request interceptor will bind a translation function 't' to the handlerInput
const LocalisationRequestInterceptor = {
    process(handlerInput) {
        i18n.init({
            lng: Alexa.getLocale(handlerInput.requestEnvelope),
            resources: languageStrings
        }).then((t) => {
            handlerInput.t = (...args) => t(...args);
        });
    }
};
/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        LatencyIntentHandler,
        SpeedTestIntentHandler,
        YesIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .addRequestInterceptors(
        LocalisationRequestInterceptor)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
