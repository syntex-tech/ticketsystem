<template>
  <form class="form-signin" @submit.prevent="submitForm" ref="form">
      <img class="mb-4" src="../assets/images/small icons/logotest2.png" alt="" width="90" height="90">
      <h1 class="h3 mb-3 font-weight-normal">Logge Dich ein!</h1>

      <label for="inputEmail" class="sr-only">E-Mail</label>
      <input type="email" id="inputEmail" v-model="formData.email" class="form-control" placeholder="E-Mail" required autofocus>

      <label for="inputPassword" class="sr-only">Passwort</label>
      <input type="password" id="inputPassword" v-model="formData.password" class="form-control" placeholder="Passwort" required>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <div v-if="submitted" class="success-hint">Erfolgreich eingeloggt!</div>
      <div v-if="error" class="error-hint">{{ message }}</div>
      <p class="mt-5 mb-3 text-muted">&copy; 2023: Oberwallis</p>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
        error: '',
        message: ''
      },
      submitted: false,
      error: false
    }
  },

  mounted() {
    this.$refs.form.addEventListener('submit', this.handleSubmit);
  },

  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      try {
        const res = await axios.post('http://localhost:3000/user/login', this.formData);
        if (res.status === 200) {
          localStorage.setItem('token', res.data.token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
          this.submitted = true;
        }
      } catch (error) {
        if (error.response.status === 400) {
          this.error = true;
          this.message = error.response.data;
        }
      }
    }
  }
}
</script>


<style>
.forgot-password-button {
  background-color: rgb(255, 255, 255);
  color: #333;
  border: 1px solid #333;
  padding: 10px 20px;
  border-radius: 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  transition: all 0.4s ease 0s;
  margin: 0 auto;
  display: block;
}

.forgot-password-button:hover {
  background-color: #333;
  color: #fff;
  cursor: pointer;
}

.logologin {
  text-align: center;
  margin-bottom: 20px;
}

.logologin img {
  height: 100px;
  width: 100px;
}

.parent-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.parent-container::before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url('../assets/images/panorama_mountains3.jpg');
  background-size: cover;
  filter: blur(5px);
  transform: scale(1.1);
  z-index: -1;
}

.container-box {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh; /* Or any value that works for you */
  position: relative;
}

.login-box {
  z-index: 1;
  border: 2px solid gray;
  border-radius: 10px;
  background-color: rgba(233, 233, 233, 0.74);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  box-shadow: 0px 0px 10px 0px #ccc;
  width: 500px; /* Or any value that works for you*/
}
h1 {
  text-align: center;
  font-size: 2em;
  margin-top: 50px;
  margin-bottom: 30px;
}

form {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

label {
  font-size: 1.2em;
  display: block;
  margin-bottom: 10px;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
}

input[type="email"]:focus,
input[type="password"]:focus {
  border: 2px solid rgb(75, 75, 75);
}

button {
  background-color: #00a136;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s ease-in-out;
}

button:hover {
    background: #00852c;
}


</style>