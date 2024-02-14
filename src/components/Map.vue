<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const { text,arr } = defineProps(['text','arr']);

const isMobile = ref(false);
const isLaptop = ref(false);
const isLaptop2 = ref(false);
const isTablet = ref(false);
const height = ref(552);
const width = ref(636);

onMounted(async () => {
    isMobile.value = window.matchMedia('(max-width: 767px)').matches;
    isTablet.value = window.matchMedia('(max-width: 1020px)').matches;
    isLaptop2.value = window.matchMedia('(max-width: 1280px)').matches;
    isLaptop.value = window.matchMedia('(max-width: 1441px)').matches;
    const handleResize = () => {
        isMobile.value = window.matchMedia('(max-width: 767px)').matches;
        isTablet.value = window.matchMedia('(max-width: 1020px)').matches;
        isLaptop2.value = window.matchMedia('(max-width: 1280px)').matches;
        isLaptop.value = window.matchMedia('(max-width: 1441px)').matches;
    };
    if(isLaptop.value){
    console.log('gh')
        height.value = 542;
        width.value = 542;
    }
    if(isLaptop2.value){
    console.log('gh')
        height.value = 320;
        width.value = 320;
    }
    if(isTablet.value){
    console.log('gh')
        height.value = 290;
        width.value = 290;
    }
    if(isMobile.value){
    console.log('gh')
        height.value = 240;
        width.value = 300;
    }
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });
});
</script>

<template>
    <section id="map" class="contain">
        <div>
            <h2>Как доехать до нас ?</h2>
            <span>
                <iframe loading="lazy" src="https://yandex.com/map-widget/v1/?um=constructor%3A02ad6dbda47c96eb6b6d93c9482b0ffa751cb50ac43815f38286a90e6225fd76&amp;source=constructor" :width="width" :height="height" frameborder="0"></iframe>
            </span>
            <div>
                <h3>Автомобиль</h3>
                <p>Бесплатная парковка</p>
                <h3>Такси</h3>
                <p>Яндекс такси, Uber</p>
                <h3>Автобус</h3>
                <p>Маршурут 209</p>
            </div>
            <h3>АДРЕС</h3>
            <div>
                <h3>Медеуский район г. Алматы</h3>
                <p>Алматау 9</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
section{
  /* padding: 0 209px 0 348px; */
}
section>div{
    position: relative;
    padding: 0 55% 0 0;
    margin: 100px 0 130px;
}
section>div>span{
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
}
h2{
    color: #585858;
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 26px;
}
h3{
    color: #585858;
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    margin: 48px 0 0;
}
section>div>div>h3{
    color: #FFB100;
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 400;
    margin: 16px 0;
}
p{
    color: #585858;
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
}
p::after{
    display: block;
    content: '';
    height: 1px;
    width: 100%;
    background: #8E8E8E;
    margin-top: 8px;
}

@media  (min-width: 601px) and (max-width: 1280px) {
    h2{
        font-size: 18px;
    }
    section>div>div>h3{
        font-size: 16px;
        margin: 8px 0;
    }
    section>div{
        position: relative;
        padding: 0 55% 0 0;
        margin: 40px 0 60px;
    }
    p{
        font-size: 10px;
    }
    h3{
        font-size: 12px;
        margin: 20px 0 0;
    }
    h4{
        font-size: 16px;
    }
}
@media (max-width: 600px) {
    section>div>span{
        position:static;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section>div{
        padding: 0;
        margin: 44px 0;
    }
    h2{
        font-size: 24px;
        margin-bottom: 26px;
    }
    h3{
        font-size: 24px;
        margin: 24px 0 0;
    }
    section>div>div>h3{
        font-size: 24px;
        margin: 16px 0;
    }
    p{
        font-size: 14px;
    }
}
</style>
