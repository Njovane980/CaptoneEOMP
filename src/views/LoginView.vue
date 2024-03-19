<template>
    <div class="container">
      <div class="login">
        <h1>Login Form</h1>
        <form  class="needs-validation" novalidate>
          <div class="input-box">
            <input type="email" v-model="payload.emailAdd" class="form-control" id="email" placeholder="Email" required>
            <div class="invalid-feedback">Please provide a valid email.</div>
            <i class="fa fa-envelope"></i>
          </div>
          <div class="input-box">
            <input type="password" v-model="payload.userPwd" class="form-control" id="password" placeholder="Password" required>
            <div class="invalid-feedback">Please provide your password.</div>
            <i class="fa fa-lock"></i>
          </div>
          <button @click.prevent="Login" type="submit" class="btn btn-primary">Login</button>
          <p class="mt-3">Don't have an account? <router-link to="/signUp">Register</router-link></p>
        </form>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        payload:
        {
        emailAdd: '',
        userPwd: ''
        }
      };
    },
    methods: {
      Login(){
        this.$store.dispatch("login", this.payload)
      }
    }
  };
  </script>