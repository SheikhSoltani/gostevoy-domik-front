<script setup>
</script>

<template>
    <section id="about" class="contain">
        <h2>О нас</h2>
        <p>Добро пожаловать в гостевой домик, расположенный среди величественных гор Алматы! Наш отель предлагает идеальное место для отдыха от городской суеты и наслаждения чистым горным воздухом. Бронируйте ваше пребывание у нас онлайн и наслаждайтесь каждым моментом вашего отпуска.</p>
    </section>
</template>

<style scoped>
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
}
h2{
    color: #585858;
    margin-bottom: 30px;
}
p{
    font-family: Inter;
    font-size: 24px;
    font-weight: 300;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
}
@media  (min-width: 601px) and (max-width: 1280px) {
    p{
        font-size: 12px;
        line-height: 20px;
    }
}
@media (max-width: 600px) {
    section{
        margin-bottom:36px;
        padding-top: 24px;
    }
    p{
        font-size: 12px;
        line-height: 20px;
    }
}
</style>
