<script setup>

</script>

<template>
    <section class="natal-advantages">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h2>Преимущества нашего разбора</h2>
                </div>
                <div class="blocks">
                    <div class="block long">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Натальная карта всего за пару минут</p>
                        <p class="subtitle">Разбор натальной карты позволяет осознать Ваши эмоциональные реакции на события и научиться реагировать на них более спокойно.</p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Структурированный разбор</p>
                        <p class="subtitle">Разбор натальной карты позволяет осознать Ваши эмоциональные реакции на события и научиться реагировать на них более </p>
                    </div>
                    <div class="block">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Структурированный разбор</p>
                        <p class="subtitle">Разбор натальной карты позволяет осознать Ваши эмоциональные реакции на события и научиться реагировать на них более </p>
                    </div>
                    <div class="block long">
                        <img src="@/assets/images/block-icon.svg" alt="block-icon">
                        <p class="title">Натальная карта всего за пару минут</p>
                        <p class="subtitle">Разбор натальной карты позволяет осознать Ваши эмоциональные реакции на события и научиться реагировать на них более спокойно.</p>
                    </div>
                </div>
                <img class="img-bg first" src="@/assets/images/natals/natal-bg-line-down.svg" alt="bg">
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
