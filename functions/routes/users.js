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
  'user_picture',
  'username'
];

// Add a new user to the database
function addToDatabase(user) {
  return new Promise((resolve, reject) => {
    // Clone the default user
    const newUser = clone(defaultUser);
    // Set proper values
    newUser.username = ('user_' + user.uid).substr(0, 10);
    newUser.email = user.email;
    newUser.uid = user.uid;
    newUser.name = user.displayName ? user.displayName : '';
    // Add to database
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
  return new Promise((resolve) => {
    const changes = [];
    // Determine which properties changed
    for (let [key, value] of Object.entries(before)) {
      if (after[key] !== value) {
        if (key === 'picture') {
          changes.push('user_picture');
        } else {
          changes.push(key);
        }
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
        updateField(item, before.uid, after[item === 'user_picture' ? 'picture' : item])
          .catch((err) => {
            console.error(err);
          });
      } else {
        resolve('Nothing changed');
      }
    });
    resolve('Some items were modified');
  });
}

function updateField(key, uid, value) {
  console.log('Updating ' + key + ' for ' + uid);
  return new Promise((resolve, reject) => {
    // Query all posts and update the proper field
    posts.get()
      .then((snapshot) => {
        if (snapshot.empty) {
          resolve();
          return;
        }
        snapshot.forEach(doc => {
          if (doc.data().user === uid) {
            const newVal = {};
            newVal[key] = value;
            posts.doc(doc.id).update(newVal)
              .then(() => {
                resolve();
              })
              .catch((err) => {
                reject(err);
              });
          }
          posts.doc(doc.id).collection('comments')
            .where('user', '==', uid)
            .get()
            .then((collection) => {
              if (collection.empty) {
                resolve();
                return;
              }
              collection.forEach((elem) => {
                const newVal = {};
                newVal[key] = value;
                posts.doc(doc.id).collection('comments').doc(elem.id)
                  .update(newVal)
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
            })
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
