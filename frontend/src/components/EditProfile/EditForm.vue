<template>
  <v-form ref="form">
    <v-row no-gutters>
      <v-col
        col="12"
        md="2">
        <v-row
          class="mb-6"
          justify="end"
          style="font-size: 1.05rem; font-weight: 550;">
          Name
        </v-row>
        <v-row
          class="mb-6"
          justify="end"
          style="font-size: 1.05rem; font-weight: 550;">
          Username
        </v-row>
        <v-row
          class="mb-6"
          justify="end"
          style="font-size: 1.05rem; font-weight: 550;">
          Bio
        </v-row>
      </v-col>
      <v-col
        md="7"
        class="ml-12 pl-1 mt-n2">
        <v-row>
          <v-text-field
            outlined
            dense
            v-model="name" />
        </v-row>
        <v-row class="mt-n4">
          <v-text-field
            outlined
            dense
            v-model="username" />
        </v-row>
        <v-row class="mt-n4">
          <v-text-field
            outlined
            dense
            v-model="bio" />
        </v-row>
        <v-row>
          <v-btn
            small
            @click="submit"
            color="blue"
            style="color: white">
            Submit
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default ({
  name: 'EditForm',

  data() {
    return {

      name: '',
      username: '',
      bio: '',
    };
  },

  methods: {

    submit() {
      console.log(this.name, this.username, this.bio);
    },
  },
});
</script>
