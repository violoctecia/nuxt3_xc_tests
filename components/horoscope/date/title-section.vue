<script setup>
const props = defineProps({
    title: String,
    date: String,
});
</script>

<template>
    <div class="container">
        <section class="head_title">
            <h1>{{ props.title}} <span>{{ props.date }}</span></h1>
            <h2>Откройте астрологические прогнозы, созданные специально для Вас</h2>
        </section>
    </div>
</template>

<style scoped>
.head_title {
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 940px;
    margin: auto;
    margin-bottom: 96px;

    h1 {
        font-weight: 900;
        font-size: 56px;
        line-height: 107%;
        text-align: center;
        color: var(--dark-select-10);

        span {
            color: var(--yellow);
            font-weight: 900;
            font-size: 56px;
            line-height: 107%;
            text-align: center;
        }
    }

    h2 {
        font-weight: 400;
        font-size: 24px;
        line-height: 133%;
        text-align: center;
        color: var(--dark-select-10);
    }
}

@media (max-width: 1100px) {

    .head_title {
        gap: 8px;
        margin-bottom: 32px;

        h1 {
            font-size: 32px;
            line-height: 119%;

            span {
                font-size: 32px;
                line-height: 119%;
            }
        }

        h2 {
            font-size: 17px;
            line-height: 153%;
        }
    }
}
@media (max-width: 600px) {

    .head_title {
        h1 {
            text-align: start;
            font-size: 26px;
            line-height: 115%;
            span {
                font-size: 26px;
                line-height: 115%;
            }
        }

        h2 {
            text-align: start;
        }
    }
}
</style>
