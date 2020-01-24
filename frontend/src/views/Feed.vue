<template>
  <v-container class="pt-10">
    <v-row
      no-gutters
      class="narrow">
      <v-col
        cols="8"
        class="pr-6">
        <v-card
          flat
          outlined>
          <v-card-text>
            <h4>Feed</h4>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card
          flat
          outlined>
          <v-card-text>
            <h4>Stories</h4>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Feed',
};
</script>
