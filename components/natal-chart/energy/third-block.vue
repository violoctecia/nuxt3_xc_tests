<template>
    <section class="natal-card-influence">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h3>Гороскоп энергии и вдохновения подойдет вам, если вы:</h3>
                </div>
                <div class="blocks">
                    <div class="block"></div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Хотите найти занятие по душе</p>
                        <p class="subtitle">Ищете занятия, которые будут заряжать вас и давать вам энергию и вдохновение.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Хотите прокачать work-life balance</p>
                        <p class="subtitle">Поможем определить границы рабочего времени. Избавит вас от нарушенного баланса между работой и личной жизнью</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Постоянно торопитесь</p>
                        <p class="subtitle">В сумасшедшем темпе современной жизни вам не хватает заземления и замедления </p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Устали от повседневности</p>
                        <p class="subtitle">Хотите разнообразить серые будни и найти новые увлекательные занятия по душе</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Часто чувствуете апатию</p>
                        <p class="subtitle">Если вы часто устаете и у вас нет желания что-либо делать, наш разбор поможет вам прийти в себя и начать жить по-новому</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    background-image: url("@/assets/images/natals/natal-card-influence.svg");
    background-size: cover;
    border-radius: 24px;
    padding: 48px;
    display: flex;
    flex-direction: column;
}

.title {
    max-width: 620px;
    margin-bottom: 100px;

    h3 {
        text-align: start;
        font-weight: 400;
        font-size: 48px;
        line-height: 108%;
        color: var(--dark-select-10);
    }
}

.blocks {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;

    .block:first-child {
        background: none;
    }

    .block:nth-child(2) {
        height: 100%;
        align-self: flex-end;
    }

    .block {
        display: flex;
        flex-direction: column;
        background: var(--dark-main);
        padding: 48px 24px;
        width: 309px;
        border-radius: 24px;

        img {
            margin-bottom: 24px;
            width: 64px;
            height: 64px;
        }

        .title {
            text-align: start;
            font-weight: 500;
            font-size: 15px;
            line-height: 160%;
            color: var(--dark-select-10);
            margin-bottom: 8px;
        }

        .subtitle {
            text-align: start;
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
        padding: 24px 24px 4px 24px;
        overflow: hidden;
        background: #1b1d1f;
    }

    .title {
        max-width: 620px;
        margin-bottom: 32px;

        h3 {
            font-weight: 400;
            font-size: 26px;
            line-height: 115%;
        }
    }

    .blocks {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: scroll;
        gap: 16px;
        padding-bottom: 20px;

        .block:first-child {
            display: none;
        }

        .block:nth-child(2) {
            align-self: normal;
            min-height: auto;
            height: auto;
        }

        .block {
            min-height: auto;
            display: flex;
            flex-direction: column;
            background: var(--dark-main);
            padding: 48px 24px;
            min-width: 294px;
            width: 294px;
            border-radius: 24px;
            height: auto;
            img {
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
    .container {
        padding: 0;
    }

    .wrapper {
        padding-right: 0;
        padding-left: 0;
    }

    .title h3 {
        padding-left: 24px;
        padding-right: 24px;
    }

    .blocks {
        padding-left: 24px;
        padding-right: 24px;
    }
}
</style>
<script setup lang="ts">
</script>
