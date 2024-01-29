<script setup>
</script>

<template>
    <header class="contain">
        <section>
            <div>
                <img src="/home.svg" alt="img">
                <p>Алматау, ул.Октябрьская, д.492</p>
            </div>
            <div>
                <img src="/massage.svg" alt="img">
                <p>gostevoydomik@gmail,com</p>
            </div>
            <div>
                <img src="/phone.svg" alt="img">
                <p>8 (762) 279-56-89</p>
            </div>
        </section>
        <section>
            <img src="/Logo.svg" alt="img">
            <div>
                <a class="active" href="">ГЛАВНАЯ</a>
                <a href="">О НАС</a>
                <a href="">НОМЕРА И ЦЕНЫ</a>
                <a href="">КАК ДОБРАТЬСЯ</a>
                <a href="">КОНТАКТ</a>
            </div>
            <div>
                <a href=""><img src="/inst.svg" alt="img"></a>
                <a href=""><img src="/whatsapp.svg" alt="img"></a>
                <a href=""><img src="/telegram.svg" alt="img"></a>
                <a href=""><img src="/facebook.svg" alt="img"></a>
            </div>
        </section>
    </header>
</template>

<style scoped>
header{
    background: #fff;
    padding-top: 10px;
    padding-bottom: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
}
header>section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 19px;
}
header>section:last-child{
    margin-bottom: 0px;
}
header>section>div{
    display: flex;
    align-items: center;
}
header>section>div>img{
    padding-right: 15px;
}
header>section>div>p{
    font-family: 'Inter';
    font-weight: 400;
    font-size: 12px;
    color: #1E1E1E;
}
header>section>div>a{
    padding: 0 15px;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    color: #1E1E1E;
}
header>section>div>a.active{
    color: #FFB100;
    position: relative;
}
header>section>div>a.active::before{
    content: '';
    display: block;
    height: 4px;
    width: calc(100% - 30px);
    position: absolute;
    top: 100%;
    left: 15px;
    background: #FFB100;
}
header>section>div:last-child>a{
    padding: 0 5px;
}
</style>
