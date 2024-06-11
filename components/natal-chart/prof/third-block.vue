<script setup>

</script>

<template>
    <section class="natal-advantages">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h2>Что вы получите:</h2>
                </div>
                <div class="blocks">
                    <div class="block long">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <img class="black-icon" src="@/assets/images/black-block-icon.svg" alt="block-icon">
                        <p class="title">10 идеальных профессий</p>
                        <p class="subtitle">Список профессий, соответствующих вашим компетенциям, амбициям и прирожденным талантам.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <img class="black-icon" src="@/assets/images/black-block-icon.svg" alt="block-icon">
                        <p class="title">Анализ карьерного потенциала</p>
                        <p class="subtitle">Анализ вашего потенциала как предпринимателя и собственника бизнеса.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <img class="black-icon" src="@/assets/images/black-block-icon.svg" alt="block-icon">
                        <p class="title">Рекомендации по работе</p>
                        <p class="subtitle">Рекомендации, где вам будет комфортнее работать: на себя или в найме.</p>
                    </div>
                    <div class="block long">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <img class="black-icon" src="@/assets/images/black-block-icon.svg" alt="block-icon">
                        <p class="title">Перспективные профессии</p>
                        <p class="subtitle">Перечень 10 наиболее материально перспективных для вас профессиональных сфер.</p>
                    </div>
                </div>
                <img class="img-bg second" src="@/assets/images/natals/natal-bg-line-up2.svg" alt="bg">
            </div>

        </div>
    </section>
</template>

<style scoped>
.natal-advantages {
    padding-bottom: 50px;
}
.wrapper {
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    margin: 0 auto;
    position: relative;

    .img-bg {
        position: absolute;
        z-index: -1;
    }
    .img-bg.second {
        top: -140px;
        left: 320px;
    }
    .img-bg.first {
        bottom: -200px;
        right: 0;
    }
}

.title {
    h2 {
        text-align: center;
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
    gap: 24px;
    .block.long {
        max-width: 548px;
    }
    .block:first-child {
        position: relative;
        z-index: 5;
        background: var(--dark-main);
    }
    .block {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--dark-select-80);
        border-radius: 24px;
        padding: 32px;
        max-width: 388px;
        width: 100%;
        img {
            margin-bottom: 48px;
            width: 64px;
            height: 64px;
        }
        .black-icon {
            display: none;
        }
        .title {
            text-align: start;
            font-weight: 700;
            font-size: 20px;
            line-height: 120%;
            color: var(--dark-select-20);
            margin-bottom: 16px;
            max-width: 358px;
        }

        .subtitle {
            max-width: 358px;
            text-align: start;
            font-weight: 400;
            font-size: 15px;
            line-height: 160%;
            color: var(--dark-select-40);
        }
    }
}

@media (max-width: 1100px) {
    .natal-advantages {
        padding-bottom: 0;
    }
    .container {
        padding: 0;
    }
    .wrapper {
        gap: 32px;
        .img-bg {
            display: none;
        }
    }

    .title {
        h2 {
            font-weight: 400;
            font-size: 26px;
            line-height: 115%;
            color: var(--dark-select-10);
            text-align: start;
            padding-right: 24px;
            padding-left: 24px;
        }
    }

    .blocks {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: scroll;
        gap: 16px;
        padding-right: 24px;
        padding-left: 24px;
        padding-bottom: 20px;
        .block:first-child {
            display: flex;
            flex-direction: column;
            min-width: 294px;
            width: 294px;
            padding: 48px 24px;
            border-radius: 24px;
            background: var(--dark-select);
            border: none;
        }
        .block {
            display: flex;
            flex-direction: column;
            min-width: 294px;
            width: 294px;
            padding: 48px 24px;
            border-radius: 24px;
            background: var(--dark-select);
            border: none;
            img {
                display: none;
            }
            .black-icon {
                display: block;
                margin-bottom: 24px;
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
                font-size: 13px;
                line-height: 169%;
                color: var(--dark-select-40);
            }
        }
    }
}
@media (max-width: 800px) {

}
</style>
