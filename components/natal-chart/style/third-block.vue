<script setup>

</script>

<template>
    <section class="how-its-works">
        <div class="container">
            <div class="wrapper">
                <div class="text">
                    <h3>Гайд по стилю подойдет вам, если вы:</h3>
                </div>
                <div class="list">
                    <div class="block">
                        <p>Потеряли свой стиль</p>
                        <span>Чувствуете, что ваш нынешний стиль в одежде не отображает вас как личность, но не знаете, в какую сторону его менять</span>
                    </div>
                    <div class="block">
                        <p>Хотите быть ярким</p>
                        <span>Любите красиво одеваться, и вам хочется собирать еще больше комплиментов по поводу того, как Вы выглядите</span>
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
    max-width: 750px;
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
    gap: 24px;
    .block {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 50%;
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
        gap: 32px;
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
