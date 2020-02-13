<template>
  <h1>Sign Up</h1>
</template>

<script>
export default {
  name: 'SignUp',

  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    signup() {
      this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((auth) => {
          console.log(auth);
          this.$router.replace({ name: 'feed' });
        });
    },
  },
};
</script>
