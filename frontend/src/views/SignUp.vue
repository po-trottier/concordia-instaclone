<template>
  <v-sheet
    style="height: 100vh; width: 100vw;"
    color="light"
    tile>
    <v-container>
      <v-form
        @submit.prevent="signup"
        v-model="valid">
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
              class="mb-4"
              outlined
              rounded
              hide-details
              clearable
              type="email"
              placeholder="E-mail"
              :rules="rules" />
            <v-text-field
              v-model="user"
              class="mb-4"
              outlined
              rounded
              hide-details
              clearable
              type="text"
              placeholder="Username"
              :rules="rules" />
            <v-text-field
              v-model="password"
              class="mb-4"
              outlined
              rounded
              hide-details
              clearable
              type="password"
              placeholder="Password"
              :rules="passlength" />
            <v-text-field
              v-model="name"
              class="mb-4"
              outlined
              rounded
              hide-details
              clearable
              type="text"
              placeholder="Name"
              required
              :rules="rules" />
            <v-textarea
              v-model="bio"
              class="mb-4"
              outlined
              rounded
              hide-details
              clearable
              type="text"
              placeholder="Bio (Optional)" />
            <v-text-field
              v-model="website"
              class="mb-4"
              outlined
              rounded
              hide-details
              clearable
              type="link"
              placeholder="Website (Optional)"
              validate-on-blur />
          </v-card-text>
          <v-card-actions>
            <v-col class="text-center">
              <v-btn
                :disabled="!valid"
                large
                block
                depressed
                rounded
                type="submit"
                :loading="progress"
                color="primary"
                class="mt-n4"
                @click="submit">
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
      progress: false,
      name: null,
      bio: null,
      website: null,
      rules: [
        value => !!value || 'Required.',
        value => value.trim().length > 0 || 'Enter Valid Name or Username'],
      passlength: [
        value => value.trim().length > 0 || 'Required.',
        value => (value || '').length >= 8 || 'min 8 characters'],
    };
  },
  methods: {
    validate() {
      if (this.$refs.signup().validate()) {
        this.snackbar = true;
      }
    },
    check() {
      this.$firebase.database().ref().child('users').orderByChild('username')
        .equalTo(this.username)
        .on('value', (snapshot) => {
          if (snapshot.exists()) {
            console.log('Username unavailable');
          } else {
            console.log('Username Available');
          }
        });
    },
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
