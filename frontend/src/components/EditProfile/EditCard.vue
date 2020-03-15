<template>
  <v-container class="mt-10">
    <v-card
      class="narrow"
      outlined
      flat>
      <v-card-text class="px-0 py-8">
        <v-row no-gutters>
          <v-col
            style="border-right: solid 1px rgba(0,0,0,0.2);"
            class="px-6 hide-mobile"
            cols="12"
            sm="3">
            <h3 class="text-center">
              Edit Profile
            </h3>
            <v-btn
              block
              depressed
              dark
              text
              color="error"
              class="mt-4"
              @click="logout">
              Sign Out
              <v-icon
                small
                right
                dark>
                mdi-logout
              </v-icon>
            </v-btn>
          </v-col>
          <v-col
            cols="12"
            sm="9">
            <app-user-info />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import UserInfo from './UserInfo.vue';

export default ({
  name: 'EditCard',

  methods: {
    ...mapActions('auth', ['setUser']),

    logout() {
      this.$firebase.auth().signOut();
      this.setUser(null);
      this.$router.replace({ name: 'landing' });
    },
  },

  components: {
    appUserInfo: UserInfo,
  },
});
</script>
