<script setup>
const { text,arr } = defineProps(['text','arr']);
</script>

<template>
    <section class="contain">
        <h3>{{ text }}</h3>
        <div>
            <img src="/LeftButton.svg" alt="">
            <div>
                <div>
                    <div v-for="elem in arr"  :style="{background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${elem.img})`,
                        'background-position': 'center',
                        'background-size': 'cover',
                        'background-repeat': 'no-repeat',}">
                    </div>
                </div>
            </div>
            <img src="/RightButton.svg" alt="">
        </div>
    </section>
</template>

<style scoped>
h3{
    padding: 12px 150px;
    background: #FFB100;
    color: #fff;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 600;
    border-radius: 8px 8px 0px 0px;
}
section{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 21px;
}
section>div{
    display: flex;
    padding: 30px 20px;
    border: none;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
}
section>div>div{
    width: 1104px;
    height: 262px;
    position: relative;
    overflow: hidden;
    margin: 0 25px;
}
section>div>div>div{
    position: absolute;
    left: -276px;
    display: flex;
}
section>div>div>div>div{
    height: 278px;
    width: 262px;
    margin: 0 7px;
}
@media (max-width: 600px) {
    
    h3{
        padding: 7px 100px;
        font-size: 16px;
    }
    section>div>div{
        width: 229px;
    }
    section>div>div>div{
        left: 0px;
    }
    section>div>div>div>div{
        width: 229px;
    }
}
</style>
