# RPS Game
Rock, Paper, Scissors! Built with React and Firebase

## Demo
![rps-demo](https://user-images.githubusercontent.com/16625073/117898461-017f7900-b293-11eb-8ddb-dbaf096f3808.gif)

## Development Setup

### Prerequisites
- React
- Firebase
- npm

### Configuration
1) Clone the repo
2) Run ```npm install``` to install dependencies
3) Create a new Firebase project
4) Go to ```Authentication``` and click ```Get Started```. Enable login using Email/Password
5) In the new Firebase project, go to ```Firestore Database``` and create a new production database
6) After the database is created, go into the ```Rules``` tab and change the line ```allow read,write: if false``` to ```allow read,write: if true```
7) Go to ```Project Settings``` and create a new web app
8) Under ```SDK setup and configuration```, select config. You will use this config in for environment configuration in the next step.
9) Copy the file env.example and rename it to ```.env```. This file contains the name of required environment variables needed for the application to work.

```
# APPLICATION SETTINGS
NODE_ENV=
PORT=
BROWSER=none

# FIREBASE CONFIG
REACT_APP_API_KEY=                 # apiKey
REACT_APP_AUTH_DOMAIN=             # authDomain
REACT_APP_PROJECT_ID=              # projectId
REACT_APP_STORAGE_BUCKET=          # storageBucket
REACT_APP_MESSAGING_SENDER_ID=     # messagingSenderId
REACT_APP_APP_ID=                  # appId
```

10) Start the application using ```npm start```

### Deployment
Not currently deployed
