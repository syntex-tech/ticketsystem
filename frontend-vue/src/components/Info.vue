<template>
    <!-- Main jumbotron for a primary marketing message or call to action -->
    <div class="jumbotron">
            <div class="container">
                <h1 class="display-3">Newsletter</h1>
            </div>
        </div>
    <!-- main -->
    <section class = "section-four">
            <div class = "container">
                <div class = "blogs">
                    <div class = "blog-wrapper-lg">
                        
                        <!-- single blog post -->
                        <div class = "blog">
                            <img src = "../assets/images/Axess_small.png">
                            <div class = "blog-content">
                                <span class = "misc-info">
                                    Veröffentlicht: 28.01.2023
                                </span>
                                <h3 class = "blog-title">
                                    Das Smartphone wird zum Ticket - Skigebiet Oberwallis nun mit Axess in Partnerschaft!
                                </h3>
                                <p class = "blog-text">
                                    Das Skigebiet Oberwallis hat am 26.01.2023 verkündet, dass sie in der kommenden Skisaison mit dem Anbieter Axess in Partnerschaft treten. Mit diesem Schritt möchte das Skigebiet in der kommenden Saison moderner und attraktiver in der Tourismusbrange auftreten! <br>
                                    <br>
                                    Durch die Partnerschaft muss das Skigebiet den Ganzen Ticketprozess ändern. Skipässe aus Plastik oder sogar Papier sind von gestern...  <br>
                                    <br>
                                    Den Gästen wird ab dem 13.02.2023 ein Online-Ticketkauf im eigenen Webshop zu verfüfung stehen, welches dem Gast maximalen Komfort bietet. Das Ticket online Buchen, dann eine Bestätigungsmail erhalten, Ski-Ausrüstung an, Handy in die Jackentasche und los gehts!<br>
                                    <br>
                                    Durch nun vor den Pisten aufgebauten Scannern muss der Gast, sobald er den Lesebereich der Schranke betritt, sein Handy mit dem online Ticket vohalten. Das Ticket wird anschließend von der Schranke geprüft. Die Schranke öffnet nun berührungslos.. kein Warten an der Kasse, kein Kartenhandling oder -verlust.<br>
                                    <br>
                                    Zum Einsatz kommt der von der Firma Axess bekannte BLE-Gate AX500 Smart Gate NG. Axess hat sich schon vor Jahren auf Ticketing- und Scansystemen spezailisiert. Funktionen wie Bluetooth und beeindruckend schneller Datentransfer zeichnet Axess aus.<br>
                                    <br>
                                    Das Skigebiet erhofft sich mit diesen Anreizen natürlich eine Investition in die Zukunft getätigt zu haben. 
                                 </p>
                            </div>
                        </div>
                        <!-- end of single post -->
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default{};
</script>

<style>
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container{
    width: 60vw;
    margin: 0 auto;
}


/* section four */
.section-four{
    margin: 20px 0;
}
.blog{
    margin: 40px 0;
}
.blog-content{
    padding: 25px;
    background: #f7f7f7;
}
.blog span{
    display: block;
}
.misc-info{
    font-size: 10px;
    color: var(--dark);
    margin-top: 16px;
}
.blog-title{
    font-size: 30px;
    font-weight: 900;
}
.blog-text{
    font-weight: 200;
}

@media screen and (min-width: 800px){
    /* section four */
    .blog-wrapper-sm{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
    
}
@media screen and (min-width: 1000px){
    /* section four */
    .blog-wrapper-lg{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
    }
}
</style>