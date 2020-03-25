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
                text
                block
                class="my-2"
                color="primary"
                :loading="uploading"
                @click="$refs.fileInput.click()">
                Upload Photo
              </v-btn>
            </div>
            <v-divider />
            <v-btn
              small
              depressed
              text
              block
              class="my-2"
              color="red lighten-1"
              :loading="removing"
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
import { mapActions } from 'vuex';

export default ({
  name: 'ChangeDP',
  data() {
    return {
      value: false,
      uploading: false,
      removing: false,
    };
  },

  methods: {
    ...mapActions('auth', ['uploadDP', 'removeDP']),

    remove() {
      this.removing = true;
      this.removeDP()
        .then(() => {
          this.value = false;
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          this.removing = false;
        });
    },
    upload({ target }) {
      this.uploading = true;
      this.uploadDP(target.files[0])
        .then(() => {
          this.value = false;
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          this.uploading = false;
        });
    },
  },
});
</script>
