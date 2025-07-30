# Accessibility Test

Example application that run the some a11y checks on ODS components using:
- [axe-core](https://www.npmjs.com/package/axe-core)
- [lighthouse](https://www.npmjs.com/package/lighthouse)

## To run axe-core check

Run the app using `npm start`, open the browser on the started server url and click on the top left button.

## To run lighthouse check

Before running lighthouse, ensure you have Google Chrome installed on your machine, then:
- start the production server: `npm run start:prod`
- run the following command: `URL=<STATIC_SERVER_URL> npm run lighthouse`
- the result page will be available in the `dist` directory
