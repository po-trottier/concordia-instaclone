<template>
  <div>
    <span
      class="primary--text text-uppercase pointer font-weight-medium"
      @click="value = true">
      Change Profile Photo
    </span>
    <v-dialog
      width="400"
      v-model="value">
      <v-card>
        <v-card-title class="justify-center py-4">
          <span class="md-font text-center">
            Change Profile Photo
          </span>
        </v-card-title>
        <v-card-actions class="pt-0">
          <v-col class="pt-0">
            <v-divider />
            <div>
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
            </div>
            <v-divider />
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
            <v-divider />
            <v-btn
              small
              depressed
              class="mt-2"
              width="100%"
              color="white"
              @click="value = false">
              Cancel
            </v-btn>
          </v-col>
        </v-card-actions>
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
