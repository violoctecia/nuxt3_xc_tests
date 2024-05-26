<script setup>
import HowDoHoroscope from "~/components/zodiacComponents/HowDoHoroscope.vue";
</script>

<template>
    <div class="container">
        <h1>О проекте</h1>
        <div class="main_wrapper">
            <div class="block">
                <h2>Цель проекта</h2>
                <h3>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of
                    Cicero's De Finibus Bonorum et Malorum for use in a type
                    specimen book. It usually begins with: The purpose of lorem
                    ipsum is to create a natural looking block of text
                    (sentence, paragraph, page, etc.) that doesn't distract from
                    the layout. A practice not without controversy, laying out
                    pages with meaningless filler text can be very useful when
                    the focus is meant to be on design, not content. c or web
                    designs. The passage is attributed to an unknown typesetter
                    in the 15th century who is thought to have scrambled parts
                    of Cicero's De Finibus Bonorum et Malorum for use in a type
                    specimen book. It usually begins withhe purpose of lorem
                    ipsum is to create a natural looking block of text
                    (sentence, paragraph, page, etc.) that doesn't distract from
                    the layout. A practice not without controversy, laying out
                    pages with meaningless filler text can be very useful when
                    the focus is meant to be on design, not content. c or web
                    designs. The passage is attributed to an unknown typesetter
                    in the 15th century who is thought to have scrambled parts
                    of Cicero's De Finibus Bonorum et Malorum for use in a type
                    specimen book. It usually begins with
                </h3>
            </div>
            <div class="block">
                <h2>Наши ценности</h2>
                <h3>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of
                    Cicero's De Finibus Bonorum et Malorum for use in a type
                    specimen book. It usually begins
                </h3>
                <div class="cards">
                    <div class="card">
                        <h4>Ценность 1</h4>
                        <h5>
                            Сontroversy, laying out pages with meaningless
                            filler text can be very useful when the focus is
                            meant to be on design, not conteen the focus is
                            meant to be on design, not conte
                        </h5>
                    </div>
                    <div class="card">
                        <h4>Ценность 1</h4>
                        <h5>
                            Сontroversy, laying out pages with meaningless
                            filler text can be very useful when the focus is
                            meant to be on design, not conteen the focus is
                            meant to be on design, not conte
                        </h5>
                    </div>
                    <div class="card">
                        <h4>Ценность 1</h4>
                        <h5>
                            Сontroversy, laying out pages with meaningless
                            filler text can be very useful when the focus is
                            meant to be on design, not conteen the focus is
                            meant to be on design, not conte
                        </h5>
                    </div>
                </div>
            </div>
            <div class="block">
                <h2>Заголовок</h2>
                <h3>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print, graphic or web designs. The
                    passage is attributed to an unknown typesetter in the 15th
                    century who is thought to have scrambled parts of
                    Cicero's De Finibus Bonorum et Malorum for use in a type
                    specimen book. It usually begins with: The purpose of lorem
                    ipsum is to create a natural looking block of text
                    (sentence, paragraph, page, etc.) that doesn't distract from
                    the layout. A practice not without controversy, laying out
                    pages with meaningless filler text can be very useful when
                    the focus is meant to be on design, not content. c or web
                    designs. The passage is attributed to an unknown typesetter
                    in the 15th century who is thought to have scrambled parts
                    of Cicero's De Finibus Bonorum et Malorum for use in a type
                    specimen book. It usually begins withhe purpose of lorem
                    ipsum is to create a natural looking block of text
                    (sentence, paragraph, page, etc.) that doesn't distract from
                    the layout. A practice not without controversy, laying out
                    pages with meaningless filler text can be very useful when
                    the focus is meant to be on design, not content. c or web
                    designs. The passage is attributed to an unknown typesetter
                    in the 15th century who is thought to have scrambled parts
                    of Cicero's De Finibus Bonorum et Malorum for use in a type
                    specimen book. It usually begins with
                </h3>
            </div>
        </div>
    </div>
        <HowDoHoroscope></HowDoHoroscope>
    <div class="container">
        <section class="creators">
            <div class="row">
                <p>Над проектом работали</p>
                <span>Люди разных культурных и религиозных взглядов</span>
            </div>
            <div class="creators_list">
                <p>Габриелян Артур</p>
                <p>Елютин Александр</p>
                <p>Ахмедова Эльвира</p>
                <p>Монархов Алексей</p>
                <p>Сафовский Александр</p>
                <p>Пряников Артём</p>
                <p>Костенко Александра</p>
            </div>
        </section>
    </div>
</template>

<style scoped>
.creators {
    max-width: 960px;
    margin: auto;
    margin-bottom: 96px;

    .creators_list {
        display: flex;
        flex-direction: column;
        gap: 8px;

        p {
            font-weight: 500;
            font-size: 13px;
            line-height: 154%;
            color: var(--dark-select-20);
        }
    }
    .row {
        margin-bottom: 32px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        p {
            font-weight: 700;
            font-size: 24px;
            line-height: 117%;
            color: var(--dark-select-10);
        }
        span {
            font-weight: 400;
            font-size: 19px;
            line-height: 147%;
            color: var(--dark-select-20);
        }
    }
}
.cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.card {
    border-radius: 24px;
    padding: 32px;
    background: var(--dark-select);
    display: flex;
    flex-direction: column;
    gap: 4px;
    h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
        color: var(--dark-select-10);
        max-width: 380px;
    }
    h5 {
        font-weight: 400;
        font-size: 17px;
        line-height: 165%;
        color: var(--dark-select-20);
        max-width: 380px;
    }
}
.main_wrapper {
    max-width: 720px;
    margin: 0 auto;
    margin-bottom: 96px;
    display: flex;
    flex-direction: column;
    gap: 64px;
}
.block {
    display: flex;
    flex-direction: column;
    gap: 32px;
    h2 {
        font-weight: 900;
        font-size: 40px;
        line-height: 110%;
        color: var(--dark-select-10);
    }
    h3 {
        font-weight: 400;
        font-size: 19px;
        line-height: 147%;
        color: var(--dark-select-20);
    }
}
h1 {
    font-weight: 900;
    font-size: 80px;
    line-height: 107%;
    color: var(--dark-select-10);
    padding: 50px 0;
    max-width: 720px;
    margin: 0 auto;
}
</style>
