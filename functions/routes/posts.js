const admin = require('firebase-admin');
const field = admin.firestore.FieldValue;
const users = admin.firestore().collection('users');
const posts = admin.firestore().collection('posts');

// Add a post to the User's profile when it is added to the "Posts" collection
function addToProfile(id, content) {
  const user = users.doc(content.user);
  user.collection('posts').doc(id).set({
    picture: content.picture
  }).then(() => {
    user.update({
      posts_count: field.increment(1)
    })
      .then(() => { console.log("Updated Posts Count") })
      .catch(() => { console.error("Could not Update Posts Count") });
    console.log("Post " + id + " Added to Profile");
  }).catch((err) => {
    console.error(err);
    posts.doc(id).delete()
      .then(() => {
        console.warn("Post Document "+ id +" Removed from Posts Collection")
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

module.exports = {
  addToProfile
};
