<template>
  <v-sheet
    style="height: 100vh; width: 100vw;"
    color="light"
    tile>
    <v-container>
      <v-form @submit.prevent="login">
        <v-card
          elevation="6"
          class="pa-6 mx-auto my-12"
          style="max-width: 500px;">
          <v-card-title>
            <h1 class="mb-6 text-center">
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
                type="submit"
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
              <v-btn
                class="mx-2 mt-4"
                color="#3B5998"
                dark
                large
                title="Login with facebook account">
                <v-icon
                  dark>
                  mdi-facebook
                </v-icon>
              </v-btn>
              <v-btn
                class="mx-2 mt-4"
                color="#DB4437"
                dark
                large
                title="Login with google account">
                <v-icon
                  dark>
                  mdi-google
                </v-icon>
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

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
    ...mapGetters('auth', ['loggedIn']),

    valid() {
      return this.email
        && this.password
        && this.email.trim().length > 0
        && this.password.trim().length > 0;
    },
  },

  methods: {
    ...mapActions('auth', ['getUser']),

    login() {
      this.progress = true;
      this.$firebase.auth().setPersistence(this.$firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          this.$firebase.auth().signInWithEmailAndPassword(
            this.email.trim().toLowerCase(),
            this.password.trim(),
          ).then(({ user }) => {
            this.getUser(user.uid)
              .then(() => {
                this.$router.replace({ name: 'feed' });
              })
              .catch((err) => {
                console.error(err);
              });
          });
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          this.progress = false;
        });
    },
  },

  created() {
    if (this.loggedIn) {
      this.$router.replace({ name: 'feed' });
    }
  },
};

</script>
