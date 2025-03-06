# Automated tests on RN

This project was used to learn about how to do automated tests on React Native.

We are using https://openweathermap.org/api as our Weather API and this [Figma template](<https://www.figma.com/design/pk16khzzFMUCeoNxmpCBhH/iWeather-%E2%80%A2-Projeto-React-Native-(Community)?node-id=7-703&t=2XKP8QZkab5GON9M-1>) to build our UI.

We implemented unit tests, component tests and integration tests using [Jest](https://jestjs.io)

# How to run

```sh
# run the expo app
npm start

# run unit and component tests
npm test

# Build Requirements
# - You have to npm i -g eas or use npx
# - Update YOUR_WEATHER_APP_ID_HERE on `eas.json`

# build preview .apk locally
eas build -p android --profile preview --local

# build production .aab on remote (expo.dev)
eas build -p android --profile production

# use EAS Update
eas update --branch {channel} --message "{your message about this update}"
```

# Deploy

We only deployed on Google Play Store since i'm not rich and this is just a test app.

We used some tools during the Play store config setup:

- [EAS](https://docs.expo.dev/build/introduction/): to build our app .apk and .aab file
- [Progressier](https://progressier.com/pwa-screenshots-generator): to build beautiful screenshots
- [Google Play Store Template](<https://www.figma.com/design/nWMkGndO51pIMob3yvfjAh/Google-Play-Store-Template-(Community)?node-id=4-227&t=ie1M4yc3t2rtrJPd-1>): to create the icon and feature graphics with the specified characteristics

## Issues

I had to update the expo version from v49 to v50 because since August 2024, Google Play Store has a requirement of a min Android API SDK version of v34 (expo v49 used Android API SDK v33).
