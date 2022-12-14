<template>
    <main role="main">

        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="first-slide" src="../assets/images/panorama_mountains3.jpg" alt="First slide">
              <div class="container">
                <div class="carousel-caption text-border">
                  <h1>Savor Liberty.</h1>
                  <p>We offer you an easy path to peace, freedom and happiness - the mountains. Start your journey now.</p>
                  <p><a class="btn btn-lg btn-primary btn-opac" href="#" role="button">Book your tickets now</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="second-slide" src="../assets/images/explore_nature.jpg" alt="Second slide">
              <div class="container">
                <div class="carousel-caption text-border">
                  <h1 >Explore nature.</h1>
                  <p>Not sure where to start? Learn more about the region and the many ways to enjoy life.</p>
                  <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="third-slide" src="../assets/images/family_smile.jpg" alt="Third slide">
              <div class="container">
                <div class="carousel-caption text-border">
                  <h1>Enjoy together.</h1>
                  <p>Vacation time means family time? Don't worry, we got you covered.</p>
                  <p><a class="btn btn-lg btn-primary" href="#" role="button">Book your family ticket now</a></p>
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
              <h2 class="featurette-heading">Easy Access to the Skies. <span class="text-muted">It'll blow your mind.</span></h2>
              <p class="lead">Our goal is to use the opportunitites given to us through digitalization. We want to make freedom and peace in the mountains accessible to everyone. Just a few clicks, and you are good to go to start your journey!</p>
            </div>
            <div class="col-md-3">
              <img class="featurette-image img-fluid mx-auto" src="../assets/images/small icons/cloudy.png" alt="Generic placeholder image">
            </div>
          </div>
  
          <hr class="featurette-divider">
  
          <div class="row featurette">
            <div class="col-md-7 order-md-2">
              <h2 class="featurette-heading">Everything in one app. <span class="text-muted">See for yourself.</span></h2>
              <p class="lead">Whether you want to book your tickets, find out about your desired region or manage your vacation - we got you. SkyPath concetrates those factors in one single application. No excessive clicking. No confusing interfaces. </p>
            </div>
            <div class="col-md-3 order-md-1">
              <img class="featurette-image img-fluid mx-auto" src="../assets/images/small icons/puzzle.png" alt="Generic placeholder image">
            </div>
          </div>
  
          <hr class="featurette-divider">
  
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Start your journey now. <span class="text-muted">Safe and sound.</span></h2>
              <p class="lead">We value privacy - don't worry about your data. Your tickets belong to you and only to you! We use advanced technology to verify customers and encrypt their data.</p>
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
    height: 32rem;
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