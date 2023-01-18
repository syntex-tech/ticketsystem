<template>
    <div class="form-container">
        <form @submit.prevent="submitForm" class="form" ref="form">
            <label for="Vorname" class="form-label">Vorname</label>
            <input type="text" v-model="formData.Vorname" id="Vorname" class="form-input" required />

            <label for="Nachname" class="form-label">Nachname</label>
            <input type="text" v-model="formData.Nachname" id="Nachname" class="form-input" required />

            <label for="Stadt" class="form-label">Stadt</label>
            <input type="text" v-model="formData.Stadt" id="Stadt" class="form-input" required />

            <label for="Postleitzahl" class="form-label">Postleitzahl</label>
            <input type="text" v-model="formData.Postleitzahl" id="Postleitzahl" class="form-input" required />

            <label for="Strasse" class="form-label">Strasse</label>
            <input type="text" v-model="formData.Strasse" id="Strasse" class="form-input" required />

            <label for="Hausnummer" class="form-label">Hausnummer</label>
            <input type="text" v-model="formData.Hausnummer" id="Hausnummer" class="form-input" required />

            <button type="submit" class="form-submit-btn">Submit</button>
        </form>
        <div v-if="error" class="error-hint">{{ error }}</div>
        <div v-if="submitted" class="success-hint">Dein Ticket wurde erstellt!</div>
    </div>
</template>
    
<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        Vorname: '',
        Nachname: '',
        Stadt: '',
        Postleitzahl: '',
        Strasse: '',
        Hausnummer: '',
      },
      submitted: false
    }
  },

  mounted(){
    this.$refs.form.addEventListener('submit', this.handleSubmit);
  },

  methods: {
    submitForm() {
      // make an HTTP request to your Node.js backend here,
      // including formData as the data
      axios.post('http://localhost:3000/ticket', this.formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    },

    async handleSubmit(event) {
      event.preventDefault();
      try {
        await axios.post('http://localhost:3000/ticket', this.formData);
        this.submitted = true;
      } catch (err) {
        console.log(err);
      }
    }

  }

  /*
  methods: {
    submitForm() {
      // make an HTTP request to your Node.js backend here,
      // including formData as the data
      axios.post('http://localhost:3000/ticket', this.formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
  */
}
</script>

<style>
.success-hint {
  color: green;
  font-size: 1.2em;
  text-align: center;
  padding: 20px;
  border: 1px solid green;
  margin-top: 20px;
  border-radius: 5px;
  animation: show-hint 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.error-hint {
  color: red;
  font-size: 1.2em;
  text-align: center;
  padding: 20px;
  border: 1px solid red;
  margin-top: 20px;
  border-radius: 5px;
  animation: show-hint 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes show-hint {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  70% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.form-container {
  width: 500px;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.form-label {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-submit-btn {
  background-color: #3498db;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.2s ease-in-out;
}

.form-submit-btn:hover {
    background: #2980b9;
}

</style>