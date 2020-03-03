const clone = require('clone-deep');
const admin = require('firebase-admin');
const users = admin.firestore().collection('users');

const defaultUser = {
  bio: '',
  email: '',
  followers_count: 0,
  following: [],
  following_count: 0,
  liked: [],
  name: '',
  picture: '',
  posts_count: 0,
  uid: '',
  username: '',
  website: '',
};

// Add a post to the User's profile when it is added to the 'Posts' collection
function addToDatabase(user) {
  return new Promise((resolve, reject) => {
    users.doc(user.uid).get()
      .then((document) => {
          if (document.exists) {
            reject(new Error('The user already exists'));
          } else {
            // Clone the default user
            const newUser = clone(defaultUser);
            // Generate a random username
            const username = 'user_' + user.uid;
            // Set proper values
            newUser.email = user.email;
            newUser.uid = user.uid;
            newUser.username = username;
            users.doc(user.uid).set(newUser)
              .then(() => {
                resolve('User added to the database');
              })
              .catch((err) => {
                reject(err);
              });
          }
        }).catch((err) => {
          reject(err);
        });
  });
}

module.exports = {
  addToDatabase
};
