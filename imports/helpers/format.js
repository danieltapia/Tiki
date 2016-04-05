import moment from 'moment';
import format from 'accounting-js';

export default class Format {
  static dateFromNow(date) {
    if (date && typeof date == "string") {
      return moment(date).fromNow();
    } else {
      return "A long time ago..."
    }
  }

  static money(moneyInteger) {
    return format.formatMoney(moneyInteger);
  }
}