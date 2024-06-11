export function isValidDate(dateString) {
    const regex = /^\d{2}-\d{2}-\d{4}$/; // dd-mm-yyyy
    if (!regex.test(dateString)) {
        return false;
    }

    const [day, month, year] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);

    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

export function formatDate(dateString) {
    const [day, month, year] = dateString.split('-');
    return `${day}.${month}.${year}`;
}

export function getZodiacSign(day, month) {
    const zodiacSigns = [
        { sign: 'capricorn', start: [12, 22], end: [1, 19] },
        { sign: 'aquarius', start: [1, 20], end: [2, 18] },
        { sign: 'fish', start: [2, 19], end: [3, 20] },
        { sign: 'oven', start: [3, 21], end: [4, 19] },
        { sign: 'taurus', start: [4, 20], end: [5, 20] },
        { sign: 'twins', start: [5, 21], end: [6, 20] },
        { sign: 'cancer', start: [6, 21], end: [7, 22] },
        { sign: 'lion', start: [7, 23], end: [8, 22] },
        { sign: 'virgo', start: [8, 23], end: [9, 22] },
        { sign: 'scales', start: [9, 23], end: [10, 22] },
        { sign: 'scorpion', start: [10, 23], end: [11, 21] },
        { sign: 'sagittarius', start: [11, 22], end: [12, 21] },
        { sign: 'capricorn', start: [12, 22], end: [1, 19] }
    ];

    for (const zodiac of zodiacSigns) {
        const [startMonth, startDay] = zodiac.start;
        const [endMonth, endDay] = zodiac.end;

        if (
            (month === startMonth && day >= startDay) ||
            (month === endMonth && day <= endDay) ||
            (month > startMonth && month < endMonth) ||
            (startMonth > endMonth && (month > startMonth || month < endMonth))
        ) {
            return zodiac.sign;
        }
    }

    return 'capricorn'; // def fallback
}

export function getChineseSign(year) {
    const signs = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
    const elements = ["tree", "fire", "earth", "metal", "water"];

    const sign = signs[(year - 4) % 12];
    const element = elements[Math.floor((year - 4) % 10 / 2)];

    return { sign, element };
}

export function getJapaneseSign(year) {
    const signs = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "boar"];
    const sign = signs[(year - 4) % 12];
    return sign;
}


export function getZoroastrianSign(day, month, year) {
    const zoroastrianSigns = [
        "doe", "elephant", "horse", "cheetah", "peacock", "swan", "lynx", "donkey",
        "polar_bear", "eagle", "fox", "dolphin", "boar", "owl", "falcon",
        "deer", "ram", "mongoose", "wolf", "stork", "spider", "snake", "beaver",
        "turtle", "magpie", "squirrel", "crow", "rooster", "ox", "badger", "camel",
        "hedgehog"
    ];
    const baseYear = 1987;

    // начался ли новый зороастрийский год
    let adjustedYear = year;
    if (month < 3 || (month === 3 && day < 21)) {
        adjustedYear -= 1;
    }

    let index = (adjustedYear - baseYear) % 32;
    if (index < 0) {
        index += 32;
    }
    return zoroastrianSigns[index];
}

export function getDruidsSign(day, month) {
    const signDates = {
        apple_tree: [
            { start: "23-12", end: "31-12" },
            { start: "01-01", end: "01-01" },
            { start: "25-06", end: "31-06" },
            { start: "01-07", end: "04-07" },
        ],
        spruce: [
            { start: "02-01", end: "11-01" },
            { start: "05-07", end: "14-07" },
        ],
        elm: [
            { start: "12-01", end: "24-01" },
            { start: "15-07", end: "25-07" },
        ],
        cypress: [
            { start: "25-01", end: "31-01" },
            { start: "01-02", end: "03-02" },
            { start: "26-07", end: "31-07" },
            { start: "01-08", end: "04-08" },
        ],
        poplar: [
            { start: "04-02", end: "08-02" },
            { start: "05-08", end: "13-08" },
        ],
        rowan: [
            { start: "09-02", end: "18-02" },
            { start: "14-08", end: "23-08" },
        ],
        pine: [
            { start: "19-02", end: "29-02" },
            { start: "24-08", end: "31-08" },
            { start: "01-09", end: "02-09" },
        ],
        willow: [
            { start: "01-03", end: "10-03" },
            { start: "03-09", end: "12-09" },
        ],
        linden: [
            { start: "11-03", end: "20-03" },
            { start: "13-09", end: "22-09" },
        ],
        oak: [{ start: "21-03", end: "21-03" }],
        hazelnut: [
            { start: "22-03", end: "31-03" },
            { start: "24-09", end: "31-09" },
            { start: "01-10", end: "03-10" },
        ],
        mountain_ash: [
            { start: "01-04", end: "10-04" },
            { start: "04-10", end: "13-10" },
        ],
        maple: [
            { start: "11-04", end: "20-04" },
            { start: "14-10", end: "23-10" },
        ],
        walnut: [
            { start: "21-04", end: "30-04" },
            { start: "24-10", end: "31-10" },
            { start: "01-11", end: "02-11" },
        ],
        jasmine: [
            { start: "01-05", end: "14-05" },
            { start: "03-11", end: "11-11" },
        ],
        chestnut: [
            { start: "15-05", end: "24-05" },
            { start: "12-11", end: "21-11" },
        ],
        ash: [
            { start: "25-05", end: "31-05" },
            { start: "01-06", end: "03-06" },
            { start: "22-11", end: "31-11" },
            { start: "01-12", end: "01-12" },
        ],
        hornbeam: [
            { start: "04-06", end: "13-06" },
            { start: "02-12", end: "11-12" },
        ],
        fig: [
            { start: "14-06", end: "23-06" },
            { start: "12-12", end: "20-12" },
        ],
        birch: [{ start: "24-06", end: "24-06" }],
        olive: [{ start: "23-09", end: "23-09" }],
        beech: [{ start: "21-12", end: "22-12" }],
    };

    for (const [sign, dates] of Object.entries(signDates)) {
        for (const { start, end } of dates) {
            const [startDay, startMonth] = start.split("-").map(Number);
            const [endDay, endMonth] = end.split("-").map(Number);
            if (
                month === startMonth &&
                day >= startDay &&
                month === endMonth &&
                day <= endDay
            ) {
                return sign;
            }
        }
    }
}

export function getFloralSign(day, month) {
    const signDates = {
        gentian: [{ start: "01-01", end: "10-01" }],
        thistle: [{ start: "11-01", end: "20-01" }],
        immortelle: [{ start: "21-01", end: "31-01" }],
        mistletoe: [{ start: "01-02", end: "10-02" }],
        foxglove: [{ start: "11-02", end: "19-02" }],
        mimosa: [{ start: "20-02", end: "29-02" }],
        poppy: [{ start: "01-03", end: "10-03" }],
        lily: [{ start: "11-03", end: "20-03" }],
        digitalis: [{ start: "21-03", end: "31-03" }],
        magnolia: [{ start: "01-04", end: "10-04" }],
        hydrangea: [{ start: "11-04", end: "20-04" }],
        dahlia: [{ start: "21-04", end: "30-04" }],
        lily_of_the_valley: [{ start: "01-05", end: "10-05" }],
        portulaca: [{ start: "11-05", end: "21-05" }],
        chamomile: [{ start: "22-05", end: "31-05" }],
        bellflower: [{ start: "01-06", end: "11-06" }],
        daisy: [{ start: "12-06", end: "21-06" }],
        tulip: [
            { start: "22-06", end: "31-06" },
            { start: "01-07", end: "01-07" },
        ],
        buttercup: [{ start: "02-07", end: "12-07" }],
        violet: [{ start: "13-07", end: "23-07" }],
        rose_hip: [
            { start: "24-07", end: "31-07" },
            { start: "01-08", end: "02-08" },
        ],
        sunflower: [{ start: "03-08", end: "12-08" }],

        rose: [{ start: "13-08", end: "23-08" }],
        delphinium: [
            { start: "24-08", end: "31-08" },
            { start: "01-09", end: "02-09" },
        ],
        carnation: [{ start: "03-09", end: "11-09" }],
        aster: [{ start: "12-09", end: "22-09" }],
        heather: [
            { start: "23-09", end: "31-09" },
            { start: "01-09", end: "03-10" },
        ],
        camellia: [{ start: "04-10", end: "13-10" }],
        lilac: [{ start: "14-10", end: "23-10" }],
        freesia: [
            { start: "24-10", end: "31-10" },
            { start: "01-11", end: "02-11" },
        ],
        orchid: [{ start: "03-11", end: "12-11" }],
        peony: [{ start: "13-11", end: "22-11" }],
        gladiolus: [
            { start: "23-11", end: "31-11" },
            { start: "01-12", end: "02-12" },
        ],
        dandelion: [{ start: "03-12", end: "12-12" }],
        lotus: [{ start: "13-12", end: "22-12" }],
        edelweiss: [{ start: "23-12", end: "31-12" }],
    };

    for (const [sign, dates] of Object.entries(signDates)) {
        for (const { start, end } of dates) {
            const [startDay, startMonth] = start.split("-").map(Number);
            const [endDay, endMonth] = end.split("-").map(Number);
            if (
                month === startMonth &&
                day >= startDay &&
                month === endMonth &&
                day <= endDay
            ) {
                return sign;
            }
        }
    }
}

export function getMayaSign(day, month, year) {
    const startDate = new Date(Date.UTC(1930, 0, 1));

    const currentDate = new Date(Date.UTC(year, month - 1, day));

    const differenceInDays = Math.floor(
        (currentDate - startDate) / (1000 * 60 * 60 * 24)
    );

    const mayaSigns = [
        "eagle",
        "vulture",
        "earth",
        "flint",
        "storm",
        "sun",
        "crocodile",
        "wind",
        "night",
        "corn",
        "snake",
        "scull",
        "deer",
        "star",
        "water",
        "dog",
        "monkey",
        "ladder",
        "cane",
        "jaguar",
    ];

    let signIndex = differenceInDays % mayaSigns.length;
    if (signIndex < 0) {
        signIndex += mayaSigns.length;
    }
    return mayaSigns[signIndex];
}
