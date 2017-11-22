export const AUTH_CONFIG = {
  domain: 'antonvs.auth0.com',
  clientId: 'y5V78TK0JZBDdP70MEg5FsEHqlia1Rtn',
  callbackUrl: 'http://localhost:3000/callback',
  options: {
  	languageDictionary: {
  	  title: "BudgetTrip"
  	},
    theme: {
      logo: 'https://www.graphicsprings.com/filestorage/stencils/74cd6537a23f9e0bd1c4525d06517099.svg',
      primaryColor: '#3A99D8',
      socialButtonStyle: 'small'
    },
    allowedConnections: ['facebook'],
    allowLogin: true,
    loginAfterSignUp: true,
    closable: true,
    autoclose: true,
    oidcConformant: false,
    allowLogin: true,
  }
}

// domain: 'budget-trip.auth0.com',
// clientId: 'D6OeuBul3CsOwq7RO7nyUz5W41otGlFc',