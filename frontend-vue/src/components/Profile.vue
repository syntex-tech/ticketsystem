<template>
  <div class="profile-page">
    <h1>My Profile</h1>
    <div class="profile-box">
      <p class="profile-label">E-Mail:</p>
      <p class="profile-value">{{ user.email }}</p>
    </div>
    <div class="profile-box">
      <p class="profile-label">Vorname:</p>
      <p class="profile-value">{{ user.Vorname }}</p>
    </div>
    <div class="profile-box">
      <p class="profile-label">Nachname:</p>
      <p class="profile-value">{{ user.Nachname }}</p>
    </div>
    <div class="profile-box">
      <p class="profile-label">Stadt:</p>
      <p class="profile-value">{{ user.Stadt }}</p>
    </div>
    <div class="profile-box">
      <p class="profile-label">Postal Code:</p>
      <p class="profile-value">{{ user.Postleitzahl }}</p>
    </div>
    <div class="profile-box">
      <p class="profile-label">Straße:</p>
      <p class="profile-value">{{ user.Strasse }}</p>
    </div>
    <div class="profile-box">
      <p class="profile-label">Hausnummer:</p>
      <p class="profile-value">{{ user.Hausnummer }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: {}
    }
  },

  mounted() {
    this.getProfile();
  },

  methods: {
    getCookie(name) {
      const value = `; ${document.cookie}`;
      console.log('Cookie string: ', value);
      const parts = value.split(`; ${name}=`);
      console.log('Cookie parts: ', parts);
      console.log('Cookie: ', document.cookie);
      console.log('Cookie name: ', name);
      if (parts.length === 2) return parts.pop().split(';').shift();
    },

    async getProfile() {
      const token = this.getCookie('token');

      try {
        console.log('Token: ', token);
        const res = await axios.get('http://localhost:3000/user/profilAnzeigen', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        this.user = res.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>


<style>
.profile-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-box {
  width: 60%;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
}

.profile-label {
  width: 30%;
  font-weight: bold;
  margin-right: 10px;
}

.profile-value {
  width: 70%;
}
</style>