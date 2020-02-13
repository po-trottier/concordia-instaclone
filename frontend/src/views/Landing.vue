<template>
  <v-sheet
    style="height: 100vh; width: 100vw;"
    color="light"
    tile>
    <v-container>
      <v-card
        elevation="6"
        class="pa-6 mx-auto my-12"
        style="max-width: 500px;">
        <v-card-title>
          <h1 class="mb-6">
            Welcome to Instaclone
          </h1>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="email"
            class="mb-6"
            outlined
            rounded
            hide-details
            type="email"
            placeholder="E-mail" />
          <v-text-field
            v-model="password"
            outlined
            rounded
            hide-details
            type="password"
            placeholder="Password" />
        </v-card-text>
        <v-card-actions>
          <v-col class="text-center">
            <v-btn
              large
              block
              depressed
              rounded
              @click="login"
              :loading="progress"
              :disabled="!valid"
              color="primary"
              class="mb-4">
              Sign In
            </v-btn>
            <v-btn
              large
              block
              text
              rounded
              :to="{ name: 'signup' }">
              Create an Account
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {
      email: null,
      password: null,
      progress: false,
    };
  },

  computed: {
    valid() {
      return this.email
        && this.password
        && this.email.trim().length > 0
        && this.password.trim().length > 0;
    },
  },

  methods: {
    login() {
      this.progress = true;
      this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(({ user }) => {
          this.progress = false;
          console.log(user.uid);
          this.$router.replace({ name: 'feed' });
        });
    },
  },
};

</script>
