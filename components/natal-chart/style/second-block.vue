<template>
    <section>
        <div class="container">
            <h3>За стиль в натальной карте отвечает Венера и асцендент – знак, в который попадает ваш 1 дом</h3>
            <div class="texts">
                <p>
                    Стиль по асценденту определяет первое впечатление, которое мы производим на окружающих. Если вы хотите нравиться людям и успешно проявляться в социуме, то вам нужно одеваться в соответствии со знаком вашего 1 дома.
                </p>
                <p>
                    Венера – это планета, которая отвечает за эстетическое восприятие и привлекательность. Если вы хотите произвести впечатление на противоположный пол, почувствовать себя желанно, рекомендуем выбрать стиль исходя из знака зодиака и дома, в которые попадает Венера в вашей натальной карте.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.container {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 64px;
}
h3 {
    font-weight: 400;
    font-size: 48px;
    line-height: 108%;
    color: var(--dark-select-10);
}
.texts {
    display: flex;
    gap: 40px;

    p {
        font-weight: 400;
        font-size: 17px;
        line-height: 165%;
        color: var(--dark-select-40);
        width: 50%;
    }
}
@media (max-width: 1100px) {
    .container {
        gap: 24px;
    }
    h3 {
        font-weight: 400;
        font-size: 26px;
        line-height: 115%;
        color: var(--dark-select-10);
    }
    .texts {
        display: flex;
        flex-direction: column;
        gap: 16px;

        p {
            font-weight: 400;
            font-size: 15px;
            line-height: 160%;
            color: var(--dark-select-40);
            width: 100%;
        }
    }
}

</style>
