<template>
<main role="main">

<!-- Main jumbotron for a primary marketing message or call to action -->
<div class="jumbotron">
  <div class="container">
    <h1 class="display-3">Ticketshop</h1>
    <p>Wir bieten Dir drei verschiedene Ticketkategorien an. Wähle das passende für Dich aus und klicke einfach auf "Buchen"! Du wirst automatisch weitergeleitet.</p>
  </div>
</div>

<div class="container">
  <!-- Example row of columns -->
  <div class="row">
    <div class="col-md-4">
      <h2>SOLO</h2>
      <p>Für abenteuerlustige, tapfere und willensstarke Alleingänger. Eine Verschnaufpause ganz mit sich selbst - das muss auch mal sein. Wir haben das Richtige für Dich!</p>
      <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-md-4">
      <h2>COMBO</h2>
      <p>Doppelt hält besser - wir haben genau das Richtige für euch! </p>
      <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>
    <div class="col-md-4">
      <h2>FAMILY</h2>
      <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
      <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
    </div>
  </div>

  <hr>

</div> <!-- /container -->

</main>

    <div class="form-container">
        <form @submit.prevent="submitForm" class="form" ref="form">
            <label for="E-Mail" class="form-label">E-Mail</label>
            <input type="email" v-model="formData.Email" id="Email" class="form-input" required />

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
        Email: '',
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
    /*submitForm() {
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
    */
    async handleSubmit(event) {
      event.preventDefault();
      try {
        await axios.post('http://localhost:3000/ticket', this.formData)
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