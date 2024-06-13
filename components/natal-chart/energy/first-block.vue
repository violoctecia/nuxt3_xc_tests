<script setup>

</script>

<template>
    <section class="natal-thanks">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h2>Как это работает:</h2>
                    <p>При составлении гороскопа энергии и вдохновения мы анализируем 3 планеты</p>
                </div>
                <div class="blocks">
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Луна</p>
                        <p class="subtitle">В астрологии за расслабление и отдых отвечает Луна. Чтобы понять, какие занятия наполняют ресурсом и помогают качественно отдохнуть, необходимо проанализировать знак зодиака и дом, в который попадает Луна в вашей натальной карте.</p>
                        <img class="img-bg block1" src="@/assets/images/natals/natal-bg-line-down.svg" alt="bg">
                    </div>
                    <div class="block"></div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Марс</p>
                        <p class="subtitle">На источник сил и энергии укажет «мужская» планета Марс. Зная его положение в натальной карте, можно с легкостью распознать, откуда вам черпать энергию и как перезаряжаться, когда внутренние батарейки на нуле.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Нептун</p>
                        <p class="subtitle">Вдохновением и творчеством в астрологии управляет высшая планета Нептун. Зная дом, в котором он находится, можно определить, какие занятия наполняют вас желанием творить и созидать.</p>
                        <img class="img-bg block3" src="@/assets/images/natals/natal-bg-line-down.svg" alt="bg">
                    </div>
                </div>
            </div>
            <img class="img-bg thirst" src="@/assets/images/natals/natal-bg-line-down.svg" alt="bg">
            <img class="img-bg second" src="@/assets/images/natals/natal-bg-line-up.svg" alt="bg">
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
        top: 90px;
        z-index: -1;
        rotate: -10deg;
    }
    .img-bg.second {
        right: 100px;
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
    display: flex;
    flex-direction: column;
    gap: 24px;
    h2 {
        text-align: start;
        font-weight: 400;
        font-size: 48px;
        line-height: 108%;
        color: var(--dark-select-10);
    }
    p {
        text-align: start;
        font-weight: 400;
        font-size: 17px;
        line-height: 165%;
        color: var(--white);
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
        gap: 8px;
        h2 {
            font-weight: 400;
            font-size: 26px;
            line-height: 115%;
            color: var(--dark-select-10);
            max-width: 405px;
        }
        p {
            font-weight: 400;
            font-size: 13px;
            line-height: 169%;
            color: var(--white);
            max-width: 70%;
        }
    }

    .blocks {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 24px;
        .block:nth-child(2) {
            display: none;
        }
        .block {
            display: flex;
            flex-direction: column;
            max-width: none;
            position: relative;
            width: 100%;
            .img-bg {
                display: block;
                position: absolute;
                right: -40px;
                top: -220px;
                z-index: -1;
                width: 300px;
                height: 300px;
                rotate: -6deg;
            }

            .img-bg.block3 {
                display: block;
                position: absolute;
                width: 300px;
                height: 300px;
                right: -109px;
                top: -195px;
                rotate: 5deg;

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
@media (max-width: 500px) {
    .title {
        h2 {
            font-weight: 400;
            font-size: 26px;
            line-height: 115%;
            color: var(--dark-select-10);
            max-width: calc(100% - 100px);
        }
    }
}
</style>
