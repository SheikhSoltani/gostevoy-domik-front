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
  { img: '/image26.webp' },
  { img: '/image2.webp' },
  { img: '/image3.webp' },
  { img: '/image4.webp' },
  { img: '/service.webp' },
  { img: '/image1_1.webp' },
  { img: '/image1_2.webp' },
  { img: '/image1_3.webp' },
  { img: '/image1_4.webp' },
  { img: '/image1_5.webp' },
  { img: '/image1_6.webp' },
  { img: '/image1_7.webp' },
  { img: '/image1_8.webp' },
  { img: '/image1_9.webp' },
  { img: '/image1_10.webp' },
  { img: '/image1_11.webp' },
  { img: '/image1_12.webp' },
  { img: '/image1_13.webp' },
  { img: '/image1_14.webp' },
  { img: '/image1_15.webp' },
  { img: '/image1_16.webp' },
  { img: '/image1_17.webp' },
  { img: '/image1_18.webp' },
  { img: '/image1_19.webp' },
  { img: '/image1_20.webp' },
  { img: '/image1_21.webp' },
  { img: '/image1_22.webp' },
  { img: '/image1_23.webp' },
  { img: '/image1_24.webp' },
  { img: '/image1_25.webp' },
]);
const array2 = ref([
  { img: '/image62.webp' },
  { img: '/image5.webp' },
  { img: '/image6.webp' },
  { img: '/image61.webp' },
  { img: '/image7.webp' },
//  { img: '/image8.webp' },
]);
const array3 = ref([
  { img: '/image13.webp' },
  { img: '/image14.webp' },
  { img: '/image15.webp' },
  { img: '/image16.webp' },
  { img: '/image17.webp' },
  { img: '/image18.webp' },
  { img: '/image19.webp' },
  { img: '/image20.webp' },
]);
const array4 = ref([
  { img: '/attractions.webp',text:'Горнолыжный курорт Pioner' },
  { img: '/attractions3.webp',text:'Бутаковский водопад 3 км' },
  { img: '/attractions2.webp',text:'Горнолыжный курорт Oi-Qaragai' },
  { img: '/attractions4.webp',text:'Пик Букреева 5 км' },
  { img: '/attractions5.webp',text:'Панорама' },
  { img: '/attractions6.webp',text:'Горные окрестности' },
  { img: '/attractions7.webp',text:'Горные окрестности' },
  { img: '/attractions8.webp',text:'Горные окрестности' },
  { img: '/attractions9.webp',text:'Горные окрестности' },
]);
</script>

<template>
    <section>
        <img loading="lazy" src="/wave.svg" alt="image">
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
