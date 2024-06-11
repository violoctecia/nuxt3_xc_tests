<template>
<section>
    <div class="container">
        <div class="wrapper">
            <h3>Как это работает?</h3>
            <p>В натальной карте при рождении заложен образ идеального партнера. За отношения, партнерство и брак отвечает 7 дом натальной карты. Проанализировав положение 7 дома натальной карты, можно понять, с человеком какого склада характера вам будет комфортнее всего выстраивать здоровые и гармоничные отношения</p>
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
