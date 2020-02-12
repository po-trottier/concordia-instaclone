<template>
  <div>
    <v-btn
      small
      depressed
      max-width="160"
      color="white"
      class="mt-n2"
      style="color: #3399ff;"
      @click="value = true">
      Change Profile Photo
    </v-btn>
    <v-overlay :value="value">
      <v-card
        shaped
        light
        width="400"
        align="center">
        <v-col>
          <v-flex class="mx-10 my-6">
            <span style="font-weight:bold; font-size:1.1rem;">
              Change Profile Photo
            </span>
          </v-flex>
          <v-divider width="100%" />
          <v-flex>
            <v-btn
              small
              depressed
              class="my-2"
              width="100%"
              color="white"
              style="color: #3399ff">
              Upload Photo
            </v-btn>
          </v-flex>
          <v-divider width="100%" />
          <v-flex>
            <v-btn
              small
              depressed
              class="my-2"
              width="100%"
              color="white"
              style="color: #ff3333;">
              Remove Current Photo
            </v-btn>
          </v-flex>
          <v-divider width="100%" />
          <v-flex>
            <v-btn
              small
              depressed
              class="mt-2"
              width="100%"
              color="white"
              @click="value = false">
              Cancel
            </v-btn>
          </v-flex>
        </v-col>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>
export default ({
  name: 'ChangeDP',
  data() {
    return {
      value: false,
    };
  },
});
</script>
