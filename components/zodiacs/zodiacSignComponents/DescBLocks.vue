<script setup>
import {useRoute} from "vue-router";

const route = useRoute();
const sign = route.params.sign;
import {zodiacDescBlocks} from "assets/data/zodiac.js";


</script>

<template>
    <section>
        <div class="container">
            <div class="text">
                <h1 class="title">Описание знака</h1>
                <p>{{ zodiacDescBlocks[sign].description }}</p>
            </div>
            <div class="wrapper">
                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Качество</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/quality/${zodiacDescBlocks[sign].quality.en}`"
                    >
                        {{ zodiacDescBlocks[sign].quality.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Управляющая планета</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/planet/${zodiacDescBlocks[sign].planet.en}`"
                    >
                        {{ zodiacDescBlocks[sign].planet.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Управляющий дом</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/managing-house/${zodiacDescBlocks[sign].managingHouse.en}`"
                    >
                        {{ zodiacDescBlocks[sign].managingHouse.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Карта Таро</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/tarot/${zodiacDescBlocks[sign].tarot.en}`"
                    >
                        {{ zodiacDescBlocks[sign].tarot.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Цвет</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/color/${zodiacDescBlocks[sign].color.en}`"
                    >
                        {{ zodiacDescBlocks[sign].color.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Лучшая совместимость</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/compatibility/${zodiacDescBlocks[sign].compatibility.en}`"
                    >
                        {{ zodiacDescBlocks[sign].compatibility.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Стихия</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/element/${zodiacDescBlocks[sign].element.en}`"
                    >
                        {{ zodiacDescBlocks[sign].element.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Архетип</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/archetype/${zodiacDescBlocks[sign].archetype.en}`"
                    >
                        {{ zodiacDescBlocks[sign].archetype.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Камень удачи</h2>
                    <p class="block_links">
                        <nuxt-link v-for="(item, index) in zodiacDescBlocks[sign].stones"
                                   :key="index"
                                   :to="`/horoscope/zodiac/stone/${item.en}`">
                            {{ item.ru }}
                        </nuxt-link>
                    </p>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Цветок-талисман</h2>

                    <p class="block_links">
                        <nuxt-link v-for="(item, index) in zodiacDescBlocks[sign].flowers"
                                   :key="index"
                                   :to="`/horoscope/zodiac/flower/${item.en}`">
                            {{ item.ru }}
                        </nuxt-link>
                    </p>

                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Счастливое число</h2>
                    <p class="block_links">
                        <nuxt-link v-for="(item, index) in zodiacDescBlocks[sign].luckyNumbers"
                                   :key="index"
                                   :to="`/horoscope/zodiac/number/${item.en}`">
                            {{ item.ru }}
                        </nuxt-link>
                    </p>
                </div>

                <div class="block">
                    <svg
                        width="64"
                        height="64"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="32" cy="32" r="32" fill="#111010"/>
                    </svg>
                    <h2>Важные годы</h2>
                    <p class="years">
                        <span v-for="(item, index) in zodiacDescBlocks[sign].importantYears"
                                   :key="index">
                            {{ item.ru }}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.text {
    margin-bottom: 64px;

    h1 {
        margin-bottom: 16px;
    }

    p {
        font-weight: 400;
        font-size: 24px;
        line-height: 133%;
        text-align: center;
    }
}

.wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: flex-start;
}

.block {
    padding: 35px 30px;
    background: var(--dark-select);
    min-height: 234px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: calc(25% - 16px);

    svg {
        margin-bottom: 16px;
    }

    h2 {
        font-weight: 400;
        font-size: 17px;
        line-height: 165%;
        text-align: center;
        color: var(--dark-select-20);
        margin-bottom: 4px;
    }

    a {
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
        text-align: center;
        color: var(--dark-select-10);
    }
}
.block_links {
    display: inline-block;
    text-align: center;
}
.years {
    display: inline-block;
    text-align: center;

    span {
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
        text-align: center;
        color: var(--dark-select-10);
    }
}

@media (max-width: 1100px) {
    .text {
        margin-bottom: 20px;

        p {
            font-weight: 400;
            font-size: 17px;
            line-height: 153%;
            text-align: start;
        }
    }
    .years {
        display: inline-block;
        text-align: center;

        span {
            font-weight: 500;
            font-size: 15px;
            line-height: 160%;
        }
    }
    .block {
        padding: 16px;
        min-height: 0px;
        max-width: none;
        min-width: 175px;
        border-radius: 16px;

        svg {
            margin-bottom: 8px;
            width: 48px;
        }

        h2 {
            font-size: 13px;
            line-height: 169%;
            margin-bottom: 2px;
        }

        a {
            font-weight: 500;
            font-size: 15px;
            line-height: 160%;
        }
    }
}

@media (max-width: 800px) {
    .wrapper {
        gap: 8px;
    }

    .block {
        flex-basis: calc(50% - 8px);
        min-width: auto;
    }
}
</style>
