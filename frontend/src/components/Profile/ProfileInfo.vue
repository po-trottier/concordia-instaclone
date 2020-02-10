<template>
  <v-container>
    <v-row class="narrow mt-9 mb-9">
      <v-flex
        xs4
        sm4
        md4
        lg4
        xl4>
        <div
          align="center"
          class="mr-3 mt-2">
          <v-avatar size="150" class="avatar">
            <v-img
              src="@/assets/account-placeholder.png" />
          </v-avatar>
        </div>
      </v-flex>
      <v-flex>
        <v-col>
          <v-flex>
            <span class="lg_font">
              radleycaprio
            </span>
            <v-btn
              small
              depressed
              outlined
              class="ml-5 mt-n3">
              <span class="editprofile">
                Edit Profile
              </span>
            </v-btn>
          </v-flex>
          <v-flex class="my-4">
              <span class="sm_font mr-8">
                 <span class="md_font">16</span> posts
              </span>
              <span class="sm_font mr-8">
                 <span class="md_font">341</span> followers
              </span>
              <span class="sm_font mr-8">
                 <span class="md_font">354</span> following
              </span>
          </v-flex>
          <v-flex class="md_font">
            Radley Carpio
          </v-flex>
          <v-flex class="sm_font">
            This is my bio.
          </v-flex>
        </v-col>
      </v-flex>
    </v-row>
    <v-divider class="narrow"/>
  </v-container>
</template>

<script>

export default ({
  name: 'ProfileInfo',
});
</script>

<style scoped>

.sm_font {
    
    font-weight: 400;
    font-size: 1.03rem;
    font-family: Arial;
}

.md_font {

    font-weight: 550;
    font-size: 1.03rem;
    font-family: Arial;
}

.lg_font {

    font-weight: 400;
    font-size: 1.75rem;
    font-family: Arial;
}

</style>
