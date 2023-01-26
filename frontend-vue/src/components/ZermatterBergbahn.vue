<template>
    <div class="form-container">
        <form @submit.prevent="submitForm" class="form" ref="form">

            <label for="E-Mail" class="form-label">Ticket ID / Ticket Nummer</label>
            <input type="text" v-model="formData.id" id="id" class="form-input" required />
            <button type="submit" class="form-submit-btn">Zutritte aktualisieren (-1)</button>

        </form>
        <div v-if="submitted" class="success-hint">Erfolgreich aktualisiert!</div>
        <div v-if="error" class="error-hint">{{ error }}</div>

    </div>
</template>
  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        id: '',
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
      try {
        await axios.post('http://localhost:3000/ZermatterBergbahn', this.formData)
        .then(response => {
          console.log(response.data);
        })
        this.submitted = true;
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