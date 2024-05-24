<template>
    <section class="how_do_horoscope">
        <div class="container">
            <div class="wrapper">
                <div class="text">
                    <h1>Как мы составляем гороскопы</h1>
                    <p>
                        С помощью нашего астрологического сервиса Вы можете рассчитать
                        гороскоп для Вашего знака зодиака на день, неделю и месяц.
                    </p>
                </div>
                <div class="flex_wrapper">
                    <div class="block">
                        <div class="img">
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="63"
                                    height="63"
                                    rx="31.5"
                                    stroke="#414040"
                                />
                                <path
                                    d="M30.3685 21.12H35.7445V36.832H39.1045V42.88H24.8965V36.832H28.6085V28.096L25.0885 29.408V23.136L30.3685 21.12Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h2>Смотрим на небо и звезды</h2>
                        <p>
                            Анализируем звездные координаты Отправная точка составления
                            зодиакального гороскопа - Ваша дата рождения. Зная день и месяц
                            Вашего рождения, мы определяем Ваш знак зодиака.
                        </p>
                    </div>
                    <div class="block">
                        <div class="img">
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="63"
                                    height="63"
                                    rx="31.5"
                                    stroke="#414040"
                                />
                                <path
                                    d="M30.3685 21.12H35.7445V36.832H39.1045V42.88H24.8965V36.832H28.6085V28.096L25.0885 29.408V23.136L30.3685 21.12Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h2>Изучаем кольца Сатурна</h2>
                        <p>
                            Это система астрологии, которая определяет характеристики личности и судьбу на основе года рождения в соответствии
                        </p>
                    </div>
                    <div class="block">
                        <div class="img">
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 64 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="63"
                                    height="63"
                                    rx="31.5"
                                    stroke="#414040"
                                />
                                <path
                                    d="M30.3685 21.12H35.7445V36.832H39.1045V42.88H24.8965V36.832H28.6085V28.096L25.0885 29.408V23.136L30.3685 21.12Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <h2>Делаем заключение</h2>
                        <p>
                            Это система астрологии, которая определяет характеристики личности и судьбу на основе года рождения в соответствии
                        </p>
                    </div>
                    <div class="block"></div>
                </div>
                <img class="bg image-1" src="@/assets/images/zodiac%20horoscope_2.svg" alt="">
                <img class="bg image-2" src="@/assets/images/zodiac%20horoscope_3.svg" alt="">
            </div>

        </div>

    </section>
</template>

<style scoped>
.how_do_horoscope .wrapper {
    position: relative;
    .bg {
        position: absolute;
        width: 100%;
        max-width: 1056px;
        right: 0;
    }
    .image-1 {
        top: 0;
        z-index: 6;
    }
    .image-2 {
        bottom: 0;
    }
}

.block {
    border: 1px solid var(--dark-main-80);
    background: var(--dark-select);
    position: relative;
    z-index: 5;
    border-radius: 24px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    flex-basis: calc(50% - 12px);

    svg {
        margin-bottom: 56px;
    }

    h2 {
        font-weight: 700;
        font-size: 24px;
        line-height: 117%;
        color: var(--dark-select-10);
        margin-bottom: 12px;
    }

    p {
        font-weight: 400;
        font-size: 17px;
        line-height: 165%;
        color: var(--dark-select-20);
    }
}

.block:last-child {
    border: none;
    border-radius: 0;
    padding: 0;
    background: none;
    z-index: -100;
}

.flex_wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;
}

.wrapper {
    border-radius: 40px;
    padding: 48px;
    background: var(--dark-select);
    display: flex;
    flex-direction: column;
    gap: 64px;
}
.text {
    display: flex;
    flex-direction: column;
    gap: 32px;
    position: relative;
    z-index: 10;
}
h1 {
    font-weight: 900;
    font-size: 56px;
    line-height: 107%;
    color: var(--dark-select-10);
    max-width: 720px;
}

p {
    font-weight: 400;
    font-size: 19px;
    line-height: 147%;
    color: var(--dark-select-20);
    max-width: 720px;
}

@media (max-width: 1100px) {
    .block {
        border: 1px solid var(--dark-main-80);
        border-radius: 16px;
        padding: 24px;

        svg {
            margin-bottom: 24px;
        }

        h2 {
            font-weight: 700;
            font-size: 18px;
            line-height: 122%;
            margin-bottom: 12px;
        }

        p {
            font-weight: 400;
            font-size: 15px;
            line-height: 160%;
        }
    }

    .flex_wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
    }
    .text {

        gap: 16px;
    }
    .wrapper {
        border-radius: 16px;
        padding: 24px;
        gap: 32px;
    }

    h1 {
        font-size: 24px;

        span {
            font-size: 24px;
        }
    }

    p {
        font-size: 15px;
    }
}

@media (max-width: 600px) {
    .block {
        flex-basis: 100%;
    }

    .block:last-child {
        display: none;
    }
}
</style>
<script setup lang="ts">
</script>
