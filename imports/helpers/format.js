import moment from 'moment';

export default class Format {
  static formatDate(date) {
    if (date && typeof date == "string") {
      return moment(date).fromNow();
    } else {
      return "A long time ago..."
    }
  }

  static formatMoney(moneyString) {
    return "$" + moneyString;
  }
}