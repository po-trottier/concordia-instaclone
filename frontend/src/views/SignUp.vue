<template>
  <div>
    <h2>Insta<span>Clone</span></h2>
    <v-container>
      <v-input-field v-model="email" /><br>
      <v-input-field v-model="password" /><br>
      <v-input-field v-model="name" /><br>
      <v-input-field v-model="age" /><br>
      <v-btn :to="{name: 'Landing'}" text small>Sign up </v-btn>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'SignUp',
    data() {
      return {
        email: null,
        password: null,
        name: null,
        age: null,
      };
    },
  };
</script>

<style scoped>

  
</style>
