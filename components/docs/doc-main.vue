<script setup>

</script>

<template>
    <section class="docs">
        <div class="container">
            <div class="wrapper">
                <h1>Документы</h1>
                <div class="doc-lists">
                    <nuxt-link to="regulation-on-the-processing-of-personal-data/" class="doc">
                        <div class="doc-img"><img src="@/assets/images/doc.svg" alt="doc-img"></div>
                        <p>Положение об обработке персональных данных</p>
                    </nuxt-link>
                    <nuxt-link to="/doc/consent-of-personal-data/" class="doc">
                        <div class="doc-img"><img src="@/assets/images/doc.svg" alt="doc-img"></div>
                        <p>Согласие на обработку персональных данных</p>
                    </nuxt-link>
                    <nuxt-link to="/doc/privacy-policy/" class="doc">
                        <div class="doc-img"><img src="@/assets/images/doc.svg" alt="doc-img"></div>
                        <p>Политика конфиденциальности</p>
                    </nuxt-link>
                    <nuxt-link to="/doc/public-offer/" class="doc">
                        <div class="doc-img"><img src="@/assets/images/doc.svg" alt="doc-img"></div>
                        <p>Публичная оферта</p>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
a:hover {
 p {
     color: var(--yellow);
 }
}
.wrapper {
    max-width: 960px;
    margin: 0 auto;
    h1 {
        padding-top: 48px;
        font-weight: 900;
        font-size: 32px;
        line-height: 112%;
        color: var(--dark-select-10);
        margin-bottom: 48px;
    }
}
.doc-lists {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .doc {
        padding: 16px;
        border: 1px solid var(--dark-select-80);
        border-radius: 24px;
        display: flex;
        gap: 16px;
        align-items: center;
    }
    .doc-img {
        background: var(--dark-select);
        border-radius: 52px;
        padding: 16px;
        width: 56px;
        height: 56px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p {
        font-weight: 700;
        font-size: 20px;
        line-height: 120%;
        color: var(--dark-select-10);
    }
}
@media (max-width: 1100px) {
    .wrapper {
        h1 {
            font-weight: 900;
            font-size: 20px;
            line-height: 120%;
            color: var(--dark-select-10);
            margin-bottom: 40px;
        }
    }
    .doc-lists {
        display: flex;
        flex-direction: column;
        gap: 24px;

        .doc {
            border-radius: 16px;
        }
        .doc-img {
            border-radius: 52px;
            padding: 8px;
            width: 40px;
            height: 40px;
        }
        p {
            font-weight: 500;
            font-size: 15px;
            line-height: 160%;
            color: var(--dark-select-10);
        }
    }
}
</style>
