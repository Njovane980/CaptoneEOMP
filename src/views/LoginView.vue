<template>
    <div class="login-page">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
      <router-link to="/register">Register</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      };
    },
    methods: {
      async login() {
        try {
          // Perform login logic
          // Redirect user to main content page upon successful login
          this.$router.push('/main-content');
        } catch (error) {
          this.error = 'Invalid email or password';
          console.error('Login failed:', error);
        }
      }
    }
  };
  </script>