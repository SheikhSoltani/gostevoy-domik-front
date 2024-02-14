<script setup>

</script>

<template>
    <section id="services" class="contain">
        <h2>НАШИ НОМЕРА</h2>
        <div>
            <div>
                <div  :style="{background: `url('/service.webp')`,
                    'background-position': 'center',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',}">
                    <div>
                        <h3>LUXURY</h3>
                        <h4>50-80 тыс. ТГ <color>/ 1 Сутки</color></h4>
                        <p>-От 2 до 4 Персон</p>
                        <p>-WI-FI</p>
                        <p>-Барбекью зона</p>
                        <p>-Летняя терасса</p>
                        <a href="https://wa.me/77054472636?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20luxury%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80">Забронировать</a>
                    </div>
                </div>
            </div>
            <div>
                <div  :style="{background: `url('/service3.webp')`,
                    'background-position': 'center',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',}">
                    <div>
                        <h3>MEDIUM</h3>
                        <h4>60-90 тыс. ТГ <color>/ 1 Сутки</color></h4>
                        <p>-От 4 до 6 Персон</p>
                        <p>-WI-FI</p>
                        <p>-Барбекью зона</p>
                        <p>-Летняя терасса</p>
                        <a href="https://wa.me/77054472636?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20medium%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80">Забронировать</a>
                    </div>
                </div>
            </div>
            <div>
                <div  :style="{background: `url('/service2.webp')`,
                    'background-position': 'center',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',}">
                    <div>
                        <h3>LARGE</h3>
                        <h4>150-180 тыс. ТГ <color>/ 1 Сутки</color></h4>
                        <p>-От 10 до 12 Персон</p>
                        <p>-WI-FI</p>
                        <p>-Барбекью зона</p>
                        <p>-Летняя терасса</p>
                        <a href="https://wa.me/77054472636?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82%20large%20%D0%BD%D0%BE%D0%BC%D0%B5%D1%80">Забронировать</a>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>

<style scoped>

h2{
    color: #585858;
    margin-bottom: 30px;
}
h4{
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 20px;
    color: #FFF;
    margin: 2px 10px 20px;
}
h4>color{
    color: #FFB100;
    font-family: Montserrat;
    font-size: 17px;
    font-weight: 600;
}
section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 60px;
}
section>div{
    display: flex;
}
a{
    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 10px;
    background: #FFB100;
    border: none;
    text-decoration: none;
    position: absolute;
    right: 15px;
    bottom: 15px;
}
h3{
    color: #fff;
    font-family: Inter;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
}
section>div>div{
    margin: 0 25px;
}
section>div>div>div{
    min-height: 400px;
    width: 374px;
    display: flex;
    align-items: flex-end;
    border-radius: 10px;
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
}
section>div>div>div>div{
    background: rgba(0, 0, 0, 0.60);
    border-radius: 10px;
    height: 55%;
    width: 100%;
    padding:6px 0 30px;
    position: relative;
}
section>div>div>div>div>p{
    color: #fff;
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    margin: 2px 10px;
}
section>div>div>p{
    color: #000;
    font-family: Inter;
    font-size: 24px;
    font-weight: 500;
    margin: 16px 0 32px;
}
@media  (min-width: 1281px) and (max-width: 1441px) {
    section>div>div>div{
        height: 244px;
        width: 320px;
    }
}
@media  (min-width: 601px) and (max-width: 1280px) {
    section>div>div>div{
        height: 250px;
        min-height: 180px;
        width: 200px;
    }
    section>div>div>div>div{
        height: auto;
    }
    h3{
        font-size: 12px;
    }
    h4{
        font-size: 10px;
    }
    section>div>div>div>div>p{
        font-size: 8px;
        margin: 2px 10px;
    }
    a{
        font-size: 7px;
        padding: 6px 9px;
        right: 10px;
        bottom: 10px;
    }
    section>div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section>div>div{
        margin:0 10px;
    }
}
@media (max-width: 600px) {
    section>div{
        flex-direction: column;
        width: 100%;
    }
    section>div>div{
        margin: 0;
    }
    section>div>div>div{
        height: 300px;
        width: 90dvw;
        margin-bottom: 15px;
    }
}
</style>
