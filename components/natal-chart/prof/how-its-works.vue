<template>
<section>
    <div class="container">
        <div class="wrapper">
            <h3>Как это работает?</h3>
            <p>В натальной карте за сферу работы и повседневных трудовых обязанностей отвечает 6 дом, за карьеру и профессиональное развитие — 10 дом. Проанализировав связь этих домов, мы получим представление о подходящих вам сферах деятельности и направлениях работы, о ваших талантах и сильных сторонах, которые могут стать ключом к успешной карьере, а также о наиболее прибыльных для вас профессиях.</p>
        </div>
    </div>
</section>
</template>

<style scoped>
.wrapper {
    padding-left: 48px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 720px;
}
h3 {
    font-weight: 400;
    font-size: 48px;
    line-height: 108%;
    color: var(--dark-select-10);
}
p  {
    font-weight: 400;
    font-size: 17px;
    line-height: 165%;
    color: var(--dark-select-40);
}

@media (max-width: 1100px) {
    .wrapper {
        padding-left: 0;
        gap: 16px;
    }
    h3 {
        font-weight: 400;
        font-size: 24px;
        line-height: 217%;
        color: var(--dark-select-10);
    }
    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 160%;
        color: var(--dark-select-40);
    }
}
</style>
