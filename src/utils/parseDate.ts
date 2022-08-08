import {ParseDateTypes} from "../types/utils";

const months: string[] = [
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
];

function parseDate(value: Date, type = ParseDateTypes.DAY_MONTH): Date | string {
  switch (type) {
    case ParseDateTypes.DAY_MONTH:
      return `${value.getDate()} ${months[value.getMonth()]}`;
    default:
      return value;
  }
}

export default parseDate;
