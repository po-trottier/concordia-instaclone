<template>
  <v-container>
    <v-row
      no-gutters
      class="mt-1 narrow">
      <v-col
        col="12"
        md="2">
        <v-row
          justify="end"
          class="mb-7 mt-2">
          <app-user-avatar />
        </v-row>
      </v-col>
      <v-col md="8">
        <v-col class="mr-3 ml-10">
          <v-row class="mt-n3">
            <app-username />
          </v-row>
          <v-row>
            <app-change-dp />
          </v-row>
        </v-col>
      </v-col>
      <v-col />
    </v-row>
    <app-edit-form />
  </v-container>
</template>

<script >
import Username from './Username.vue';
import EditForm from './EditForm.vue';
import ChangeDP from './ChangeDP.vue';
import UserAvatar from './UserAvatar.vue';

export default ({
  name: 'InfoGrid',

  components: {

    appUsername: Username,
    appEditForm: EditForm,
    appChangeDp: ChangeDP,
    appUserAvatar: UserAvatar,
  },
});
</script>
