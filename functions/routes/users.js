const clone = require('clone-deep');
const admin = require('firebase-admin');
const users = admin.firestore().collection('users');
const posts = admin.firestore().collection('posts');

const defaultUser = {
  bio: '',
  email: '',
  followers_count: 0,
  following: [],
  following_count: 0,
  likes: [],
  name: '',
  picture: '',
  posts_count: 0,
  uid: '',
  username: '',
  website: '',
};

const fieldsToChange = [
  'picture',
  'username'
];

// Add a new user to the database
function addToDatabase(user) {
  return new Promise((resolve, reject) => {
    // Clone the default user
    const newUser = clone(defaultUser);
    // Generate a random username
    const username = ('user_' + user.uid).substr(0, 10);
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
  });
}

// Edit user information
function editInformation(id, before, after) {
  return new Promise((resolve, reject) => {
    const changes = [];
    // Determine which properties changed
    for (let [key, value] of Object.entries(before)) {
      if (after[key] !== value) {
        changes.push(key);
      }
    }
    // If nothing changed return
    if (changes.length === 0) {
      resolve('Nothing changed');
      return;
    }
    // Change every property that changed
    changes.forEach((item) => {
      if (fieldsToChange.includes(item)) {
        updateField(item, before.uid, after.picture)
          .then(() => {
            resolve(item + ' Updated');
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        resolve('Nothing changed');
      }
    });
  });
}

function updateField(key, before, after) {
  return new Promise((resolve, reject) => {
    // Query all posts and update the proper field
    posts.where('uid', '==', before).get()
      .then((snapshot) => {
        if (snapshot.empty) {
          reject(new Error('User not found'));
          return;
        }
        snapshot.forEach(doc => {
          const newVal = {};
          newVal[key] = after;
          posts.doc(doc.id).update(newVal)
            .then(() => {
              resolve();
            })
            .catch((err) => {
              reject(err);
            });
        });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  addToDatabase,
  editInformation
};
