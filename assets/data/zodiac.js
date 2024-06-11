import red from "@/assets/images/zodiac/colors/red.png"
import pink from "@/assets/images/zodiac/colors/pink.png"
import green from "@/assets/images/zodiac/colors/green.png"
import yellow from "@/assets/images/zodiac/colors/yellow.png"
import silver from "@/assets/images/zodiac/colors/silver.png"
import gold from "@/assets/images/zodiac/colors/gold.png"
import beige from "@/assets/images/zodiac/colors/beige.png"
import black from "@/assets/images/zodiac/colors/black.png"
import violet from "@/assets/images/zodiac/colors/violet.png"
import brown from "@/assets/images/zodiac/colors/brown.png"
import blue from "@/assets/images/zodiac/colors/blue.png"
import emerald from "@/assets/images/zodiac/colors/emerald.png"

import one from "@/assets/images/zodiac/houses/Layer_1.svg"
import two from "@/assets/images/zodiac/houses/Layer_1-1.svg"
import three from "@/assets/images/zodiac/houses/Layer_1-2.svg"
import four from "@/assets/images/zodiac/houses/Layer_1-3.svg"
import five from "@/assets/images/zodiac/houses/Layer_1-4.svg"
import six from "@/assets/images/zodiac/houses/Layer_1-5.svg"
import seven from "@/assets/images/zodiac/houses/Layer_1-6.svg"
import eight from "@/assets/images/zodiac/houses/Layer_1-7.svg"
import nine from "@/assets/images/zodiac/houses/Layer_1-8.svg"
import ten from "@/assets/images/zodiac/houses/Layer_1-9.svg"
import eleven from "@/assets/images/zodiac/houses/Layer_1-10.svg"
import twelve from "@/assets/images/zodiac/houses/Layer_1-11.svg"


import oven from "@/assets/images/zodiac/compatibility/овен.svg"
import taurus from "@/assets/images/zodiac/compatibility/телец.svg"
import twins from "@/assets/images/zodiac/compatibility/близнецы.svg"
import lion from "@/assets/images/zodiac/compatibility/лев.svg"
import cancer from "@/assets/images/zodiac/compatibility/рак.svg"
import virgo from "@/assets/images/zodiac/compatibility/дева.svg"
import scales from "@/assets/images/zodiac/compatibility/весы.svg"
import scorpion from "@/assets/images/zodiac/compatibility/скорпион.svg"
import sagittarius from "@/assets/images/zodiac/compatibility/стрелец.svg"
import capricorn from "@/assets/images/zodiac/compatibility/козерог.svg"
import aquarius from "@/assets/images/zodiac/compatibility/водолей.svg"
import fish from "@/assets/images/zodiac/compatibility/рыбы.svg"

export const zodiacDescBlocks = {
    oven: {
        quality: {ru: "Кардинальный", en: "cardinal"},
        planet: {ru: "Марс", en: "mars", image: mars},
        managingHouse: {ru: "Первый", en: "first", image: one},
        tarot: {ru: "Император", en: "emperor"},
        stones: [
            {ru: "Бриллиант, ", en: "brilliant"},
            {ru: "Гранат, ", en: "garnet"},
            {ru: "Рубин", en: "ruby"},
        ],
        flowers: [
            {ru: "Жимолость, ", en: "honeysuckle"},
            {ru: "Герань, ", en: "geranium"},
            {ru: "Бегония", en: "begonia"},
        ],
        color: {ru: "Красный", en: "red", image: red},
        compatibility: {ru: "Водолей", en: "aquarius", image: aquarius},
        element: {ru: "Огонь", en: "fire"},
        archetype: {ru: "Воин", en: "warrior"},
        luckyNumbers: [
            {ru: "3, ", en: "three"},
            {ru: "12", en: "twelve"},
        ],
        importantYears: [
            {ru: "20, ", en: "twenty"},
            {ru: "31, ", en: "thirty_one"},
            {ru: "35, ", en: "thirty_five"},
            {ru: "42, ", en: "forty_two"},
            {ru: "47, ", en: "forty_seven"},
            {ru: "58, ", en: "fifty_eight"},
            {ru: "60, ", en: "sixty"},
            {ru: "66", en: "sixty_six"},
        ],
        description:
            "Овен – энергичный и динамичный, готовый идти напролом к своим целям.",
    },
    taurus: {
        quality: {ru: "Фиксированный", en: "fixed"},
        planet: {ru: "Венера", en: "venus", image: venus},
        managingHouse: {ru: "Второй", en: "second", image: two},
        tarot: {ru: "Иерофант", en: "hierophant"},
        stones: [
            {ru: "Изумруд, ", en: "emerald"},
            {ru: "Яшма, ", en: "jasper"},
            {ru: "Розовый кварц", en: "rose_quartz"},
        ],
        flowers: [
            {ru: "Ландыш, ", en: "lily_of_the_valley"},
            {ru: "Фиалка, ", en: "violet"},
            {ru: "Роза", en: "rose"},
        ],
        color: {ru: "Зеленый", en: "green", image: green},
        compatibility: {ru: "Рыбы", en: "fish", image: fish},
        element: {ru: "Земля", en: "earth"},
        archetype: {ru: "Гедонист", en: "hedonist"},
        luckyNumbers: [
            {ru: "6, ", en: "six"},
            {ru: "15", en: "fifteen"},
        ],
        importantYears: [
            {ru: "17, ", en: "seventeen"},
            {ru: "23, ", en: "twenty_three"},
            {ru: "25, ", en: "twenty_five"},
            {ru: "30, ", en: "thirty"},
            {ru: "35, ", en: "thirty_five"},
            {ru: "39, ", en: "thirty_nine"},
            {ru: "51, ", en: "fifty_one"},
            {ru: "60, ", en: "sixty"},
            {ru: "64", en: "sixty_four"},
        ],
        description:
            "Телец – стабильный и целеустремленный, наслаждающийся материальными удовольствиями.",
    },
    twins: {
        quality: {ru: "Мутабельный", en: "mutable"},
        planet: {ru: "Меркурий", en: "mercury", image: mercury},
        managingHouse: {ru: "Третий", en: "third", image: three},
        tarot: {ru: "Влюбленные", en: "lovers"},
        stones: [
            {ru: "Агат, ", en: "agate"},
            {ru: "Тигровый глаз, ", en: "tigers_eye"},
            {ru: "Аквамарин", en: "aquamarine"},
        ],
        flowers: [
            {ru: "Лаванда, ", en: "lavender"},
            {ru: "Ландыш, ", en: "lily_of_the_valley"},
            {ru: "Орхидея", en: "orchid"},
        ],
        color: {ru: "Желтый", en: "yellow", image: yellow},
        compatibility: {ru: "Стрелец", en: "sagittarius", image: sagittarius},
        element: {ru: "Воздух", en: "air"},
        archetype: {ru: "Искатель", en: "seeker"},
        luckyNumbers: [
            {ru: "4, ", en: "four"},
            {ru: "13", en: "thirteen"},
        ],
        importantYears: [
            {ru: "20, ", en: "twenty"},
            {ru: "36, ", en: "thirty_six"},
            {ru: "40, ", en: "forty"},
            {ru: "52, ", en: "fifty_two"},
            {ru: "64, ", en: "sixty_four"},
            {ru: "70, ", en: "seventy"},
            {ru: "80", en: "eighty"},
        ],
        description:
            "Близнецы – общительные и интеллектуальные, всегда ищущие новые приключения.",
    },
    cancer: {
        quality: {ru: "Кардинальный", en: "cardinal"},
        planet: {ru: "Луна", en: "moon", image: moon},
        managingHouse: {ru: "Четвертый", en: "fourth", image: four},
        tarot: {ru: "Колесница", en: "chariot"},
        stones: [
            {ru: "Жемчуг, ", en: "pearl"},
            {ru: "Лунный камень, ", en: "moonstone"},
            {ru: "Изумруд", en: "emerald"},
        ],
        flowers: [
            {ru: "Ландыш, ", en: "lily_of_the_valley"},
            {ru: "Клематис, ", en: "clematis"},
            {ru: "Мак", en: "poppy"},
        ],
        color: {ru: "Серебряный", en: "silver", image: silver},
        compatibility: {ru: "Дева", en: "virgo", image: virgo},
        element: {ru: "Вода", en: "water"},
        archetype: {ru: "Опекун", en: "guardian"},
        luckyNumbers: [
            {ru: "2, ", en: "two"},
            {ru: "20", en: "twenty"},
        ],
        importantYears: [
            {ru: "30, ", en: "thirty"},
            {ru: "35, ", en: "thirty_five"},
            {ru: "40, ", en: "forty"},
            {ru: "45, ", en: "forty_five"},
            {ru: "50, ", en: "fifty"},
            {ru: "60, ", en: "sixty"},
            {ru: "75", en: "seventy_five"},
        ],
        description:
            "Рак – чуткий и эмоциональный, обладающий сильной интуицией и защищающий своих близких.",
    },
    lion: {
        quality: {ru: "Фиксированный", en: "fixed"},
        planet: {ru: "Солнце", en: "sun", image: sun},
        managingHouse: {ru: "Пятый", en: "fifth", image: five},
        tarot: {ru: "Сила", en: "force"},
        stones: [
            {ru: "Аметист, ", en: "amethyst"},
            {ru: "Рубин, ", en: "ruby"},
            {ru: "Топаз", en: "topaz"},
        ],
        flowers: [
            {ru: "Подсолнух, ", en: "sunflower"},
            {ru: "Гелиотроп, ", en: "heliotrope"},
            {ru: "Гладиолус", en: "gladiolus"},
        ],
        color: {ru: "Золотой", en: "gold", image: gold},
        compatibility: {ru: "Весы", en: "scales", image: scales},
        element: {ru: "Огонь", en: "fire"},
        archetype: {ru: "Шут", en: "jester"},
        luckyNumbers: [
            {ru: "1, ", en: "one"},
            {ru: "19", en: "nineteen"},
        ],
        importantYears: [
            {ru: "19, ", en: "nineteen"},
            {ru: "36, ", en: "thirty_six"},
            {ru: "40, ", en: "forty"},
            {ru: "43, ", en: "forty_three"},
            {ru: "57, ", en: "fifty_seven"},
            {ru: "60, ", en: "sixty"},
            {ru: "76, ", en: "seventy_six"},
            {ru: "79", en: "seventy_nine"},
        ],
        description:
            "Лев – страстный и уверенный, искрящийся энергией и креативностью.",
    },
    virgo: {
        quality: {ru: "Мутабельный", en: "mutable"},
        planet: {ru: "Меркурий", en: "mercury", image: mercury},
        managingHouse: {ru: "Шестой", en: "sixth", image: six},
        tarot: {ru: "Отшельник", en: "hermit"},
        stones: [
            {ru: "Жемчуг, ", en: "pearl"},
            {ru: "Бирюза, ", en: "turquoise"},
            {ru: "Янтарь", en: "amber"},
        ],
        flowers: [
            {ru: "Ландыш, ", en: "lily_of_the_valley"},
            {ru: "Астра, ", en: "aster"},
            {ru: "Ромашка", en: "daisy"},
        ],
        color: {ru: "Бежевый", en: "beige", image: beige},
        compatibility: {ru: "Рак", en: "cancer", image: cancer},
        element: {ru: "Земля", en: "earth"},
        archetype: {ru: "Служитель", en: "servant"},
        luckyNumbers: [
            {ru: "14, ", en: "fourteen"},
            {ru: "16", en: "sixteen"},
        ],
        importantYears: [
            {ru: "16, ", en: "sixteen"},
            {ru: "21, ", en: "twenty_one"},
            {ru: "24, ", en: "twenty_four"},
            {ru: "27, ", en: "twenty_seven"},
            {ru: "31, ", en: "thirty_one"},
            {ru: "43, ", en: "forty_three"},
            {ru: "50", en: "fifty"},
        ],
        description:
            "Дева – аналитичный и практичный, стремящийся к совершенству и порядку.",
    },
    scales: {
        quality: {ru: "Кардинальный", en: "cardinal"},
        planet: {ru: "Венера", en: "venus", image: venus},
        managingHouse: {ru: "Седьмой", en: "seventh", image: seven},
        tarot: {ru: "Правосудие", en: "justice"},
        stones: [
            {ru: "Сапфир, ", en: "sapphire"},
            {ru: "Алмаз, ", en: "diamond"},
            {ru: "Малахит", en: "malachite"},
        ],
        flowers: [
            {ru: "Гладиолус, ", en: "gladiolus"},
            {ru: "Роза, ", en: "rose"},
            {ru: "Георгин", en: "dahlia"},
        ],
        color: {ru: "Розовый", en: "pink", image: pink},
        compatibility: {ru: "Лев", en: "lion", image: lion},
        element: {ru: "Воздух", en: "air"},
        archetype: {ru: "Возлюбленный", en: "beloved"},
        luckyNumbers: [
            {ru: "6, ", en: "six"},
            {ru: "16", en: "sixteen"},
        ],
        importantYears: [
            {ru: "23, ", en: "twenty_three"},
            {ru: "35, ", en: "thirty_five"},
            {ru: "40, ", en: "forty"},
            {ru: "46, ", en: "forty_six"},
            {ru: "56, ", en: "fifty_six"},
            {ru: "64, ", en: "sixty_four"},
            {ru: "72", en: "seventy_two"},
        ],
        description:
            "Весы – общительный и дипломатичный, стремящийся к гармонии и равновесию.",
    },
    scorpion: {
        quality: {ru: "Фиксированный", en: "fixed"},
        planet: {ru: "Плутон", en: "pluto", image: pluto},
        managingHouse: {ru: "Восьмой", en: "eighth", image: eight},
        tarot: {ru: "Смерть", en: "death"},
        stones: [
            {ru: "Гранат, ", en: "garnet"},
            {ru: "Опал, ", en: "opal"},
            {ru: "Оникс", en: "onyx"},
        ],
        flowers: [
            {ru: "Хризантема, ", en: "chrysanthemum"},
            {ru: "Калла, ", en: "calla"},
            {ru: "Роза", en: "rose"},
        ],
        color: {ru: "Черный", en: "black", image: black},
        compatibility: {ru: "Козерог", en: "capricorn", image: capricorn},
        element: {ru: "Вода", en: "water"},
        archetype: {ru: "Маг", en: "mage"},
        luckyNumbers: [
            {ru: "3, ", en: "three"},
            {ru: "21", en: "twenty_one"},
        ],
        importantYears: [
            {ru: "15, ", en: "fifteen"},
            {ru: "25, ", en: "twenty_five"},
            {ru: "30, ", en: "thirty"},
            {ru: "45, ", en: "forty_five"},
            {ru: "50, ", en: "fifty"},
            {ru: "60, ", en: "sixty"},
            {ru: "74", en: "seventy_four"},
        ],
        description:
            "Скорпион – страстный и интуитивный, всегда ищущий глубину и правду.",
    },
    sagittarius: {
        quality: {ru: "Мутабельный", en: "mutable"},
        planet: {ru: "Юпитер", en: "jupiter", image: jupiter},
        managingHouse: {ru: "Девятый", en: "ninth", image: nine},
        tarot: {ru: "Умеренность", en: "moderation"},
        stones: [
            {ru: "Лазурит, ", en: "lapis_lazuli"},
            {ru: "Аметист, ", en: "amethyst"},
            {ru: "Сапфир", en: "sapphire"},
        ],
        flowers: [
            {ru: "Жасмин, ", en: "jasmine"},
            {ru: "Фиалка, ", en: "violet"},
            {ru: "Азалия", en: "azalea"},
        ],
        color: {ru: "Фиолетовый", en: "purple", image: violet},
        compatibility: {ru: "Близнецы", en: "twins", image: twins},
        element: {ru: "Огонь", en: "fire"},
        archetype: {ru: "Мудрец", en: "sage"},
        luckyNumbers: [
            {ru: "5, ", en: "five"},
            {ru: "23", en: "twenty_three"},
        ],
        importantYears: [
            {ru: "24, ", en: "twenty_four"},
            {ru: "35, ", en: "thirty_five"},
            {ru: "39, ", en: "thirty_nine"},
            {ru: "40, ", en: "forty"},
            {ru: "43, ", en: "forty_three"},
            {ru: "53, ", en: "fifty_three"},
            {ru: "59, ", en: "fifty_nine"},
            {ru: "68, ", en: "sixty_eight"},
            {ru: "75", en: "seventy_five"},
        ],
        description:
            "Стрелец – оптимистичный и свободолюбивый, стремящийся к истине и приключениям.",
    },
    capricorn: {
        quality: {ru: "Кардинальный", en: "cardinal"},
        planet: {ru: "Сатурн", en: "saturn", image: saturn},
        managingHouse: {ru: "Десятый", en: "tenth", image: ten},
        tarot: {ru: "Дьявол", en: "devil"},
        stones: [
            {ru: "Горный хрусталь, ", en: "rock_crystal"},
            {ru: "Гранат, ", en: "garnet"},
            {ru: "Оникс", en: "onyx"},
        ],
        flowers: [
            {ru: "Гвоздика, ", en: "carnation"},
            {ru: "Ромашка, ", en: "daisy"},
            {ru: "Пион", en: "peony"},
        ],
        color: {ru: "Коричневый", en: "brown", image: brown},
        compatibility: {ru: "Скорпион", en: "scorpion", image: scorpion},
        element: {ru: "Земля", en: "earth"},
        archetype: {ru: "Правитель", en: "ruler"},
        luckyNumbers: [
            {ru: "7, ", en: "seven"},
            {ru: "25", en: "twenty_five"},
        ],
        importantYears: [
            {ru: "16, ", en: "sixteen"},
            {ru: "21, ", en: "twenty_one"},
            {ru: "30, ", en: "thirty"},
            {ru: "31, ", en: "thirty_one"},
            {ru: "33, ", en: "thirty_three"},
            {ru: "41, ", en: "forty_one"},
            {ru: "50, ", en: "fifty"},
            {ru: "57", en: "fifty_seven"},
        ],
        description:
            "Козерог – целеустремленный и практичный, стремящийся к стабильности и достижению целей.",
    },
    aquarius: {
        quality: {ru: "Фиксированный", en: "fixed"},
        planet: {ru: "Уран", en: "uranus", image: uranus},
        managingHouse: {ru: "Одиннадцатый", en: "eleventh", image: eleven},
        tarot: {ru: "Звезда", en: "star"},
        stones: [
            {ru: "Аметист, ", en: "amethyst"},
            {ru: "Аквамарин, ", en: "aquamarine"},
            {ru: "Опал", en: "opal"},
        ],
        flowers: [
            {ru: "Фиалка, ", en: "violet"},
            {ru: "Ирис, ", en: "iris"},
            {ru: "Сирень", en: "lilac"},
        ],
        color: {ru: "Синий", en: "blue", image: blue},
        compatibility: {ru: "Овен", en: "oven", image: oven},
        element: {ru: "Воздух", en: "air"},
        archetype: {ru: "Творец", en: "creator"},
        luckyNumbers: [
            {ru: "8, ", en: "eight"},
            {ru: "17", en: "seventeen"},
        ],
        importantYears: [
            {ru: "22, ", en: "twenty_two"},
            {ru: "24, ", en: "twenty_four"},
            {ru: "32, ", en: "thirty_two"},
            {ru: "42, ", en: "forty_two"},
            {ru: "48, ", en: "forty_eight"},
            {ru: "50, ", en: "fifty"},
            {ru: "64, ", en: "sixty_four"},
            {ru: "72", en: "seventy_two"},
        ],
        description:
            "Водолей – инновационный и независимый, стремящийся к переменам и свободе выражения.",
    },
    fish: {
        quality: {ru: "Мутабельный", en: "mutable"},
        planet: {ru: "Нептун", en: "neptune", image: neptune},
        managingHouse: {ru: "Двенадцатый", en: "twelfth", image: twelve},
        tarot: {ru: "Луна", en: "moon"},
        stones: [
            {ru: "Аквамарин, ", en: "aquamarine"},
            {ru: "Жемчуг, ", en: "pearl"},
            {ru: "Сапфир", en: "sapphire"},
        ],
        flowers: [
            {ru: "Лотос, ", en: "lotus"},
            {ru: "Фиалка, ", en: "violet"},
            {ru: "Гиацинт", en: "hyacinth"},
        ],
        color: {ru: "Изумрудный", en: "emerald", image: emerald},
        compatibility: {ru: "Телец", en: "taurus", image: taurus},
        element: {ru: "Вода", en: "water"},
        archetype: {ru: "Невинный", en: "innocent"},
        luckyNumbers: [
            {ru: "9, ", en: "nine"},
            {ru: "18", en: "eighteen"},
        ],
        importantYears: [
            {ru: "24, ", en: "twenty_four"},
            {ru: "30, ", en: "thirty"},
            {ru: "33, ", en: "thirty_three"},
            {ru: "36, ", en: "thirty_six"},
            {ru: "45, ", en: "forty_five"},
            {ru: "47, ", en: "forty_seven"},
            {ru: "55, ", en: "fifty_five"},
            {ru: "60", en: "sixty"},
        ],
        description:
            "Рыбы – чувствительные и вдохновенные, стремящиеся к духовной гармонии и спасению.",
    },
};

export const zodiacQuality = {
    cardinal: {
        title: {
            ru: "Кардинальный",
            en: "cardinal",
        },
        description:
            "Люди с кардинальным качеством обладают силой и энергией лидерства. Они готовы взять на себя ответственность и инициировать изменения, стремясь к достижению своих целей с решительностью и руководящими навыками.",
    },
    fixed: {
        title: {
            ru: "Фиксированный",
            en: "fixed",
        },
        description:
            "Люди с фиксированным качеством обладают устойчивостью и надежностью. Они обычно прочно стоят на своем пути, проявляя стабильность в действиях и решениях. Упорство и целеустремленность помогают им преодолевать трудности и достигать поставленных целей.",
    },
    mutable: {
        title: {
            ru: "Мутабельный",
            en: "mutable",
        },
        description:
            "Люди с мутабельным качеством обладают гибкостью и адаптивностью. Они способны легко приспосабливаться к переменам и новым обстоятельствам, готовы меняться и развиваться. Эта способность помогает им успешно справляться с разнообразными вызовами жизни и эффективно реагировать на изменения.",
    },
};

export const zodiacTarot = {
    emperor: {
        title: {
            ru: "Император",
            en: "emperor",
        },
        description: "описание карты императора",
    },
    hierophant: {
        title: {
            ru: "Иерофант",
            en: "hierophant",
        },
        description:
            "Иерофант символизирует знания и учение. Люди, связанные с этой картой, обычно ищут мудрость и духовное понимание, а также следуют традициям и обрядам.",
    },
    lovers: {
        title: {
            ru: "Влюбленные",
            en: "lovers",
        },
        description:
            "Карта Влюбленные символизирует любовь и выбор. Люди, связанные с этой картой, сталкиваются с решениями и выборами в своих отношениях и жизни, а также с поиском гармонии и баланса.",
    },
    chariot: {
        title: {
            ru: "Колесница",
            en: "chariot",
        },
        description:
            "Колесница символизирует победу и контроль. Люди, связанные с этой картой, обычно движутся вперед с решимостью и самоуверенностью, преодолевая препятствия и достигая целей.",
    },
    force: {
        title: {
            ru: "Сила",
            en: "force",
        },
        description:
            "Карта Сила символизирует силу внутренней воли и мягкость. Люди, связанные с этой картой, обладают силой и добротой, способными преодолевать трудности с помощью сдержанности и сострадания.",
    },
    hermit: {
        title: {
            ru: "Отшельник",
            en: "hermit",
        },
        description:
            "Отшельник символизирует самоотречение и внутреннее познание. Люди, связанные с этой картой, обычно ищут мудрость и истину внутри себя, отделяясь от внешнего мира для контемпляции и саморефлексии.",
    },
    justice: {
        title: {
            ru: "Справедливость",
            en: "justice",
        },
        description:
            "Карта Справедливость символизирует баланс и справедливость. Люди, связанные с этой картой, стремятся к справедливости и равенству, ищут честное решение проблем и конфликтов.",
    },
    death: {
        title: {
            ru: "Смерть",
            en: "death",
        },
        description:
            "Карта Смерть символизирует окончание и преобразование. Люди, связанные с этой картой, сталкиваются с изменениями и трансформациями, которые могут привести к новому началу и росту.",
    },
    moderation: {
        title: {
            ru: "Умеренность",
            en: "moderation",
        },
        description:
            "Умеренность символизирует гармонию и баланс. Люди, связанные с этой картой, стремятся к сбалансированному и умеренному подходу к жизни, объединяя противоположности и урегулируя противоречия.",
    },
    devil: {
        title: {
            ru: "Дьявол",
            en: "devil",
        },
        description:
            "Карта Дьявол символизирует искушение и зависимость. Люди, связанные с этой картой, сталкиваются с соблазнами и ограничениями, которые могут препятствовать им в их стремлении к свободе и освобождению.",
    },
    star: {
        title: {
            ru: "Звезда",
            en: "star",
        },
        description:
            "Карта Звезда символизирует надежду и вдохновение. Люди, связанные с этой картой, обычно верят в свои мечты и стремятся к светлому будущему, ищут вдохновение и направление в своей жизни.",
    },
    moon: {
        title: {
            ru: "Луна",
            en: "moon",
        },
        description:
            "Карта Луна символизирует интуицию и неясность. Люди, связанные с этой картой, обычно сталкиваются с эмоциональной нестабильностью и неопределенностью, погружаясь в свои внутренние чувства и интуицию в поисках истины и понимания.",
    },
};

import saturn from "assets/images/zodiac/planets/saturn.svg"
import uranus from "assets/images/zodiac/planets/uran.svg"
import mars from "assets/images/zodiac/planets/mars.svg"
import venus from "assets/images/zodiac/planets/venera.svg"
import mercury from "assets/images/zodiac/planets/mercury.svg"
import moon from "assets/images/zodiac/planets/moon.svg"
import sun from "assets/images/zodiac/planets/sun.svg"
import jupiter from "assets/images/zodiac/planets/jupiter.svg"
import neptune from "assets/images/zodiac/planets/neptun.svg"
import pluto from "assets/images/zodiac/planets/pluto.svg"

export const zodiacPlanet = {
    mars: {
        title: {
            ru: "Марс",
            en: "mars",
        },
        image: mars,
        description:
            "Марс символизирует энергию, силу и решительность. Люди, управляемые Марсом, проявляют напористость и смелость, стремясь к достижениям и новаторству. Они готовы бороться за свои цели и брать на себя ответственность.",
    },
    venus: {
        title: {
            ru: "Венера",
            en: "venus",
        },
        image: venus,
        description:
            "Венера символизирует любовь, красоту и гармонию. Люди, управляемые Венерой, ценят эстетику и стремятся к гармоничным отношениям. Они обладают талантом к искусству и умеют создавать вокруг себя атмосферу комфорта и уюта.",
    },
    mercury: {
        title: {
            ru: "Меркурий",
            en: "mercury",
        },
        image: mercury,
        description:
            "Меркурий символизирует общение, интеллект и адаптивность. Люди, управляемые Меркурием, обладают острым умом и быстрым мышлением. Они легко устанавливают контакты и умеют находить решения в различных ситуациях.",
    },
    moon: {
        title: {
            ru: "Луна",
            en: "moon",
        },
        image: moon,
        description:
            "Луна символизирует эмоции, интуицию и подсознание. Люди, управляемые Луной, обладают богатым внутренним миром и сильной интуицией. Они чувствительны к изменениям окружающей среды и умеют тонко воспринимать настроения других людей.",
    },
    sun: {
        title: {
            ru: "Солнце",
            en: "sun",
        },
        image: sun,
        description:
            "Солнце символизирует жизненную силу, эго и самовыражение. Люди, управляемые Солнцем, обладают яркой личностью и стремятся к самореализации. Они уверены в себе и имеют сильное стремление к достижению успеха.",
    },
    jupiter: {
        title: {
            ru: "Юпитер",
            en: "jupiter",
        },
        image: jupiter,
        description:
            "Юпитер символизирует расширение, рост и удачу. Люди, управляемые Юпитером, обладают оптимизмом и стремятся к познанию мира. Они любят приключения и готовы исследовать новые горизонты, привнося в свою жизнь разнообразие и богатство опыта.",
    },
    saturn: {
        title: {
            ru: "Сатурн",
            en: "saturn",
        },
        image: saturn,
        description:
            "Сатурн символизирует структуру, дисциплину и ответственность. Люди, управляемые Сатурном, обладают сильной волей и умеют планировать свои действия. Они стойки в преодолении трудностей и стремятся к долгосрочным целям.",
    },
    uranus: {
        title: {
            ru: "Уран",
            en: "uranus",
        },
        image: uranus,
        description:
            "Уран символизирует инновации, оригинальность и перемены. Люди, управляемые Ураном, обладают независимостью и стремятся к свободе. Они часто проявляют уникальные идеи и готовы идти против устоявшихся норм.",
    },
    neptune: {
        title: {
            ru: "Нептун",
            en: "neptune",
        },
        image: neptune,
        description:
            "Нептун символизирует мечты, духовность и интуицию. Люди, управляемые Нептуном, обладают богатым воображением и стремятся к постижению духовных истин. Они часто увлечены творчеством и способны видеть мир сквозь призму своих фантазий.",
    },
    pluto: {
        title: {
            ru: "Плутон",
            en: "pluto",
        },
        image: pluto,
        description:
            "Плутон символизирует трансформацию, власть и глубинные изменения. Люди, управляемые Плутоном, обладают силой внутренней трансформации и способны к глубоким изменениям в своей жизни. Они стремятся к постижению скрытых истин и могут влиять на окружающий мир.",
    },
};

export const zodiacManagingHouse = {
    first: {
        title: {
            ru: "Первый",
            en: "first",
        },
        image: one,
        description:
            "Первый дом связан с личностью и самоидентификацией. Люди, управляемые этим домом, обладают силой и энергией лидерства. Они готовы взять на себя ответственность и инициировать изменения, стремясь к достижению своих целей с решительностью и руководящими навыками.",
    },
    second: {
        title: {
            ru: "Второй",
            en: "second",
        },
        image: two,
        description:
            "Второй дом связан с материальными ценностями и самоуважением. Люди, управляемые этим домом, стремятся к финансовой стабильности и комфорту. Они ценят материальные ресурсы и обладают практичным подходом к жизни.",
    },
    third: {
        title: {
            ru: "Третий",
            en: "third",
        },
        image: three,
        description:
            "Третий дом связан с общением и интеллектуальной деятельностью. Люди, управляемые этим домом, обладают острым умом и быстрым мышлением. Они легко устанавливают контакты и любят обмениваться информацией.",
    },
    fourth: {
        title: {
            ru: "Четвертый",
            en: "fourth",
        },
        image: four,
        description:
            "Четвертый дом связан с домом и семьей. Люди, управляемые этим домом, ценят семейные связи и домашний уют. Они стремятся создать гармоничное и стабильное окружение для своих близких.",
    },
    fifth: {
        title: {
            ru: "Пятый",
            en: "fifth",
        },
        image: five,
        description:
            "Пятый дом связан с творчеством и самовыражением. Люди, управляемые этим домом, обладают яркой личностью и стремятся к самореализации. Они любят развлекаться и наслаждаться жизнью, проявляя творческие способности.",
    },
    sixth: {
        title: {
            ru: "Шестой",
            en: "sixth",
        },
        image: six,
        description:
            "Шестой дом связан с работой и здоровьем. Люди, управляемые этим домом, обладают трудолюбием и вниманием к деталям. Они стремятся к порядку и гармонии в своей повседневной жизни, заботясь о своем здоровье и благополучии.",
    },
    seventh: {
        title: {
            ru: "Седьмой",
            en: "seventh",
        },
        image: seven,
        description:
            "Седьмой дом связан с партнерством и отношениями. Люди, управляемые этим домом, ценят гармоничные и сбалансированные отношения. Они стремятся к сотрудничеству и справедливости в партнерствах.",
    },
    eighth: {
        title: {
            ru: "Восьмой",
            en: "eighth",
        },
        image: eight,
        description:
            "Восьмой дом связан с трансформацией и общими ресурсами. Люди, управляемые этим домом, обладают глубокой интуицией и стремлением к переменам. Они часто сталкиваются с вопросами наследства, налогов и финансовых обязательств.",
    },
    ninth: {
        title: {
            ru: "Девятый",
            en: "ninth",
        },
        image: nine,
        description:
            "Девятый дом связан с философией и дальними путешествиями. Люди, управляемые этим домом, стремятся к познанию мира и расширению своего кругозора. Они интересуются философией, религией и другими культурами.",
    },
    tenth: {
        title: {
            ru: "Десятый",
            en: "tenth",
        },
        image: ten,
        description:
            "Десятый дом связан с карьерой и общественным статусом. Люди, управляемые этим домом, стремятся к успеху и признанию в обществе. Они обладают амбициями и трудолюбием, стремясь достичь высоких целей.",
    },
    eleventh: {
        title: {
            ru: "Одиннадцатый",
            en: "eleventh",
        },
        image: eleven,
        description:
            "Одиннадцатый дом связан с друзьями и общественными группами. Люди, управляемые этим домом, ценят дружбу и коллективные усилия. Они стремятся к достижению общих целей и часто участвуют в общественной деятельности.",
    },
    twelfth: {
        title: {
            ru: "Двенадцатый",
            en: "twelfth",
        },
        image: twelve,
        description:
            "Двенадцатый дом связан с духовностью и внутренним миром. Люди, управляемые этим домом, обладают сильной интуицией и стремлением к духовному развитию. Они часто интересуются мистикой и скрытыми аспектами жизни.",
    },
};

export const zodiacColor = {
    red: {
        title: {
            ru: "Красный",
            en: "red",
        },
        image: red,
        description:
            "Красный цвет символизирует энергию, страсть и лидерство. Люди, ассоциированные с этим цветом, обладают силой и решимостью, стремясь достичь своих целей с энтузиазмом и решимостью.",
    },
    green: {
        title: {
            ru: "Зеленый",
            en: "green",
        },
        image: green,
        description:
            "Зеленый цвет ассоциируется с ростом, гармонией и обновлением. Люди, связанные с этим цветом, склонны к балансу, спокойствию и естественному развитию своих способностей.",
    },
    yellow: {
        title: {
            ru: "Желтый",
            en: "yellow",
        },
        image: yellow,
        description:
            "Желтый цвет символизирует радость, оптимизм и интеллект. Люди, ассоциированные с этим цветом, обладают яркостью и творческим мышлением, стремясь к знаниям и самовыражению.",
    },
    silver: {
        title: {
            ru: "Серебряный",
            en: "silver",
        },
        image: silver,
        description:
            "Серебряный цвет ассоциируется с чистотой, интуицией и лунными энергиями. Люди, связанные с этим цветом, обладают внутренней мудростью и склонностью к глубокому пониманию мира.",
    },
    gold: {
        title: {
            ru: "Золотой",
            en: "gold",
        },
        image: gold,
        description:
            "Золотой цвет символизирует богатство, успех и щедрость. Люди, ассоциированные с этим цветом, стремятся к достижениям и обладают сильным стремлением к процветанию.",
    },
    beige: {
        title: {
            ru: "Бежевый",
            en: "beige",
        },
        image: beige,
        description:
            "Бежевый цвет ассоциируется с простотой, нейтральностью и стабильностью. Люди, связанные с этим цветом, стремятся к гармонии и уравновешенности в своей жизни.",
    },
    pink: {
        title: {
            ru: "Розовый",
            en: "pink",
        },
        image: pink,
        description:
            "Розовый цвет символизирует любовь, нежность и сочувствие. Люди, ассоциированные с этим цветом, обладают добротой и заботой, стремясь к гармоничным отношениям.",
    },
    black: {
        title: {
            ru: "Черный",
            en: "black",
        },
        image: black,
        description:
            "Черный цвет ассоциируется с силой, тайной и элегантностью. Люди, связанные с этим цветом, обладают глубокой внутренней силой и склонностью к самопознанию.",
    },
    purple: {
        title: {
            ru: "Фиолетовый",
            en: "purple",
        },
        image: violet,
        description:
            "Фиолетовый цвет символизирует духовность, креативность и вдохновение. Люди, ассоциированные с этим цветом, стремятся к самовыражению и глубокому пониманию себя.",
    },
    brown: {
        title: {
            ru: "Коричневый",
            en: "brown",
        },
        image: brown,
        description:
            "Коричневый цвет ассоциируется с землей, надежностью и стабильностью. Люди, связанные с этим цветом, обладают практичностью и стремятся к устойчивости в своей жизни.",
    },
    blue: {
        title: {
            ru: "Синий",
            en: "blue",
        },
        image: blue,
        description:
            "Синий цвет символизирует мудрость, доверие и спокойствие. Люди, ассоциированные с этим цветом, обладают способностью к глубокому размышлению и стремятся к внутреннему миру.",
    },
    emerald: {
        title: {
            ru: "Изумрудный",
            en: "emerald",
        },
        image: emerald,
        description:
            "Изумрудный цвет ассоциируется с изобилием, жизненной силой и процветанием. Люди, связанные с этим цветом, стремятся к росту и процветанию, обладая сильной энергией и оптимизмом.",
    },
};

export const zodiacCompatibility = {
    oven: {
        title: {
            ru: "Овен",
            en: "oven",
        },
        image: oven,
        description:
            "Овны совместимы с Водолеем. Их энергичный и динамичный характер находит отклик в независимости и новаторстве Водолея, что приводит к сильным и вдохновляющим отношениям.",
    },
    taurus: {
        title: {
            ru: "Телец",
            en: "taurus",
        },
        image: taurus,
        description:
            "Тельцы совместимы с Рыбами. Их практичность и стабильность находят поддержку в чувствительности и вдохновении Рыб, что создает прочные и надежные отношения.",
    },
    twins: {
        title: {
            ru: "Близнецы",
            en: "twins",
        },
        image: twins,
        description:
            "Близнецы совместимы со Стрельцом. Их общительность и интеллектуальная гибкость находят отклик в оптимизме и свободолюбии Стрельца, что приводит к увлекательным и стимулирующим отношениям.",
    },
    cancer: {
        title: {
            ru: "Рак",
            en: "cancer",
        }, image: cancer,
        description:
            "Раки совместимы с Девой. Их эмоциональная глубина и заботливость находят поддержку в аналитичности и практичности Девы, что создает глубокие и интуитивные отношения.",
    },
    lion: {
        title: {
            ru: "Лев",
            en: "lion",
        },
        image: lion,
        description:
            "Львы совместимы с Весами. Их страстный и уверенный характер находит отклик в дипломатичности и стремлении к гармонии Весов, что приводит к сильным и вдохновляющим отношениям.",
    },
    virgo: {
        title: {
            ru: "Дева",
            en: "virgo",
        }, image: virgo,
        description:
            "Девы совместимы с Раком. Их аналитичность и практичность находят поддержку в эмоциональной глубине и заботливости Рака, что создает прочные и надежные отношения.",
    },
    scales: {
        title: {
            ru: "Весы",
            en: "scales",
        },
        image: scales,
        description:
            "Весы совместимы с Львом. Их дипломатичность и стремление к гармонии находят отклик в страстности и уверенности Льва, что приводит к сбалансированным и гармоничным отношениям.",
    },
    scorpion: {
        title: {
            ru: "Скорпион",
            en: "scorpion",
        }, image: scorpion,
        description:
            "Скорпионы совместимы с Козерогом. Их страстный и интуитивный характер находит отклик в целеустремленности и практичности Козерога, что приводит к глубоким и устойчивым отношениям.",
    },
    sagittarius: {
        title: {
            ru: "Стрелец",
            en: "sagittarius",
        }, image: sagittarius,
        description:
            "Стрельцы совместимы с Близнецами. Их оптимизм и свободолюбие находят отклик в общительности и интеллектуальной гибкости Близнецов, что приводит к увлекательным и стимулирующим отношениям.",
    },
    capricorn: {
        title: {
            ru: "Козерог",
            en: "capricorn",
        }, image: capricorn,
        description:
            "Козероги совместимы со Скорпионом. Их целеустремленность и практичность находят поддержку в страстности и интуитивности Скорпиона, что создает прочные и надежные отношения.",
    },
    aquarius: {
        title: {
            ru: "Водолей",
            en: "aquarius",
        },  image: aquarius,
        description:
            "Водолеи совместимы с Овном. Их инновационный и независимый характер находит отклик в энергичности и динамичности Овна, что приводит к сильным и вдохновляющим отношениям.",
    },
    fish: {
        title: {
            ru: "Рыбы",
            en: "fish",
        }, image: fish,
        description:
            "Рыбы совместимы с Тельцом. Их чувствительность и вдохновение находят поддержку в практичности и стабильности Тельца, что создает глубокие и интуитивные отношения.",
    },
};

export const zodiacElements = {
    fire: {
        title: {
            ru: "Огонь",
            en: "fire",
        },
        description:
            "Огонь символизирует страсть, энтузиазм и активность. Люди, связанные с этим элементом, обладают сильным внутренним огнем, который побуждает их к действию и достижению своих целей с решительностью и энергией.",
    },
    earth: {
        title: {
            ru: "Земля",
            en: "earth",
        },
        description:
            "Земля представляет стабильность, практичность и надежность. Люди, связанные с этим элементом, обычно привержены традициям, заботятся о материальной стороне жизни и стремятся к стабильности и безопасности.",
    },
    air: {
        title: {
            ru: "Воздух",
            en: "air",
        },
        description:
            "Воздух символизирует свободу, интеллект и коммуникацию. Люди, связанные с этим элементом, обычно обладают аналитическим мышлением, ценят свободу и независимость, и стремятся к общению и обмену идеями.",
    },
    water: {
        title: {
            ru: "Вода",
            en: "water",
        },
        description:
            "Вода символизирует эмоциональность, интуицию и чувствительность. Люди, связанные с этим элементом, часто обладают глубокими эмоциями, сильной интуицией и стремятся к гармонии и взаимопониманию.",
    },
};

export const zodiacArchetype = {
    warrior: {
        title: {
            ru: "Воин",
            en: "warrior",
        },
        description: "Warrior archetype description.",
    },
    hedonist: {
        title: {
            ru: "Гедонист",
            en: "hedonist",
        },
        description: "Hedonist archetype description.",
    },
    seeker: {
        title: {
            ru: "Искатель",
            en: "seeker",
        },
        description: "Seeker archetype description.",
    },
    guardian: {
        title: {
            ru: "Опекун",
            en: "guardian",
        },
        description: "Guardian archetype description.",
    },
    jester: {
        title: {
            ru: "Шут",
            en: "jester",
        },
        description: "Jester archetype description.",
    },
    servant: {
        title: {
            ru: "Служитель",
            en: "servant",
        },
        description: "Servant archetype description.",
    },
    beloved: {
        title: {
            ru: "Возлюбленный",
            en: "beloved",
        },
        description: "Beloved archetype description.",
    },
    mage: {
        title: {
            ru: "Маг",
            en: "mage",
        },
        description: "Mage archetype description.",
    },
    sage: {
        title: {
            ru: "Мудрец",
            en: "sage",
        },
        description: "Sage archetype description.",
    },
    ruler: {
        title: {
            ru: "Правитель",
            en: "ruler",
        },
        description: "Ruler archetype description.",
    },
    creator: {
        title: {
            ru: "Творец",
            en: "creator",
        },
        description: "Creator archetype description.",
    },
    innocent: {
        title: {
            ru: "Невинный",
            en: "innocent",
        },
        description: "Innocent archetype description.",
    },
};

export const zodiacStones = {
    brilliant: {
        title: {
            ru: "Бриллиант",
            en: "brilliant",
        },
        description: "Бриллиант stone description.",
    },
    diamond: {
        title: {
            ru: "Алмаз",
            en: "diamond",
        },
        description: "diamond stone description.",
    },
    garnet: {
        title: {
            ru: "Гранат",
            en: "garnet",
        },
        description: "Garnet stone description.",
    },
    ruby: {
        title: {
            ru: "Рубин",
            en: "ruby",
        },
        description: "Ruby stone description.",
    },
    emerald: {
        title: {
            ru: "Изумруд",
            en: "emerald",
        },
        description: "Emerald stone description.",
    },
    jasper: {
        title: {
            ru: "Яшма",
            en: "jasper",
        },
        description: "Jasper stone description.",
    },
    rose_quartz: {
        title: {
            ru: "Розовый кварц",
            en: "rose_quartz",
        },
        description: "Rose quartz stone description.",
    },
    agate: {
        title: {
            ru: "Агат",
            en: "agate",
        },
        description: "Agate stone description.",
    },
    tigers_eye: {
        title: {
            ru: "Тигровый глаз",
            en: "tigers_eye",
        },
        description: "Tiger's eye stone description.",
    },
    aquamarine: {
        title: {
            ru: "Аквамарин",
            en: "aquamarine",
        },
        description: "Aquamarine stone description.",
    },
    pearl: {
        title: {
            ru: "Жемчуг",
            en: "pearl",
        },
        description: "Pearl stone description.",
    },
    moonstone: {
        title: {
            ru: "Лунный камень",
            en: "moonstone",
        },
        description: "Moonstone description.",
    },
    amethyst: {
        title: {
            ru: "Аметист",
            en: "amethyst",
        },
        description: "Amethyst stone description.",
    },
    topaz: {
        title: {
            ru: "Топаз",
            en: "topaz",
        },
        description: "Topaz stone description.",
    },
    turquoise: {
        title: {
            ru: "Бирюза",
            en: "turquoise",
        },
        description: "Turquoise stone description.",
    },
    amber: {
        title: {
            ru: "Янтарь",
            en: "amber",
        },
        description: "Amber stone description.",
    },
    sapphire: {
        title: {
            ru: "Сапфир",
            en: "sapphire",
        },
        description: "Sapphire stone description.",
    },
    malachite: {
        title: {
            ru: "Малахит",
            en: "malachite",
        },
        description: "Malachite stone description.",
    },
    opal: {
        title: {
            ru: "Опал",
            en: "opal",
        },
        description: "Opal stone description.",
    },
    onyx: {
        title: {
            ru: "Оникс",
            en: "onyx",
        },
        description: "Onyx stone description.",
    },
    lapis_lazuli: {
        title: {
            ru: "Лазурит",
            en: "lapis_lazuli",
        },
        description: "Lapis lazuli stone description.",
    },
    rock_crystal: {
        title: {
            ru: "Горный хрусталь",
            en: "rock_crystal",
        },
        description: "Rock crystal stone description.",
    },
};

export const zodiacFlowers = {
    honeysuckle: {
        title: {
            ru: "Жимолость",
            en: "honeysuckle",
        },
        description: "Honeysuckle flower description.",
    },
    geranium: {
        title: {
            ru: "Герань",
            en: "geranium",
        },
        description: "Geranium flower description.",
    },
    begonia: {
        title: {
            ru: "Бегония",
            en: "begonia",
        },
        description: "Begonia flower description.",
    },
    lily_of_the_valley: {
        title: {
            ru: "Ландыш",
            en: "lily_of_the_valley",
        },
        description: "Lily flower description.",
    },
    violet: {
        title: {
            ru: "Фиалка",
            en: "violet",
        },
        description: "Violet flower description.",
    },
    rose: {
        title: {
            ru: "Роза",
            en: "rose",
        },
        description: "Rose flower description.",
    },
    lavender: {
        title: {
            ru: "Лаванда",
            en: "lavender",
        },
        description: "Lavender flower description.",
    },
    orchid: {
        title: {
            ru: "Орхидея",
            en: "orchid",
        },
        description: "Orchid flower description.",
    },
    clematis: {
        title: {
            ru: "Клематис",
            en: "clematis",
        },
        description: "Clematis flower description.",
    },
    poppy: {
        title: {
            ru: "Мак",
            en: "poppy",
        },
        description: "Poppy flower description.",
    },
    sunflower: {
        title: {
            ru: "Подсолнух",
            en: "sunflower",
        },
        description: "Sunflower flower description.",
    },
    heliotrope: {
        title: {
            ru: "Гелиотроп",
            en: "heliotrope",
        },
        description: "Heliotrope flower description.",
    },
    gladiolus: {
        title: {
            ru: "Гладиолус",
            en: "gladiolus",
        },
        description: "Gladiolus flower description.",
    },
    aster: {
        title: {
            ru: "Астра",
            en: "aster",
        },
        description: "Aster flower description.",
    },
    daisy: {
        title: {
            ru: "Ромашка",
            en: "daisy",
        },
        description: "Daisy flower description.",
    },
    dahlia: {
        title: {
            ru: "Георгин",
            en: "dahlia",
        },
        description: "Георгин flower description.",
    },
    jasmine: {
        title: {
            ru: "Жасмин",
            en: "jasmine",
        },
        description: "Jasmine flower description.",
    },
    azalea: {
        title: {
            ru: "Азалия",
            en: "azalea",
        },
        description: "Azalea flower description.",
    },
    chrysanthemum: {
        title: {
            ru: "Хризантема",
            en: "chrysanthemum",
        },
        description: "Chrysanthemum flower description.",
    },
    calla: {
        title: {
            ru: "Калла",
            en: "calla",
        },
        description: "Calla flower description.",
    },
    iris: {
        title: {
            ru: "Ирис",
            en: "iris",
        },
        description: "Iris flower description.",
    },
    lilac: {
        title: {
            ru: "Сирень",
            en: "lilac",
        },
        description: "Lilac flower description.",
    },
    lotus: {
        title: {
            ru: "Лотос",
            en: "lotus",
        },
        description: "Lotus flower description.",
    },
    hyacinth: {
        title: {
            ru: "Гиацинт",
            en: "hyacinth",
        },
        description: "Hyacinth flower description.",
    },
    carnation: {
        title: {
            ru: "Гвоздика",
            en: "carnation",
        },
        description: "Carnation flower description.",
    },
    peony: {
        title: {
            ru: "Пион",
            en: "peony",
        },
        description: "Peony flower description.",
    },
};

export const zodiacNumbers = {
    one: {
        title: {
            ru: "1",
            en: "one",
        },
        description: "1",
    },
    two: {
        title: {
            ru: "2",
            en: "two",
        },
        description: "2",
    },
    three: {
        title: {
            ru: "3",
            en: "three",
        },
        description: "3rd number description.",
    },
    four: {
        title: {
            ru: "4",
            en: "four",
        },
        description: "4",
    },
    five: {
        title: {
            ru: "5",
            en: "five",
        },
        description: "5",
    },
    six: {
        title: {
            ru: "6",
            en: "six",
        },
        description: "6",
    },
    seven: {
        title: {
            ru: "7",
            en: "seven",
        },
        description: "7",
    },
    eight: {
        title: {
            ru: "8",
            en: "eight",
        },
        description: "8",
    },
    nine: {
        title: {
            ru: "9",
            en: "nine",
        },
        description: "9",
    },

    twelve: {
        title: {
            ru: "12",
            en: "twelve",
        },
        description: "12",
    },
    thirteen: {
        title: {
            ru: "13",
            en: "thirteen",
        },
        description: "13",
    },
    fourteen: {
        title: {
            ru: "14",
            en: "fourteen",
        },
        description: "14",
    },
    fifteen: {
        title: {
            ru: "15",
            en: "fifteen",
        },
        description: "15",
    },
    sixteen: {
        title: {
            ru: "16",
            en: "sixteen",
        },
        description: "16",
    },
    seventeen: {
        title: {
            ru: "17",
            en: "seventeen",
        },
        description: "17",
    },
    eighteen: {
        title: {
            ru: "18",
            en: "eighteen",
        },
        description: "18",
    },
    nineteen: {
        title: {
            ru: "19",
            en: "nineteen",
        },
        description: "19",
    },
    twenty: {
        title: {
            ru: "20",
            en: "twenty",
        },
        description: "20",
    },
    twenty_one: {
        title: {
            ru: "21",
            en: "twenty_one",
        },
        description: "21",
    },
    twenty_three: {
        title: {
            ru: "23",
            en: "twenty_three",
        },
        description: "23",
    },
    twenty_five: {
        title: {
            ru: "25",
            en: "twenty_five",
        },
        description: "25",
    },


};
