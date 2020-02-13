<template>
  <div class="px-6">
    <v-row
      no-gutters
      class="mb-4">
      <v-col
        cols="12"
        sm="3"
        md="2" />
      <v-col
        cols="12"
        sm="9"
        md="10">
        <v-row
          no-gutters
          align="center">
          <v-avatar size="64">
            <v-img src="@/assets/account-placeholder.png" />
          </v-avatar>
          <v-col class="pl-5">
            <span style="font-weight: 400; font-size: 1.3rem;">
              radleycarpio
            </span>
            <app-change-dp />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <app-edit-form />
  </div>
</template>

<script >
import EditForm from './EditForm.vue';
import ChangeDP from './ChangeDP.vue';

export default ({
  name: 'InfoGrid',
  components: {
    appEditForm: EditForm,
    appChangeDp: ChangeDP,
  },
});
</script>
