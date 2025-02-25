# Automated tests on RN

This project was used to learn about how to do automated tests on React Native.

We are using https://openweathermap.org/api as our Weather API and this [figma template](<https://www.figma.com/design/pk16khzzFMUCeoNxmpCBhH/iWeather-%E2%80%A2-Projeto-React-Native-(Community)?node-id=7-703&t=2XKP8QZkab5GON9M-1>) to build our UI.

We implemented unit tests, component tests and integration tests using [Jest](https://jestjs.io)

# How to run

```sh
# run the expo app
npm start

# run unit and component tests
npm test

# build preview .apk locally
eas build -p android --profile preview --local

# build production .aab on remote (expo.dev)
eas build -p android --profile production
```

# Deploy

We only deployed on Google Play Store since i'm not rich and this is just a test app.

We used some tools during the Play store config setup:

- [EAS](https://docs.expo.dev/build/introduction/): to build our app .apk and .aab file
- [Progressier](https://progressier.com/pwa-screenshots-generator): to build beautiful screenshots
- [Google Play Store Template](<https://www.figma.com/design/nWMkGndO51pIMob3yvfjAh/Google-Play-Store-Template-(Community)?node-id=4-227&t=ie1M4yc3t2rtrJPd-1>): to create the icon and feature graphics with the specified characteristics
