<script setup>
import AboutUs from '@components/AboutUs.vue'
import Slider from '@components/Slider.vue'
import TextSlider from '@components/TextSlider.vue'
import OurServices from '@components/OurServices.vue'
import Reviews from '@components/Reviews.vue'
import Banner from '@components/Banner.vue'
import Map from '@components/Map.vue'
import WhatWeHave from '@components/WhatWeHave.vue'
import Contacts from '@components/Contacts.vue'

import { ref } from 'vue';
const array = ref([
  { img: '/background.jpg' },
  { img: '/service.png' },
  { img: '/background.jpg' },
  { img: '/service.png' },
  { img: '/background.jpg' },
  { img: '/smartphone.png' },
]);
const array2 = ref([
  { img: '/background.jpg',text:'Горнолыжный курорт Pioner' },
  { img: '/service.png',text:'Горнолыжный курорт Pioner' },
  { img: '/background.jpg',text:'Горнолыжный курорт Pioner' },
  { img: '/service.png',text:'Горнолыжный курорт Pioner' },
  { img: '/background.jpg',text:'Горнолыжный курорт Pioner' },
  { img: '/smartphone.png',text:'Горнолыжный курорт Pioner' },
]);
</script>

<template>
    <section>
        <img src="/wave.svg" alt="">
        <AboutUs/>
        <Slider :arr="array" text="Номера"/>
        <Slider :arr="array" text="Терасса"/>
        <Slider :arr="array" text="Сауна"/>
        <TextSlider :arr="array2" text="Достопримечательности"/>
        <OurServices/>
        <WhatWeHave/>
        <Reviews/>
        <Banner/>
        <Map/>
        <Contacts/>
    </section>
</template>

<style scoped>

#app>section{
    background: #fff;
    padding-bottom: 100px;
    position: relative;
}
img{
    position: absolute;
    top:-90px;
    width: 100dvw;
    max-width: 100%;
}

@media  (min-width: 1281px) and (max-width: 1441px) {
    img{
        top:-70px;
    }
}
@media  (min-width: 1001px) and (max-width: 1280px) {
    img{
        top:-48px;
    }
}
@media  (min-width: 601px) and (max-width: 1000px) {
    img{
        top:-38px;
    }
}
@media (max-width: 600px) {
    #app>section{
        padding-bottom: 100px;
    }
    img{
        top:-15px;
    }
}
</style>
