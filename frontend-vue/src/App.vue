<template>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
</template>

<script type="text/javascript">
    import Navbar from './components/Navbar.vue'
    import Footer from './components/Footer.vue'
    export default{
        components:{
            Navbar,
            Footer
        }
    }
</script>

<style>

</style>



