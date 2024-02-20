<script setup>
import Header from '@components/Header.vue'
import Background from '@components/Background.vue'
import Body from '@components/Body.vue'
import Footer from '@components/Footer.vue'


import { useHead } from '@vueuse/head';

const title = "Гостевой домик";
const description = 'Откройте горный опыт в "Gostevoy Domik Almatau" в Алматы! Горнолыжный курорт, активный отдых и уютные номера – идеальное сочетание для незабвенного отпуска. Бронируйте онлайн и погрузитесь в атмосферу "Гостевого домика"!';
const og_description = 'Откройте горный опыт в "Gostevoy Domik Almatau" в Алматы! Горнолыжный курорт, активный отдых и уютные номера – идеальное сочетание для незабвенного отпуска. Бронируйте онлайн и погрузитесь в атмосферу "Гостевого домика"!';
const keywords = "отель, апарт, отдых, горы, Алматы, гостиница, Алматау, кемпинг, сауна, номер, снять, мангал, гостевой домик";

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
