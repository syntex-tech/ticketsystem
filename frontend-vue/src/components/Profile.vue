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
            <p class="profile-label">Postleitzahl:</p>
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
        <div class="profile-box">
            <p class="profile-label">Ticket:</p>
            <img v-if="qrCode !== 'null'" :src="qrCodeUrl" style="width: 200px; height: 200px;" />
            <p v-else class="profile-value">No ticket found</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                user: {},
                qrCodeUrl: 'null',
                qrCode: 'null',
                error: '',
            }
        },
        mounted() {
            this.getProfile();
            this.getTicket(null);
        },
        methods: {
            async getProfile() {
                try {
                    const res = await axios.get('http://localhost:3000/user/profilAnzeigen', {
                        // hier wird der token in den header gesetzt durch localStorage. Muss bei jedem Aufruf von axios dabei sein, geht wohl auch global über ne config
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                    });

                    this.user = res.data;
                } catch (err) {
                    console.log(err);
                }
            },
            async getTicket() {
                try {
                    const qr_res = await axios.get('http://localhost:3000/ticket/ticketAnzeigen', {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                    });
                    const qrCode = qr_res.data;
                    this.qrCode = qrCode;
                    this.qrCodeUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(qrCode);
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