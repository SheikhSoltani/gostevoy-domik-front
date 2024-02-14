<script setup>

const currentYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <section class="contain">
            <div>
                <img loading="lazy" src="/logo_footer.svg" alt="image">
                <p>
                    Сайт сделан веб студией<br/>
                    <a href="https://digital-solution.kz">Digital Solution.kz</a>
                </p>
            </div>
            <div>
                <h4>Контакты</h4>
                <div>
                    <img loading="lazy" src="/phone_footer.svg" alt="image">
                    <p>+7 (705) 447-26-36</p>
                </div>
                <div>
                    <img loading="lazy" src="/home_footer.svg" alt="image">
                    <p>Алматы</p>
                </div>
                <div>
                    <img loading="lazy" src="/mark_footer.svg" alt="image">
                    <p>Алматау 9</p>
                </div>
                <div>
                    <img loading="lazy" src="/mail_footer.svg" alt="image">
                    <p>roma.mitrofanov8787@gmail.com</p>
                </div>
            </div>
            <div>
                <h4>Информация</h4>
                <p>Заезд: с 16:00</p>
                <p>Выезд: до 12:00</p>
                <p>Бесплатный WI-FI</p>
                <p>Бесплатная парковка</p>
            </div>
            <div>
                <h4>Следите за нами в социальных  сетях</h4>
                <div>
                    <a href="https://www.facebook.com/profile.php?id=100066717135301">
                        <img loading="lazy" src="/facebook_footer.svg" alt="image">
                    </a>
                    <a href="https://www.instagram.com/gostevoydomik_almatau">
                        <img loading="lazy" src="/inst_footer.svg" alt="image">
                    </a>
                    <a href="https://t.me/Romanyh87">
                        <img loading="lazy" src="/telegram_footer.svg" alt="image">
                    </a>
                    <a href="https://wa.me/77054472636">
                        <img loading="lazy" src="/whatsapp_footer.svg" alt="image">
                    </a>
                </div>
            </div>
        </section>
        <section class="contain">
            <p>© 2008–{{ currentYear }} – Gostevoydomik</p>
        </section>
    </footer>
    <footer id="mobile">
        <section class="contain">
            <img loading="lazy" src="/logo_footer.svg" alt="image">
            <div>
                <div>
                    <div>
                        <h4>Контакты</h4>
                        <div>
                            <img loading="lazy" src="/phone_footer.svg" alt="image">
                            <p>+7 (705) 447-26-36</p>
                        </div>
                        <div>
                            <img loading="lazy" src="/home_footer.svg" alt="image">
                            <p>Алматы</p>
                        </div>
                        <div>
                            <img loading="lazy" src="/mark_footer.svg" alt="image">
                            <p>Алматау 9</p>
                        </div>
                        <div>
                            <img loading="lazy" src="/mail_footer.svg" alt="image">
                            <p>roma.mitrofanov8787@gmail.com</p>
                        </div>
                    </div>
                    <p>
                        Сайт сделан веб студией<br/>
                        <a href="https://digital-solution.kz">Digital Solution.kz</a>
                    </p>
                </div>
                <div>
                    <div>
                        <h4>Информация</h4>
                        <p>Заезд: с 14:00</p>
                        <p>Выезд: до 12:00</p>
                        <p>Бесплатный WI-FI</p>
                        <p>Бесплатная парковка</p>
                    </div>
                    <div>
                        <h4>Следите за нами в социальных  сетях</h4>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100066717135301">
                                <img loading="lazy" src="/facebook_footer.svg" alt="image">
                            </a>
                            <a href="https://www.instagram.com/gostevoydomik_almatau">
                                <img loading="lazy" src="/inst_footer.svg" alt="image">
                            </a>
                            <a href="https://t.me/Romanyh87">
                                <img loading="lazy" src="/telegram_footer.svg" alt="image">
                            </a>
                            <a href="https://wa.me/77054472636">
                                <img loading="lazy" src="/whatsapp_footer.svg" alt="image">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="contain">
            <p>© 2008–{{ currentYear }} – Gostevoydomik</p>
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
        padding-bottom: 25px;
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
    font-weight: 700;
    margin-bottom: 6px;
    cursor: pointer;
    text-decoration: underline;
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
    /* width: 218px; */
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
    section{
        padding-top: 30px;
        padding-bottom: 25px;
    }
    section>div>img{
        height: 48px;
    }
    section>div>div>img{
        height: 11px;
        max-width: 14px;
    }
    section>div>div>a>img{
        height: 18px;
    }
    p{
        font-size: 7px;
        margin-bottom: 3px;
    }
    a{
        font-size: 7px;
        margin-bottom: 3px;
    }
    h4{
        margin-bottom: 6px;
        font-size: 10px;
    }
    section:last-child{
        padding: 10px 0;
    }
}
@media (max-width: 600px) {
    footer{
        display: none;
    }
    p{
        font-size: 10px;
        margin-bottom: 3px;
        word-wrap: break-word;
    }
    h4{
        margin-bottom: 6px;
        font-size: 15px;
    }
    #mobile{
        display: flex;
        flex-direction: column;
    }
    section{
        display: flex;
        flex-direction: column;
    }
    section>img{
        width: 80px;
        margin-bottom: 36px;
    }
    section>div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0;
    }
    section>div:last-child{
        width: 100%;
    }
    section>div>div{
        display: flex;
        flex-direction: column;
        margin-right: 15px;
    }
    section>div>div>div{
        margin-bottom: 24px;
    }
    section>div>div>div>div{
        display: flex;
    }
    section>div>div>div>div>p{
        max-width: 120px;
    }
    section>div>div>div>div>img{
        margin-right: 5px;
        height: 10px;
    }
    section>div>div>div>div>a>img{
        margin-right: 5px;
        height: 18px;
    }
}
</style>
