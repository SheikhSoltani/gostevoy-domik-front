<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const activeSection = ref(1);
const Active = ref(false);

const handleScroll = () => {
    const targetElement = document.getElementById('background');
    const targetElement2 = document.getElementById('about');
    const targetElement3 = document.getElementById('services');
    const targetElement4 = document.getElementById('map');
    const targetElement5 = document.getElementById('contacts');
    const rect = targetElement.getBoundingClientRect();
    const rect2 = targetElement2.getBoundingClientRect();
    const rect3 = targetElement3.getBoundingClientRect();
    const rect4 = targetElement4.getBoundingClientRect();
    const rect5 = targetElement5.getBoundingClientRect();
  
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    activeSection.value = 1;
  }
  if (rect2.top >= 0 && rect2.bottom <= window.innerHeight) {
    activeSection.value = 2;
  }
  if (rect3.top >= 0 && rect3.bottom <= window.innerHeight) {
    activeSection.value = 3;
  }
  if (rect4.top >= 0 && rect4.bottom <= window.innerHeight) {
    activeSection.value = 4;
  }
  if (rect5.top >= 0 && rect5.bottom <= window.innerHeight) {
    activeSection.value = 5;
  }
  
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggle = () => {
    Active.value=!Active.value
};
const scrollTo = (index) => {
    const targetElement = document.getElementById('background');
    const targetElement2 = document.getElementById('about');
    const targetElement3 = document.getElementById('services');
    const targetElement4 = document.getElementById('map');
    const targetElement5 = document.getElementById('contacts');
    if(index===1){
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: "start" });
        }
    }
    if(index===2){
        if (targetElement2) {
            targetElement2.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    }
    if(index===3){
        if (targetElement3) {
            targetElement3.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    }
    if(index===4){
        if (targetElement4) {
            targetElement4.scrollIntoView({ behavior: 'smooth', block: "center" });
        }
    }
    if(index===5){
        if (targetElement5) {
            targetElement5.scrollIntoView({ behavior: 'smooth', block: "end" });
        }
    }
};
</script>

<template>
    <header class="contain">
        <section>
            <div>
                <img src="/home.svg" alt="img">
                <p>Алматау, ул.Октябрьская, д.492</p>
            </div>
            <div>
                <img src="/massage.svg" alt="img">
                <p>gostevoydomik@gmail,com</p>
            </div>
            <div>
                <img src="/phone.svg" alt="img">
                <p>8 (762) 279-56-89</p>
            </div>
        </section>
        <section>
            <img src="/Logo.svg" alt="img">
            <div>
                <a @click="scrollTo(1)" :class="{ active: activeSection === 1 }">ГЛАВНАЯ</a>
                <a @click="scrollTo(2)" :class="{ active: activeSection === 2 }">О НАС</a>
                <a @click="scrollTo(3)" :class="{ active: activeSection === 3 }">НОМЕРА И ЦЕНЫ</a>
                <a @click="scrollTo(4)" :class="{ active: activeSection === 4 }">КАК ДОБРАТЬСЯ</a>
                <a @click="scrollTo(5)" :class="{ active: activeSection === 5 }">КОНТАКТ</a>
            </div>
            <div>
                <a href=""><img src="/inst.svg" alt="img"></a>
                <a href=""><img src="/whatsapp.svg" alt="img"></a>
                <a href=""><img src="/telegram.svg" alt="img"></a>
                <a href=""><img src="/facebook.svg" alt="img"></a>
            </div>
        </section>
    </header>
    
    <header id="mobile" :class="{ active: isActive }">
        <div class="show">
            <img src="/Logo.svg" alt="">
            <img v-show="!Active" src="/burger.svg" alt="" @click="toggle">
            <img v-show="Active" src="/close.svg" alt="" @click="toggle">
        </div>
        <div  v-show="Active">
            <a class="active" href="">ГЛАВНАЯ</a>
            <a href="">О НАС</a>
            <a href="">НОМЕРА И ЦЕНЫ</a>
            <a href="">КАК ДОБРАТЬСЯ</a>
            <a href="">КОНТАКТ</a>
            <div>
                <img src="/home.svg" alt="img">
                <p>Алматау, ул.Октябрьская, д.492</p>
            </div>
            <div>
                <img src="/phone.svg" alt="img">
                <p>8 (762) 279-56-89</p>
            </div>
            <div>
                <img src="/phone.svg" alt="img">
                <p>8 (762) 279-56-89</p>
            </div>
            <div>
                <a href=""><img src="/inst.svg" alt="img"></a>
                <a href=""><img src="/whatsapp.svg" alt="img"></a>
                <a href=""><img src="/telegram.svg" alt="img"></a>
                <a href=""><img src="/facebook.svg" alt="img"></a>
            </div>
        </div>
    </header>
</template>

<style scoped>
a{
    cursor: pointer;
}
#mobile{
    display: none;
}
header{
    background: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    z-index: 2;
}
header>section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 19px;
}
header>section:last-child{
    margin-bottom: 0px;
}
header>section>div{
    display: flex;
    align-items: center;
}
header>section>div>img{
    padding-right: 15px;
}
header>section>div>p{
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    color: #1E1E1E;
}
header>section>div>a{
    padding: 0 15px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    color: #1E1E1E;
}
header>section>div>a.active{
    color: #FFB100;
    position: relative;
}
header>section>div>a.active::before{
    content: '';
    display: block;
    height: 4px;
    width: calc(100% - 30px);
    position: absolute;
    top: 100%;
    left: 15px;
    background: #FFB100;
}
header>section>div:last-child>a{
    padding: 0 5px;
}
@media  (min-width: 1281px) and (max-width: 1441px) {
    header>section>img{
        width: 146px;
    }
    header>section>div>img{
        padding-right: 7px;
        height: 10px;
    }
    header>section>div>a{
        font-size: 9px;
        padding: 0 7px;
    }
    header>section>div>p{
        font-size: 9px;
    }
    header>section>div>a>img{
        width: 16px;
    }
}
@media  (min-width: 601px) and (max-width: 1280px) {
    header>section>img{
        width: 146px;
    }
    header>section>div>a{
        font-size: 9px;
        padding: 0 7px;
    }
    header>section>div>img{
        padding-right: 7px;
        height: 10px;
    }
    header>section>div>a{
        font-size: 9px;
    }
    header>section>div>p{
        font-size: 9px;
    }
    header>section>div>a>img{
        width: 16px;
    }
}
@media (max-width: 600px) {
    header{
        display: none;
    }
    #mobile{
        display: block;
    }
    #mobile>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    #mobile>div>div{
        display: flex;
    }
    #mobile>div.show{
        justify-content: space-between;
        padding: 0 16px;
        flex-direction: row;
    }
    .show>img:first-child{
        width: 75px;
    }
}
</style>
