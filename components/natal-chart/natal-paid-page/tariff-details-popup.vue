<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const emit = defineEmits(['close']);
const popupRef = ref(null);

const handleClickOutside = (event) => {
    if (popupRef.value && !popupRef.value.contains(event.target)) {
        emit('close');
    }
};

onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
    <div class="popup-section">
        <div class="popup">

            <div class="wrapper" ref="popupRef">
                <div class="mobile-header">
                    <nuxt-link to="/" @click="$emit('close')"><svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.31204 5.63578C9.32386 5.76205 9.35478 6.10141 9.38073 6.38997C9.53685 8.12639 9.95381 10.1809 10.4676 11.7458C11.3822 14.5315 12.8387 16.9298 14.4221 18.2576C15.5845 19.2323 16.7192 19.7719 17.9043 19.9134L18.2095 19.9498L17.9915 19.9801C17.5245 20.045 16.7078 20.2686 16.3173 20.4384C13.8338 21.5185 11.6859 24.379 10.4308 28.2778C9.9351 29.8175 9.51509 31.9127 9.38016 33.5188C9.35491 33.8194 9.32443 34.1686 9.31244 34.2948C9.3004 34.4211 9.2987 34.5244 9.3086 34.5244C9.31854 34.5244 9.42041 34.3641 9.53498 34.1681C10.1764 33.0712 11.4243 31.4995 12.2763 30.7154C13.3961 29.6848 14.4909 28.9656 15.6279 28.5135C18.1667 27.5041 20.8788 27.8294 23.2683 29.4298C24.986 30.5803 26.3047 32.0325 27.7756 34.3932L27.8709 34.5462L27.8453 34.1965C27.6472 31.4967 27.0516 28.8571 26.1511 26.689C24.5679 22.8773 22.1374 20.4668 19.4306 20.0237L18.9509 19.9452L19.2344 19.9132C21.1731 19.6946 23.0673 18.3709 24.5617 16.1905C26.074 13.9839 27.1324 11.0658 27.6247 7.74532C27.7298 7.03617 27.8875 5.45386 27.8562 5.42243C27.848 5.41421 27.7168 5.6089 27.5647 5.855C25.5572 9.10338 22.9165 11.2345 20.1792 11.8155C19.4605 11.9681 18.2218 12.009 17.5118 11.9037C15.5078 11.6064 13.7295 10.6397 11.9934 8.90392C11.1486 8.05924 10.2875 6.9628 9.61561 5.87625C9.45574 5.61777 9.31723 5.40625 9.30777 5.40625C9.29831 5.40625 9.30023 5.50952 9.31204 5.63578Z" fill="#FFEB61"/>
                    </svg>
                    </nuxt-link>
                    <button @click="$emit('close')"><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0187 11.9998L18.3117 7.70676C18.7027 7.31576 18.7027 6.68376 18.3117 6.29276C17.9207 5.90176 17.2887 5.90176 16.8977 6.29276L12.6047 10.5858L8.31174 6.29276C7.92074 5.90176 7.28874 5.90176 6.89774 6.29276C6.50674 6.68376 6.50674 7.31576 6.89774 7.70676L11.1907 11.9998L6.89774 16.2928C6.50674 16.6838 6.50674 17.3158 6.89774 17.7068C7.09274 17.9018 7.34874 17.9998 7.60474 17.9998C7.86074 17.9998 8.11674 17.9018 8.31174 17.7068L12.6047 13.4138L16.8977 17.7068C17.0927 17.9018 17.3487 17.9998 17.6047 17.9998C17.8607 17.9998 18.1167 17.9018 18.3117 17.7068C18.7027 17.3158 18.7027 16.6838 18.3117 16.2928L14.0187 11.9998Z" fill="#231F20"/>
                        <mask id="mask0_1799_13415" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="5" width="13" height="13">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0187 11.9998L18.3117 7.70676C18.7027 7.31576 18.7027 6.68376 18.3117 6.29276C17.9207 5.90176 17.2887 5.90176 16.8977 6.29276L12.6047 10.5858L8.31174 6.29276C7.92074 5.90176 7.28874 5.90176 6.89774 6.29276C6.50674 6.68376 6.50674 7.31576 6.89774 7.70676L11.1907 11.9998L6.89774 16.2928C6.50674 16.6838 6.50674 17.3158 6.89774 17.7068C7.09274 17.9018 7.34874 17.9998 7.60474 17.9998C7.86074 17.9998 8.11674 17.9018 8.31174 17.7068L12.6047 13.4138L16.8977 17.7068C17.0927 17.9018 17.3487 17.9998 17.6047 17.9998C17.8607 17.9998 18.1167 17.9018 18.3117 17.7068C18.7027 17.3158 18.7027 16.6838 18.3117 16.2928L14.0187 11.9998Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_1799_13415)">
                            <rect x="0.604492" width="24" height="24" fill="#FFEB61"/>
                        </g>
                    </svg>
                    </button>
                </div>
                <button class="close" @click="$emit('close')">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6842 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4882 17.902 16.7443 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z"
                              fill="#231F20"/>
                        <mask id="mask0_1799_10385" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="6" y="5"
                              width="13" height="13">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6842 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4882 17.902 16.7443 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z"
                                  fill="white"/>
                        </mask>
                        <g mask="url(#mask0_1799_10385)">
                            <rect width="24" height="24" fill="#FFEB61"/>
                        </g>
                    </svg>

                </button>
                <div class="head">
                    <p>Premium</p>
                    <span>Самая подробная расшифровка вашей натальной карты, охватывающая 30 аспектов разных жизненных сфер и дающая максимально полное понимание себя, своего характера, жизненного пути и взаимодействия с миром:</span>
                </div>
                <div class="list">
                    <ul>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                        <li>Краткое описание личности</li>
                    </ul>
                </div>
                <div class="text">
                    <p>Гайд от наших астрологов «Солнцезажигающие действия», который подскажет, как проработать главное
                        светило натальной карты, раскрыть Вашу индивидуальность по знаку зодиака и обрести уверенность в
                        себе
                        <br><br>
                        Гайд от наших астрологов «Встреча соляра» с рекомендациями о том, как правильно отметить день
                        рождения, чтобы следующий год был благоприятным и успешным</p>
                </div>
                <div class="choose">
                    <button>Выбрать тариф</button>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.popup {
    display: flex;
    width: 100vw;
    background-color: rgb(17 16 16 / 69%);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    justify-content: center;
    max-height: 1760px;
    height: 100%;
    overflow-y: auto;

    .wrapper {
        margin-top: 50px;
        margin-bottom: 50px;
        max-height: 1760px;
        height: fit-content;
        max-width: 960px;
        display: flex;
        background: var(--dark-select);
        border-radius: 24px;
        padding: 64px;
        position: relative;
        flex-direction: column;
        gap: 32px;

        .choose {
            button {
                background: var(--yellow);
                border-radius: 20px;
                padding: 14px 24px;
                font-weight: 500;
                font-size: 19px;
                line-height: 147%;
                text-align: center;
                color: var(--dark-select);
                opacity: 0.87;
                width: 100%;
            }
        }

        .text {
            p {
                font-weight: 400;
                font-size: 17px;
                line-height: 165%;
                color: var(--dark-select-10);
            }
        }

        .list {
            ul {
                display: flex;
                flex-direction: column;
                gap: 16px;
                position: relative;

                li {
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 160%;
                    color: var(--dark-select-10);
                    margin-left: 32px;

                }

                li::before {
                    content: '';
                    background-image: url("@/assets/images/natals/plus-circle.svg");
                    background-size: contain;
                    background-repeat: no-repeat;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    background-position: center center;
                    left: 0;
                }
            }
        }

        .head {
            display: flex;
            flex-direction: column;
            gap: 16px;

            p {
                display: block;
                font-weight: 900;
                font-size: 40px;
                line-height: 110%;
                background: linear-gradient(159deg, #f6f6f6 0%, #a4a5a5 100%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }

            span {
                font-weight: 400;
                font-size: 17px;
                line-height: 165%;
                color: var(--dark-select-10);
            }
        }

        .close {
            position: absolute;
            right: 24px;
            top: 24px;
            background: none;
        }

    }
}
.mobile-header {
    display: none;
}
@media (max-width: 600px) {
    .mobile-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 24px;
        padding-right: 24px;
        padding-left: 24px;
        button {
            margin-right: 8px;
            background: none;
        }
    }
    .popup {
        background: var(--dark-main);
        opacity: 1;
        display: flex;
        flex-direction: column;
        .wrapper {
            margin-top: 0;
            margin-bottom: 0;
            max-height: 100%;
            height: fit-content;
            display: flex;
            background: var(--dark-main);
            border-radius: 0;
            padding: 0;
            position: relative;
            flex-direction: column;
            gap: 24px;

            .choose {
                position: fixed;
                bottom: 0;
                width: 100%;
                background: var(--dark-select);
                padding: 24px;
                border-radius: 24px 24px 0 0;

                button {
                    background: var(--yellow);
                    border-radius: 20px;
                    padding: 14px 24px;
                    font-weight: 500;
                    font-size: 19px;
                    line-height: 147%;
                    text-align: center;
                    color: var(--dark-select);
                    opacity: 0.87;
                    width: 100%;
                }
            }

            .text {
                padding: 0 24px 0 24px;

                p {
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 160%;
                    margin-bottom: 130px;
                }
            }

            .list {
                padding: 0 24px 0 24px;
                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    position: relative;

                    li {
                        font-weight: 400;
                        font-size: 13px;
                        line-height: 169%;
                    }

                    li::before {
                        content: '';
                        background-image: url("@/assets/images/natals/plus-circle.svg");
                        background-size: contain;
                        background-repeat: no-repeat;
                        width: 24px;
                        height: 24px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        background-position: center center;
                        left: 0;
                    }
                }
            }

            .head {
                padding: 0 24px 0 24px;
                display: flex;
                flex-direction: column;
                gap: 16px;

                p {
                    display: block;
                    font-weight: 900;
                    font-size: 24px;
                    line-height: 117%;
                    background: linear-gradient(159deg, #f6f6f6 0%, #a4a5a5 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                span {
                    font-size: 15px;
                    line-height: 160%;
                }
            }

            .close {
                display: none;
            }

        }
    }
}
</style>
