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
  { img: '/service.jpg' },
  { img: '/image2.jpg' },
  { img: '/image3.jpg' },
  { img: '/image4.jpg' },
  { img: '/image1_1.jpg' },
  { img: '/image1_2.jpg' },
  { img: '/image1_3.jpg' },
  { img: '/image1_4.jpg' },
  { img: '/image1_5.jpg' },
  { img: '/image1_6.jpg' },
]);
const array2 = ref([
  { img: '/image5.jpg' },
  { img: '/image61.jpg' },
  { img: '/image7.jpg' },
  { img: '/image8.jpg' },
  { img: '/image6.jpg' },
]);
const array3 = ref([
  { img: '/image9.jpg' },
  { img: '/image13.jpg' },
  { img: '/image14.jpg' },
  { img: '/image15.jpg' },
  { img: '/image16.jpg' },
  { img: '/image17.jpg' },
  { img: '/image18.jpg' },
  { img: '/image19.jpg' },
  { img: '/image20.jpg' },
]);
const array4 = ref([
  { img: '/attractions.jpg',text:'Горнолыжный курорт Pioner' },
  { img: '/attractions2.jpg',text:'Горнолыжный курорт Oi-Qaragai' },
  { img: '/attractions3.jpg',text:'Бутаковский водопад 3 км' },
  { img: '/attractions4.jpg',text:'Пик Букреева 5 км' },
]);
</script>

<template>
    <section>
        <img src="/wave.svg" alt="image">
        <AboutUs/>
        <Slider :arr="array" text="Номера"/>
        <Slider :arr="array2" text="Терасса"/>
        <Slider :arr="array3" text="Сауна"/>
        <TextSlider :arr="array4" text="Достопримечательности"/>
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
    padding: 10px 0 0;
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
