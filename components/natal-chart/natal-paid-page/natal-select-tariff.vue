<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import TariffDetailsPopup from "~/components/natal-chart/natal-paid-page/tariff-details-popup.vue";
import {ref} from 'vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const isShow = ref(false)

const popup = (tariff) => {
    document.body.style.overflow = 'hidden'
    isShow.value = true;
};

const closePopup = () => {
    document.body.style.overflow = 'visible';
    isShow.value = false;
};


</script>

<template>
    <section class="select-tariff">
        <h2>Выберите тариф</h2>
        <div class="list">
            <div class="offer">
                <div class="head">
                    <p class="title">Basic</p>
                    <p class="price">3 000 ₽</p>
                    <p class="desc">Анализ вашей натальной карты по 15 основным жизненным направлениям</p>
                </div>
                <div class="plus">
                </div>
                <div class="buttons">
                    <button>Выбрать тариф</button>
                    <p @click="popup(basic)">Подробное описание тарифа</p>
                </div>
            </div>

            <div class="offer">
                <div class="popular">
                    <p>Очень популярный</p>
                </div>
                <div class="head">
                    <p class="title">Optimum</p>
                    <p class="price">5 000 ₽</p>
                    <p class="desc">Детальный разбор вашей натальной карты по 20+ направлениям</p>
                </div>
                <div class="advantages">
                    <div class="plus">+ Гайд «Солнцезажигающие действия»</div>
                </div>
                <div class="buttons">
                    <button>Выбрать тариф</button>
                    <p @click="popup(optimum)">Подробное описание тарифа</p>
                </div>
            </div>

            <div class="offer">
                <div class="head">
                    <p class="title">Premium</p>
                    <p class="price">7 500 ₽</p>
                    <p class="desc">Подробная расшифровка вашей натальной карты по 30 направлениям</p>
                </div>
                <div class="advantages">
                    <div class="plus">+ Гайд «Солнцезажигающие действия»</div>
                    <div class="plus"> + Гайд «Встреча соляра»</div>

                </div>
                <div class="buttons">
                    <button>Выбрать тариф</button>
                    <p @click="popup(premium)">Подробное описание тарифа</p>
                </div>
            </div>
        </div>

        <swiper
            class="mobile-list"
            :space-between="16"
            :centered-slides="true"
            :initial-slide="1"
            :breakpoints="{
      0: {
        slidesPerView: 1,

      },
       390: {
        slidesPerView: 1.07,
      },
       450: {
        slidesPerView: 1.2,
      },
      650: {
        slidesPerView: 1.8,
      }
    }"
        >
            <swiper-slide class="mobile-slide">
                <div class="offer">
                    <div class="head">
                        <p class="title">Basic</p>
                        <p class="price">3 000 ₽</p>
                        <p class="desc">Анализ вашей натальной карты по 15 основным жизненным направлениям</p>
                    </div>
                    <div class="plus">
                    </div>
                    <div class="buttons">
                        <button>Выбрать тариф</button>
                        <p @click="popup(basic)">Подробное описание тарифа</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="mobile-slide">
                <div class="offer">
                    <div class="popular">
                        <p>Очень популярный</p>
                    </div>
                    <div class="head">
                        <p class="title">Optimum</p>
                        <p class="price">5 000 ₽</p>
                        <p class="desc">Детальный разбор вашей натальной карты по 20+ направлениям</p>
                    </div>
                    <div class="advantages">
                        <div class="plus">+ Гайд «Солнцезажигающие действия»</div>
                    </div>
                    <div class="buttons">
                        <button>Выбрать тариф</button>
                        <p @click="popup(optimum)">Подробное описание тарифа</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="mobile-slide">
                <div class="offer">
                    <div class="head">
                        <p class="title">Premium</p>
                        <p class="price">7 500 ₽</p>
                        <p class="desc">Подробная расшифровка вашей натальной карты по 30 направлениям</p>
                    </div>
                    <div class="advantages">
                        <div class="plus">+ Гайд «Солнцезажигающие действия»</div>
                        <div class="plus"> + Гайд «Встреча соляра»</div>

                    </div>
                    <div class="buttons">
                        <button>Выбрать тариф</button>
                        <p @click="popup(premium)">Подробное описание тарифа</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
    <tariff-details-popup v-if="isShow" @close="closePopup"></tariff-details-popup>
</template>

<style scoped>


.offer:nth-child(2) {
    position: relative;

    .popular {
        position: absolute;
        background: var(--yellow);
        border-radius: 26px;
        padding: 4px 8px;
        top: -10px;
        right: 32px;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-weight: 400;
            font-size: 15px;
            line-height: 160%;
            color: var(--dark-select);
        }
    }

    .buttons {
        button {
            background: var(--yellow);
            color: var(--dark-select);
        }
    }

    .head {
        .title {
            font-weight: 900;
            font-size: 40px;
            line-height: 110%;
            background: linear-gradient(165deg, #ffeb61 0%, #fff7c0 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}

.offer {
    border-radius: 24px;
    padding: 32px;
    background: var(--dark-select);
    min-height: 460px;
    max-width: 416px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .advantages {
        min-height: 68px;
        display: flex;
        flex-direction: column;
        gap: 4px;

        .plus {
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
            border-radius: 26px;
            padding: 4px 8px;
            background: var(--dark-main);
            font-weight: 400;
            font-size: 15px;
            line-height: 160%;
            color: var(--yellow);
        }

    }

    .buttons {
        display: flex;
        flex-direction: column;
        gap: 20px;

        p {
            cursor: pointer;
            font-weight: 500;
            font-size: 17px;
            line-height: 165%;
            text-align: center;
            color: var(--dark-select-20);
            opacity: 0.87;
        }

        button {
            font-weight: 500;
            font-size: 19px;
            line-height: 147%;
            text-align: center;
            color: var(--yellow);
            opacity: 0.87;
            background: var(--dark-main);
            border-radius: 20px;
            padding: 14px 24px;
            width: 100%;
        }

        button:hover {
            background: var(--yellow);
            color: var(--dark-select);
        }
    }

    .head {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .title {
            text-align: start;
            font-weight: 900;
            font-size: 40px;
            line-height: 110%;
            background: linear-gradient(159deg, #f6f6f6 0%, #a4a5a5 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: block;
        }

        .price {
            font-weight: 700;
            font-size: 24px;
            line-height: 117%;
            color: var(--white);
        }

        .desc {
            font-weight: 400;
            font-size: 17px;
            line-height: 165%;
            color: var(--dark-select-10);
        }
    }
}

.select-tariff {
    max-width: 1280px;
    margin: 0 auto;
    margin-bottom: 198px;
}

.list {
    display: flex;
    gap: 16px;
}

h2 {
    font-weight: 400;
    font-size: 48px;
    line-height: 108%;
    text-align: center;
    color: var(--dark-select-10);
    margin-bottom: 64px;
}

.mobile-list {
    display: none;
}

@media (max-width: 1150px) {
    .select-tariff {
        margin-bottom: 40px;
    }
    h2 {
        text-align: start;
        font-weight: 400;
        font-size: 26px;
        line-height: 115%;
        margin-bottom: 32px;
        padding-left: 24px;
    }

    .list {
        display: none;
    }

    .mobile-list {
        display: block;
        padding-left: 24px;
        padding-right: 24px;
    }

    .mobile-slide {
        display: flex;
        justify-content: center;
    }


    .offer {
        border-radius: 16px;
        padding: 24px;
        min-width: 326px;
        min-height: 444px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: fit-content;

        .advantages {
            min-height: 68px;
            display: flex;
            flex-direction: column;
            gap: 4px;

            .plus {
                border-radius: 26px;
                padding: 4px 8px;
                font-weight: 400;
                font-size: 13px;
                line-height: 169%;
            }
        }

        .buttons {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .head {
            display: flex;
            flex-direction: column;
            gap: 0;

            .title {
                font-size: 24px;
                line-height: 117%;
                margin-bottom: 8px;

            }

            .price {
                font-size: 18px;
                line-height: 122%;
                margin-bottom: 16px;

            }

            .desc {
                font-weight: 400;
                font-size: 17px;
                line-height: 165%;
                color: var(--dark-select-10);
            }
        }
    }
    .mobile-slide:nth-child(2) {
        .offer {
            .popular {
                width: fit-content;
                background: var(--yellow);
                border-radius: 26px;
                padding: 4px 8px;
                display: flex;
                justify-content: center;
                align-items: center;

                p {
                    font-weight: 400;
                    font-size: 13px;
                    line-height: 169%;
                    color: var(--dark-select);
                }
            }

            .buttons {
                button {
                    background: var(--yellow);
                    color: var(--dark-select);
                }
            }

            .head {
                .title {
                    background: linear-gradient(165deg, #ffeb61 0%, #fff7c0 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }
        }
    }
}
</style>
