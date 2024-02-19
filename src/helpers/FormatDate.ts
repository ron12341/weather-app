export const formatDate = (date: string): string => {
  const dateArray: string[] = date.split(' ')[0].split('-');

  const month = getMonth(Number.parseInt(dateArray[1]));
  const day = dateArray[2];

  return month + ' ' + day;
};

const getMonth = (month: number): string => {
  let monthString = '';

  switch (month) {
    case 1:
      monthString = 'JAN';
      break;
    case 2:
      monthString = 'FEB';
      break;
    case 3:
      monthString = 'MAR';
      break;
    case 4:
      monthString = 'APR';
      break;
    case 5:
      monthString = 'MAY';
      break;
    case 6:
      monthString = 'JUN';
      break;
    case 7:
      monthString = 'JUL';
      break;
    case 8:
      monthString = 'AUG';
      break;
    case 9:
      monthString = 'SEP';
      break;
    case 10:
      monthString = 'OCT';
      break;
    case 11:
      monthString = 'NOV';
      break;
    case 12:
      monthString = 'DEC';
      break;
  }
  return monthString;
};
