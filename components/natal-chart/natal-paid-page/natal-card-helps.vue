<script setup>

</script>

<template>
    <section class="natal-card-helps">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <h3>Натальная карта поможет:</h3>
                </div>
                <div class="blocks">
                    <div class="block">
                        <h4>Принимать решения</h4>
                        <h5>Астрологический разбор позволит вам выбрать благоприятную стратегию для преодоления
                            трудностей.</h5>
                    </div>
                    <div class="block">
                        <h4>Лучше понять себя</h4>
                        <h5>Натальная карта раскрывает ваши сильные и слабые стороны, индивидуальные черты
                            характера.</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.wrapper {
    border-radius: 24px;
    padding: 48px;
    display: flex;
    flex-direction: column;
    gap: 83px;
    position: relative;
    overflow: hidden;
    z-index: 10;
    background-image: url("@/assets/images/natals/natal-card-helps.svg");
    background-repeat: no-repeat;
    background-size: cover;
}

.title {
    max-width: 340px;
    position: relative;
    z-index: 5;

    h3 {
        text-align: start;
        font-weight: 400;
        font-size: 40px;
        line-height: 110%;
        color: var(--dark-select-10);
    }
}

.blocks {
    max-width: 340px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: relative;
    z-index: 5;

    .block {
        display: flex;
        flex-direction: column;
        gap: 4px;

        h4 {
            font-weight: 500;
            font-size: 19px;
            line-height: 147%;
            color: var(--dark-select-20);
        }

        h5 {
            font-weight: 400;
            font-size: 17px;
            line-height: 165%;
            color: var(--dark-select-40);
        }
    }
}

@media (max-width: 1100px) {
    .wrapper {
        border-radius: 16px;
        padding: 24px;
        gap: 32px;

        img {
            right: 0;
            bottom: 0;
            width: 50%;
        }
    }

    .title {
        max-width: 340px;

        h3 {
            font-weight: 400;
            font-size: 24px;
            line-height: 117%;
        }
    }

    .blocks {
        .block {
            h4 {
                font-size: 15px;
                line-height: 160%;
            }

            h5 {
                font-weight: 400;
                font-size: 15px;
                line-height: 160%;
            }
        }
    }
}

@media (max-width: 800px) {
    .wrapper {
        border-radius: 16px;
        padding: 24px;
        gap: 32px;
        padding-bottom: 200px;
        background-image: url("/assets/images/natals/natal-card-helps-mobile.svg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: bottom center;

        img {
            right: 0;
            bottom: 0;
            width: 70%;
        }
    }
}
</style>
