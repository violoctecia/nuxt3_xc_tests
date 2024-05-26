<script setup>

</script>

<template>
    <section class="natal-thanks">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h2>Благодаря натальной карте вы:</h2>
                </div>
                <div class="blocks">
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Разрешите внутренние конфликты и обретете спокойствие</p>
                        <p class="subtitle">Понимание Ваших астрологических аспектов позволит уравновесить внутренние
                            противоречия и достичь внутренней гармонии.</p>
                        <img class="img-bg block1" src="@/assets/images/natals/natal-bg-line-down.svg" alt="bg">
                    </div>
                    <div class="block"></div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Раскроете потенциал своей личности</p>
                        <p class="subtitle">Астрологический разбор позволяет подсветить ваши таланты и способности,
                            которые могут оставаться незамеченными в повседневной жизни.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Обретете осознанность</p>
                        <p class="subtitle">Эзотерика в целом и астрология в частности предоставляет инструменты и
                            знания, которые тренируют осознанность и помогают ей управлять.</p>
                        <img class="img-bg block2" src="@/assets/images/natals/natal-bg-line-up.svg" alt="bg">
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
        top: 0;
        z-index: -1;
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
            max-width: calc(100% - 100px);
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
            .img-bg {
                display: block;
                position: absolute;
                right: -40px;
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
