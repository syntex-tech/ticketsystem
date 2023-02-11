<template>
    <main role="main">

        <!-- Main jumbotron for a primary marketing message or call to action -->
        <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Ticketshop</h1>
                <p>Wir bieten Dir drei verschiedene Ticketkategorien an. Wähle das passende für Dich aus und klicke einfach auf "Skipass Kaufen"!</p>
            </div>
        </div>

        <section class="category section pt-3 pb-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-sm-12 col-md-6">
                        <div class="cat-item mb-4 mb-lg-0">
                        <img src="../assets/images/Skifahrer_HalfBanner.png" alt="" class="img-fluid">
                    <div class="item-info">
                    <h4 class="mb-4"><strong>Solo Ticket</strong></h4>
                    <p class="mb-0">Eine Verschnaufpause ganz mit sich selbst - das muss auch mal sein.</p>
                    <p></p>
                    <p class="mb-0"><strong>65€ / 55€ Einheimische</strong></p>
                    <p></p>
                    <!--<a href="#" class="read-more">Skipass Kaufen</a>-->

                    <!--New Button position-->
                    <form @submit.prevent="submitForm" class="form" ref="form">
                    <button type="submit" class="form-submit-btn">Skipass Kaufen</button>
                    </form>
                    <div v-if="error" class="error-hint">{{ error }}</div>
                    <div v-if="submitted" class="success-hint">Sie haben den Oberwalliser Skipass gekauft! Ihr Ticket finden sie in ihrer E-Mail und in ihrem Profil</div>
                    
                </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-6">
                <div class="cat-item mb-4 mb-lg-0">
                <img src="../assets/images/mänWeiblBanner.png" alt="" class="img-fluid">
                <div class="item-info">
                    <h4 class="mb-4"><strong>Duo Ticket</strong></h4>
                    <p class="mb-0">Doppelt hält besser - wir haben genau das Richtige für euch!</p>
                    <p></p>
                    <p class="mb-0"><strong>120€ / 110€ Einheimische</strong></p>
                    <p></p>
                    <p class="mb-0"><strong><font color="red">ERST AB DEM 01.03.2023 ERHÄLTLICH!</font></strong></p>
                </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-md-6">
                <div class="cat-item">
                <img src="../assets/images/FamilienBanner.png" alt="" class="img-fluid">
                <div class="item-info">
                    <h4 class="mb-4"><strong>Familien Ticket</strong></h4>
                    <p class="mb-0">Die Zeit mit der Familie zusammen ist noch immer die Beste!</p>
                    <p></p>
                    <p class="mb-0"><strong>240€ / 220€ Einheimische</strong></p>
                    <p></p>
                    <p class="mb-0"><strong><font color="red">ERST AB DEM 01.03.2023 ERHÄLTLICH!</font></strong></p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    </main>
    
    <!--Old Button position-->
    <!--
    <div class="form-container">
        <form @submit.prevent="submitForm" class="form" ref="form">


            <button type="submit" class="form-submit-btn">Skipass Kaufen</button>
        </form>
        <div v-if="error" class="error-hint">{{ error }}</div>
        <div v-if="submitted" class="success-hint">Sie haben den Oberwalliser Skipass gekauft! Ihr Ticket finden sie in ihrer E-Mail und in ihrem Profil</div>
    </div>
    -->
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
                    const res = await axios.post('http://localhost:3000/ticket', this.formData, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        },
                    });
                    if (res.status === 200) {
                        console.log(res);
                        // Token wird hier in localStorage gespeichert
                        this.submitted = true;
                    }
                } catch (error) {
                    console.log(error);
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