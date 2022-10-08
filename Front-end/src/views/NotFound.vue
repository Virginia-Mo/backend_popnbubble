<template>
    <NavBar />
    <img src="@/assets/imgs/404.png" alt="photo 404" id="imgError">
    <FooterComponent />
</template>

<script>
    import NavBar from "@/components/NavBar.vue"
    import FooterComponent from "@/components/Footer.vue"
    export default {
        name : "ErrorPage",
        components : {NavBar, FooterComponent}
    }
</script>
<style>
    #imgError {
        max-width: 100%;
    }
</style>