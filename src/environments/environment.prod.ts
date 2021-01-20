// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const AUTH_SERVICES_BASE_URL = 'https://api.challer.app';
export const environment = {
  production: true,
  CHALLENGE: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:id/challer?mac=-1`,
  CONFIGURATION: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/system/config`,
  ADVERTISING: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/advertising`,
  CONTACT: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/sent/email/contact`,
  CONTACT_CV: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/sent/email/contact/cv`,
  CHALLENGE_DETAIL: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/-1/challenge`,

  CDN_BUCKET: `https://storage.googleapis.com/challer-multimedia-bucket`,
  KEY_TAG_MANAGER: `GTM-MPSJSLW`,
  INSTAGRAM_LINK: `https://instagram.com/challerapp`,
  TWITTER_LINK: `https://twitter.com/ChallerApp`,
  FACEBOOK_LINK: `https://www.facebook.com/challerapp`,
  YOUTUBE_LINK: `https://www.youtube.com/channel/UC5hx9plJBJdbbPZ-eHddppg`,

  // download app
  GOOGLE_APP: `https://play.google.com/store/apps/details?id=com.challer`,
  IOS_APP: `https://apps.apple.com/us/app/challer-challenge-the-world/id1507245154`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
