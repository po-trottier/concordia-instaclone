<template>
  <v-container class="mt-10 edit">
    <v-card
      class="narrow"
      outlined
      flat>
      <v-row no-gutters>
        <v-col
          col="9"
          md="3">
          <v-row
            class="ml-7 mt-4"
            style="font-size: 1.05rem; font-weight: 550;">
            Edit Profile
          </v-row>
        </v-col>
        <v-divider vertical />
        <v-col
          class="py-4 px-7">
          <app-user-info />
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import UserInfo from './UserInfo.vue';

export default ({
  name: 'EditCard',
  components: { appUserInfo: UserInfo },
});
</script>
