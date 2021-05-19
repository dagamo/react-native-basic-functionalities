import {capitalize} from './capitalize';
import {localMoment} from './moment';

export const dateString = date => {
  const moment = localMoment();
  const day = moment(date).format('D');
  const newDate = moment(date).format('dddd MMMM YYYY');
  const dateSplit = newDate.split(' ');
  const dayStr = capitalize(dateSplit[0]);
  const mesStr = capitalize(dateSplit[1]);
  const year = dateSplit[2];
  const joinDate = `${dayStr} ${day} de ${mesStr} ${year}`;
  return joinDate;
};
