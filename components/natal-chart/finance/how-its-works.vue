<script setup>

</script>

<template>
<section class="how-its-works">
    <div class="container">
        <div class="wrapper">
            <div class="text">
                <h3>Как это работает?</h3>
                <p>Зная особенности этих домов в вашей натальной карте и умея грамотно ими распоряжаться, можно получить доступ к огромным денежным потокам</p>
            </div>
            <div class="list">
               <div class="block">
                   <p>Второй дом</p>
                   <span>Это дом наших финансов, все то, чем обладаем мы сами: наши личные ресурсы, доходы, имущество</span>
               </div>
                <div class="block">
                    <p>Восьмой дом</p>
                    <span>Это дом чужих денег, он описывает денежные средства, имущество, материальные ценности наших партнёров</span>
                </div>
                <div class="block">
                    <p>Что показывают?</p>
                    <span>Как и с помощью чего мы притягиваем материальные ресурсы в свою жизнь</span>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.container {
    max-width: 960px;
    margin: 0 auto;
}
.wrapper {
    background: var(--dark-select);
    border-radius: 26px;
    padding: 32px 48px;
    background-image: url("@/assets/images/natals/finance/how-its-works.svg");
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    gap: 48px;
}
.text {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 500px;
    h3 {
        font-weight: 400;
        font-size: 48px;
        line-height: 125%;
        color: var(--dark-select-10);
    }
    p {
        font-weight: 400;
        font-size: 17px;
        line-height: 165%;
        color: var(--dark-select-40);
    }
}
.list {
    display: flex;
    gap: 32px;
    .block {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 266px;
        p {
            font-weight: 500;
            font-size: 19px;
            line-height: 147%;
            color: var(--white);
        }
        span {
            font-weight: 400;
            font-size: 15px;
            line-height: 160%;
            color: var(--dark-select-40);
        }
    }
}
@media (max-width: 1100px) {
    .wrapper {
        border-radius: 16px;
        padding: 24px;
        background-image: none;
    }
    .text {
        gap: 8px;
        h3 {
            font-size: 24px;
            line-height: 117%;
        }
        p {
            font-weight: 400;
            font-size: 13px;
            line-height: 169%;
        }
    }
    .list {
        display: flex;
        flex-direction: column;
        gap: 32px;
        .block {
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
            p {
                font-size: 17px;
                line-height: 153%;
            }
            span {
                font-weight: 400;
                font-size: 15px;
                line-height: 160%;
            }
        }
    }
}
</style>
