import moment from 'moment';

export function dateFormat(timestamp) {
  return moment.unix(timestamp).format('HH:mm YYYY-MM-DD');
}

export function textTruncate(text) {
  if (text.length <= 15) {
    return text;
  }

  return `${text.substring(0, 15)}...`;
}
