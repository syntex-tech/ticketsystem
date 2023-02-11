<template>
  <!-- Main jumbotron for a primary marketing message or call to action -->
  <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Registrierung</h1>
                <p>Willkommen bei der Registrierung für unser Online Ticketsystem Oberwallis! Mit einem Benutzerkonto haben Sie Zugang zu allen Funktionen unserer Website und können bequem und sicher Ihre Skitickets kaufen. Bitte füllen Sie das nachfolgende Formular aus, um Ihr Konto zu erstellen.</p>
            </div>
        </div>
    <div class="form-container">
        <form @submit.prevent="submitForm" class="form" ref="form">
            <label for="E-Mail" class="form-label">E-Mail</label>
            <input type="email" v-model="formData.email" id="Email" class="form-input" required />

            <label for="Passwort" class="form-label">Passwort</label>
            <input type="text" v-model="formData.password" id="Email" class="form-input" required />

            <label for="Vorname" class="form-label">Vorname</label>
            <input type="text" v-model="formData.Vorname" id="Vorname" class="form-input" required />

            <label for="Nachname" class="form-label">Nachname</label>
            <input type="text" v-model="formData.Nachname" id="Nachname" class="form-input" required />

            <label for="Stadt" class="form-label">Stadt</label>
            <input type="text" v-model="formData.Stadt" id="Stadt" class="form-input" required />

            <label for="Postleitzahl" class="form-label">Postleitzahl</label>
            <input type="text" v-model="formData.Postleitzahl" id="Postleitzahl" class="form-input" required />

            <label for="Strasse" class="form-label">Straße</label>
            <input type="text" v-model="formData.Strasse" id="Strasse" class="form-input" required />

            <label for="Hausnummer" class="form-label">Hausnummer</label>
            <input type="text" v-model="formData.Hausnummer" id="Hausnummer" class="form-input" required />

            <button type="submit" class="form-submit-btn">Registrieren</button>
        </form>
        <div v-if="submitted" class="success-hint">Erfolgreich registriert!</div>
        <div v-if="error" class="error-hint">{{ error }}</div>

    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
        Vorname: '',
        Nachname: '',
        Stadt: '',
        Postleitzahl: '',
        Strasse: '',
        Hausnummer: '',
        error: ''
      },
      submitted: false,
      error: false
    }
  },

  mounted(){
    this.$refs.form.addEventListener('submit', this.handleSubmit);
  },

  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      try {+
        await axios.post('http://localhost:3000/user/registerUser', this.formData)
        .then(response => {
          if(response.data === "Diese E-Mail exisitiert bereits!"){
           this.error = response.data;
          }else{
           this.submitted = true;
          }
        })
        
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>
  
<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-signin input[type="text"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>