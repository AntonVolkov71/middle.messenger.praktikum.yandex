const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
]

function parseDate(value, type = 'dayMonth') {
    switch (type) {
        case "dayMonth":
            return `${value.getDate()} ${months[value.getMonth() + 1]}`
        default:
            return value
    }

}

export default parseDate