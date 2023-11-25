import seedrandom from 'seedrandom';
import { Random, RNG } from 'random';

function getRandomStats() {
    const today = new Date()
    const random = new Random();
    random.use((seedrandom(`${today.getUTCFullYear}-${today.getUTCMonth}-${today.getUTCDate}`) as unknown as RNG))
    return {
        weather: {
            experimentation: intToWeather(random.int(0, 5)),
            assurance: intToWeather(random.int(0, 5)),
            vow: intToWeather(random.int(0, 5)),
            offense: intToWeather(random.int(0, 5)),
            march: intToWeather(random.int(0, 5)),
            rend: intToWeather(random.int(0, 5)),
            dine: intToWeather(random.int(0, 5)),
            titan: intToWeather(random.int(0, 5)),
        },
        company: {
            percentage: intToCompany(random.int(1, 5))
        }
    }
}

function intToWeather(int: Number) {
    switch(int) {
        case 1:
            return "Foggy";
        case 2:
            return "Rainy";
        case 3:
            return "Stormy";
        case 4:
            return "Flooded";
        case 5:
            return "Eclipsed";
        default:
            return "";
    }
    return "";
}

function intToCompany(int: Number) {
    switch(int) {
        case 1:
            return "33";
        case 2:
            return "53";
        case 3:
            return "77";
        case 4:
            return "100";
        case 5:
            return "123";
        default:
            return "0";
    }
    return "0";
}

export default getRandomStats;