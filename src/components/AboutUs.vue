<script setup>
</script>

<template>
    <section id="about" class="contain">
        <h2>О нас</h2>
        <p>Мы — команда энтузиастов, создающих неповторимый опыт отдыха среди горных вершин. Вдохновленные красотой природы, мы приглашаем вас открыть для себя уют и стиль в каждой детали нашего апарт-отеля. Добро пожаловать в наше уникальное пространство, где создаются воспоминания, а каждый момент наполнен особенным величием гор.</p>
    </section>
</template>

<style scoped>
section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3080px;
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
        margin-bottom:3036px;
        padding-top: 24px;
    }
    p{
        font-size: 12px;
        line-height: 20px;
    }
}
</style>
