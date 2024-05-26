<script setup>
import { ref } from 'vue';

const questions = [
    {
        question: 'Чем натальная карта отличается от обычного зодиакального гороскопа?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'Какая информация нужна для составления натальной карты?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'А если я не знаю времени своего рождения?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'Почему так быстро?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'Сколько времени займет разбор?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'Могу ли я сделать натальную карту другому человеку?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        question: 'Как я могу быть уверенным в том, что астрологический разбор будет достоверным?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
];

const activeIndices = ref([]);

const toggle = (index) => {
    if (activeIndices.value.includes(index)) {
        activeIndices.value = activeIndices.value.filter(i => i !== index);
    } else {
        activeIndices.value.push(index);
    }
};
</script>

<template>
    <section class="natal-faq">
        <div class="container">
            <div class="wrapper">
                <div class="title">
                    <p>Частые вопросы</p>
                </div>
                <div class="list">
                    <div class="block" v-for="(item, index) in questions" :key="index">
                        <div class="question">
                            <button @click="toggle(index)">
                                <p>{{ item.question }}</p>
                                <svg :class="{ active: activeIndices.includes(index) }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_3027_7180)">
                                        <path
                                            d="M11.9998 16C11.7661 16.0004 11.5397 15.9191 11.3598 15.77L5.35979 10.77C5.15557 10.6002 5.02715 10.3563 5.00277 10.0919C4.97839 9.82747 5.06005 9.56419 5.22979 9.35997C5.39953 9.15575 5.64344 9.02733 5.90786 9.00295C6.17229 8.97857 6.43557 9.06023 6.63979 9.22997L11.9998 13.71L17.3598 9.38997C17.4621 9.3069 17.5798 9.24487 17.7061 9.20744C17.8325 9.17001 17.9649 9.15792 18.096 9.17186C18.227 9.18579 18.354 9.22549 18.4696 9.28866C18.5853 9.35184 18.6873 9.43724 18.7698 9.53997C18.8614 9.64279 18.9307 9.76342 18.9735 9.89429C19.0163 10.0252 19.0316 10.1635 19.0185 10.3005C19.0053 10.4376 18.964 10.5705 18.8971 10.6908C18.8303 10.8112 18.7392 10.9164 18.6298 11L12.6298 15.83C12.4447 15.9555 12.2229 16.0153 11.9998 16V16Z"
                                            fill="#F6F6F6"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3027_7180">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                        <div class="answer" :class="{ active: activeIndices.includes(index) }">
                            <p>{{ item.answer }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.block {
    background: var(--dark-select);
    border-radius: 24px;
    padding: 32px;

    .question {
        button {
            background: none;
            display: flex;
            justify-content: space-between;
            width: 100%;

            p {
                font-weight: 500;
                font-size: 19px;
                line-height: 147%;
                color: var(--white);
            }
        }

        button:hover svg path {
            fill: #ffeb61;
        }

        svg {
            rotate: 0deg;
            transition: rotate 0.3s;
            width: 24px;
        }

        svg.active {
            rotate: 180deg;
            transition: rotate 0.3s;
        }
    }

    .answer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.5s;

        p {
            padding-top: 24px;
            font-weight: 400;
            font-size: 15px;
            line-height: 160%;
            color: var(--dark-select-40);
        }
    }

    .answer.active {
        max-height: 500px;
    }
}

.wrapper {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 64px;
}

.title p {
    font-weight: 400;
    font-size: 48px;
    line-height: 108%;
    text-align: center;
    color: var(--dark-select-10);
}

@media (max-width: 1100px) {
    .title p {
        font-weight: 400;
        font-size: 26px;
        line-height: 115%;
    }
    .wrapper {
        gap: 32px;
    }
    .block {
        border-radius: 12px;
        padding: 16px;

        .question {
            button {
                p {
                    width: calc(100% - 48px);
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 169%;
                    text-align: start;
                }
            }
        }

        .answer {
            p {
                padding-top: 12px;
                font-weight: 400;
                font-size: 13px;
                line-height: 169%;
                text-align: start;
            }
        }
    }
}

@media (max-width: 800px) {
    .title p {
       text-align: start;
    }
}
</style>
