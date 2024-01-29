<script setup>
import AboutUs from '@components/AboutUs.vue'
import Slider from '@components/Slider.vue'
import OurServices from '@components/OurServices.vue'
import Reviews from '@components/Reviews.vue'
import Banner from '@components/Banner.vue'

import { ref } from 'vue';
const array = ref([
  { img: '/background.jpg' },
  { img: '/background.jpg' },
  { img: '/background.jpg' },
  { img: '/background.jpg' },
  { img: '/background.jpg' },
  { img: '/background.jpg' }
]);
</script>

<template>
    <section>
        <img src="/wave.svg" alt="">
        <AboutUs/>
        <Slider :arr="array" text="Номера"/>
        <Slider :arr="array" text="Терасса"/>
        <Slider :arr="array" text="Сауна"/>
        <OurServices/>
        <Reviews/>
        <Banner/>
        <AboutUs/>
        <AboutUs/>
        <AboutUs/>
        <AboutUs/>
        <AboutUs/>
    </section>
</template>

<style scoped>

#app>section{
    background: #fff;
    margin-top: 700px;
    position: relative;
}
img{
    position: absolute;
    top:-90px;
    width: 100dvw;
    max-width: 100%;
}
</style>
