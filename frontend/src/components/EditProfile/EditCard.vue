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
            <h3>
              Edit Profile
            </h3>
            <v-btn
              color="error"
              class="ma-2 white--text"
              @click="logout">
              Logout
              <v-icon
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
import { mapGetters } from 'vuex';
import UserInfo from './UserInfo.vue';

export default ({
  name: 'EditCard',
  computed: {
    ...mapGetters('auth', ['loggedIn']),
  },
  methods: {
    logout() {
      localStorage.clear();
      // window.location.reload();
      this.$store.dispatch('auth/setUser', null, { root: true });
      this.$router.push({ name: 'landing' });
    },
  },
  components: {
    appUserInfo: UserInfo,
  },
});
</script>
