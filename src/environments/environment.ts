// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const AUTH_SERVICES_BASE_URL = 'https://apidev.challer.app';
export const environment = {
  production: false,
  CHALLENGE: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:id/challer?mac=-1`,
  CONFIGURATION: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/system/config`,
  ADVERTISING: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/advertising`,
  CONTACT: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/sent/email/contact`,
  CONTACT_CV: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/sent/email/contact/cv`,
  CHALLENGE_DETAIL: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:id/challenge`,

  /* ranking */
  AUTH_RANKING_MVP: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:userId/mvplist?all=:all`,
  AUTH_RANKING_POSITION: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:userId/positionlist?all=:all`,
  AUTH_RANKING_MVP_HEAD: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:userId/mvphead?`,
  AUTH_RANKING_MVP_POSITION: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:userId/mvpandpositionlist?`,
  CHALLENGE_HOME:  `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:userId/challengehome`,

  /* mosaic */
  CHALLENGE_MOSAIC: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:userId/challengeperfil`,
  CHALLENGE_LIKE: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:userId/challengelike?userprofileid=:userId2`,

  /*profile*/
  PROFILE: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:userId/biography?language=EN`,

  CDN_BUCKET: `https://storage.googleapis.com/challer-multimedia-bucket`,
  KEY_TAG_MANAGER: `GTM-T2G2TH8`,
  INSTAGRAM_LINK: `https://instagram.com/challerapp`,
  TWITTER_LINK: `https://twitter.com/ChallerApp`,
  FACEBOOK_LINK: `https://www.facebook.com/challerapp`,
  YOUTUBE_LINK: `https://www.youtube.com/channel/UC5hx9plJBJdbbPZ-eHddppg`,

  // download app
  GOOGLE_APP: `https://play.google.com/store/apps/details?id=com.challer`,
  IOS_APP: `https://apps.apple.com/us/app/challer-challenge-the-world/id1507245154`,
  RE_CAPTCHA_KEY: `6LfJJnAaAAAAALN7A1YDZuOPFSx46IQBEvi2qwaq`,

  GOOGLEAPIS_GEOLOCATION: 'https://www.googleapis.com/geolocation/v1/geolocate',
  google_api_map_key: 'AIzaSyBMt5T0QaxHg4Y3NjFcWH_h344TlFVDxgs',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
