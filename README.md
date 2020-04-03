# Instaclone

[![Build and Deploy](https://github.com/po-trottier/concordia-software-processes/workflows/Build%20and%20Deploy/badge.svg)](https://github.com/po-trottier/concordia-software-processes/actions)

This project is meant to be an Instagram clone and was created for Concordia's SOEN 341 (Software Process) Course.

**[Link to the website](https://soen341-instaclone.web.app/)**

---

### Written by:

- Manar Alchirazi Alsabbagh - **LerouxManar** - *(40058611)*
- Radley Carpio - **radley-carpio** - *(40074888)*
- Stephen Frattaroli - **sfratt** - *(27567634)*
- Seyedeh Mansoureh Edalati Mirzabeigi - **mansiedi1980** - *(40037283)*
- Hoda Nourbakhsh - **hodanourbakhsh** - *(40066450)*
- Pierre-Olivier Trottier - **po-trottier** - *(40059235)*

### Objectives:

- Imitate the main features Instagram offers to users
- Core features: **DONE**
    - ~~Being able to see a landing page when i'm not logged in~~
    - ~~Being able to log in~~
    - ~~Being able to post a photo~~
    - ~~Being able to follow the users~~
    - ~~Being able to create an account~~
    - ~~Being able to comment on the post~~
    - ~~Being able to log in using Google and Facebook~~
    - ~~Being able to add a description with Hashtags to the post~~
    - ~~Being able to search for users~~
    - ~~Having a customizable personal profile~~
    - ~~Being able to search for Hashtags and see related posts~~ *Will not implement*
    - ~~Having access to the app in French and in English~~ *Will not implement*
    
### Acceptance Tests    
    
|Steps to take|Expected Output|
|---|---|
|Open the website|Should see a welcome page that lets you login and create a new account|
|Click the create an account button|Should bring you to a new page that lets you create a new account and set profile details|
|Create an account|Should log you in after the account creation is succesful and bring you to the feed|
|On the login screen click the "Forgot password button"|Should redirect you to the "Forgot Password" page|
|On the "Forgot Password" page, enter a valid email for which there is an account|Should receive a password reset email|
|On the login screen, fill in your information and click log in|Should log you in after the account creation is succesful and bring you to the feed|
|Click on the "Login with Facebook" and "Google"|You should be able to login with a brand new profile when it's your first time logging in.|
|Click on the "Login with Facebook" and "Google" when you already have an account|You should be able to login with your existing profile.|
|Click on the "Login with Facebook" and "Google" when you already have an account with the same email|You should get an error saying to log in with your email and password.|
|On the feed, if you click the like button on a post|The post's like counter should go up if it's not already liked or down if it is. The heart button should also change colors accordingly (red = liked, grey = not liked)|
|If you click on a post's image|You should be brought to that post's details page where you can see the comments on that post|
|Write a comment and post it|Comment should be added to the photo and should still be there after a refresh.|
|On the feed, if you click on the user name or image|You should be brought to that user profile page.|
|Wherever on the app, if you click on the instagram logo in the banner|You should be brought to the user feed.|
|If you click on on the profile icon|You should be brought to your profile page.|
|If you click on the edit profile button|The user should be directed to your profile information and should be able to edit the information.|
|A suggested account list is available on the feed|Suggested accounts can be directly followed with a follow button and the user following counter goes up.|
|A suggested account list is available on the feed|Accounts with the most followers should be at the top|
|Click on the "New Post" button |You should be brought to the "new post page" where you will be able to add a picutre and a picture description.|
|If you click on the file selection field|You should be able to select a file to upload and be limited to an image with a size of less than 5MB|
|If you fill in the caption box|You should be able to see that caption once the post is added|
|If you click the "Add Post" button on the "Add post" page|Your post should be uploaded and then you should be redirected to the feed where you should see it|
|If you click on a user's profile that is not yours|You should see their profile and be able to follow them|
|If you follow them already|There should be an "unfollow" button on the page|
|If you don't already follow them|There should be a "follow" button on the page|
|When you click the "follow" button|Your following count and their followers count your should go up and the person's posts should be visible on the feed the next time it's loaded|
|When you click the "unfollow" button|Your following count and their followers count should go down and the person's posts should no longer be visible on the feed when it's loaded|

### Technology Stack

- Frontend:
    - *Vue.JS*
- Backend:
    - *Firebase Functions + Firebase Authentication*
- Database:
    - *Firebase Firestore + Firebase Storage*
- Continuous Integration
    - *GitHub Actions*
- Hosting:
    - *Firebase Hosting*
- Unit Testing:
    - *Mocha + Chai*

### Organizational Block Diagram

![Block Diagram](block-diagram.png)

### Useful Commands

- Deploy to Firebase
    - `npm run deploy`
- Run Firebase Emulators
    - `npm run emulate`
- Install All Required Dependencies
    - `npm run install-all`
- Install Front-End Dependencies
    - `npm run install-frontend`
- Install Firebase Functions Dependencies
    - `npm run install-functions`
- Lock Front-End Environment Variables
    - `npm run lock-frontend PASSWORD_HERE`
- Lock Firebase Functions Environment Variables
    - `npm run lock-functions PASSWORD_HERE`
- Unlock Front-End Environment Variables
    - `npm run unlock-frontend PASSWORD_HERE`
- Unlock Firebase Functions Environment Variables
    - `npm run unlock-functions PASSWORD_HERE`

### Useful Links

- [Frontend README](https://github.com/po-trottier/concordia-software-processes/blob/master/frontend/README.md)
- [Backend README](https://github.com/po-trottier/concordia-software-processes/blob/master/functions/README.md)
