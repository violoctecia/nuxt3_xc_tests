<script setup>
import YellowButton from "~/components/UI/yellowButton.vue";
const props = defineProps({
    title: String,
    desc: String,
});
</script>

<template>
    <section class="natal-title">
        <div class="container">
            <div class="wrapper">
                <div class="text">
                    <h1>{{ props.title }}</h1>
                    <h2>{{ props.desc }}</h2>
                </div>
                <yellow-button :natal="true">Получить разбор</yellow-button>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .wrapper {
        max-width: 962px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
    }
    .text {
        display: flex;
        flex-direction: column;
        gap: 24px;
        h1 {
            font-weight: 400;
            font-size: 56px;
            line-height: 107%;
            text-align: center;
            color: var(--dark-select-10);
        }
        h2 {
            font-weight: 400;
            font-size: 17px;
            line-height: 165%;
            text-align: center;
            color: var(--dark-select-10);
        }
    }
    @media (max-width: 1100px) {
        .wrapper {
            gap: 24px;
            max-width: 600px;
        }
        .text {
            gap: 8px;
            h1 {
                font-size: 26px;
                line-height: 115%;
                text-align: center;
                text-wrap: balance;
            }
            h2 {
                font-size: 13px;
                line-height: 169%;
                text-align: center;
            }
        }
    }
    @media (max-width: 800px) {
        .wrapper {
            align-items: flex-start;
            gap: 24px;
            max-width: none;

        }
        .text {
            gap: 8px;
            max-width: 800px;
            h1 {
                font-size: 26px;
                line-height: 115%;
                text-align: start;
                text-wrap: balance;
            }
            h2 {
                font-size: 13px;
                line-height: 169%;
                text-align: start;
                max-width: 80%;
            }
        }
    }
</style>
