<template>
    <section class="natal-card-influence">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h3>Разбор любовной сферы подойдёт вам, если вы:</h3>
                </div>
                <div class="blocks">
                    <div class="block"></div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Запутались в личной жизни</p>
                        <p class="subtitle">И хотите понять, что на самом деле вам нужно.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Находитесь в отношениях</p>
                        <p class="subtitle">И хотите проверить, насколько ваш партнер подходит вам с астрологической точки зрения.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Не ищете отношений</p>
                        <p class="subtitle">Но хотите узнать, что звезды советуют вам в делах сердечных.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Не находитесь в отношениях</p>
                        <p class="subtitle">Хотите понять причины своего одиночества и обрести свою любовь.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Пережили болезненный разрыв</p>
                        <p class="subtitle">Хотите восстановиться и узнать больше о себе и своих потребностях в любви.</p>
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
