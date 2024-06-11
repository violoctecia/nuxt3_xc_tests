<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    sign: String,
});

import icon1 from 'assets/svg_zodiacs/1.vue';
import icon2 from 'assets/svg_zodiacs/2.vue';
import icon3 from 'assets/svg_zodiacs/3.vue';
import icon4 from 'assets/svg_zodiacs/4.vue';
import icon5 from 'assets/svg_zodiacs/5.vue';
import icon6 from 'assets/svg_zodiacs/6.vue';
import icon7 from 'assets/svg_zodiacs/7.vue';
import icon8 from 'assets/svg_zodiacs/8.vue';
import icon9 from 'assets/svg_zodiacs/9.vue';
import icon10 from 'assets/svg_zodiacs/10.vue';
import icon11 from 'assets/svg_zodiacs/11.vue';
import icon12 from 'assets/svg_zodiacs/12.vue';

const zodiacInfo = {
    oven: {
        title: 'Гороскоп для Овна',
        image: icon1,
    },
    taurus: {
        title: 'Гороскоп для Тельца',
        image: icon2,
    },
    twins: {
        title: 'Гороскоп для Близнецов',
        image: icon3,
    },
    cancer: {
        title: 'Гороскоп для Рака',
        image: icon4,
    },
    lion: {
        title: 'Гороскоп для Льва',
        image: icon5,
    },
    virgo: {
        title: 'Гороскоп для Девы',
        image: icon6,
    },
    scales: {
        title: 'Гороскоп для Весов',
        image: icon7,
    },
    scorpion: {
        title: 'Гороскоп для Скорпиона',
        image: icon8,
    },
    sagittarius: {
        title: 'Гороскоп для Стрельца',
        image: icon9,
    },
    capricorn: {
        title: 'Гороскоп для Козерога',
        image: icon10,
    },
    aquarius: {
        title: 'Гороскоп для Водолея',
        image: icon11,
    },
    fish: {
        title: 'Гороскоп для Рыб',
        image: icon12,
    },
};

const signData = computed(() => zodiacInfo[props.sign]);

const activeButton = ref('today');
const activeDate = ref('сегодня');
const horoscopeData = ref(null);

import { API_KEY } from '~/config.js';

const apiUrlFirst = `${API_KEY}/horoscope/zodiac/${props.sign}/today`;
import { useFetch } from '#app'
const { data } = await useFetch(apiUrlFirst)
horoscopeData.value = data.value

const fetchHoroscope = async (period) => {
    try {
        const apiUrl = `${API_KEY}/horoscope/zodiac/${props.sign}/${period}`;
        const response = await $fetch(apiUrl);
        horoscopeData.value = response;
        activeButton.value = period;
        switch (period) {
            case 'today':
                activeDate.value = 'сегодня';
                break;
            case 'tomorrow':
                activeDate.value = 'завтра';
                break;
            case 'weekly':
                activeDate.value = 'неделю';
                break;
            case 'monthly':
                activeDate.value = 'месяц';
                break;
            case 'yearly':
                activeDate.value = 'год';
                break;
            default:
                activeDate.value = period;
        }
    } catch (error) {
        console.error("Failed to fetch horoscope data:", error);
    }
};
</script>

<template>
    <div class="container">
        <section class="horoscope-block">
            <component v-if="signData.image" :is="signData.image" class="img"></component>
            <h3 class="title">{{ signData.title }} на {{ activeDate }}</h3>
            <div class="buttons">
                <button :class="{ active: activeButton === 'today' }" @click="fetchHoroscope('today')">Сегодня</button>
                <button :class="{ active: activeButton === 'tomorrow' }" @click="fetchHoroscope('tomorrow')">Завтра</button>
                <button :class="{ active: activeButton === 'weekly' }" @click="fetchHoroscope('weekly')">Неделя</button>
                <button :class="{ active: activeButton === 'monthly' }" @click="fetchHoroscope('monthly')">Месяц</button>
                <button :class="{ active: activeButton === 'yearly' }" @click="fetchHoroscope('yearly')">Год</button>
            </div>
            <p>{{ horoscopeData?.text }}</p>
        </section>
    </div>
</template>


<style scoped>
.horoscope-block {
    border: 1px solid var(--dark-main-80);
    border-radius: 40px;
    background: var(--dark-main);
    padding: 40px 48px;
}
.img {
    border-radius: 49px;
    padding: 12px;
    width: 96px;
    height: 96px;
    margin-bottom: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark-select);
}
h3 {
    font-weight: 900;
    font-size: 40px;
    line-height: 110%;
    color: var(--dark-select-10);
    text-align: start;
    margin-bottom: 24px;
}
p {
    font-weight: 400;
    font-size: 19px;
    line-height: 147%;
    color: var(--dark-select-20);
}
.buttons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 32px;
    button {
        border-radius: 26px;
        padding: 8px 20px;
        border: 1px solid rgba(255, 255, 255, 0.87);
        font-weight: 500;
        font-size: 17px;
        line-height: 165%;
        color: rgba(255, 255, 255, 0.87);
        background: none;
        min-width: 50px;
    }
    button:last-child {
        min-width: 63px;
    }
    button:hover {
        background: var(--yellow);
        color: var(--dark-select);
        border: 1px solid var(--yellow);
    }
    button.active {
        background: var(--yellow);
        color: var(--dark-select);
        border: 1px solid var(--yellow);
    }
}


@media (max-width: 1100px) {
    .horoscope-block {
        border-radius: 16px;
        padding: 24px;
    }
    .img {
        width: 64px;
        height: 64px;
        margin-bottom: 24px;

        svg {
            width: 40px;
            height: 40px;
        }
    }
    h3 {
        font-size: 26px;
        line-height: 115%;
        margin-bottom: 16px;
    }
    p {
        font-size: 15px;
        line-height: 160%;
    }
    .buttons {
        margin-bottom: 16px;
        button {
            padding: 8px 12px;
            font-weight: 500;
            font-size: 13px;
            line-height: 169%;

        }
    }
}
</style>
