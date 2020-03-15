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
          <v-card-title class="justify-center text-center">
            <h1 class="mb-10 text-center">
              Welcome to
              <v-img
                src="@/assets/text-logo.svg"
                height="5rem"
                contain />
            </h1>
          </v-card-title>
          <v-card-subtitle class="justify-center text-center pa-0">
            <v-btn
              @click="facebook"
              color="facebook"
              depressed
              dark
              rounded
              large>
              <v-icon
                dark
                class="mr-3">
                mdi-facebook
              </v-icon>
              Sign In with Facebook
            </v-btn>
            <v-btn
              @click="google"
              class="mt-4"
              color="google"
              depressed
              dark
              rounded
              large>
              <v-icon
                dark
                class="mr-3">
                mdi-google
              </v-icon>
              Sign In with Google
            </v-btn>
            <p class="md-font my-6">
              OR
            </p>
          </v-card-subtitle>
          <v-card-text>
            <v-text-field
              v-model="email"
              class="mb-4"
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
          <v-card-actions class="pt-0">
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
    ...mapActions('auth', ['getUser', 'updateUser']),

    facebook() {
      const provider = new this.$firebase.auth.FacebookAuthProvider();
      this.$firebase.auth().setPersistence(this.$firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          this.$firebase.auth().signInWithPopup(provider)
            .then(({ user }) => {
              this.updateUser({
                uid: user.uid,
                picture: user.photoURL,
                name: user.displayName,
              })
                .then(() => {
                  this.getUser(user.uid)
                    .then(() => {
                      this.$router.replace({ name: 'feed' });
                    })
                    .catch((err) => {
                      console.error(err);
                    });
                })
                .catch((err) => {
                  console.error(err);
                });
            });
        })
        .catch((err) => {
          console.error(err);
        });
    },

    google() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase.auth().setPersistence(this.$firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
          this.$firebase.auth().signInWithPopup(provider)
            .then(({ user }) => {
              this.updateUser({
                uid: user.uid,
                picture: user.photoURL,
                name: user.displayName,
              })
                .then(() => {
                  this.getUser(user.uid)
                    .then(() => {
                      this.$router.replace({ name: 'feed' });
                    })
                    .catch((err) => {
                      console.error(err);
                    });
                })
                .catch((err) => {
                  console.error(err);
                });
            });
        })
        .catch((err) => {
          console.error(err);
        });
    },

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
