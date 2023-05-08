# Restuarants
Restaurant App show a list of restaurants of a specific location. This task is part of Inova hiring process. 
This taks is part of Inova hiring procces.

Restaurants App is a mobile application that display a list of restaurants from [Yelp API](https://www.yelp.com/developers)
developed with [react-native](https://reactnative.dev/).

## Getting started

### Setup the development environment

Follow the instructions from react native [docs](https://reactnative.dev/docs/environment-setup).
Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)

### Installation

- Clone this repo or download the ZIP file.
- Make your own [API_KEY](https://docs.developer.yelp.com/docs/getting-started)
- Create .env file in your project root and add the api key
  `API_KEY=YourApiKey`
- Open the terminal inside the project root.
- Run the following commands :
  - `yarn install` to download the dependencies and generates node_module.
  - `yarn start` to starts Metro Bundler.
  - `yarn android` to run on android device/emulator.
  - `yarn ios` to run on ios device/emulator. (Note: I havn't tested the app on ios machine)

## API and External libraries

- [Yelp API](https://www.yelp.com/developers).
- [React Navigation](https://reactnavigation.org/docs/getting-started/#installation) (native/native-stack/buttom-tabs/top-tabs)
- [react-native-config](https://github.com/luggit/react-native-config)
- [axios](https://axios-http.com/docs/intro)

## More about the app

The app main functionality is to displays a list of restaurants sources fetched through a web API.

The app contain 2 main screens :

- Home Screen, which contains a list of restaurants

- details screen to show the restaurant main address on map with showing its addresses as a text. 

### TODO

- [ ] Improve and complete UI requirments
- [ ] Complete details screen (Mainly Map SDk)
- [ ] Add documentation to the code
- [ ] Test the app componants and functions ([Jest](https://jestjs.io/),[React Native Testing](https://callstack.github.io/react-native-testing-library/))
- [ ] Follow [React Native Accessibility](https://reactnative.dev/docs/accessibility) guides
- [ ] Run on ios 
