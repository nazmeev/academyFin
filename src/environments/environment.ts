// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: true,
	firebaseConfig: {
		apiKey: "AIzaSyC8nDs6ohAAr10SQtFYwLbidlxoDYF9RhM",
		authDomain: "info-boo.firebaseapp.com",
		databaseURL: "https://info-boo.firebaseio.com",
		projectId: "info-boo",
		storageBucket: "info-boo.appspot.com",
		messagingSenderId: "237835384051",
		appId: "1:237835384051:web:e67188cea9e808f948b386"
	},
	defaultPhotoURL:
		'https://firebasestorage.googleapis.com/v0/b/inventorsoft-academy-crm-45f71.appspot.com/o/uploads%2Fdefault?alt=media&token=e7a00e02-b3ab-4b97-8ad8-07f44954c808',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
