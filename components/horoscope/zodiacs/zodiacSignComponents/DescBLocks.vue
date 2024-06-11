<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const sign = route.params.sign;
import { zodiacDescBlocks } from "assets/data/zodiac.js";
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
                    <div class="img">
                        <img v-if="zodiacDescBlocks[sign].quality.image" :src="zodiacDescBlocks[sign].quality.image" alt="sign"/>
                    </div>
                    <h2>Качество</h2>
                    <nuxt-link :to="`/horoscope/zodiac/quality/${zodiacDescBlocks[sign].quality.en}/`">
                        {{ zodiacDescBlocks[sign].quality.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <div class="img">
                        <img v-if="zodiacDescBlocks[sign].planet.image" :src="zodiacDescBlocks[sign].planet.image" alt="sign"/>
                    </div>
                    <h2>Управляющая планета</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/planet/${zodiacDescBlocks[sign].planet.en}/`"
                    >
                        {{ zodiacDescBlocks[sign].planet.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <div class="img">
                        <img v-if="zodiacDescBlocks[sign].managingHouse.image" :src="zodiacDescBlocks[sign].managingHouse.image" alt="sign"/>
                    </div>
                    <h2>Управляющий дом</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/managing-house/${zodiacDescBlocks[sign].managingHouse.en}/`"
                    >
                        {{ zodiacDescBlocks[sign].managingHouse.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <div class="img">
                        <img v-if="zodiacDescBlocks[sign].tarot.image" :src="zodiacDescBlocks[sign].tarot.image" alt="sign"/>
                    </div>
                    <h2>Карта Таро</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/tarot/${zodiacDescBlocks[sign].tarot.en}/`"
                    >
                        {{ zodiacDescBlocks[sign].tarot.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <div class="img">
                        <img v-if="zodiacDescBlocks[sign].color.image" :src="zodiacDescBlocks[sign].color.image" alt="sign"/>
                    </div>
                    <h2>Цвет</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/color/${zodiacDescBlocks[sign].color.en}/`"
                    >
                        {{ zodiacDescBlocks[sign].color.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <div class="img">
                        <img v-if="zodiacDescBlocks[sign].compatibility.image" :src="zodiacDescBlocks[sign].compatibility.image" alt="sign"/>
                    </div>
                    <h2>Лучшая совместимость</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/compatibility/${zodiacDescBlocks[sign].compatibility.en}/`"
                    >
                        {{ zodiacDescBlocks[sign].compatibility.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <div class="img">
                        <img v-if="zodiacDescBlocks[sign].element.image" :src="zodiacDescBlocks[sign].element.image" alt="sign"/>
                    </div>
                    <h2>Стихия</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/element/${zodiacDescBlocks[sign].element.en}/`"
                    >
                        {{ zodiacDescBlocks[sign].element.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <div class="img">
                        <img v-if="zodiacDescBlocks[sign].archetype.image" :src="zodiacDescBlocks[sign].archetype.image" alt="sign"/>
                    </div>
                    <h2>Архетип</h2>
                    <nuxt-link
                        :to="`/horoscope/zodiac/archetype/${zodiacDescBlocks[sign].archetype.en}/`"
                    >
                        {{ zodiacDescBlocks[sign].archetype.ru }}
                    </nuxt-link>
                </div>

                <div class="block">
                    <div class="img">

                    </div>
                    <h2>Камень удачи</h2>
                    <p class="block_links">
                        <nuxt-link
                            v-for="(item, index) in zodiacDescBlocks[sign]
                                .stones"
                            :key="index"
                            :to="`/horoscope/zodiac/stone/${item.en}/`"
                        >
                            {{ item.ru }}
                        </nuxt-link>
                    </p>
                </div>

                <div class="block">
                    <div class="img">

                    </div>
                    <h2>Цветок-талисман</h2>

                    <p class="block_links">
                        <nuxt-link
                            v-for="(item, index) in zodiacDescBlocks[sign]
                                .flowers"
                            :key="index"
                            :to="`/horoscope/zodiac/flower/${item.en}/`"
                        >
                            {{ item.ru }}
                        </nuxt-link>
                    </p>
                </div>

                <div class="block">
                    <div class="img">

                    </div>
                    <h2>Счастливое число</h2>
                    <p class="block_links">
                        <nuxt-link
                            v-for="(item, index) in zodiacDescBlocks[sign]
                                .luckyNumbers"
                            :key="index"
                            :to="`/horoscope/zodiac/number/${item.en}/`"
                        >
                            {{ item.ru }}
                        </nuxt-link>
                    </p>
                </div>

                <div class="block">
                    <div class="img">

                    </div>
                    <h2>Важные годы</h2>
                    <p class="years">
                        <span
                            v-for="(item, index) in zodiacDescBlocks[sign]
                                .importantYears"
                            :key="index"
                        >
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
    width: calc(25% - 12px);

    .img {
        border-radius: 49px;

        width: 64px;
        height: 64px;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;


        img {
            width: 64px;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
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
    .wrapper {
        gap: 8px;
    }
    .block {
        padding: 16px;
        min-height: 0px;
        max-width: none;
        min-width: 175px;
        border-radius: 16px;
        width: calc(25% - 6px);

        .img {
            border-radius: 49px;
            padding: 12px;
            width: 48px;
            height: 48px;
            margin-bottom: 8px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 48px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
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
    .block {
        flex-basis: calc(50% - 4px);
        min-width: auto;
    }
}
</style>
