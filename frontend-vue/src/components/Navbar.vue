<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link style="text-decoration: none; color: inherit;" to="/"><a class="navbar-brand" href="#">SkyPath</a></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link style="text-decoration: none; color: inherit;" to="/"><a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a></router-link>
      </li>
      <li class="nav-item">
        <router-link style="text-decoration: none; color: inherit;" to="/about"><a class="nav-link" href="#">Über uns </a></router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
      <div class="button-block ms-auto">
        <button class="button is-xl is-dark">
          Sign In
        </button>
      </div>
    </ul>

    <!-- Searchbar (currently disabled)
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    -->

  </div>
</nav>
</template>

<style>
  
  .navbar-nav > li{
  padding-left:25px;
  padding-right:25px;
}

 .nav-item::after {
     content: '';
     display: block;
     width: 0px;
     height: 2px;
     background: #90caec;
     transition: 0.4s
 }

 .nav-item:hover::after {
    width: 100%
 }

 .navbar-dark .navbar-nav .active>.nav-link,
 .navbar-dark .navbar-nav .nav-link.active,
 .navbar-dark .navbar-nav .nav-link.show,
 .navbar-dark .navbar-nav .show>.nav-link,
 .navbar-dark .navbar-nav .nav-link:focus,
 .navbar-dark .navbar-nav .nav-link:hover {
     color: #ffffff
 }

 .nav-link {
     padding: 10px 5px;
     transition: 0.2s
 }
 
</style>