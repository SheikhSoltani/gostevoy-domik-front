<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const { text,arr } = defineProps(['text','arr']);

const isMobile = ref(false);
const isLaptop = ref(false);
const isTablet = ref(false);
const height = ref(552);
const width = ref(636);

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
    console.log('gh')
        height.value = 403;
        width.value = 542;
    }
    if(isTablet.value){
    console.log('gh')
        height.value = 603;
        width.value = 380;
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
    <section class="contain">
        <div>
            <h2>Что включено в номер ?</h2>
            <span>
                <div>
                    <div>
                        <h2>Скидка 20%</h2>
                        <p>Семьям, проживающим более трех дней.</p>
                    </div>
                </div>
            </span>
            <div>
                <h3>Оборудованная кухня</h3>
                <p>Холодильник, электроплита, электрочайник, микроволновая печь, духовой шкаф, посуда</p>
                <h3>Мангал</h3>
                <p>Для шашлыков, стейков</p>
                <h3>Восточный казан</h3>
                <p>Для восточных блюд</p>
                <h3>Коктальница</h3>
                <p>Для приготовления рыбы до 12 кг</p>
                <h3>Терасса</h3>
                <p>Беседка, Релакс зона, Детская площадка</p>
            </div>
            <h4>ПИТАНИЕ НЕ ВКЛЮЧЕНО!</h4>
        </div>
    </section>
</template>

<style scoped>
h4{
    font-family: Montserrat;
    font-size: 32px;
    font-weight: 700;
    text-align: left;
    color: #FF5E5E;
    margin-top: 26px;
}
section>div{
    position: relative;
    padding: 0 55% 0 0;
    margin: 100px 0 130px;
}
section>div>span{
    position: absolute;
    background: url('/background_poster.webp');
    background-repeat: no-repeat;
    background-size: cover;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
section>div>span>div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: rgba(0,0,0,0.4);
    padding: 15px;
}
section>div>span>div>div>h2{
    color: #FBDFC2;
    font-family: Montserrat;
    font-size: 68px;
    font-weight: 600;
    margin: 55px 0 0;
}
section>div>span>div>div>p{
    color: #FFF;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 500;
    margin: 0 0 54px;
    width: 50%;
    font-style: italic;
}
h2{
    color: #585858;
    font-family: Inter;
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 32px;
}
h3{
    color: #585858;
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    margin: 28px 0 0;
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
    }
    p{
        font-size: 10px;
    }
    h4{
        font-size: 16px;
    }
    section>div>span>div>div>h2{
        font-size: 36px;
        margin: 30px 0 0;
    }
    section>div>span>div>div>p{
        font-size: 9px;
        margin: 0 0 30px;
    }
}
@media (max-width: 600px) {
    section>div>span{
        position:static;
        width: 100%;
        padding: 46px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section>div>span>div{
        padding: 7px;
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
    h4{
        font-size: 20px;
    }
    section>div>div>h3{
        font-size: 24px;
        margin: 16px 0;
    }
    p{
        font-size: 14px;
    }
    section>div>span>div>div>h2{
        font-size: 36px;
        margin: 30px 0 0;
    }
    section>div>span>div>div>p{
        font-size: 9px;
        margin: 0 0 30px;
    }
}
</style>
