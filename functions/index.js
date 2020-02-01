const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initialize Admin SDK
const certificate = require("./certificate.json");
if (!certificate) {
  console.error("Please unlock the Environment Variables before you start Firebase Functions...")
}
admin.initializeApp({
  credential: admin.credential.cert(certificate),
  databaseURL: "https://soen341-instaclone.firebaseio.com",
  storageBucket: "soen341-instaclone.appspot.com",
});

// Add the routes
const posts = require('./routes/posts');
exports.posts = functions.https.onRequest(posts.handler);
