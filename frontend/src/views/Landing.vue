<template>
  <div>
    <h2>Insta<span>Clone</span></h2>
    <v-container>
      <v-input-field v-model="user" /><br>
      <v-input-field v-model="pass" /><br>

      <v-btn :to="{name: 'feed'} " text small>
        Log in
      </v-btn>

      <v-btn :to="{name: 'signup' }" text small>
        sign up
      </v-btn>

    </v-container>
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-expressions
  this.$firebase;

  export default {
    name: 'Landing',
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
            alert('Welcome to insta clone'); this.$router.replace({ name: 'SignUp' });
          });
      },

      login() {
        this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then((auth) => {
            alert('You are signed in'); this.$router.replace({ name: 'Feed' });
          });
      },
    },
  };

</script>
