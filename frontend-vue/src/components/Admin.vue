<template>
    <div>
      <h1>Admin Dashboard</h1>
      <br><br>
      <div class="admin-section">
        <h2>Ticket löschen</h2>
        <input type="email" v-model="deleteTicketEmail" placeholder="User E-Mail">
        <div class="spacer"></div>
        <button @click="deleteTicket">Ticket löschen</button>
      </div>
      <div class="admin-section">
        <h2>User zum Admin ernennen</h2>
        <input type="email" v-model="promoteUserEmail" placeholder="User E-Mail">
        <div class="spacer"></div>
        <button @click="promoteUser">User befördern</button>
      </div>
      <div class="admin-section">
        <h2>Ticket auf Gültigkeit prüfen</h2>
        <input type="email" v-model="scanTicketEmail" placeholder="User E-Mail">
        <div class="spacer"></div>
        <button @click="scanTicket">Ticket scannen</button>
      </div>
    </div>
</template>
  
<script>
import axios from 'axios';

  export default {
    data() {
      return {
        deleteTicketEmail: '',
        promoteUserEmail: '',
        scanTicketEmail: ''
      };
    },
    methods: {
      deleteTicket() {
        axios.post('http://localhost:3000/admin/ticketLoeschen', {
          email: this.deleteTicketEmail
        })
        .then(response => {
          console.log(response.data);
        });
      },
      promoteUser() {
        axios.post('http://localhost:3000/admin/userBefoerdern', {
          email: this.promoteUserEmail
        })
        .then(response => {
          console.log(response.data);
        });
      },
      scanTicket() {
        axios.post('http://localhost:3000/admin/userBefoerdern', {
          email: this.scanTicketEmail
        })
        .then(response => {
          console.log(response.data);
        });
      }
    }
  };
</script>

<style scoped>
.admin-section {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

input[type="email"] {
  padding: 10px;
  font-size: 18px;
  width: 25%;
  margin-bottom: 0px;
  border: 1px solid gray;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  background-color: rgb(0, 179, 74);
  border: none;
  margin-bottom: 50px;
  border-radius: 5px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

button:hover {
  background: #00852c;
}

.spacer {
  height: 10px;
}
</style>
  
  