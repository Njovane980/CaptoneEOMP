<template>
  <div class="login-body">
    <div class="login-container">
      <h2>Login</h2>
      <form class="login-form">
        <label for="username">Username:</label>
        <input type="text" v-model="payload.emailAdd" required />
        <label for="password">Password:</label>
        <input type="password" v-model="payload.userPwd" required />
        <button @click.prevent="Login" type="button">Login</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      payload: {
        emailAdd: "",
        userPwd: "",
      },
    };
  },
  methods: {
    Login() {
      this.$store.dispatch("login", this.payload);
    },
  },
};
</script>
<style scoped>
body {
  background-color: #BEC8D5;
}
.login-container {
  width: 500px;
  height: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
}
.login-form {
  display: flex;
  flex-direction: column;
}
label {
  margin-bottom: 5px;
}
input[type="text"],
input[type="password"] {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px 15px;
  background-color: rgba(147, 90, 25, 0.511);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: rgba(109, 65, 14, 0.834);
}
.image {
  max-width: 100%;
  height: 300px;
}
.login-body {
  background-color: #F4F4F4;
}
</style>