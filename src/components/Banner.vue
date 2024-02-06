<script setup>

</script>

<template>
    <section  class="contain">
        <div>
            <h2>Следите за новостями в нашем инстаграм</h2>
            <p>Подпишитесь на наши рассылки, чтобы быть в курсе действующих акций и скидок</p>
            <a href="https://www.instagram.com/gostevoydomik_almatau">Подписаться</a>
        </div>
        <img src="/smartphone.png" alt="">
    </section>
</template>

<style scoped>
div{
    padding: 100px 0;
    width: 55%;
}
section{
    background: #F0F4F8;
    position: relative;
    overflow: hidden;
}
h2{
    color:  #2F2F2F;
    font-family: Montserrat;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
}
p{
    color:  #2F2F2F;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    margin: 24px 0 44px;
}
a{
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    padding: 15px 25px;
    border-radius: 10px;
    background: #FFB100;
    border: none;
    text-decoration: none;
}
section>img{
    position: absolute;
    width: 958px;
    height: 958px;
    top: -100px;
    right: 7%;
}
@media  (min-width: 1281px) and (max-width: 1441px) {
    div{
        padding: 80px 0;
    }
    h2{
        font-size: 32px;
    }
    p{
        font-size: 16px;
    }
    section>img{
        width: 533px;
        height: 533px;
        top: 100px;
        right: 7%;
    }
}
@media  (min-width: 601px) and (max-width: 1280px) {
    div{
        padding: 80px 0;
    }
    h2{
        font-size: 32px;
    }
    p{
        font-size: 16px;
    }
    section>img{
        width: 533px;
        height: 533px;
        top: 100px;
        right: 7%;
    }
}
@media (max-width: 600px) {
    h2{
        font-size: 18px;
    }
    p{
        width: 80%;
        font-size: 8px;
        font-weight: 500;
        margin: 12px 0 12px;
    }
    section>img{
        position: absolute;
        width: 292px;
        height: 292px;
        top: 80px;
        right: -18vw;
    }
    div{
        padding: 60px 0 80px;
        width: 70%;
    }
    button{
        font-size: 7px;
        padding: 7px 17px;
        border-radius: 3px;
    }
}
</style>
