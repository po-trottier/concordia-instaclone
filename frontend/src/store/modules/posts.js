import firebase from 'firebase';
import clone from 'clone-deep';

// TEMP
const defaultPost = {
  comments_count: 0,
  description: 'This is the default description',
  id: null,
  likes_count: 0,
  picture: null,
  tags: ['test'],
  timestamp: null,
  user: '',
  user_picture: '',
  username: '',
};

const state = {
  posts: [],
};

const getters = {
  getPosts: s => s.posts,
};

const mutations = {
  mutatePosts: (s, payload) => {
    s.posts = payload;
  },
};

const actions = {
  queryPosts: (context, payload) => {
    // TODO Payload should be a list of the users followed so we can query the proper posts
    console.log(payload);

    firebase.firestore().collection('posts').orderBy('timestamp', 'desc').get()
      .then((snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push(doc.data());
        });
        context.commit('mutatePosts', results);
      })
      .catch((err) => {
        console.error(err);
      });
  },

  addPost: (context, payload) => new Promise((resolve, reject) => {
    const results = clone(context.getters.getPosts);

    // TODO Payload should be a properly constructed post
    const post = clone(defaultPost);

    // Rename File to Unique ID
    const name = (new Date()).getTime().toString(32)
      + Math.floor(1E10 * Math.random()).toString(32);
    const extension = payload.file.name.split('.').pop();
    const file = new File(
      [payload.file],
      `${name}.${extension}`,
      { type: payload.file.type },
    );

    // Upload Photo
    firebase.storage().ref().child(`posts/${name}.${extension}`).put(file)
      .then(({ ref }) => {
        console.log('Picture was Uploaded!');

        // Set important values for default post
        post.timestamp = firebase.firestore.FieldValue.serverTimestamp();
        post.picture = `gs://${ref.bucket}/${ref.fullPath}`;
        post.id = name;
        post.description = payload.description;

        // Get the current user's info
        const user = context.rootGetters['auth/user'];
        post.user = user.uid;
        post.user_picture = user.picture;
        post.username = user.username;

        // Add the post to the Database
        firebase.firestore().collection('posts').doc(name).set(post)
          .then(() => {
            console.log('Post was added to the Database!');

            // Add the post at the top of the current posts
            results.splice(0, 0, defaultPost);
            context.commit('mutatePosts', results);

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
  }),
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
