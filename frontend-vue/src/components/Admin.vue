<template>
    <h1>Admin Dashbord</h1>
    <h1>Hallo {{user.Vorname}}</h1>
    <!-- Admin: true oder false nötig da gerade noch ein bug drin steckt, ohne wird isAdmin nicht übergeben-->
    <div class="invisible">
        Admin: {{user.isAdmin}}
    </div>

    <div v-if="isAdmin">
        <!-- Hier ist der Inhalt der Seite, die nur für Benutzer mit isAdmin=1 sichtbar sein soll -->
        <br><br>
        <div class="admin-section">
            <h2>Ticket löschen</h2>
            <form @submit.prevent="deleteTicket">
                <input type="email" v-model="email" placeholder="E-Mail-Adresse des Benutzers" required />
                <button type="submit">Ticket löschen</button>
            </form>
        </div>
        <div class="admin-section">
            <h2>User zum Admin ernennen</h2>
            <form @submit.prevent="promoteUser">
                <input type="email" v-model="email" placeholder="E-Mail-Adresse des Benutzers" required />
                <button type="submit">User Befördern</button>
            </form>
        </div>
        <div class="admin-section">
            <h2>Ticket auf Gültigkeit prüfen</h2>
            <form @submit.prevent="scanTicket">
                <input type="text" v-model="_id" placeholder="Ticket ID" required />
                <button type="submit">Ticket Prüfen</button>
            </form>
        </div>
        <div class="admin-section">
            <h2>Ticket für Zermatter Bergbahnen Prüfen</h2>
            <form @submit.prevent="scanTicketZermatt">
                <input type="text" v-model="_id" placeholder="Ticket ID" required />
                <button type="submit">Ticket für Zermatt Prüfen</button>
            </form>
        </div>
    </div>
    <div v-else>
        <!-- Hier ist der Inhalt der Seite, die für Benutzer sichtbar ist, die nicht über die erforderlichen Berechtigungen verfügen -->
        <h1>Sie haben keine Berechtigung um diese Seite zu sehen!</h1>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                user: {},
                email: '',
                email2: '',
                _id: '',
                error: '',
                message: ''
            }
        },
        mounted() {
            this.getAdmin();
        },
        methods: {
            async getAdmin() {
                try {
                    const res = await axios.get('http://localhost:3000/admin/', {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                    });

                    this.user = res.data;
                    this.isAdmin = res.data.isAdmin;
                } catch (err) {
                    console.log(err);
                }
            },
            async deleteTicket() {
                try {
                    const response = await axios.post('http://localhost:3000/admin/ticketLoeschen', { email: this.email }, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                    });
                    console.log(response.data);
                    alert(response.data);
                } catch (error) {
                    console.error(error);
                    alert('Beim Löschen des Tickets ist ein Fehler aufgetreten');
                }
            },
            async promoteUser() {
                try {
                    const response = await axios.post('http://localhost:3000/admin/userBefoerdern', { email: this.email }, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                    });
                    console.log(response.data);
                    alert(response.data);
                } catch (error) {
                    console.error(error);
                    alert('Beim Befördern des Users ist ein Fehler aufgetreten');
                }
            },
            async scanTicket() {
                try {
                    const response = await axios.post('http://localhost:3000/admin/ticketScannen', { _id: this._id }, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                    });
                    console.log(response.data);
                    alert(response.data);
                } catch (err) {
                    console.error(err);
                    alert('Das Ticket ist nicht gültig!');
                }
            },
            async scanTicketZermatt() {
                try {
                    const response = await axios.post('http://localhost:3000/admin/ticketScannenZermatt', { _id: this._id }, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                    });
                    console.log(response.data);
                    alert(response.data);
                } catch (err) {
                    console.error(err);
                    alert('Das Ticket ist nicht gültig!');
                }
            }
        }
    }
</script>

<style scoped>
    /* Allgemeine Stilvorgaben */
    body {
        font-family: Arial, sans-serif;
        font-size: 14px;
    }

    /* Überschriften */
    h1, h2 {
        color: #333;
        text-align: center;
    }

    /* Formulare */
    form {
        margin: 20px auto;
        width: 400px;
        padding: 20px;
        border: 1px solid #ccc;
        box-shadow: 2px 2px 5px #ccc;
        border-radius: 5px;
    }

        /* Formular-Eingabefelder */
        form input[type="text"], form input[type="email"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        /* Formular-Schaltflächen */
        form button[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: #fff;
            border: 0;
            border-radius: 5px;
            cursor: pointer;
        }

    /* Admin-Abschnitte */
    .admin-section {
        margin-top: 40px;
        padding: 20px;
        border-radius: 5px;
    }

    .invisible {
        color: white
    }
</style>


