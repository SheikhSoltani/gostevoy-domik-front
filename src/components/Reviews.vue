<script setup>

</script>

<template>
    <section  class="contain">
        <h2>ОТЗЫВЫ О НАС</h2>
        <div>
            <div>
                Все было прекрасно! Отличный номер, уютный и комфортный; в номере чисто, все в рабочем состоянии!
            </div>
        </div>
        <div>
            <img src="/LeftButton.svg" alt="">
            <img src="" alt="">
            <img src="/RightButton.svg" alt="">
        </div>
    </section>
</template>

<style scoped>
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 0 0;
}
h2{
    color: #585858;
    font-family: Inter;
    font-weight: 600;
    margin-bottom: 40px;
}
section>div>div{
    color: #FFF;
    width: 1090px;
    padding: 23px 50px;
    text-align: center;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    background:  #FFB100;
    box-shadow: 0px 2px 60px 0px #FFB10080;
    margin-bottom: 36px;
    position: relative;
    border-radius: 10px;
}
section>div>div::after {
    content: ''; 
    transform: translate(-50%,0%);
    position: absolute; /* Абсолютное позиционирование */
    left: 50%; bottom: -60px; /* Положение треугольника */
    border: 40px solid transparent; /* Прозрачные границы */
    border-top: 20px solid #FFB100; /* Добавляем треугольник */
}

@media (max-width: 600px) {
    section>div>div{
        width: 343px;
        padding: 18px 13px;
        font-size: 8px;
        margin-bottom: 12px;
        border-radius: 10px;
    }
}
</style>
