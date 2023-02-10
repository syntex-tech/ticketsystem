<template>
    <div v-if="isAdmin">
        <!-- Hier ist der Inhalt der Seite, die nur für Benutzer mit isAdmin=1 sichtbar sein soll -->
        <div>
            <h1>Admin Dashboard</h1>
            <br><br>
            <div class="admin-section">
                <h2>Ticket löschen</h2>
                <input type="email" v-model="deleteTicketEmail" placeholder="User E-Mail">
                <button type="submit">Ticket Löschen</button>
                <div v-if="submitted" class="success-hint">Ticket wurde gelöscht!</div>
                <div class="spacer"></div>
                <div v-if="error" class="error-hint">{{ message }}</div>
            </div>
            <div class="admin-section">
                <h2>User zum Admin ernennen</h2>
                <input type="email" v-model="promoteUserEmail" placeholder="User E-Mail">
                <button type="submit">User zum Admin ernennen</button>
                <div v-if="submitted" class="success-hint">User wurde zum Admin ernannt!</div>
                <div class="spacer"></div>
                <div v-if="error" class="error-hint">{{ message }}</div>
            </div>
            <div class="admin-section">
                <h2>Ticket auf Gültigkeit prüfen</h2>
                <input type="email" v-model="scanTicketEmail" placeholder="User E-Mail">
                <button type="submit">Ticket Prüfen</button>
                <div v-if="submitted" class="success-hint">Ticket ist gültig!</div>
                <div class="spacer"></div>
                <div v-if="error" class="error-hint">{{ message }}</div>
            </div>
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
                user: {}
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
            }


        }




    }
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

