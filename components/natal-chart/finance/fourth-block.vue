<template>
    <section class="natal-card-influence">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h3>Наш денежный разбор подойдёт вам, если вы:</h3>
                </div>
                <div class="blocks">
                    <div class="block"></div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Уперлись в свой финансовый потолок</p>
                        <p class="subtitle">Хотите понять, как выйти на качественно новый уровень дохода</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Имеете временные финансовые трудности</p>
                        <p class="subtitle">Пытаетесь разобраться с финансами и выбраться из долговой ямы</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Мечтаете увеличить ваш доход</p>
                        <p class="subtitle">Сейчас достаточно зарабатываете, но хотите большего</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Хотите узнать что-то новое</p>
                        <p class="subtitle">Только встаете на путь финансовой независимости и хотите узнать лайфхаки, как сделать это безболезненно</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Планируете улучшить финансовую грамотность</p>
                        <p class="subtitle">В целом дружите с деньгами, но не против получить полезные финансовые советы</p>
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
        height: fit-content;
        align-self: end;

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
            align-self: normal;
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
