<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link style="text-decoration: none; color: inherit;" to="/"><a class="navbar-brand" href="#">Oberwallis</a></router-link>
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
                <li class="nav-item">
                    <router-link style="text-decoration: none; color: inherit;" to="/info"><a class="nav-link" href="#">Informationen </a></router-link>
                </li>
                <li class="nav-item">
                    <router-link style="text-decoration: none; color: inherit;" to="/ticketshop"><a class="nav-link" href="#">Ticketshop </a></router-link>
                </li>
            </ul>
            <ul class="navbar-nav me-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Profil
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link style="text-decoration: none; color: inherit;" to="/login"><a class="dropdown-item">Login</a></router-link>
                        <router-link style="text-decoration: none; color: inherit;" to="/register"><a class="dropdown-item">Registrieren</a></router-link>
                        <router-link style="text-decoration: none; color: inherit;" to="/admin"><a class="dropdown-item">Admin</a></router-link>
                        <div class="dropdown-divider"></div>
                        <div>
                            <router-link style="text-decoration: none; color: inherit;" to="/profile"><a class="dropdown-item">Mein Profil</a></router-link>
                            <router-link style="text-decoration: none; color: inherit;" to="/"><a  @click="logout" class="dropdown-item">Logout</a></router-link>                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
    .navbar-nav > li {
        padding-left: 25px;
        padding-right: 25px;
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

    .navbar-dark .navbar-nav .active > .nav-link,
    .navbar-dark .navbar-nav .nav-link.active,
    .navbar-dark .navbar-nav .nav-link.show,
    .navbar-dark .navbar-nav .show > .nav-link,
    .navbar-dark .navbar-nav .nav-link:focus,
    .navbar-dark .navbar-nav .nav-link:hover {
        color: #ffffff
    }

    .nav-link {
        padding: 10px 5px;
        transition: 0.2s
    }
</style>

<script>
    export default {
        data() {
            return {
                user: null
            };
        },
        methods: {
            async logout() {
                try {
                    localStorage.removeItem('token');
                } catch (error) {
                    console.log(error);
                    if (error.response.status === 400) {
                        this.error = true;
                    }
                }
            }
        }
    };
</script>