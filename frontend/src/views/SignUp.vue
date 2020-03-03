<template>
  <v-sheet
    style="height: 100vh; width: 100vw;"
    color="light"
    tile>
    <v-container>
      <v-form @submit.prevent="signup">
        <v-card
          elevation="6"
          class="pa-6 mx-auto my-12 justify-center"
          style="max-width: 500px;">
          <v-card-title
            class="justify-center">
            <h1>
              Sign Up
            </h1>
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="email"
              class="mb-3"
              outlined
              rounded
              hide-details
              clearable
              type="email"
              placeholder="E-mail" />
            <v-text-field
              v-model="user"
              class="mb-3"
              outlined
              rounded
              hide-details
              clearable
              type="text"
              placeholder="Username" />
            <v-text-field
              v-model="password"
              class="mb-3"
              outlined
              rounded
              hide-details
              clearable
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
                color="primary"
                class="mt-n4">
                Register
              </v-btn>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'SignUp',

  data() {
    return {
      email: null,
      password: null,
      user: null,
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
