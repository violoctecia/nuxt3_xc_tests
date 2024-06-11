<script setup>
const props = defineProps({
    date: String,
    urlDate: String,
    currentHoroscope: String,
});
</script>

<template>
    <section class="other-horoscopes-date">
        <div class="container">
            <div class="head_title">
                <h3>Другие гороскопы <br> для рожденных <span>{{ props.date }}</span></h3>
                <p>Узнай, что говорят звёзды о твоей жизни</p>
            </div>
            <div class="links">
                <nuxt-link :to="`/horoscope/zodiac/date/${props.urlDate}/`" v-if="currentHoroscope !== 'zodiac'">
                    <div class="link-title">
                        <h4>Зодиакальный гороскоп для <span class="yellow"> {{ props.date }}</span></h4>
                        <p>Древняя система астрологии, основанная на учениях пророка Заратуштры, учитывающая влияние планет на духовную эволюцию человека и принципы морали.</p>
                    </div>
                    <span><p>Читать</p>  <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2005_293)"><path
                        d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                        fill="#E8E8E9"/></g>
                    <defs>
                        <clipPath id="clip0_2005_293">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg></span>
                </nuxt-link>
                <nuxt-link :to="`/horoscope/chinese/date/${props.urlDate}/`" v-if="currentHoroscope !== 'chinese'">
                    <div class="link-title">
                        <h4>Китайский гороскоп для <span class="yellow"> {{ props.date }}</span></h4>
                        <p>Древняя система астрологии, основанная на учениях пророка Заратуштры, учитывающая влияние планет на духовную эволюцию человека и принципы морали.</p>
                    </div>
                    <span><p>Читать</p>  <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2005_293)"><path
                        d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                        fill="#E8E8E9"/></g>
                    <defs>
                        <clipPath id="clip0_2005_293">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg></span>
                </nuxt-link>
                <nuxt-link :to="`/horoscope/japanese/date/${props.urlDate}/`" v-if="currentHoroscope !== 'japanese'">
                    <div class="link-title">
                        <h4>Японский гороскоп для <span class="yellow"> {{ props.date }}</span></h4>
                        <p>Древняя система астрологии, основанная на учениях пророка Заратуштры, учитывающая влияние планет на духовную эволюцию человека и принципы морали.</p>
                    </div>
                    <span><p>Читать</p>  <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2005_293)"><path
                        d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                        fill="#E8E8E9"/></g>
                    <defs>
                        <clipPath id="clip0_2005_293">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg></span>
                </nuxt-link>
                <nuxt-link :to="`/horoscope/zoroastrian/date/${props.urlDate}/`" v-if="currentHoroscope !== 'zoroastrian'">
                    <div class="link-title">
                        <h4>Зороастрийский гороскоп для <span class="yellow"> {{ props.date }}</span></h4>
                        <p>Древняя система астрологии, основанная на учениях пророка Заратуштры, учитывающая влияние планет на духовную эволюцию человека и принципы морали.</p>
                    </div>
                    <span><p>Читать</p>  <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2005_293)"><path
                        d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                        fill="#E8E8E9"/></g>
                    <defs>
                        <clipPath id="clip0_2005_293">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg></span>
                </nuxt-link>
                <nuxt-link :to="`/horoscope/druids/date/${props.urlDate}/`" v-if="currentHoroscope !== 'druids'">
                    <div class="link-title">
                        <h4>Гороскоп Друидов для <span class="yellow"> {{ props.date }}</span></h4>
                        <p>Древняя система астрологии, основанная на учениях пророка Заратуштры, учитывающая влияние планет на духовную эволюцию человека и принципы морали.</p>
                    </div>
                    <span><p>Читать</p>  <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2005_293)"><path
                        d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                        fill="#E8E8E9"/></g>
                    <defs>
                        <clipPath id="clip0_2005_293">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg></span>
                </nuxt-link>
                <nuxt-link :to="`/horoscope/floral/date/${props.urlDate}/`" v-if="currentHoroscope !== 'floral'">
                    <div class="link-title">
                        <h4>Цветочный гороскоп для <span class="yellow"> {{ props.date }}</span></h4>
                        <p>Древняя система астрологии, основанная на учениях пророка Заратуштры, учитывающая влияние планет на духовную эволюцию человека и принципы морали.</p>
                    </div>
                    <span><p>Читать</p>  <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2005_293)"><path
                        d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                        fill="#E8E8E9"/></g>
                    <defs>
                        <clipPath id="clip0_2005_293">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg></span>
                </nuxt-link>
                <nuxt-link :to="`/horoscope/maya/date/${props.urlDate}/`" v-if="currentHoroscope !== 'maya'">
                    <div class="link-title">
                        <h4>Гороскоп Майя для <span class="yellow"> {{ props.date }}</span></h4>
                        <p>Древняя система астрологии, основанная на учениях пророка Заратуштры, учитывающая влияние планет на духовную эволюцию человека и принципы морали.</p>
                    </div>
                    <span><p>Читать</p>  <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2005_293)"><path
                        d="M10 19C9.76635 19.0005 9.53992 18.9191 9.36 18.77C9.25875 18.6861 9.17504 18.583 9.11369 18.4666C9.05234 18.3503 9.01454 18.223 9.00247 18.092C8.99039 17.961 9.00427 17.8289 9.04332 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39001 6.63C9.30694 6.52771 9.24491 6.41002 9.20748 6.28368C9.17004 6.15734 9.15795 6.02485 9.17189 5.89382C9.18583 5.76279 9.22553 5.63581 9.2887 5.52017C9.35187 5.40454 9.43728 5.30252 9.54001 5.22C9.64347 5.12897 9.76464 5.0603 9.8959 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6926 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6023 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z"
                        fill="#E8E8E9"/></g>
                    <defs>
                        <clipPath id="clip0_2005_293">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg></span>
                </nuxt-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
.links {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 32px;
}
a:first-child {
    width: 100%;
    position: relative;
    background-image: url("@/assets/images/planet-ugol.svg");
    background-position: bottom right;
    background-repeat: no-repeat;
}
a:nth-child(2) {
    width: 612px;
}
a:nth-child(3) {
    width: 418px;
}
a:nth-child(4) {
    width: 424px;
}
a:nth-child(5) {
    width: 606px;
}
a:nth-child(6) {
    width: 100%;
    position: relative;
    background-image: url("@/assets/images/planet-ugol.svg");
    background-position: bottom right;
    background-repeat: no-repeat;
}
a {
    overflow: hidden;
    border-radius: 24px;
    padding: 48px;
    background: var(--dark-select);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 320px;
    .link-title {
        display: flex;
        flex-direction: column;
        gap: 12px;
        max-width: 540px;
        h4 {
            font-weight: 900;
            font-size: 32px;
            line-height: 112%;
            color: var(--dark-select-10);
            .yellow {
                color: var(--yellow);
                font-weight: 900;
                font-size: 32px;
                line-height: 112%;
            }
        }
        p {
            font-weight: 400;
            font-size: 15px;
            line-height: 160%;
            color: var(--dark-select-20);
            margin-bottom: 12px;
        }
    }
    span {
        display: flex;
        gap: 4px;
        align-items: center;

        p {
            font-weight: 500;
            font-size: 17px;
            line-height: 165%;
            color: var(--white);
        }
    }
}
a:hover {
    span p {
        color: var(--yellow);
    }
}
.head_title {
    margin-bottom: 64px;

    h3 {
        font-weight: 900;
        font-size: 56px;
        line-height: 107%;
        text-align: center;
        color: var(--dark-select-10);
        margin-bottom: 16px;

        span {
            color: var(--yellow);
            font-weight: 900;
            font-size: 56px;
            line-height: 107%;
        }
    }

    p {
        font-weight: 400;
        font-size: 24px;
        line-height: 133%;
        text-align: center;
        color: var(--dark-select-10);
    }
}
@media (max-width: 1100px) {
    a:first-child {
        justify-content: start;
        background-image: url("@/assets/images/planet-ugol.svg");
        background-position: bottom right ;
        background-repeat: no-repeat;
        background-size: 60%;
        height: 342px;
        .link-title {
            margin-bottom: 24px;
        }
    }
    a:last-child {
        background-image: none;
    }
    a:not(:first-child) {
        position: relative;
        span {
            p {
               display: none;
            }
            svg {
                position: absolute;
                right: 24px;
                top: 24px;
            }

        }
    }
    .head_title {
        display: none;
    }
    .links {
        flex-direction: column;
        gap: 24px;
    }
    a {
        border-radius: 16px;
        padding: 24px;
        min-height: 156px;
        width: 100% !important;
        .link-title {
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-width: 100%;
            h4 {
                font-size: 20px;
                line-height: 120%;
                max-width: 80%;
                .yellow {
                    font-size: 20px;
                    line-height: 120%;
                }
            }
            p {
                font-size: 15px;
                line-height: 160%;
                margin-bottom: 0px;
            }
        }
        span {
            display: flex;
            gap: 4px;
            align-items: center;

            p {
                font-weight: 500;
                font-size: 17px;
                line-height: 165%;
                color: var(--white);
            }
        }
    }
}
</style>
