// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production:                      false,
  STATIC_URL:                      'http://localhost:8081/static',
  AUTH_URL:                        'http://localhost:8081/auth',
  API_URL:                         'http://localhost:8081/api',
  LOG_URL:                         'http://localhost:8081/log',
  SOCKET_SERVER_URL:               'http://localhost:8081',
  SOCKET_SERVER_SECURE_CONNECTION: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
