<script setup>

</script>

<template>
    <section class="natal-thanks">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h2>Преимущества нашего кармического разбора:</h2>
                </div>
                <div class="blocks">
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Анализ вашей кармы и прошлого опыта </p>
                        <p class="subtitle">Получите анализ вашей кармы и опыта прошлой жизни: узнаете, с какими трудностями в прошлых воплощениях вы столкнулись, какое предназначение не выполнили</p>
                        <img class="img-bg block1" src="@/assets/images/natals/natal-bg-line-down.svg" alt="bg">
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Предназначение на эту жизнь</p>
                        <p class="subtitle">Найдете ответ, в чем заключается ваше предназначение на эту жизнь и какие задачи перед вами стоят с кармической точки зрения</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Кармические хвосты</p>
                        <p class="subtitle">Узнаете, какой кармический багаж из прошлой жизни у вас есть и как его проработать</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Искупление кармы</p>
                        <p class="subtitle">Поймете, как вам искупить карму в текущем воплощении</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    position: relative;
    overflow-x: clip;
    .img-bg {
        position: absolute;
        right: -50px;
        top: -100px;
        z-index: -1;
    }
}

.wrapper {
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    margin: 0 auto;
}

.title {
    h2 {
        text-align: start;
        font-weight: 400;
        font-size: 48px;
        line-height: 108%;
        color: var(--dark-select-10);
    }
}

.blocks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 40px;

    .block {
        display: flex;
        flex-direction: column;
        max-width: 460px;
        .img-bg {
            display: none;
        }
        img {
            margin-bottom: 24px;
            width: 64px;
            height: 64px;
        }

        .title {
            text-align: start;
            font-weight: 500;
            font-size: 19px;
            line-height: 147%;
            color: var(--dark-select-20);
            margin-bottom: 8px;
        }

        .subtitle {
            text-align: start;
            font-weight: 400;
            font-size: 17px;
            line-height: 165%;
            color: var(--dark-select-40);
        }
    }
}

@media (max-width: 1100px) {
    .container {
        .img-bg {
            display: none;

        }
        .img-bg.second {
            display: none;
        }
    }

    .wrapper {
        max-width: 960px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin: 0 auto;
    }

    .title {
        h2 {
            font-weight: 400;
            font-size: 26px;
            line-height: 115%;
            color: var(--dark-select-10);
            max-width: 400px;
            width: 100%;
        }
    }

    .blocks {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 24px;
        .block {
            display: flex;
            flex-direction: column;
            max-width: none;
            position: relative;
            width: 100%;
            .img-bg {
                display: block;
                position: absolute;
                right: -30px;
                top: -200px;
                z-index: -1;
                width: 300px;
                height: 300px;
                rotate: -6deg;
            }

            .img-bg.block2 {
                display: block;
                position: absolute;
                width: 300px;
                height: 300px;
                right: -159px;
                top: -105px;
                rotate: 220deg;

            }
            img {
                margin-bottom: 16px;
                width: 40px;
                height: 40px;
            }

            .title {
                font-weight: 500;
                font-size: 15px;
                line-height: 160%;
                margin-bottom: 4px;
            }

            .subtitle {
                font-weight: 400;
                font-size: 15px;
                line-height: 160%;
            }
        }
    }
}
@media (max-width: 800px) {

}
</style>
