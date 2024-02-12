<script setup>
import Header from '@components/Header.vue'
import Background from '@components/Background.vue'
import Body from '@components/Body.vue'
import Footer from '@components/Footer.vue'


import { useHead } from '@vueuse/head';

const title = "Гостевой домик";
const description = 'Опыт отдыха в горах начинается здесь! Горный отель "Гостевой домик" в Казахстане приглашает вас на уникальное приключение: горнолыжный курорт, активный отдых в окружении величественных гор, разнообразные развлечения и уютные гостевые номера. Забронируйте свой уголок уюта на нашем сайте или по телефону прямо сейчас! Погрузитесь в атмосферу горного отдыха с гостиницей " Гостевой домик".';
const og_description = 'Опыт отдыха в горах начинается здесь! Горный отель "Гостевой домик" в Казахстане приглашает вас на уникальное приключение: горнолыжный курорт, активный отдых в окружении величественных гор, разнообразные развлечения и уютные гостевые номера. Забронируйте свой уголок уюта на нашем сайте или по телефону прямо сейчас! Погрузитесь в атмосферу горного отдыха с гостиницей " Гостевой домик".';
const keywords = "гостиница в горах Алматау, отель в горах Алматы, горнолыжный курорт Алматы, Апарт отель в горах, Апарт отель Алматы, высокогорный отдых, природа Заилийского Алатау, гостевые номера, бронирование номеров, активный отдых в горах, уголок уюта в горах Алматы";

useHead({
  title,
  meta: [
    {
      name: "description",
      content: description,
    },
    {
      name: "keywords",
      content: keywords,
    },
    {
      property: 'og:description',
      content: og_description,
    },
    {
      httpEquiv: "Cache-Control",
      content: "max-age=3600",
    },
    {
      httpEquiv: "Expires",
      content: "Sat, 12 Feb 2025 12:00:00 GMT",
    }
  ],
});
</script>

<template>
  <Header/>
  <Background/>
  <Body/>
  <Footer/>
</template>

<style scoped>
</style>
