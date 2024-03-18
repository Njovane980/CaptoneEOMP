<!-- <template>
    <body>
        <div class="container">
            <div class="register-container">
                <h2>Register</h2>
                <form id="registerForm">
                    <input type="text" placeholder="Username" id="username" required>
                    <input type="email" placeholder="Email" id="email" required>
                    <input type="password" placeholder="Password" id="password" required>
                    <button type="submit">Register</button>
                </form>
                <p>Don't have an account? <a href="login.html">Register here</a></p>
            </div>
            <div class="login-container">
                <h2>Login</h2>
                <form id="loginForm">
                    <input type="email" placeholder="Email" id="email" required>
                    <input type="password" placeholder="Password" id="password" required>
                    <button type="submit">Login</button>
                </form>
                <p>Already have an account? <a href="register.html">Login here</a></p>
            </div>
        </div>
    </body>
    </template>
     <script>
     export default {
       data() {
         return {
           registerData: {
             username: '',
             email: '',
             password: ''
           },
           loginData: {
             email: '',
             password: ''
           },
           registerSuccess: false,
           loginSuccess: false
         };
       },
       methods: {
         register() {
           // Perform registration logic (e.g., send data to backend API)
           // Assuming registration is successful, display success message
           this.registerSuccess = true;
         },
         login() {
           // Perform login logic (e.g., send data to backend API)
           // Assuming login is successful, display success message
           this.loginSuccess = true;
         }
       }
     };
     </script>
    <style>
    body, h2, form, input, button, p, a {
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Lobster', cursive;
    }
    .container {
        display: flex;
        justify-content: space-between;
        max-width: 800px;
        margin: 50px auto;
    }
    .login-container, .register-container {
        width: 45%;
        padding: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #c5ad81;
    }
    h2 {
        font-size: 50px;
        margin-bottom: 20px;
        text-align: center;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"] {
        margin-bottom: 15px;
        padding: 10px;
        border: 1px solid white;
        border-radius: 3px;
    }
    input[type="submit"] {
        padding: 10px 15px;
        border: none;
        border-radius: 3px;
        background-color: #007BFF;
        color: #fff;
        cursor: pointer;
    }
    input[type="submit"]:hover {
        background-color: #0056B3;
    }
    p {
        margin-top: 15px;
        text-align: center;
    }
    a {
        color: #007BFF;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    </style> -->