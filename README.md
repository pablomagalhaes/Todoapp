# Authentication and TODO - React Native App

### Simple app with authentication and TODO on Firebase

[Auth TODO App - APK DOWNLOAD](https://drive.google.com/file/d/iew?usp=sharing)

## Main features:
- Login screen that authenticate with Facebook and Email method by Firebase
- Sign Up screen that create account with Facebook and Email method  by Firebase
- Use Firebase Realtime database and Firebase Authentication
- A todo **crud** that should **synchronize** with [firebase realtime database]


## The Project 

- Use [ES6](http://es6-features.org/#Constants)
- Use [React ](https://reactjs.org/)
- Use [React Native ](https://facebook.github.io/react-native/)
- Use [Redux](https://redux.js.org/)


#### Third-party Libraries
- [redux-thunk](https://github.com/reduxjs/redux-thunk) : A middleware for Redux
- [react-native-localization](https://developer.android.com/topic/libraries/support-library/index.html): Library to internalization strings.
- [react-navigation](https://reactnavigation.org/) : To routing and navigation 
- [react native elements](https://react-native-training.github.io/react-native-elements/) : To use native UI components
- [axios](https://github.com/axios/axios) : To make XMLHttpRequests, Intercept request and response, Automatic transforms for JSON data, Supports the Promise API
- [momentjs](https://momentjs.com/) : To parse, validate, manipulate, and display dates and times in JavaScript.

### Tools and Build

This project was built using Android Studio 3.4. To edit this project, is recomended to use the *Import Project* from Android Studio.
The application can also be built using command line. In a machine with Java 8 or newer installed and configured, checkout the root project and run `gradlew assembleDebug`. The resulting APK can be found in `project/app/build/outputs/apk/prod/debug/app-prod-debug.apk`.

#### Build variants
Use the Android Studio *Build Variants* button to choose between **prodDebug** or **prodRelease** flavors to use project consuming the real api .

If you wish run tests should choose **mockdebug** build variant . 


## Screens


 Doing Email Sign In       |  Doing Facebook Sign In          | Sign Up with Email                   
:-------------------------:|:-------------------------:|:-------------------------:|
<img src="gifs/listing_movies.gif" width="180" height="320">  |    <img src="gifs/show_movie_details.gif" width="180" height="320">  |    <img src="gifs/search_movies.gif" width="180" height="320"> 



 Listing Todo's             |  Adding Todo             | Removing Todo        | Editing Todo   | Completing Todo                
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|
<img src="gifs/listing_movies.gif" width="180" height="320">  |    <img src="gifs/show_movie_details.gif" width="180" height="320">  |    <img src="gifs/search_movies.gif" width="180" height="320"> |    <img src="gifs/updating_movies.gif" width="180" height="320"> |    <img src="gifs/updating_movies.gif" width="180" height="320">



© Denis Vieira Rufino
