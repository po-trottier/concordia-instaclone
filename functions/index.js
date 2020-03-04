const functions = require('firebase-functions');
const admin = require('firebase-admin');

const posts = require('./routes/posts');
const users = require('./routes/users');

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
exports.posts = functions.firestore.document('posts/{postId}')
  .onCreate((snapshot, context) => {
    return posts.addToProfile(context.params.postId, snapshot.data());
  });
exports.users = functions.auth.user()
  .onCreate((user) => {
    return users.addToDatabase(user);
  });
exports.information = functions.firestore.document('users/{userId}')
  .onUpdate((change, context) => {
    return users.editInformation(context.params.userId, change.before.data(), change.after.data());
  });
