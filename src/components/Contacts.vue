<script setup>

</script>

<template>
    <section id="contacts" class="contain">
        <h2>Контакты</h2>
        <untitle>Не стесняйтесь обращаться к нам, если у вас возникнут какие-либо вопросы</untitle>
        <titletwo>телефон * WHATSAPP * TELEGRAM</titletwo>
        <div>
            <number>+8 778 345 56 44</number>
            <undernumber>Марийя романовна</undernumber>
            <number>+8 778 345 56 44</number>
            <undernumber>Роман</undernumber>
        </div>
        <titletwo>E-mail</titletwo>
        <email>Gostevoydomik@gamil.com</email>
        <button>Связаться</button>
    </section>
</template>

<style scoped>
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
button{
    color: #FFF;
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    border-radius: 10px;
    background: #FFB100;
    padding: 20px 230px;
    border: none;
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
