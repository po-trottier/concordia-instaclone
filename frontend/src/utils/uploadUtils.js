import firebase from 'firebase';

function upload(context, file) {
  return new Promise((resolve, reject) => {
    firebase.storage().ref().child(`users/${context.getters.user.uid}`)
      .put(file)
      .then(({ ref }) => {
        console.log('Picture was Uploaded!');
        // Add to the Database
        firebase.firestore().collection('users').doc(context.getters.user.uid)
          .update({
            picture: `gs://${ref.bucket}/${ref.fullPath}`,
          })
          .then(() => {
            console.log('DP was added to the Database!');
            context.dispatch('updateProfile', {
              picture: `gs://${ref.bucket}/${ref.fullPath}`,
            });
            // Resolve the Promise
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default {
  upload,
};
