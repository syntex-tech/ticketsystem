<script>
  import NavbarVue from './components/Navbar.vue';
  import FooterVue from './components/Footer.vue';
  import ContentVue from './components/Content.vue';

  export default {
    components: {
        NavbarVue,
        FooterVue,
        ContentVue
    }
  }
</script>

<template>
    <NavbarVue />
    <ContentVue />
    <FooterVue />
</template>
