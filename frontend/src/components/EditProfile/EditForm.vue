<template>
  <v-form>
    <v-row
      no-gutters
      align="center">
      <v-col
        class="text-sm-right pr-4"
        cols="12"
        sm="3"
        md="2">
        <span>Name</span>
      </v-col>
      <v-col
        cols="12"
        sm="9"
        md="10">
        <v-text-field
          outlined
          dense
          hide-details
          type="name"
          class="my-2"
          v-model="name" />
      </v-col>
    </v-row>
    <v-row
      no-gutters
      align="center">
      <v-col
        class="text-sm-right pr-4"
        cols="12"
        sm="3"
        md="2">
        <span>Username</span>
      </v-col>
      <v-col
        cols="12"
        sm="9"
        md="10">
        <v-text-field
          outlined
          dense
          hide-details
          type="username"
          class="my-2"
          v-model="username" />
      </v-col>
    </v-row>
    <v-row
      no-gutters
      align="center">
      <v-col
        class="text-sm-right pr-4"
        cols="12"
        sm="3"
        md="2">
        <span>Website</span>
      </v-col>
      <v-col
        cols="12"
        sm="9"
        md="10">
        <v-text-field
          outlined
          dense
          hide-details
          type="text"
          class="my-2"
          v-model="website" />
      </v-col>
    </v-row>
    <v-row
      no-gutters
      align="start">
      <v-col
        class="text-sm-right pt-4 pr-4"
        cols="12"
        sm="3"
        md="2">
        <span>Bio</span>
      </v-col>
      <v-col
        cols="12"
        sm="9"
        md="10">
        <v-textarea
          outlined
          no-resize
          persistent-hint
          :hint="bio.trim().length + ' / 100'"
          :rules="bioRules"
          type="text"
          class="my-2"
          v-model="bio" />
      </v-col>
    </v-row>
    <v-row
      no-gutters
      align="center">
      <v-col
        cols="12"
        sm="3"
        md="2" />
      <v-col
        cols="12"
        sm="9"
        md="10">
        <v-btn
          @click="submit"
          :loading="loading"
          depressed
          block
          dark
          class="mt-4"
          color="blue">
          Save
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import isUrl from 'is-url';

export default ({
  name: 'EditForm',

  data() {
    return {
      loading: false,
      name: '',
      username: '',
      website: '',
      bio: '',
      bioRules: [
        bio => (bio ? bio.trim().length <= 100 : true) || 'Bio needs to be less than 100 characters long',
      ],
    };
  },

  computed: {
    ...mapGetters('auth', ['user']),
  },

  methods: {
    ...mapActions('auth', ['updateProfile']),

    submit() {
      this.loading = true;
      this.validate();
      this.$firebase.firestore().collection('users').where('username', '==', this.username).limit(1)
        .get()
        .then((collection) => {
          if (!collection.empty && collection.docs[0].data().uid !== this.user.uid) {
            console.error('Username is already in use');
            this.loading = false;
            return;
          }
          this.$firebase.firestore().collection('users').doc(this.user.uid)
            .update({
              name: this.name,
              username: this.username,
              website: this.website,
              bio: this.bio,
            })
            .then(() => {
              this.updateProfile({
                name: this.name,
                username: this.username,
                website: this.website,
                bio: this.bio,
              });
            })
            .finally(() => {
              this.loading = false;
            });
        })
        .catch((err) => {
          console.error(err);
          this.loading = false;
        });
    },

    validate() {
      this.name = this.name.trim();
      this.username = this.username.trim().toLowerCase().replace(' ', '-');
      this.website = this.website.trim().toLowerCase();
      this.bio = this.bio.trim();

      if (this.website && this.website.substring(0, 8) !== 'https://' && this.website.substring(0, 7) !== 'http://') {
        this.website = `https://${this.website}`;
      }

      if (!isUrl(this.website)) {
        this.website = null;
      }
    },
  },

  created() {
    this.name = this.user.name;
    this.username = this.user.username;
    this.website = this.user.website;
    this.bio = this.user.bio;
  },
});
</script>
