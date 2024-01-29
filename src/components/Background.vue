<script setup>
</script>

<template>
    <section class="contain">
        <h1><color>Высокогорный</color> Отдых с Комфортом</h1>
        <button>Забронировать</button>
    </section>
</template>

<style scoped>
section{
    position: fixed;
    top: 100px;
    left: 0;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background:  linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/background.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 600px;
}
color{
    color: #FFB100;
}
h1{
    width: 80%;
    text-align: center;
    font-weight: 400;
    margin-bottom: 80px;
    color: #fff;
}
button{
    background: #FFB100;
    border-radius: 10px;
    padding: 20px 40px;
    border: none;
    font-family: Inter;
    font-size: 20px;
    font-weight: 400;
    text-align: left;
    color: #fff;
}
</style>
