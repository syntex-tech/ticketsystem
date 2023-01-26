<template>
    <main role="main">

        <div id="myCarousel" class="carousel slide" data-interval="12000" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <!--
              <img class="first-slide" src="../assets/images/panorama_mountains3.jpg" alt="First slide">
              -->
              <video class="w-100" autoplay loop muted>
                <source src="../assets/videos/snowvideo.mp4" type="video/mp4" />
              </video>
              <div class="container">
                <div class="carousel-caption text-border">
                  <h1>Freiheit spüren.</h1>
                  <p>Wir bieten einen einfachen Weg zu Frieden, Freiheit und Freude - ab in die Berge! Beginne Deine Reise jetzt.</p>
                  <p><router-link style="text-decoration: none; color: inherit;" to="/ticketshop"><a class="btn btn-lg btn-primary btn-opac" href="#" role="button">Tickets buchen</a></router-link></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <!--
              <img class="second-slide" src="../assets/images/explore_nature.jpg" alt="Second slide">
              -->
              <video class="w-100" autoplay loop muted>
                <source src="../assets/videos/explorenature.mp4" type="video/mp4" />
              </video>
              <div class="container">
                <div class="carousel-caption text-border">
                  <h1 >Natur erkunden.</h1>
                  <p>Du weißt nicht, wo Du anfangen sollst? Lerne mehr über die Region und die vielen Möglichkeiten, das Leben zu genießen.</p>
                  <p><a class="btn btn-lg btn-primary" href="#" role="button">Lerne mehr</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <!--
              <img class="third-slide" src="../assets/images/family_smile.jpg" alt="Third slide">
              -->
              <video class="w-100" autoplay loop muted>
                <source src="../assets/videos/snowfamily.mp4" type="video/mp4" />
              </video>
              <div class="container">
                <div class="carousel-caption text-border">
                  <h1>Zusammen genießen.</h1>
                  <p>Urlaub bedeutet Zeit für Familie? Wir haben das Richtige für Dich.</p>
                  <p><router-link style="text-decoration: none; color: inherit;" to="/ticketshop"><a class="btn btn-lg btn-primary" href="#" role="button">Familienticket buchen</a></router-link></p>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
  
  
        <!-- Marketing messaging and featurettes
        ================================================== -->
        <!-- Wrap the rest of the page in another container to center all the content. -->
  
        <div class="container marketing">
  
          <!-- Three columns of text below the carousel -->
          <div class="row">
            <div class="col-lg-4">
              <img class="rounded-circle border border-info" src="../assets/images/small icons/solo1.png" alt="Generic placeholder image" width="140" height="140">
              <h2>SkiPass SOLO</h2>
              <p>We need to add a meaningful text here.. Not sure what it is gonna be.</p>
              <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4">
              <img class="rounded-circle border border-info" src="../assets/images/small icons/combo2.png" alt="Generic placeholder image" width="140" height="140">
              <h2>SkiPass COMBO</h2>
              <p>We need to add a meaningful text here.. Not sure what it is gonna be.</p>
              <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div><!-- /.col-lg-4 -->
            <div class="col-lg-4">
              <img class="rounded-circle border border-info" src="../assets/images/small icons/family3.png" alt="Generic placeholder image" width="140" height="140">
              <h2>SkiPass FAMILY</h2>
              <p>We need to add a meaningful text here.. Not sure what it is gonna be.</p>
              <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div><!-- /.col-lg-4 -->
          </div><!-- /.row -->
  
  
          <!-- START THE FEATURETTES -->
  
          <hr class="featurette-divider">
  
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Zugang zum Himmel. <span class="text-muted">Zeit für eine Auszeit.</span></h2>
              <p class="lead">Unser Ziel ist es, die Chancen zu nutzen, die uns die Digitalisierung bietet. Wir wollen Freiheit und Frieden in den Bergen für alle schnell und einfach zugänglich machen. Nur ein paar Klicks trennen Dich von Deiner Reise!</p>
            </div>
            <div class="col-md-3">
              <img class="featurette-image img-fluid mx-auto" src="../assets/images/small icons/cloudy.png" alt="Generic placeholder image">
            </div>
          </div>
  
          <hr class="featurette-divider">
  
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Alles aus einer Hand.<span class="text-muted"> Sieh selbst.</span></h2>
              <p class="lead">Du willst Tickets buchen, Dich über die Region informieren oder Deinen Urlaub verwalten und planen? Wir stehen hinter Dir. SkyPath bündelt genau diese Faktoren in einer einzigen Anwendung. Kein überflüssiges Klicken. Keine verwirrende Benutzeroberfläche. </p>
            </div>
            <div class="col-md-3 order-md-1">
              <img class="featurette-image img-fluid mx-auto" src="../assets/images/small icons/puzzle.png" alt="Generic placeholder image">
            </div>
          </div>
  
          <hr class="featurette-divider">
  
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Beginne Deine Reise JETZT. <span class="text-muted">Schnell und sicher.</span></h2>
              <p class="lead">Privatsphäre wird bei uns großgeschrieben - mach Dir keine Sorgen um Deine Daten. Die Tickets und Deine Daten gehören Dir und auch nur Dir! Wir verwenden neuste Technologien, um Kunden zu verifizieren und ihre Daten zu verschlüsseln. </p>
            </div>
            <div class="col-md-3">
              <img class="featurette-image img-fluid mx-auto" src="../assets/images/small icons/shield.png" alt="Generic placeholder image">
            </div>
          </div>
  
          <hr class="featurette-divider">
  
          <!-- /END THE FEATURETTES -->
  
        </div><!-- /.container -->
    </main>
  
</template>

<script>
export default {
};
</script>

<style>
  /* GLOBAL STYLES
  -------------------------------------------------- */
  /* Padding below the footer and lighter body text */

  body {
    
    color: #5a5a5a;
  }


  /* CUSTOMIZE THE CAROUSEL
  -------------------------------------------------- */

  /* Carousel base class */
  .carousel {
    margin-bottom: 4rem;
  }
  /* Since positioning the image, we need to help out the caption */
  .carousel-caption {
    bottom: 5rem;
    z-index: 10;
  }

  /* Declare heights because of positioning of img element */
  .carousel-item {
    height: 40rem;
    background-color: #777;
  }
  .carousel-item > img {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    height: 32rem;
  }

  .text-color-gray {
    color: rgb(57, 131, 177);
    font-weight: bold;
    
  }

  .text-margin-slide1 {
    margin-bottom: 12rem;
  }

  .text-color-small {
    color: rgb(34, 34, 34);
    font-weight: bold;
  }
  
  .text-border {
    border-style: solid;
    border-color: rgb(34, 34, 34);
    background: rgb(34, 34, 34);
    border-radius: 75px;
    opacity: 90%;
  }



  /* MARKETING CONTENT
  -------------------------------------------------- */

  /* Center align the text within the three columns below the carousel */
  .marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
  }
  .marketing h2 {
    font-weight: 400;
  }
  .marketing .col-lg-4 p {
    margin-right: .75rem;
    margin-left: .75rem;
  }


  /* Featurettes
  ------------------------- */

  .featurette-divider {
    margin: 5rem 0; /* Space out the Bootstrap <hr> more */
  }

  /* Thin out the marketing headings */
  .featurette-heading {
    font-weight: 300;
    line-height: 1;
    letter-spacing: -.05rem;
  }


  /* RESPONSIVE CSS
  -------------------------------------------------- */

  @media (min-width: 40em) {
    /* Bump up size of carousel content */
    .carousel-caption p {
      margin-bottom: 1.25rem;
      font-size: 1.25rem;
      line-height: 1.4;
    }

    .featurette-heading {
      font-size: 50px;
    }
  }

  @media (min-width: 62em) {
    .featurette-heading {
      margin-top: 7rem;
    }
  }

</style>