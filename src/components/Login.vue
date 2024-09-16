<template>
    <div class="container">
      <h1 class="mb-4">Iniciar Sesión</h1>
      <form @submit.prevent="handleLogin" novalidate>
        <div class="mb-3">
          <label for="email" class="form-label">Correo Electrónico</label>
          <input type="email" id="email" class="form-control" v-model="loginData.email" placeholder="Correo Electrónico" required>
        </div>
  
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" id="password" class="form-control" v-model="loginData.password" placeholder="Contraseña" required>
        </div>
  
        <button type="submit" class="btn w-100">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
    data() {
      return {
        loginData: {
          email: '',
          password: ''
        }
      };
    },
    methods: {
      handleLogin() {
        console.log('Inicio de sesión:', this.loginData);
        this.$router.push('/home');
      }
    }
  };
  </script>
  
  <style scoped>
  body {
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  height: 100vh;
  margin: 0;
  background-color: lightgreen;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  max-width: 400px;
  text-align: center;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
  display: inline-block;
}

.form-control {
  margin-bottom: 20px;
}

input:invalid {
  border-color: red;
}

input:valid {
  border-color: green;
}

.btn {
  border-radius: 30px;
  background-color: #007BFF;
  color: white;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}
  </style>
  