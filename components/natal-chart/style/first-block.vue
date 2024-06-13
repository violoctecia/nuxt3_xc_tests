<template>
    <section class="natal-advantages">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h2>Что вы получаете:</h2>
                </div>
                <div class="blocks">
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Стиль по Венере</p>
                        <p class="subtitle">Рекомендации по вашему венерианскому стилю, в котором вы будете чувствовать себя максимально гармонично и привлекательно</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Стиль по асценденту </p>
                        <p class="subtitle">Рекомендации по стилю по знаку асцендента — ваш секрет успешного позиционирования в обществе</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Подборку знаменитостей</p>
                        <p class="subtitle">Узнайте, у каких знаменитостей такие же астрологические положения, как у вас, и получите вдохновение</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    max-width: 1055px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin: 0 auto;
    position: relative;
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
    gap: 16px;
    .block {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--dark-select-80);
        border-radius: 24px;
        padding: 32px;
        max-width: 341px;
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
        gap: 24px;
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
