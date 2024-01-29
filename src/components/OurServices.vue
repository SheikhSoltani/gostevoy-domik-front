<script setup>

</script>

<template>
    <section class="contain">
        <h2>НАШИ НОМЕРА</h2>
        <div>
            <div>
                <div  :style="{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('/background.jpg')`,
                    'background-position': 'center',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',}">
                    <div>
                        <h3>2-х местный</h3>
                        <p>-1 двуспальная кровать или 2 односпальные кровати</p>
                        <p>-Кондиционер</p>
                        <p>-Интернет</p>
                        <p>-Телевизор</p>
                    </div>
                </div>
                <p>300000 KZT за сутки</p>
                <button>Забронировать</button>
            </div>
            
            <div>
                <div  :style="{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('/background.jpg')`,
                    'background-position': 'center',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',}">
                    <div>
                        <h3>Семейный</h3>
                        <p>-1 двуспальная кровать или 2 односпальные кровати</p>
                        <p>-Кондиционер</p>
                        <p>-Интернет</p>
                        <p>-Телевизор</p>
                    </div>
                </div>
                <p>400000 KZT за сутки</p>
                <button>Забронировать</button>
            </div>
            
            <div>
                <div  :style="{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url('/background.jpg')`,
                    'background-position': 'center',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',}">
                    <div>
                        <h3>Корпоративный</h3>
                        <p>-1 двуспальная кровать или 2 односпальные кровати</p>
                        <p>-Кондиционер</p>
                        <p>-Интернет</p>
                        <p>-Телевизор</p>
                    </div>
                </div>
                <p>500000 KZT за сутки</p>
                <button>Забронировать</button>
            </div>
            
        </div>
    </section>
</template>

<style scoped>

h2{
    color: #585858;
    margin-bottom: 30px;
}
section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
section>div{
    display: flex;
}
button{
    color: #FFF;
    font-family: Inter;
    font-size: 18px;
    font-weight: 500;
    padding: 15px 25px;
    border-radius: 10px;
    background: #FFB100;
    border: none;
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
    margin: 0 10px;
}
section>div>div>div{
    height: 300px;
    width: 394px;
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
</style>
