<script setup>

</script>

<template>
    <section class="natal-advantages">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h2>Как это работает?</h2>
                    <p>В натальной карте за кармические уроки и задачи отвечают Узлы Луны</p>
                </div>
                <div class="blocks">
                    <div class="block long">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Южный узел (Кету)</p>
                        <p class="subtitle">Это наш опыт из прошлой жизни, качества, которые нам понятны и комфортны, потому что они тянутся из предыдущих воплощений. </p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Северный узел (Раху)</p>
                        <p class="subtitle">Показывает те качества, которые нам необходимо развивать в этой жизни, отражает тот жизненный путь, который нам пока только предстоит пройти.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Задача души</p>
                        <p class="subtitle">Задача заключается в том, чтобы, использовав знания из прошлой жизни и взяв из них самое лучшее, обрести новый опыт в текущем воплощении в зависимости от положения Лунных Узлов.</p>
                    </div>
                    <div class="block long">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Анализ кармы</p>
                        <p class="subtitle">При анализе кармы мы рассматриваем фиктивную планету Лилит, или Черную Луну, которая описывает накопленную негативную карму рода и показывает, каким искушениям человек может быть особенно подвержен.</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.wrapper {
    max-width: 960px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 0 auto;
    position: relative;

}

.title {
    display: flex;
    flex-direction: column;
    gap: 24px;
    h2 {
        text-align: center;
        font-weight: 400;
        font-size: 48px;
        line-height: 108%;
        color: var(--dark-select-10);
    }
    p {
        font-weight: 400;
        font-size: 17px;
        line-height: 165%;
        text-align: center;
        color: var(--dark-select-40);
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
        gap: 16px;
        h2 {
            font-weight: 400;
            font-size: 26px;
            line-height: 115%;
            color: var(--dark-select-10);
            text-align: start;
            padding-right: 24px;
            padding-left: 24px;
        }
        p {
            text-align: start;
            padding-right: 24px;
            padding-left: 24px;
            font-weight: 400;
            font-size: 13px;
            line-height: 169%;
            color: var(--dark-select-40);
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
        .block {
            display: flex;
            flex-direction: column;
            min-width: 294px;
            width: 294px;
            padding: 24px;
            border-radius: 24px;
            img {
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
