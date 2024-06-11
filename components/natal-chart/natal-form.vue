<script setup>

</script>

<template>
    <section class="form">
        <div class="container">
            <div class="text">
                <h3>Получите бесплатный индивидуальный разбор прямо сейчас</h3>
                <p>Введите ваши данные для расчёта натальной карты</p>
            </div>
            <div class="form">
                <div class="inputs">
                    <input type="text" placeholder="Город рождения">
                    <input type="text" placeholder="Дата рождения">
                    <input type="text" placeholder="Время рождения">
                    <div class="time">
                        <label class="styled-checkbox">
                            <input type="checkbox">
                            <span class="checkmark"></span>
                        </label>
                        <p>Время рождения неизвестно</p>
                    </div>
                    <button><p>Рассчитать</p></button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
button {
    width: 100%;
    border-radius: 20px;
    padding: 14px 24px;
    background: var(--yellow);
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        font-weight: 500;
        font-size: 19px;
        line-height: 147%;
        text-align: center;
        color: var(--dark-select);
        opacity: 0.87;
    }
}
.time {
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 0;
    margin-bottom: 16px;
    p {
        font-weight: 400;
        font-size: 15px;
        line-height: 160%;
        color: var(--white);
        opacity: 0.87;
    }
}
.styled-checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    width: fit-content;
}

.styled-checkbox input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    border-radius: 5px;
    width: 24px;
    height: 24px;
    background: var(--dark-select-60);
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
}

.styled-checkbox input:checked + .checkmark {
    background: var(--yellow);
}

.styled-checkbox .checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.styled-checkbox input:checked + .checkmark:after {
    display: block;
}

.styled-checkbox .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/natals/love/true.svg') no-repeat center center;
    background-size: contain;
}
.form {
   width: 100%;

}

.inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
}
input {
    border: 1px solid rgba(255, 255, 255, 0.87);
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 14px 24px;
    font-weight: 500;
    font-size: 19px;
    line-height: 147%;
    color: rgba(255, 255, 255, 0.87);
    opacity: 0.87;
    width: 100%;
    background: none;
}
input::placeholder {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 19px;
    line-height: 147%;
    color: rgba(255, 255, 255, 0.87);
    opacity: 0.87;
    width: 100%;
}
input:focus {
    border: 1px solid #ffeb61;
}
.container {
    max-width: 960px;
    margin: auto;
    display: flex;
    gap: 48px;
}

.text {
    display: flex;
    flex-direction: column;
    gap: 17px;
    max-width: 464px;

    h3 {
        font-weight: 400;
        font-size: 40px;
        line-height: 110%;
        color: var(--dark-select-10);
    }

    p {
        font-weight: 400;
        font-size: 19px;
        line-height: 147%;
        color: var(--white);
        max-width: 80%;
    }
}
@media (max-width: 1100px) {
    .time {
        margin-bottom: 0;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        max-width: 960px;
        margin: auto;
    }
    .text {
        display: flex;
        flex-direction: column;
        gap: 17px;
        max-width: 464px;

        h3 {
            font-weight: 400;
            font-size: 26px;
            line-height: 115%;
            color: var(--dark-select-10);
        }

        p {
            font-weight: 400;
            font-size: 17px;
            line-height: 153%;
            color: var(--white);
        }
    }
    input {
        border: 1px solid rgba(255, 255, 255, 0.87);
        display: flex;
        align-items: center;
        border-radius: 20px;
        padding: 14px 24px;
        font-weight: 500;
        font-size: 17px;
        line-height: 153%;
        color: rgba(255, 255, 255, 0.87);
        opacity: 0.87;
        width: 100%;
        background: none;
    }
    input::placeholder {
        font-weight: 500;
        font-size: 17px;
        line-height: 153%;
        color: rgba(255, 255, 255, 0.87);
    }
}
</style>
