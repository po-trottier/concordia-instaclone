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
import UserInfo from './UserInfo.vue';

export default ({
  name: 'EditCard',

  components: {
    appUserInfo: UserInfo,
  },
});
</script>
