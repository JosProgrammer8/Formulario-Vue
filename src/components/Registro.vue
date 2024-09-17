<template>
  <div class="container">
    <h1 class="mb-4">Registro</h1>
    <form @submit.prevent="handleSubmit" novalidate>
      <div class="mb-3">
        <label for="name-all" class="form-label">Nombre de Usuario</label>
        <input type="text" id="name-all" class="form-control" v-model="formData.name" placeholder="Nombre de Usuario" required pattern="[a-zA-Z\s]+" title="Solo se permiten letras y espacios">
      </div>

      <div class="mb-3">
        <label for="birthdate" class="form-label">Fecha de Nacimiento</label>
        <input type="date" id="birthdate" class="form-control" v-model="formData.birthdate" required>
      </div>

      <div class="mb-3">
        <label for="Cellphone" class="form-label">Teléfono</label>
        <input type="tel" id="Cellphone" class="form-control" v-model="formData.phone" placeholder="Teléfono" required pattern="[0-9]{10}" title="Debe contener 10 dígitos">
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Correo Electrónico</label>
        <input type="email" id="email" class="form-control" v-model="formData.email" placeholder="Correo Electrónico" required>
      </div>

      <button type="submit" class="btn w-100">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Registro',
  data() {
    return {
      formData: {
        name: '',
        birthdate: '',
        phone: '',
        email: '',
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log('Formulario enviado:', this.formData);
      this.$router.push('/login');
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
