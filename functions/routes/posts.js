const admin = require('firebase-admin');
const field = admin.firestore.FieldValue;
const users = admin.firestore().collection('users');
const posts = admin.firestore().collection('posts');

// Add a post to the User's profile when it is added to the 'Posts' collection
function addToProfile(id, content) {
  return new Promise((resolve, reject) => {
    const user = users.doc(content.user);
    user.collection('posts').doc(id).set({
      id: id,
      comments_count: content.comments_count,
      likes_count: content.likes_count,
      picture: content.picture
    }).then(() => {
      user.update({
        posts_count: field.increment(1)
      })
        .then(() => {
          resolve('Added new Post');
        })
        .catch(() => {
          reject(new Error('Could not Update Posts Count'));
        });
    }).catch((err) => {
      console.error(err);
      posts.doc(id).delete()
        .then(() => {
          reject(new Error('Post Document '+ id +' Removed from Posts Collection'));
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

module.exports = {
  addToProfile
};
