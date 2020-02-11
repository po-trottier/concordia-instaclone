<template>
  <div>
    <header>
      <h2>Insta<span>Clone</span></h2>
    </header>
    <main class="form-group">
      <input
        type="text"
        v-model="email"
        placeholder="Email / Username"> <br>
      <input
        type="Password"
        v-model="password"
        placeholder="Password"><br>
      <button
        @click="login()"
        class="login-btn">
        Log in
      </button>
      <button
        @click="signup()"
        class="login-btn">
        Sign up
      </button>
    </main>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signup() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((auth) => {
        alert('Welcome to insta clone');
      });
    },

    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((auth) => {
        alert('You are signed in'); this.$router.replace({ name: 'Feed' });
      });
    },
  },
};

</script>

<style lang="scss" scoped>
    .login-page{

        padding: 25px;
        display: flex;
        flex-flow: column;
        margin: auto;
        padding:auto;
    }

   body{
       text-align: center;

   }
h2{
    color: #000000;
    font-size: 28px;
    text-align: center;
    font-weight: 900;
}

span{

    font-weight:300;
    color: #af873d;
}

.form-group{
    display: inline;
    justify-content: center;
    flex-flow: column;
    height:auto;
    align-content: center;


    input {
        width:100%;
        height:27px;
        border: 1px solid ;
        text-indent: 4px;
        background-color: aliceblue;
        outline: none;

        &:focus{
            border: 1px solid;
        }
    }
    button{
        width: 100%;
        height: 27px;
        background-color: aliceblue;
        outline: 2px black;
        border-radius: 5px;
        color:Black;
        font-size:12px;
        font-weight: 800;

    }
}

</style>
