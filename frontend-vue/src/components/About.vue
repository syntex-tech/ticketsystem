<template>
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Kontakt</h1>
            </div>
        </div>
    <!-- main -->
    <section class = "section-five">
            <div class = "container">
                <div class = "contact-top">
                    <h3>Hier findest du uns!</h3>
                </div>

                <div class = "contact-middle">
                    <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-map-signs"></i>
                        </span>
                        <span>Addresse</span>
                        <p>Lohrtalweg 10, 74821 Mosbach</p>
                    </div>

                    <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-phone"></i>
                        </span>
                        <span>Telefon</span>
                        <p>+49 152 1234567</p>
                    </div>

                    <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-paper-plane"></i>
                        </span>
                        <span>Email Addresse</span>
                        <p>SkipassOberwallis@web.de</p>
                    </div>

                    <div>
                        <span class = "contact-icon">
                            <i class = "fas fa-globe"></i>
                        </span>
                        <span>Webseite</span>
                        <p>www.oberwallis.com</p>
                    </div>
                </div>
                <div class = "contact-bottom">
                    <!-- Map -->
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10395.537916304776!2d9.150159!3d49.354335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x249e45c0f7f2c88f!2sDHBW%20Mosbach!5e0!3m2!1sde!2sde!4v1638699808115!5m2!1sde!2sde" width="210%" height="400px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default{};
</script>

<style>
/* section five */
.section-five{
    margin: 40px 0;
}
.section-five .container div{
    margin: 20px 0;
}
.contact-top{
    text-align: center;
}
.contact-top h3{
    font-size: 28px;
}
.contact-top p{
    font-weight: 300;
    width: 70%;
    margin: 0 auto;
}
.contact-middle div{
    text-align: center;
    padding: 25px 0;
    background: var(--dark);
    color: #fff;
}
.contact-middle div span{
    display: block;
}
.contact-icon{
    font-size: 30px;
}
.contact-middle div span:nth-child(2){
    font-size: 18px;
    font-weight: bold;
}
.contact-middle div p{
    font-weight: 300;
    opacity: 0.7;
}
.contact-bottom{
    margin-top: 50px!important;
}
.form input[type = "text"], .form input[type = "email"], .form textarea{
    width: 100%;
    font-size: 16px;
    padding: 10px 15px;
    margin: 10px 0;
    border: 1px solid var(--dark);
    outline: none;
    border-radius: 5px;
}
.contact-bottom .form{
    padding: 0 20px;
}

/************** end of contact.html **********/
@media screen and (min-width: 678px){
    /* section five */
    .contact-middle{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 20px;
    }
}
@media screen and (min-width: 992px){
    /* section five */
    .contact-middle{
        grid-template-columns: repeat(4, 1fr);
    }
    .contact-bottom{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 40px;
    }
}

@media screen and (max-width: 500px){
    /* overall styling */
    .header{
        padding-bottom: 30px;
    }
    .social-icons{
        display: none;
    }
    .about-content h3{
        width: 100%;
    }
    .about-content blockquote{
        font-size: 16px;
        width: 100%;
    }
    .subs{
        width: 280px;
    }
    .subs i{
        display: none;
    }
    .subs input{
        width: 100%;
    }
    .subs button{
        padding-left: 8px;
        padding-right: 8px;
    }
    h2{
        font-size: 30px!important;
    }
    h3{
        font-size: 20px!important;
    }
    p{
        font-size: 15px;
    }
    .btn{
        font-size: 14px;
        padding: 8px 0;
    }
    .work-imgs{
        grid-template-columns: 1fr;
        grid-row-gap: 20px;
    }
}
</style>
