<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const { text,arr } = defineProps(['text','arr']);

const isMobile = ref(false);
const isLaptop = ref(false);
const isTablet = ref(false);
const moveValue =ref(0)
const blockWidth =ref(276)
const move = ref('0px'); 
const count = ref(0)
const rightButton = () => {
    if(isMobile.value){
        moveValue.value -= 243;
        if(6*-243>=moveValue.value){
            moveValue.value=0;
        }
        move.value=moveValue.value+'px'; 
    }else{
        moveValue.value -= blockWidth.value;
        if((arr.length-3)*-blockWidth.value>=moveValue.value){
            moveValue.value=0;
        }
        move.value=moveValue.value+'px'; 
    }
};
const leftButton = () => {
    if(isMobile.value){
        moveValue.value += 243;
        if(moveValue.value>0)moveValue.value=5*-243;
        move.value=moveValue.value+'px';
    }else{
        moveValue.value += blockWidth.value;
        if(moveValue.value>0)moveValue.value=(arr.length-4)*-blockWidth.value;
        move.value=moveValue.value+'px';
    }
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
         blockWidth.value =223
    }
    if(isTablet.value){
         blockWidth.value =201
    }
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });
});
</script>

<template>
    <section class="contain">
        <h3>{{ text }}</h3>
        <div>
            <img src="/LeftButton.svg" alt="" @click="leftButton">
            <div>
                <div :style="{ left: move }">
                    <div v-for="elem in arr"  :style="{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${elem.img})`,
                        'background-position': 'center',
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat',}">
                    </div>
                </div>
            </div>
            <img src="/RightButton.svg" alt="" @click="rightButton">
        </div>
    </section>
</template>

<style scoped>
h3{
    padding: 12px 150px;
    background: #FFB100;
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 600;
    border-radius: 8px 8px 0px 0px;
}
section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 21px;
}
section>div{
    display: flex;
    padding: 30px 20px;
    border: none;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
}
section>div>div{
    width: 1104px;
    height: 262px;
    position: relative;
    overflow: hidden;
    margin: 0 25px;
}
section>div>div>div{
    position: absolute;
    left: -276px;
    display: flex;
    transition: left 0.5s ease; 
}
section>div>div>div>div{
    height: 278px;
    width: 262px;
    margin: 0 7px;
}
@media  (min-width: 1281px) and (max-width: 1441px) {
    
    section>div>div{
        width: 892px;
        height: 226px;
    }
    section>div>div>div>div{
        width: 213px;
        height: 226px;
        margin: 0 5px;
    }
}
@media  (min-width: 601px) and (max-width: 1280px) {
    
    section>div>div{
        width: 804px;
        height: 203px;
    }
    section>div>div>div>div{
        width: 191px;
        height: 203px;
        margin: 0 5px;
    }
}
@media (max-width: 600px) {
    
    h3{
        padding: 7px 100px;
        font-size: 16px;
    }
    section>div>div{
        width: 229px;
    }
    section>div>div>div{
        left: 0px;
    }
    section>div>div>div>div{
        width: 229px;
    }
}
</style>
