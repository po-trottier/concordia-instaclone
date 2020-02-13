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
          hide-details
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
          depressed
          block
          dark
          class="mt-4"
          @click="submit"
          color="blue">
          Save
        </v-btn>
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
      website: '',
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
