<template>
<section>
    <div class="container">
        <div class="wrapper">
            <h3>Что расскажет натальная карта:</h3>
            <div class="list">
                <div class="block">
                    <h4>Где встретить настоящую любовь</h4>
                    <p>Список мест, событий и обстоятельств, в которых у вас наибольшая вероятность встретить настоящую любовь</p>
                </div>
                <div class="block">
                </div>
                <div class="block">
                    <h4>Кто ваш идеальный партнер</h4>
                    <p>Образ вашего идеального партнера по натальной карте: характер, привычки, особенности его темперамента, поведения, мировоззрения и ценностей</p>
                </div>
                <div class="block">
                    <h4>Что мешает отношениям</h4>
                    <p>Возможные причины, которые мешают построить счастливые романтические отношения</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;
    column-gap: 72px;
    .block:last-child {
        align-self: end;
    }
    .block {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 340px;
        h4 {
            font-weight: 500;
            font-size: 19px;
            line-height: 147%;
            color: var(--dark-select-20);
        }
        p {
            font-weight: 400;
            font-size: 17px;
            line-height: 165%;
            color: var(--dark-select-40);
        }
    }
}
.wrapper {
    border-radius: 24px;
    padding: 48px 32px 48px 48px;
    background: var(--dark-select);
    display: flex;
    flex-direction: column;
    gap: 73px;
    background-image: url("@/assets/images/natals/love/first-block.svg");
}
h3 {
    font-weight: 400;
    font-size: 40px;
    line-height: 110%;
    color: var(--dark-select-10);
    max-width: 340px;
}

@media (max-width: 1100px) {
    .list {
        display: flex;
        flex-direction: column;
        row-gap: 24px;
        column-gap: 24px;
        .block:last-child {
            align-self: start;
        }
        .block:nth-child(2) {
            display: none;
        }
        .block {
            display: flex;
            flex-direction: column;
            gap: 4px;
            width: 100%;
            h4 {
                font-weight: 500;
                font-size: 15px;
                line-height: 160%;
            }
            p {
                font-weight: 400;
                font-size: 15px;
                line-height: 160%;
            }
        }
    }
    .wrapper {
        border-radius: 16px;
        padding: 24px 24px 182px 24px;
        gap: 32px;
        background-image: url("@/assets/images/natals/love/first-block-mobile.svg");
        background-repeat: no-repeat;
        background-position: bottom right;
    }
    h3 {
        font-weight: 400;
        font-size: 24px;
        line-height: 117%;
    }
}
</style>
