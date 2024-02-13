<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
const moveValue =ref(0)
const isMobile = ref(false);
const isLaptop = ref(false);
const isTablet = ref(false);
const move = ref('0px'); 
const blockWidth =ref(1810)
const rightButton = () => {
    moveValue.value -= blockWidth.value;
    if(3*-blockWidth.value>=moveValue.value){
        moveValue.value=0;
    }
    move.value=moveValue.value+'px'; 
};
const leftButton = () => {
    moveValue.value += blockWidth.value;
    if(moveValue.value>0)moveValue.value=2*-blockWidth.value;
    move.value=moveValue.value+'px';
};

onMounted(async () => {
    isMobile.value = window.matchMedia('(max-width: 767px)').matches;
    isTablet.value = window.matchMedia('(max-width: 1280px)').matches;
    isLaptop.value = window.matchMedia('(max-width: 1441px)').matches;
    const handleResize = () => {
        isMobile.value = window.matchMedia('(max-width: 767px)').matches;
        isTablet.value = window.matchMedia('(max-width: 1280px)').matches;
        isLaptop.value = window.matchMedia('(max-width: 1441px)').matches;
    };
    if(isLaptop.value){
         blockWidth.value =1100;
    }
    if(isTablet.value){
         blockWidth.value =740;
    }
    if(isMobile.value){
         blockWidth.value =300;
    }
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });
});
</script>

<template>
    <section  class="contain">
        <h2>ОТЗЫВЫ О НАС</h2>
        <div>
            <div :style="{ left: move }">
                <div>
                    Самое шикарное место из всех где была.
Природа, обстановка как дома, уют, дизайн интерьера, вся посуда, чистота , вся посуда.
Роману и Марии всех благ , успехов и процветания.
                </div>
                <div>
                    Очень красивое место
                </div>
                <div>
                    Хорошие номера и приятные хозяева, очень рекомендую
                </div>
            </div>
        </div>
        <div>
            <img src="/LeftButton.svg" alt="image" @click="leftButton">
            <img class="user" src="/user.svg" alt="image">
            <img src="/RightButton.svg" alt="image" @click="rightButton">
        </div>
    </section>
</template>

<style scoped>
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 0 70px;
    position: relative;
}
section>div:last-child{
    display: flex;
    align-items: center;
    justify-content: center;
    position: static;
    height: auto;
    width: 100%;
}
h2{
    color: #585858;
    font-family: Inter;
    font-weight: 600;
}
section>div{
    position: relative;
    width: 1810px;
    height: 230px;
    overflow: hidden;
}
section>div>div{
    display: flex;
    position: absolute;
    left: 0;
    transition: left 0.5s ease; 
}
section>div>div>div{
    color: #FFF;
    width: 1090px;
    padding: 23px 50px;
    text-align: center;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    background:  #FFB100;
    box-shadow: 0px 2px 50px 0px #FFB10080;
    margin: 60px 360px 0;
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
section>div>div>div::after {
    content: ''; 
    transform: translate(-50%,0%);
    position: absolute; /* Абсолютное позиционирование */
    left: 50%; bottom: -60px; /* Положение треугольника */
    border: 40px solid transparent; /* Прозрачные границы */
    border-top: 20px solid #FFB100; /* Добавляем треугольник */
}
.user{
    width: 80px;
    height: 80px;
    margin: 0 10px;
}
@media  (min-width: 1281px) and (max-width: 1441px) {
    section>div>div>div{
        width: 886px;
        margin: 60px 100px 0;
    }
    section>div{
        width: 1100px;
    }
}
@media  (min-width: 601px) and (max-width: 1280px) {
    section>div>div>div{
        width: 686px;
        margin: 60px 27px 0;
        box-shadow: 0px 2px 20px 0px #FFB10080;
        font-size: 12px;
    }
    section>div{
        width: 740px;
        height: 180px;
    }
    .user{
        width: 60px;
        height: 60px;
        margin: 0 10px;
    }
}
@media (max-width: 600px) {
    section>div>div>div{
        width: 284px;
        margin: 30px 8px 0;
        font-size: 8px;
        box-shadow: 0px 2px 10px 0px #FFB10080;
        padding: 18px 13px;
    }
    section>div{
        width: 300px;
        height: 130px;
    }
    img{
        height: 24px;
    }
    .user{
        width: 38px;
        height: 38px;
        margin: 0 8px;
    }
}
</style>
