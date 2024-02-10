<script setup>

const scrollTo = () => {
    const targetElement3 = document.getElementById('services');
    if (targetElement3) {
        targetElement3.scrollIntoView({ behavior: 'smooth', block: "center" });
    }
};
</script>

<template>
    <section id="background" class="contain">
        <h1><color>Высокогорный</color> Отдых с Комфортом</h1>
        <button @click="scrollTo">Забронировать</button>
    </section>
</template>

<style scoped>
section{
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background:  linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url('/background.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 800px;
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

@media  (min-width: 1281px) and (max-width: 1441px) {
    section{
        min-height: 600px;
    }
}
@media  (min-width: 601px) and (max-width: 1280px) {
    h1{
        width: 90%;
        text-align: center;
        font-weight: 400;
        margin-bottom: 80px;
        color: #fff;
    }
    section{
        min-height: 500px;
    }
}
@media (max-width: 600px) {
    section{
        min-height: 400px;
    }
    h1{
        width: 90%;
        margin-bottom: 36px;
    }
    button{
        font-size: 12px;
        padding: 10px 26px;
    }
}
</style>
