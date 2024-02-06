<script setup>

</script>

<template>
    <section id="contacts" class="contain">
        <h2>Контакты</h2>
        <untitle>Не стесняйтесь обращаться к нам, если у вас возникнут какие-либо вопросы</untitle>
        <titletwo>телефон * WHATSAPP * TELEGRAM</titletwo>
        <div>
            <number>+7 (701) 715-04-28</number>
            <undernumber>Мария МИТРОФАНОВна</undernumber>
            <number>+7 (705) 447-26-36</number>
            <undernumber>Роман МИТРОФАНОВ</undernumber>
        </div>
        <titletwo>E-mail</titletwo>
        <email>Gostevoydomik@gmail.com</email>
        <a href="https://wa.me/77054472636">Связаться</a>
    </section>
</template>

<style scoped>
h2{
    color: #FFB100;
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
section>div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 21px;
    padding: 0 25px 25px;
    border-bottom: 1px solid #808080;
}
untitle{
    color: #606060;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 36px;
}
titletwo{
    color: #2F2F2F;
    font-family: Montserrat;
    font-size: 40px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 44px;
}
number{
    color: #2F2F2F;
    font-family: Inter;
    font-size: 52px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    margin: 32px 0 16px;
}
undernumber{
    color: #2F2F2F;
    font-family: Inter;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
}
email{
    color: #2F2F2F;
    font-family: Inter;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    margin: 29px 0 58px;
}
a{
    color: #FFF;
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    border-radius: 10px;
    background: #FFB100;
    padding: 20px 230px;
    border: none;
    text-decoration: none;
}
@media (max-width: 600px) {
    untitle{
        font-size: 16px;
        margin-top: 24px;
    }
    titletwo{
        font-size: 18px;
        margin-top: 36px;
    }
    number{
        font-size: 18px;
        margin: 24px 0 8px;
    }
    undernumber{
        font-size: 18px;
    }
    email{
        font-size: 18px;
        margin: 15px 0 39px;
    }
    button{
        font-size: 20px;
        border-radius: 10px;
        background: #FFB100;
        padding: 15px 118px;
    }
}
</style>
