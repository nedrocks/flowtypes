/* @flow */

// A set of flow type definitions for the alexa skill kit (ASK) types.
// See  https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interface-reference
// for more information.

export type ASKRequestTypeLaunchRequest = "LaunchRequest";
export type ASKRequestTypeIntentRequest = "IntentRequest";
export type ASKRequestTypeSessionEndedRequest = "SessionEndedRequest";

export type ASKOutputSpeechType = "PlainText" | "SSML";

// This is the same as a string but making a typedef so we can differentiate
// easier where it will be used.
export type ASKOutputSpeechSSMLMarkup = string;

export type ASKOutputCardSimpleType = "Simple";
export type ASKOutputCardStandardType = "Standard";
export type ASKOutputCardLinkAccountType = "LinkAccount";

export type ASKSessionEndedReason = "USER_INITIATED" | "ERROR" | "EXCEEDED_MAX_REPROMPTS";

export type ASKSessionEndedRequest = {
  type: ASKRequestTypeSessionEndedRequest,
  requestId: string,
  timestamp: string,
  reason: ASKSessionEndedReason
}

export type ASKIntentObject = {
  name: string,
  slots: Object
};

export type ASKIntentRequest = {
  type: ASKRequestTypeIntentRequest,
  requestId: string,
  timestamp: string,
  intent: ASKIntentObject
}

export type ASKLaunchRequest = {
  type: ASKRequestTypeLaunchRequest,
  requestId: string,
  // NOTE: ISO 8601 timestamp.
  timestamp: string,
}

export type ASKSessionUserContainer = {
  userId: string,
  accessToken: ?string
};

export type ASKSessionApplicationContainer = {
  applicationId: string
};

export type ASKSession = {
  new: boolean,
  sessionId: string,
  attributes: Object,
  application: ASKSessionApplicationContainer,
  user: ASKSessionUserContainer
};

export type ASKRequestBody = ASKLaunchRequest | ASKIntentRequest | ASKSessionEndedRequest;

export type ASKRequestObject = {
  version: string,
  session: ASKSession,
  request: ASKRequestBody
};

export type ASKOutputSpeechPlainText = {
  type: ASKOutputSpeechType,
  text: string,
  ssml: null
};

export type ASKOutputSpeechSSML = {
  type: ASKOutputSpeechType,
  text: null,
  ssml: ASKOutputSpeechSSMLMarkup
};

export type ASKOutputSpeech = ASKOutputSpeechPlainText | ASKOutputSpeechSSML

export type ASKOutputCardSimple = {
  type: ASKOutputCardSimpleType,
  title: ?string,
  content: ?string,
}

export type ASKOutputCardImageField = {
  smallImageUrl: ?string,
  largeImageUrl: ?string
}

export type ASKOutputCardStandard = {
  type: ASKOutputCardStandardType,
  title: ?string,
  text: ?string,
  image: ASKOutputCardImageField
}

export type ASKOutputCardLinkAccount = {
  type: ASKOutputCardLinkAccountType
};

export type ASKOutputCard = ASKOutputCardSimple | ASKOutputCardStandard | ASKOutputCardLinkAccount

export type ASKResponseReprompt = {
  outputSpeech: ?ASKOutputSpeech,
};

export type ASKResponseBody = {
  outputSpeech: ?ASKOutputSpeech,
  card: ?ASKOutputCard,
  reprompt: ?ASKResponseReprompt,
  shouldEndSession: boolean
}

export type ASKResponseObject = {
  version: string,
  sessionAttributes: ?Object,
  response: ASKResponseBody,
}
