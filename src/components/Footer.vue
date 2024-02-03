<script setup>

</script>

<template>
    <footer>
        <section class="contain">
            <div>
                <img src="/logo_footer.svg" alt="">
                <p>
                    Сайт сделан веб студией
                    <a href="">Digital Solution.kz</a>
                </p>
            </div>
            <div>
                <h4>Контакты</h4>
                <div>
                    <img src="/phone_footer.svg" alt="">
                    <p>8 (778) 279-56-89</p>
                </div>
                <div>
                    <img src="/home_footer.svg" alt="">
                    <p>АлматаУ</p>
                </div>
                <div>
                    <img src="/mark_footer.svg" alt="">
                    <p>ул.Октябрьская, д.492</p>
                </div>
                <div>
                    <img src="/mail_footer.svg" alt="">
                    <p>Gostevoydomik@gaml.com</p>
                </div>
            </div>
            <div>
                <h4>Информация</h4>
                <p>Заезд: с 16:00</p>
                <p>Выезд: до 12:00</p>
                <p>Бесплатный WI-FI</p>
                <p>Бесплатная парковка</p>
                <a href="">О нас</a>
                <a href="">Условия бронирования</a>
                <a href="">Политика конфиденциальности</a>
            </div>
            <div>
                <h4>Следите за нами в социальных  сетях</h4>
                <div>
                    <a href="">
                        <img src="/facebook_footer.svg" alt="">
                    </a>
                    <a href="">
                        <img src="/inst_footer.svg" alt="">
                    </a>
                    <a href="">
                        <img src="/telegram_footer.svg" alt="">
                    </a>
                    <a href="">
                        <img src="/whatsapp_footer.svg" alt="">
                    </a>
                </div>
            </div>
        </section>
        <section class="contain"></section>
        <section class="contain">
            <p>© 2008–2023 – Gostevoydomik</p>
        </section>
    </footer>
</template>

<style scoped>
#mobile{
    display: none;
}
section{
    display: flex;
    padding-top: 50px;
    background: #2F2F2F;
    justify-content: space-between;
}
p{
    color: #FFF;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
}
a{
    color: #FFF;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
}
h4{
    color: #FFF;
    margin-bottom: 10px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 600;
}
section:last-child{
    background: #626262;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
section>div:first-child{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
section>div:last-child{
    width: 220px;
}
section>div:first-child>p>a{
    text-decoration: none;
}
section>div{
    margin: 0 20px;
    display: flex;
    flex-direction: column;
}
section>div>img{
    height: 64px;
    width: 218px;
}
section>div>div{
    display: flex;
}
section>div>div>img{
    margin: 0 6px 0 0;
}
section>div>div>a{
    margin: 0 10px 0 0;
}
@media  (min-width: 1281px) and (max-width: 1441px) {
    section>div>img{
        height: 48px;
        width: 164px;
    }
    section>div>div>img{
        height: 11px;
        max-width: 14px;
    }
    section>div>div>a>img{
        height: 18px;
    }
    p{
        font-size: 10px;
        margin-bottom: 3px;
    }
    a{
        font-size: 10px;
        margin-bottom: 3px;
    }
    h4{
        margin-bottom: 6px;
        font-size: 15px;
    }
}
@media  (min-width: 601px) and (max-width: 1280px) {
    section>div>img{
        height: 48px;
        width: 164px;
    }
    section>div>div>img{
        height: 11px;
        max-width: 14px;
    }
    section>div>div>a>img{
        height: 18px;
    }
    p{
        font-size: 10px;
        margin-bottom: 3px;
    }
    a{
        font-size: 10px;
        margin-bottom: 3px;
    }
    h4{
        margin-bottom: 6px;
        font-size: 15px;
    }
}
@media (max-width: 600px) {
    footer{
        display: none;
    }
    #mobile{
        display: block;
    }
}
</style>
