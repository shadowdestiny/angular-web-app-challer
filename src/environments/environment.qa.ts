// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const AUTH_SERVICES_BASE_URL = 'https://apicalidad.challer.app';
export const environment = {
  production: false,
  CHALLENGE: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/:id/challer?mac=-1`,
  CONFIGURATION: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/user/system/config`,
  ADVERTISING: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/advertising`,
  CONTACT: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/sent/email/contact`,
  CONTACT_CV: `${AUTH_SERVICES_BASE_URL}/businesscore/api/v1/sent/email/contact/cv`,

  CDN_BUCKET: `https://storage.googleapis.com/challer-multimedia-bucket`
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
