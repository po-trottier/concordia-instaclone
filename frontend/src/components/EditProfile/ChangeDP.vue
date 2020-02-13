<template>
  <div>
    <v-btn
      small
      depressed
      max-width="160"
      text
      color="primary"
      class="mt-n2"
      @click="value = true">
      Change Profile Photo
    </v-btn>
    <v-dialog
      width="400"
      v-model="value">
      <v-card
        light
        width="400"
        align="center">
        <v-col>
          <v-row class="mx-10 my-6">
            <span class="md-font">
              Change Profile Photo
            </span>
          </v-row>
          <v-divider />
          <v-row>
            <input
              type="file"
              ref="fileInput"
              accept="image/*"
              style="display: none;"
              @change="upload">
            <v-btn
              small
              depressed
              class="my-2"
              width="100%"
              text
              color="primary"
              @click="$refs.fileInput.click()">
              Upload Photo
            </v-btn>
          </v-row>
          <v-divider />
          <v-row>
            <v-btn
              small
              depressed
              class="my-2"
              width="100%"
              text
              color="red lighten-1"
              @click="remove">
              Remove Current Photo
            </v-btn>
          </v-row>
          <v-divider />
          <v-row>
            <v-btn
              small
              depressed
              class="mt-2"
              width="100%"
              color="white"
              @click="value = false">
              Cancel
            </v-btn>
          </v-row>
        </v-col>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default ({
  name: 'ChangeDP',
  data() {
    return {
      value: false,
      progress: false,
      file: null,
      data: null,
    };
  },
  methods: {
    remove() {
      console.log('Removed picture');
      this.value = false;
    },
    upload() {
      console.log('Uploaded picture');
      this.value = false;
    },
  },
});
</script>
