<template >
    <NavTop/>
    <NavBottom/>
    <router-view></router-view>
    <Footer/>
</template>

<script setup>
import NavTop from './components/nav/NavTop.vue';
import NavBottom from './components/nav/NavBottom.vue';
import Footer from './components/footer/Footer.vue';
</script>
